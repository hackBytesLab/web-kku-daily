import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import MapView from './components/MapView'
import SidePanel from './components/SidePanel'
import { KKU_CENTER } from './data/kkuData'
import { useAuth } from './auth/AuthContext'
import AuthModal from './components/AuthModal'
import { IMPORTANT_PLACES, CATEGORIES } from './data/importantPlaces'
import { fetchJson, normalizeStops, normalizeVehicles, normalizeRoutes } from './services/transit'

const STORAGE_KEY = 'kku_places_v1'
const LIKED_KEY = 'kku_liked_v1'

export default function App() {
  const { user, logout } = useAuth()
  // Local state for curated places: likes/comments per place
  const [placeState, setPlaceState] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : {}
    } catch { return {} }
  })
  const [selectedId, setSelectedId] = useState(null)
  const [userCenter, setUserCenter] = useState(KKU_CENTER)
  const [likedIds, setLikedIds] = useState(() => {
    try {
      const raw = localStorage.getItem(`${LIKED_KEY}_${'device'}`)
      return new Set(raw ? JSON.parse(raw) : [])
    } catch {
      return new Set()
    }
  })
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('kku_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } catch {
      return 'light'
    }
  })
  const [authOpen, setAuthOpen] = useState(false)
  const [showPlaces, setShowPlaces] = useState(() => {
    try { return JSON.parse(localStorage.getItem('kku_showPlaces') || 'false') } catch { return false }
  })

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(placeState)) } catch {}
  }, [placeState])

  const likedStorageKey = useMemo(() => `${LIKED_KEY}_${user?.id || 'device'}`, [user])
  useEffect(() => {
    try { localStorage.setItem(likedStorageKey, JSON.stringify(Array.from(likedIds))) } catch {}
  }, [likedIds, likedStorageKey])
  useEffect(() => {
    try {
      const raw = localStorage.getItem(likedStorageKey)
      setLikedIds(new Set(raw ? JSON.parse(raw) : []))
    } catch { setLikedIds(new Set()) }
  }, [likedStorageKey])

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coord = { lat: pos.coords.latitude, lng: pos.coords.longitude }
          setUserCenter(coord)
        },
        () => {},
        { enableHighAccuracy: true, timeout: 4000 }
      )
    }
  }, [])

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  // Build view model from curated dataset + local state
  const categoryMap = useMemo(() => Object.fromEntries(CATEGORIES.map(c => [c.id, c])), [])
  const places = useMemo(() => (
    IMPORTANT_PLACES.map((p) => {
      const st = placeState[p.id] || { likes: 0, comments: [] }
      return {
        id: p.id,
        title: p.title,
        category: p.category,
        lat: p.position.lat,
        lng: p.position.lng,
        desc: p.desc || '',
        likes: st.likes || 0,
        comments: st.comments || [],
        icon: categoryMap[p.category]?.icon || '',
      }
    })
  ), [placeState, categoryMap])

  // Filters
  const [activeCats, setActiveCats] = useState(() => new Set(CATEGORIES.map((c) => c.id)))
  const [query, setQuery] = useState('')
  const viewPlaces = useMemo(() => {
    const q = query.trim().toLowerCase()
    return places.filter((p) => activeCats.has(p.category) && (!q || (p.title?.toLowerCase().includes(q) || p.desc?.toLowerCase().includes(q))))
  }, [places, activeCats, query])
  const toggleCat = useCallback((id) => {
    setActiveCats((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  // Transit state
  const [transitOn, setTransitOn] = useState(true)
  const [transitStops, setTransitStops] = useState([])
  const [transitVehicles, setTransitVehicles] = useState([])
  const [transitRoutes, setTransitRoutes] = useState([])

  const stopsUrl = import.meta.env.VITE_KKU_TRANSIT_STOPS_URL
  const vehiclesUrl = import.meta.env.VITE_KKU_TRANSIT_VEHICLES_URL
  const routesUrl = import.meta.env.VITE_KKU_TRANSIT_ROUTES_URL

  useEffect(() => {
    let timer
    async function tick() {
      if (!transitOn) return
      const [st, ve, ro] = await Promise.all([
        fetchJson(stopsUrl),
        fetchJson(vehiclesUrl),
        fetchJson(routesUrl),
      ])
      if (st) setTransitStops(normalizeStops(st))
      if (ve) setTransitVehicles(normalizeVehicles(ve))
      if (ro) setTransitRoutes(normalizeRoutes(ro))
    }
    tick()
    timer = setInterval(tick, 15000)
    return () => clearInterval(timer)
  }, [transitOn, stopsUrl, vehiclesUrl, routesUrl])

  // Deep-link: read ?place=ID
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const pid = params.get('place')
    if (pid) setSelectedId(pid)
  }, [])

  // Sync URL when selection changes
  useEffect(() => {
    const url = new URL(window.location.href)
    if (selectedId) url.searchParams.set('place', selectedId)
    else url.searchParams.delete('place')
    window.history.replaceState({}, '', url)
  }, [selectedId])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('kku_theme', theme) } catch {}
  }, [theme])

  useEffect(() => {
    try { localStorage.setItem('kku_showPlaces', JSON.stringify(showPlaces)) } catch {}
  }, [showPlaces])

  // No place creation: using curated dataset only

  const onLike = useCallback((id) => {
    setLikedIds((prev) => {
      const has = prev.has(id)
      const next = new Set(prev)
      setPlaceState((prevState) => {
        const st = prevState[id] || { likes: 0, comments: [] }
        const liked = has
        const likes = liked ? Math.max(0, (st.likes || 0) - 1) : (st.likes || 0) + 1
        const updated = { ...prevState, [id]: { ...st, likes } }
        return updated
      })
      if (has) next.delete(id); else next.add(id)
      return next
    })
  }, [])

  const onComment = useCallback((id, text) => {
    setPlaceState((prevState) => {
      const st = prevState[id] || { likes: 0, comments: [] }
      const comments = [...(st.comments || []), { text, by: user?.name || 'ผู้ใช้', at: Date.now() }]
      return { ...prevState, [id]: { ...st, comments } }
    })
  }, [user])

  const appCenter = useMemo(() => userCenter || KKU_CENTER, [userCenter])

  return (
    <div className="app">
      <header className="topbar fancy">
        <div className="brand">KKU Map Guide</div>
        <div className="actions">
          <button className={`btn ghost ${showPlaces ? 'primary' : ''}`} onClick={() => setShowPlaces((v) => !v)}>
            📍 Places {showPlaces ? 'On' : 'Off'}
          </button>
          <button className={`btn ghost ${transitOn ? 'primary' : ''}`} onClick={() => setTransitOn((v) => !v)}>
            🚌 Transit {transitOn ? 'On' : 'Off'}
          </button>
          <button className="btn ghost" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}>
            {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
          </button>
          {user ? (
            <div className="user">
              <div className="avatar" title={user.name}>{(user.name || user.email).slice(0,1).toUpperCase()}</div>
              <div className="user-menu">
                <div className="user-name">{user.name}</div>
                <button className="btn ghost" onClick={logout}>ออกจากระบบ</button>
              </div>
            </div>
          ) : (
            <button className="btn primary" onClick={() => setAuthOpen(true)}>Sign in / Sign up</button>
          )}
        </div>
      </header>
      <div className="content">
        <aside className="left">
          <SidePanel
            places={viewPlaces}
            onSelect={(id) => setSelectedId(id)}
            selectedId={selectedId}
            mapCenter={appCenter}
            categories={CATEGORIES}
            activeCats={activeCats}
            onToggleCat={toggleCat}
            query={query}
            onQueryChange={setQuery}
          />
        </aside>
        <main className="right">
          {!apiKey ? (
            <div className="no-key">
              กรุณาตั้งค่า VITE_GOOGLE_MAPS_API_KEY ในไฟล์ .env เพื่อใช้งานแผนที่
            </div>
          ) : (
            <MapView
              apiKey={apiKey}
              places={viewPlaces}
              onLike={onLike}
              onComment={onComment}
              selectedId={selectedId}
              likedIds={likedIds}
              theme={theme}
              categories={CATEGORIES}
              activeCats={activeCats}
              onToggleCat={toggleCat}
              query={query}
              onQueryChange={setQuery}
              transit={transitOn ? { stops: transitStops, vehicles: transitVehicles, routes: transitRoutes } : {}}
              showPlaces={showPlaces}
            />
          )}
        </main>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}
