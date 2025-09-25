import { useMemo, useState } from 'react'
import { distanceMeters } from '../utils/geo'

export default function SidePanel({
  places,
  onSelect,
  selectedId,
  mapCenter,
  categories = [],
  activeCats = new Set(),
  onToggleCat,
  query,
  onQueryChange,
}) {
  const [showTop, setShowTop] = useState(true)

  const ranking = useMemo(() => {
    // Rank by likes then comments
    return [...places]
      .sort((a, b) => {
        if (b.likes !== a.likes) return b.likes - a.likes
        return (b.comments?.length || 0) - (a.comments?.length || 0)
      })
      .slice(0, 10)
  }, [places])

  const recent = useMemo(() => {
    const items = places
      .flatMap((p) => (
        [
          { type: 'place', id: p.id, title: p.title, at: 0, placeId: p.id },
          ...((p.comments || []).slice(-2).map((c, i) => ({ type: 'comment', id: p.id + ':' + i, placeId: p.id, text: (c?.text || c), at: c?.at || 0 })))
        ]
      ))
      .sort((a, b) => (b.at || 0) - (a.at || 0))
      .slice(0, 10)
    return items
  }, [places])

  const nearestFood = useMemo(() => {
    if (!mapCenter) return []
    const foods = places.filter((p) => p.category === 'FOOD')
    const items = foods.map((f) => ({
      id: f.id,
      name: f.title,
      distance: Math.round(distanceMeters(mapCenter, f)),
    }))
    items.sort((a, b) => a.distance - b.distance)
    return items.slice(0, 3)
  }, [mapCenter, places])

  return (
    <div className="side-panel">
      <div className="panel-section">
        <div className="panel-header">
          <h2>แนะนำร้านข้าวใกล้คุณ</h2>
        </div>
        {nearestFood.length === 0 ? (
          <div className="muted">ตำแหน่งถูกตั้งเป็นศูนย์กลางแผนที่</div>
        ) : null}
        <ul className="list">
          {nearestFood.map((f) => (
            <li key={f.id} className="list-item">
              <div className="list-primary">{f.name}</div>
              <div className="list-secondary">{f.distance} m</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel-section">
        <div className="panel-header">
          <h2>สถานที่สำคัญ</h2>
        </div>
        <div className="filters">
          <input className="filter-input" placeholder="ค้นหา..." value={query} onChange={(e) => onQueryChange?.(e.target.value)} />
          <div className="filter-chips">
            {categories.map((c) => (
              <button key={c.id} className={`chip ${activeCats?.has?.(c.id) ? 'on' : ''}`} onClick={() => onToggleCat?.(c.id)}>
                <span className="chip-icon">{c.icon}</span> {c.name}
              </button>
            ))}
          </div>
        </div>
        <ul className="list">
          {places.map((p) => (
            <li
              key={p.id}
              className={`list-item clickable ${selectedId === p.id ? 'active' : ''}`}
              onClick={() => onSelect?.(p.id)}
            >
              <div className="list-primary">
                {p.title}
              </div>
              <div className="list-secondary">
                {p.icon || ''} {p.category}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel-section">
        <div className="panel-header">
          <h2>ลำดับสถานที่ยอดนิยม</h2>
          <button className="link" onClick={() => setShowTop((s) => !s)}>
            {showTop ? 'ซ่อน' : 'แสดง'}
          </button>
        </div>
        {showTop && (
          <ul className="list">
            {ranking.map((p, idx) => (
              <li
                key={p.id}
                className={`list-item clickable ${selectedId === p.id ? 'active' : ''}`}
                onClick={() => onSelect?.(p.id)}
              >
                <div className="list-primary">
                  {idx + 1}. {p.title || 'สถานที่ไม่ระบุ'}
                </div>
                <div className="list-secondary">
                  👍 {p.likes} · 💬 {p.comments?.length || 0}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="panel-section">
        <div className="panel-header">
          <h2>กิจกรรมล่าสุด</h2>
        </div>
        <ul className="list">
          {recent.map((it) => (
            <li key={it.id} className="list-item clickable" onClick={() => onSelect?.(it.placeId || it.id)}>
              <div className="list-primary">
                {it.type === 'place' ? (it.title || 'สถานที่ใหม่') : `คอมเมนต์: ${it.text}`}
              </div>
              <div className="list-secondary">ล่าสุด</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
