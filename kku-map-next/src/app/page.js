"use client"
import { useEffect, useMemo, useState } from 'react'
import MapView from '@/components/MapView'
import SidePanel from '@/components/SidePanel'
import { CATEGORIES, IMPORTANT_PLACES } from '@/data/importantPlaces'
import { KKU_CENTER } from '@/data/kkuData'

export default function Home() {
  const [theme, setTheme] = useState(() => (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const [selectedId, setSelectedId] = useState(null)
  const [userCenter, setUserCenter] = useState(KKU_CENTER)
  const [activeCats, setActiveCats] = useState(() => new Set(CATEGORIES.map((c) => c.id)))
  const [query, setQuery] = useState('')
  const [transitOn, setTransitOn] = useState(true)
  const [transit, setTransit] = useState({ stops: [], vehicles: [], routes: [] })

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme) }, [theme])
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => setUserCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }))
    }
  }, [])

  const places = useMemo(() => (
    IMPORTANT_PLACES.map((p) => ({ id: p.id, title: p.title, category: p.category, lat: p.position.lat, lng: p.position.lng, desc: p.desc, icon: CATEGORIES.find(c => c.id === p.category)?.icon }))
  ), [])

  const viewPlaces = useMemo(() => {
    const q = query.trim().toLowerCase()
    return places.filter((p) => activeCats.has(p.category) && (!q || (p.title?.toLowerCase().includes(q) || p.desc?.toLowerCase().includes(q))))
  }, [places, activeCats, query])

  const selected = useMemo(() => viewPlaces.find((p) => p.id === selectedId) || null, [viewPlaces, selectedId])

  const toggleCat = (id) => setActiveCats((prev) => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next })

  useEffect(() => {
    if (!transitOn) return setTransit({ stops: [], vehicles: [], routes: [] })
    let timer
    const stopsUrl = process.env.NEXT_PUBLIC_KKU_TRANSIT_STOPS_URL
    const vehiclesUrl = process.env.NEXT_PUBLIC_KKU_TRANSIT_VEHICLES_URL
    const routesUrl = process.env.NEXT_PUBLIC_KKU_TRANSIT_ROUTES_URL
    async function tick() {
      try {
        const [st, ve, ro] = await Promise.all([
          stopsUrl ? fetch(stopsUrl).then(r => r.ok ? r.json() : null) : null,
          vehiclesUrl ? fetch(vehiclesUrl).then(r => r.ok ? r.json() : null) : null,
          routesUrl ? fetch(routesUrl).then(r => r.ok ? r.json() : null) : null,
        ])
        setTransit({ stops: st || [], vehicles: ve || [], routes: ro || [] })
      } catch {}
    }
    tick(); timer = setInterval(tick, 15000)
    return () => clearInterval(timer)
  }, [transitOn])

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <div className="app">
      <header className="topbar fancy">
        <div className="brand">KKU Map Guide</div>
        <div className="actions">
          <button className="btn ghost" onClick={() => setTransitOn(v => !v)}>🚌 Transit {transitOn ? 'On' : 'Off'}</button>
          <button className="btn ghost" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? '🌞 Light' : '🌙 Dark'}</button>
        </div>
      </header>
      <div className="content">
        <aside className="left">
          <SidePanel
            places={viewPlaces}
            onSelect={setSelectedId}
            selectedId={selectedId}
            mapCenter={userCenter}
            categories={CATEGORIES}
            activeCats={activeCats}
            onToggleCat={toggleCat}
            query={query}
            onQueryChange={setQuery}
          />
        </aside>
        <main className="right">
          {!apiKey ? (
            <div className="no-key" style={{ padding: 24, color: '#6b7280' }}>โปรดตั้งค่า NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ใน .env.local</div>
          ) : (
            <MapView
              apiKey={apiKey}
              theme={theme}
              categories={CATEGORIES}
              activeCats={activeCats}
              onToggleCat={toggleCat}
              query={query}
              onQueryChange={setQuery}
              selected={selected}
              transit={transitOn ? transit : {}}
            />
          )}
        </main>
      </div>
    </div>
  )
}
