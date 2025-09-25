"use client"
import { useMemo } from 'react'
import { distanceMeters } from '@/utils/geo'

export default function SidePanel({ places, onSelect, selectedId, mapCenter, categories = [], activeCats = new Set(), onToggleCat, query, onQueryChange }) {
  const nearestFood = useMemo(() => {
    if (!mapCenter) return []
    const foods = places.filter((p) => p.category === 'FOOD')
    const items = foods.map((f) => ({ id: f.id, name: f.title, distance: Math.round(distanceMeters(mapCenter, f)) }))
    items.sort((a, b) => a.distance - b.distance)
    return items.slice(0, 3)
  }, [mapCenter, places])

  return (
    <div className="side-panel">
      <div className="panel-section">
        <div className="panel-header"><h2>แนะนำร้านข้าวใกล้คุณ</h2></div>
        {nearestFood.length === 0 ? <div className="muted">ตำแหน่งถูกตั้งเป็นศูนย์กลางแผนที่</div> : null}
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
        <div className="panel-header"><h2>สถานที่สำคัญ</h2></div>
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
            <li key={p.id} className={`list-item clickable ${selectedId === p.id ? 'active' : ''}`} onClick={() => onSelect?.(p.id)}>
              <div className="list-primary">{p.title}</div>
              <div className="list-secondary">{p.icon || ''} {p.category}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

