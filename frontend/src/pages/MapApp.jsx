import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { listenMarkers, addMarker as addMarkerSvc, updateMarker as updateMarkerSvc, deleteMarker as deleteMarkerSvc, clearAllMarkers as clearAllMarkersSvc } from '../services/markersService.js';
import loadGoogleMaps from '../lib/loadGoogleMaps.js';
import Modal from '../components/Modal.jsx';
import SearchBox from '../components/SearchBox.jsx';
import { watchAuth, signOutUser, initFirebase, uploadMarkerImage, getLikeState, toggleLike, listenComments, addComment } from '../firebase.js';

export default function MapApp() {
  const [health, setHealth] = useState(null);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const infoWindowRef = useRef(null);
  const infoContentRootRef = useRef(null);
  const [mapError, setMapError] = useState(null);
  const [markers, setMarkers] = useState([]);
  const gMarkersRef = useRef(new Map());
  const [modal, setModal] = useState({ open: false, mode: null, data: null });
  const [authUser, setAuthUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const DESIGN = import.meta.env.VITE_DESIGN_MODE === '1';
  const KKU_CENTER = useMemo(() => ({ lat: 16.4739, lng: 102.823 }), []);
  const isDraggingRef = useRef(false);
  const kkuPolygonRef = useRef(null);
  const KKU_POLY = useMemo(() => [
    { lat: 16.4907, lng: 102.8090 },
    { lat: 16.4900, lng: 102.8325 },
    { lat: 16.4860, lng: 102.8420 },
    { lat: 16.4720, lng: 102.8460 },
    { lat: 16.4600, lng: 102.8425 },
    { lat: 16.4585, lng: 102.8250 },
    { lat: 16.4610, lng: 102.8120 },
    { lat: 16.4730, lng: 102.8040 },
  ], []);

  useEffect(() => {
    try { if (!DESIGN) initFirebase(); } catch {}
    setHealth({ status: 'ok' });
    const unsub = DESIGN ? null : watchAuth((u)=>{ setAuthUser(u); setAuthReady(true); });
    if (DESIGN) setAuthReady(true);
    return () => unsub && unsub();
  }, []);

  useEffect(() => {
    if (!DESIGN && authReady && authUser === null) {
      // If not signed in, bounce to login
      window.location.hash = '#/login';
    }
  }, [authUser, DESIGN, authReady]);

  

  useEffect(() => {
    let markersUnsub = null;
    if (!authReady || (!DESIGN && !authUser)) return;
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!key) { setMapError('Missing VITE_GOOGLE_MAPS_API_KEY in frontend/.env'); return; }
    let mapInstance;
    loadGoogleMaps(key).then((google) => {
      if (!mapContainerRef.current) return;
      mapInstance = new google.maps.Map(mapContainerRef.current, {
        center: KKU_CENTER,
        zoom: 12,
        mapTypeControl: false,
        gestureHandling: 'greedy',
        draggableCursor: 'grab', draggingCursor: 'grabbing',
      });
      mapInstanceRef.current = mapInstance;
      infoWindowRef.current = new google.maps.InfoWindow();
      infoWindowRef.current.addListener('closeclick', () => {
        if (infoContentRootRef.current) {
          infoContentRootRef.current.unmount();
          infoContentRootRef.current = null;
        }
      });

      kkuPolygonRef.current = new google.maps.Polygon({
        paths: KKU_POLY, strokeColor: '#22c55e', strokeOpacity: 0.9, strokeWeight: 2,
        fillColor: '#22c55e', fillOpacity: 0.12, clickable: false, map: mapInstance,
      });
      const bounds = new google.maps.LatLngBounds(); KKU_POLY.forEach(p=>bounds.extend(p)); mapInstance.fitBounds(bounds);

      markersUnsub = listenMarkers((arr) => {
        setMarkers(arr);
        const existing = new Set(Array.from(gMarkersRef.current.keys()));
        const nextIds = new Set(arr.map((m) => m.id));
        arr.forEach((m) => {
          const gm = gMarkersRef.current.get(m.id);
          if (!gm) createGMarker(m); else {
            const pos = gm.getPosition();
            if (!pos || pos.lat() !== m.lat || pos.lng() !== m.lng) gm.setPosition({ lat: m.lat, lng: m.lng });
            if (gm.getTitle?.() !== (m.title || '')) gm.setTitle(m.title || '');
            gm.__data = { ...m };
          }
        });
        existing.forEach((id) => {
          if (!nextIds.has(id)) {
            const gm = gMarkersRef.current.get(id);
            if (gm) {
              if (infoWindowRef.current?.getAnchor?.() === gm) {
                infoWindowRef.current.close();
                if (infoContentRootRef.current) {
                  infoContentRootRef.current.unmount();
                  infoContentRootRef.current = null;
                }
              }
              gm.setMap(null);
            }
            gMarkersRef.current.delete(id);
          }
        });
      });
      mapInstanceRef.current.__markersUnsub = markersUnsub;

      // Primary map click listener
      const mapClickListener = mapInstance.addListener('click', (e) => {
        console.log('[Map Click]', { authUser, isDragging: isDraggingRef.current, e });
        if (isDraggingRef.current) return;
        if (!DESIGN && !authUser) { console.log('[Map Click] No authUser, not opening modal'); return; }
        const pos = e.latLng;
        if (kkuPolygonRef.current && window.google?.maps?.geometry?.poly) {
          const inside = window.google.maps.geometry.poly.containsLocation(pos, kkuPolygonRef.current);
          if (!inside) { setMapError('Location is outside Khon Kaen University zone'); console.log('[Map Click] Outside polygon'); return; }
        }
        setModal({ open: true, mode: 'create', data: { lat: pos.lat(), lng: pos.lng() } });
        console.log('[Map Click] Open modal', { lat: pos.lat(), lng: pos.lng() });
      });

      // Fallback: attach a DOM click handler on the map container that converts pixel to LatLng
      // using an OverlayView projection (works when map click isn't firing in some environments).
      let overlay = null;
      let domClickHandler = null;
      let domAttached = false;
      try {
        overlay = new google.maps.OverlayView();
        overlay.onAdd = function() {
          // no-op
        };
        overlay.draw = function() {
          try {
            const proj = this.getProjection();
            if (!proj) return; // projection not ready yet
            if (domAttached) return;
            domClickHandler = (ev) => {
              try {
                if (isDraggingRef.current) return;
                const rect = mapContainerRef.current.getBoundingClientRect();
                const x = ev.clientX - rect.left;
                const y = ev.clientY - rect.top;
                const point = new google.maps.Point(x, y);
                const latLng = proj.fromContainerPixelToLatLng(point);
                console.log('[DOM Click Fallback]', { x, y, latLng });
                if (!DESIGN && !authUser) { console.log('[DOM Click] No authUser'); return; }
                if (kkuPolygonRef.current && window.google?.maps?.geometry?.poly) {
                  const inside = window.google.maps.geometry.poly.containsLocation(latLng, kkuPolygonRef.current);
                  if (!inside) { setMapError('Location is outside Khon Kaen University zone'); return; }
                }
                setModal({ open: true, mode: 'create', data: { lat: latLng.lat(), lng: latLng.lng() } });
              } catch (e) { console.warn('Fallback click handler failed', e); }
            };
            if (mapContainerRef.current) {
              mapContainerRef.current.addEventListener('click', domClickHandler, true);
              domAttached = true;
            }
          } catch (e) { console.warn('Overlay draw error', e); }
        };
        overlay.onRemove = function() {
          try { if (domClickHandler && mapContainerRef.current) mapContainerRef.current.removeEventListener('click', domClickHandler, true); } catch(e){}
        };
        overlay.setMap(mapInstance);
      } catch (e) {
        console.warn('Could not attach DOM click fallback', e);
      }
    }).catch((err) => setMapError(err.message || 'Failed to load Google Maps'));

    return () => {
      // Remove all markers from map
      if (gMarkersRef.current) {
        for (const [, gm] of gMarkersRef.current) {
          try { gm.setMap(null); } catch(e){}
        }
        gMarkersRef.current.clear();
      }
      // Remove polygon
      if (kkuPolygonRef.current) {
        try { kkuPolygonRef.current.setMap(null); } catch(e){}
        kkuPolygonRef.current = null;
      }
      // Remove overlay and DOM click
      try { if (domClickHandler && mapContainerRef.current) mapContainerRef.current.removeEventListener('click', domClickHandler, true); } catch(e){}
      try { if (overlay) overlay.setMap(null); } catch(e){}
      // Remove google map listeners
      try { if (mapClickListener) google.maps.event.removeListener(mapClickListener); } catch(e){}
      // Remove info window
      if (infoWindowRef.current) {
        try { infoWindowRef.current.close(); } catch(e){}
        infoWindowRef.current = null;
      }
      // Remove map instance
      mapInstanceRef.current = null;
      mapInstance = null;
      if (markersUnsub) {
        try { markersUnsub(); } catch (e) { console.warn('Failed to unsubscribe markers stream', e); }
        markersUnsub = null;
      }
      if (infoContentRootRef.current) {
        infoContentRootRef.current.unmount();
        infoContentRootRef.current = null;
      }
    };
  }, [authReady, authUser, DESIGN]);

  function createGMarker(m, { openInfo=false } = {}) {
    const google = window.google; if (!google || !mapInstanceRef.current) return null;
    const marker = new google.maps.Marker({ position:{ lat:m.lat, lng:m.lng }, map:mapInstanceRef.current, title:m.title||undefined, draggable:true, crossOnDrag:false });
    marker.set('id', m.id);
    marker.__data = { ...m };
    marker.addListener('dragstart', () => { isDraggingRef.current = true; });
    marker.addListener('dragend', async () => {
      try {
        const pos = marker.getPosition();
        if (!pos) return;
        const lat = pos.lat();
        const lng = pos.lng();
        await updateMarkerSvc(m.id, { lat, lng });
        m.lat = lat;
        m.lng = lng;
        marker.__data = { ...(marker.__data || {}), lat, lng };
        setMarkers(prev=>prev.map(x=>x.id===m.id?{...x,lat,lng}:x));
        const anchor = infoWindowRef.current?.getAnchor?.();
        if (anchor === marker) {
          const data = marker.__data ? { ...marker.__data } : { ...m };
          infoWindowRef.current.setContent(renderInfoContent(data));
        }
      }
      catch { setMapError('Failed to update marker position'); }
      isDraggingRef.current = false;
    });
    marker.addListener('click', () => {
      const data = marker.__data ? { ...marker.__data } : { ...m };
      if(!infoWindowRef.current) infoWindowRef.current=new google.maps.InfoWindow();
      infoWindowRef.current.setContent(renderInfoContent(data));
      infoWindowRef.current.open({ anchor: marker, map: mapInstanceRef.current });
    });
    gMarkersRef.current.set(m.id, marker);
    if (openInfo) {
      if(!infoWindowRef.current) infoWindowRef.current=new google.maps.InfoWindow();
      infoWindowRef.current.setContent(renderInfoContent({ ...m }));
      infoWindowRef.current.open({ anchor: marker, map: mapInstanceRef.current });
    }
    return marker;
  }

  function renderInfoContent(marker) {
    if (!marker) {
      const empty = document.createElement('div');
      empty.className = 'marker-info-card';
      empty.textContent = 'Marker not found';
      return empty;
    }

    if (infoContentRootRef.current) {
      infoContentRootRef.current.unmount();
      infoContentRootRef.current = null;
    }

    const container = document.createElement('div');
    const root = createRoot(container);
    infoContentRootRef.current = root;
    root.render(
      <MarkerInfoCard
        marker={marker}
        designMode={DESIGN}
        onEdit={() => {
          setModal({
            open: true,
            mode: 'edit',
            data: {
              id: marker.id,
              title: marker.title || '',
              description: marker.description || '',
              photoURL: marker.photoURL || null,
              lat: marker.lat,
              lng: marker.lng,
              createdAt: marker.createdAt,
            },
          });
        }}
      />
    );
    return container;
  }
  async function fileToDataURL(file){
    return new Promise((resolve, reject)=>{
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = reject;
      fr.readAsDataURL(file);
    });
  }

  if (!DESIGN && !authReady) {
    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',fontSize:'1.5rem',color:'#888'}}>
        Loading authentication...
      </div>
    ); // wait for auth to resolve to avoid UI flicker
  }

  return (
    <div className="app">
      <div className="topbar">
        <div className="brand">MERN Starter · <span className="muted">Maps + Markers</span></div>
        <div className="toolbar">
          {DESIGN ? (
            <div className="muted">Design Mode</div>
          ) : authUser ? (
            <>
              <div className="muted">{authUser.email || authUser.displayName || 'Signed in'}</div>
              <button className="btn" onClick={async()=>{ await signOutUser(); window.location.hash = '#/login'; }}>Sign out</button>
            </>
          ) : (
            <a className="btn" href="#/login">Sign in</a>
          )}
        </div>
        <div className="muted">API health: {health ? health.status : '...'}</div>
      </div>

      <div className="content">
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Google Map • Khon Kaen University</div>
            <div className="toolbar">
              <SearchBox onPlaceSelected={({lat,lng})=>{ if(mapInstanceRef.current) mapInstanceRef.current.panTo({lat,lng}); }} />
              <button className="btn btn-ghost" onClick={()=>mapInstanceRef.current?.setCenter(KKU_CENTER)}>Recenter</button>
            </div>
            {mapError ? <div style={{ color:'salmon' }}>{mapError}</div> : null}
          </div>
          <div className="panel-body"><div ref={mapContainerRef} className="map" /></div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Saved Markers: {markers.length}</div>
            <div className="toolbar">
              <button className="btn btn-danger" onClick={async()=>{ if(!confirm('Clear all markers?')) return; try { await clearAllMarkersSvc(); setMarkers([]); for(const[,gm] of gMarkersRef.current){ gm.setMap(null); } gMarkersRef.current.clear(); if (infoWindowRef.current) { infoWindowRef.current.close(); if (infoContentRootRef.current) { infoContentRootRef.current.unmount(); infoContentRootRef.current = null; } } } catch { setMapError('Failed to clear markers'); } }}>Clear All</button>
            </div>
          </div>
          <div className="panel-body">
            <div className="list">
              {markers.length===0 ? (<div className="muted">Click anywhere on the map to add a marker.</div>) : (
                markers.map(m => (
                  <div key={m.id} className="item" onClick={()=>{ const gm=gMarkersRef.current.get(m.id); if(gm&&mapInstanceRef.current&&infoWindowRef.current){ mapInstanceRef.current.panTo(gm.getPosition()); infoWindowRef.current.setContent(renderInfoContent(m)); infoWindowRef.current.open({ anchor: gm, map: mapInstanceRef.current }); } }}>
                    <div>
                      <div className="coords">({m.lat.toFixed(5)}, {m.lng.toFixed(5)})</div>
                      {m.title ? <div className="title">{m.title}</div> : null}
                      {m.photoURL ? <img src={m.photoURL} alt="photo" style={{ marginTop:6, width:220, maxWidth:'100%', height:120, objectFit:'cover', borderRadius:8 }} /> : null}
                    </div>
                    <div style={{ display:'flex', gap:8 }}>
                      <button className="btn btn-ghost" onClick={async()=>{ try{ await deleteMarkerSvc(m.id); setMarkers(prev=>prev.filter(x=>x.id!==m.id)); const gm=gMarkersRef.current.get(m.id); if(gm){ gm.setMap(null); gMarkersRef.current.delete(m.id);} }catch{ setMapError('Failed to delete marker'); } }}>Delete</button>
                      <button className="btn btn-primary" onClick={()=>setModal({ open:true, mode:'edit', data:{ id:m.id, title:m.title||'', description:m.description||'', photoURL:m.photoURL||null, lat:m.lat, lng:m.lng, createdAt:m.createdAt } })}>Edit</button>
                      <button className="btn" onClick={()=>{ const input=document.createElement('input'); input.type='file'; input.accept='image/*'; input.onchange=async()=>{ const file=input.files?.[0]; if(!file) return; try { let url; if (DESIGN) { url = await fileToDataURL(file); } else { url = await uploadMarkerImage(m.id, file); } await updateMarkerSvc(m.id, { photoURL:url }); setMarkers(prev=>prev.map(x=>x.id===m.id?{...x,photoURL:url}:x)); const gm=gMarkersRef.current.get(m.id); if(gm){ const updated={ ...m, photoURL:url }; gm.__data = { ...updated }; if(infoWindowRef.current){ infoWindowRef.current.setContent(renderInfoContent(updated)); infoWindowRef.current.open({ anchor: gm, map: mapInstanceRef.current }); } } } catch { setMapError('Failed to upload photo'); } }; input.click(); }}>Add Photo</button>
                      {!DESIGN && <LikesAndComments markerId={m.id} />}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={modal.open}
        title={modal.mode==='edit'?'Edit Marker':'New Marker'}
        submitText={modal.mode==='edit'?'Save':'Add'}
        initial={{ id: modal.data?.id, title: modal.data?.title, description: modal.data?.description, photoURL: modal.data?.photoURL }}
        allowImage={true}
        onCancel={()=>setModal({ open:false, mode:null, data:null })}
        onSubmit={async({ title, description, file })=>{
          try{
            if(modal.mode==='create'){
              const base={ lat:modal.data.lat, lng:modal.data.lng, title:title||null, description:description||null };
              const saved=await addMarkerSvc(base);
              let next={ ...saved, lat:Number(saved.lat ?? base.lat), lng:Number(saved.lng ?? base.lng) };
              if(file){
                try{
                  const url = DESIGN ? await fileToDataURL(file) : await uploadMarkerImage(saved.id,file);
                  await updateMarkerSvc(saved.id,{ photoURL:url });
                  next = { ...next, photoURL:url };
                }catch(e){ console.warn('upload failed',e); }
              }
              setMarkers(prev=>{
                const others = prev.filter(x=>x.id!==next.id);
                return [...others,next];
              });
              createGMarker(next,{ openInfo:true });
            } else {
              const patch={ title:title||null, description:description||null };
              if(file){
                try{
                  const url = DESIGN ? await fileToDataURL(file) : await uploadMarkerImage(modal.data.id,file);
                  patch.photoURL=url;
                }catch(e){ console.warn('upload failed',e); }
              }
              await updateMarkerSvc(modal.data.id, patch);
              setMarkers(prev=>prev.map(x=>x.id===modal.data.id?{...x,...patch}:x));
              const gm=gMarkersRef.current.get(modal.data.id);
              if(gm) gm.setTitle(title||'');
              if(infoWindowRef.current && gm){
                const pos = gm.getPosition?.();
                const cur={
                  id: modal.data.id,
                  title,
                  description,
                  photoURL: patch.photoURL ?? modal.data.photoURL,
                  lat: pos?.lat?.() ?? modal.data.lat,
                  lng: pos?.lng?.() ?? modal.data.lng,
                  createdAt: modal.data.createdAt,
                };
                infoWindowRef.current.setContent(renderInfoContent(cur));
                gm.__data = { ...cur };
              }
            }
            setModal({ open:false, mode:null, data:null });
          }catch(err){ console.error(err); setMapError(err.message||'Action failed'); }
        }}
        onDelete={modal.mode==='edit' ? async (marker) => {
          try {
            await deleteMarkerSvc(marker.id);
            setMarkers(prev => prev.filter(x => x.id !== marker.id));
            const gm = gMarkersRef.current.get(marker.id);
            if (gm) {
              if (infoWindowRef.current?.getAnchor?.() === gm) {
                infoWindowRef.current.close();
                if (infoContentRootRef.current) {
                  infoContentRootRef.current.unmount();
                  infoContentRootRef.current = null;
                }
              }
              gm.setMap(null);
              gMarkersRef.current.delete(marker.id);
            }
            setModal({ open:false, mode:null, data:null });
          } catch (err) {
            setMapError(err.message || 'Failed to delete marker');
          }
        } : undefined}
      />
    </div>
  );
}

function LikesAndComments({ markerId }){
  const [uid, setUid] = useState(null); const [liked,setLiked]=useState(false); const [count,setCount]=useState(0); const [open,setOpen]=useState(false);
  useEffect(()=>{ const un=watchAuth(u=>setUid(u?.uid||null)); return ()=>un&&un(); },[]);
  useEffect(()=>{ if(!uid) return; getLikeState(markerId,uid).then(s=>{ setLiked(s.liked); setCount(s.count); }); },[markerId,uid]);
  const requireAuth = (cb) => { if (!uid) { window.location.hash = '#/login'; return; } cb(); };
  return (<>
    <button className="btn" onClick={()=>requireAuth(async()=>{ const s=await toggleLike(markerId,uid); setLiked(s.liked); setCount(s.count); })}>{liked?`♥ ${count}`:`♡ ${count}`}</button>
    <button className="btn" onClick={()=>requireAuth(()=>setOpen(true))}>Comments</button>
    {open&&<CommentsModal markerId={markerId} onClose={()=>setOpen(false)} />}
  </>);
}

function CommentsModal({ markerId, onClose }){
  const [list,setList]=useState([]); const [text,setText]=useState(''); const [uid,setUid]=useState(null);
  useEffect(()=>{ ensureAnon().then(u=>setUid(u?.uid||null)); },[]);
  useEffect(()=>{ const unsub=listenComments(markerId,setList); return ()=>unsub(); },[markerId]);
  return (
    <div className="modal" role="dialog" aria-modal="true"><div className="modal-content" style={{ width:'min(680px, 92vw)' }}><div className="modal-header"><div className="modal-title">Comments</div><button className="btn btn-ghost" onClick={onClose}>✕</button></div><div className="modal-body"><div style={{ display:'grid', gap:8, maxHeight:'40vh', overflow:'auto' }}>{list.length===0?<div className="muted">No comments yet.</div>:list.map(c=>(<div key={c.id} className="item" style={{ display:'block' }}><div style={{ fontSize:12, color:'#94a3b8' }}>{c.uid?.slice?.(0,8)||'anon'} · {c.createdAt?.toDate?.().toLocaleString?.()||''}</div><div style={{ marginTop:4 }}>{c.text}</div></div>))}</div><div style={{ marginTop:12, display:'flex', gap:8 }}><input className="input" placeholder="Write a comment" value={text} onChange={(e)=>setText(e.target.value)} /><button className="btn btn-primary" onClick={async()=>{ if(!text.trim()) return; await addComment(markerId,{ uid, text:text.trim() }); setText(''); }}>Send</button></div></div></div></div>
  );
}

function MarkerInfoCard({ marker, designMode, onEdit }) {
  if (!marker) return null;
  const coords = marker.lat != null && marker.lng != null ? `${Number(marker.lat).toFixed(5)}, ${Number(marker.lng).toFixed(5)}` : null;
  let createdLabel = '';
  if (marker.createdAt) {
    const date = new Date(marker.createdAt);
    if (!Number.isNaN(date.getTime())) {
      createdLabel = date.toLocaleString();
    }
  }

  return (
    <div className="marker-info-card">
      {marker.photoURL && (
        <img src={marker.photoURL} alt={marker.title || 'Marker photo'} className="marker-info-photo" />
      )}
      <div className="marker-info-body">
        <div className="marker-info-title">{marker.title?.trim() || 'Untitled marker'}</div>
        {(coords || createdLabel) && (
          <div className="marker-info-meta">
            {coords && <span>{coords}</span>}
            {coords && createdLabel && <span className="marker-info-sep">•</span>}
            {createdLabel && <span>{createdLabel}</span>}
          </div>
        )}
        {marker.description?.trim() && (
          <div className="marker-info-description">{marker.description}</div>
        )}
      </div>
      {!designMode && (
        <div className="marker-info-actions">
          <LikesAndComments markerId={marker.id} />
        </div>
      )}
      {onEdit && (
        <div className="marker-info-footer">
          <button className="btn btn-ghost btn-xs" onClick={onEdit}>Edit marker</button>
        </div>
      )}
    </div>
  );
}
