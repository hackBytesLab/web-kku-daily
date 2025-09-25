import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GoogleMap, Marker, LoadScript, Rectangle, Autocomplete, Polygon, Polyline } from '@react-google-maps/api'
import { KKU_CENTER, KKU_BOUNDS, KKU_POLYGON } from '../data/kkuData'

const containerStyle = { width: '100%', height: '100%' }

const mapOptions = {
  gestureHandling: 'greedy',
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  restriction: { latLngBounds: KKU_BOUNDS, strictBounds: true },
}

const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#263c3f' }] },
  { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#6b9a76' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#38414e' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#212a37' }] },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#9ca5b3' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#746855' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#1f2835' }] },
  { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#f3d19c' }] },
  { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2f3948' }] },
  { featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#17263c' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#515c6d' }] },
  { featureType: 'water', elementType: 'labels.text.stroke', stylers: [{ color: '#17263c' }] },
]

export default function MapView({ apiKey, places, onLike, onComment, selectedId, likedIds, theme = 'light', categories = [], activeCats = new Set(), onToggleCat, query = '', onQueryChange, transit = {} }) {
  const [mapRef, setMapRef] = useState(null)
  const [searchBox, setSearchBox] = useState(null)
  const inputRef = useRef(null)
  const polyRef = useRef(null)

  const onLoad = useCallback((map) => {
    setMapRef(map)
    // fit to KKU on load
    const bounds = new window.google.maps.LatLngBounds(
      { lat: KKU_BOUNDS.south, lng: KKU_BOUNDS.west },
      { lat: KKU_BOUNDS.north, lng: KKU_BOUNDS.east }
    )
    map.fitBounds(bounds)
  }, [])

  // no map click handling (pin placement removed)

  const center = useMemo(() => KKU_CENTER, [])

  // Pan to selected place when selectedId changes (no popup)
  useEffect(() => {
    const next = places.find((p) => p.id === selectedId) || null
    if (next && mapRef) {
      mapRef.panTo({ lat: next.lat, lng: next.lng })
    }
  }, [selectedId, places, mapRef])

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={['places']}> 
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{ ...mapOptions, styles: theme === 'dark' ? darkMapStyle : undefined }}
        onLoad={onLoad}
      >
        <div className="map-overlay">
          <div className="search-box">
            <Autocomplete onLoad={setSearchBox} onPlaceChanged={() => {
              const place = searchBox?.getPlace()
              const loc = place?.geometry?.location
              if (loc && mapRef) {
                mapRef.panTo({ lat: loc.lat(), lng: loc.lng() })
                mapRef.setZoom(17)
              }
            }}>
              <input ref={inputRef} value={query} onChange={(e) => onQueryChange?.(e.target.value)} placeholder="ค้นหาสถานที่ใน มข." />
            </Autocomplete>
          </div>
          <div className="chips">
            {categories.map((c) => (
              <button
                key={c.id}
                className={`chip ${activeCats?.has?.(c.id) ? 'on' : ''}`}
                onClick={() => onToggleCat?.(c.id)}
                title={c.name}
              >
                <span className="chip-icon">{c.icon}</span> {c.name}
              </button>
            ))}
          </div>
          <div className="controls">
            <button className="ctrl-btn" title="Locate me" onClick={() => {
              if (!navigator.geolocation || !mapRef) return
              navigator.geolocation.getCurrentPosition((pos) => {
                const c = { lat: pos.coords.latitude, lng: pos.coords.longitude }
                mapRef.panTo(c)
                mapRef.setZoom(17)
              })
            }}>📍</button>
            <button className="ctrl-btn" title="Recenter to KKU" onClick={() => {
              if (!mapRef) return
              const bounds = new window.google.maps.LatLngBounds(
                { lat: KKU_BOUNDS.south, lng: KKU_BOUNDS.west },
                { lat: KKU_BOUNDS.north, lng: KKU_BOUNDS.east }
              )
              mapRef.fitBounds(bounds)
            }}>🎯</button>
          </div>
        </div>

        <Rectangle
          bounds={{
            north: KKU_BOUNDS.north,
            south: KKU_BOUNDS.south,
            east: KKU_BOUNDS.east,
            west: KKU_BOUNDS.west,
          }}
          options={{ strokeColor: '#3b82f6', strokeOpacity: 0.6, fillOpacity: 0 }}
        />
        <Polygon
          path={KKU_POLYGON}
          options={{ strokeColor: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.06 }}
          onLoad={(poly) => { polyRef.current = poly }}
        />

        {/* Curated place markers disabled intentionally */}

        {transit.routes?.map((r) => (
          <Polyline key={r.id} path={r.path} options={{ strokeColor: r.color || '#ef4444', strokeOpacity: 0.8, strokeWeight: 3 }} />
        ))}

        {transit.stops?.map((s) => (
          <Marker key={s.id} position={s.position} label={{ text: '🚌', color: '#1f2937', fontSize: '14px' }} title={s.name} />
        ))}

        {transit.vehicles?.map((v) => (
          <Marker key={v.id} position={v.position} label={{ text: '🚍', color: '#1f2937', fontSize: '14px' }} title={v.label} />
        ))}

        {/* Place popup disabled intentionally */}

      </GoogleMap>
    </LoadScript>
  )
}

// CommentBox removed with place popup
