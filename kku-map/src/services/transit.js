export async function fetchJson(url, opts = {}) {
  if (!url) return null
  try {
    const res = await fetch(url, { headers: { 'Accept': 'application/json' }, ...opts })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } catch (e) {
    console.warn('Transit fetch failed', url, e)
    return null
  }
}

function normCoord(obj) {
  if (!obj) return null
  const lat = obj.lat ?? obj.latitude ?? obj.Latitude ?? obj.LAT ?? obj.y
  const lng = obj.lng ?? obj.lon ?? obj.longitude ?? obj.Longitude ?? obj.LNG ?? obj.x
  if (typeof lat === 'number' && typeof lng === 'number') return { lat, lng }
  return null
}

export function normalizeStops(raw) {
  if (!Array.isArray(raw)) return []
  return raw.map((s, i) => {
    const id = s.id ?? s.stop_id ?? s.code ?? String(i)
    const name = s.name ?? s.stop_name ?? s.title ?? s.StopName ?? `Stop ${i+1}`
    const pos = normCoord(s) || normCoord(s.position) || normCoord(s.location)
    return pos ? { id, name, position: pos } : null
  }).filter(Boolean)
}

export function normalizeVehicles(raw) {
  if (!Array.isArray(raw)) return []
  return raw.map((v, i) => {
    const id = v.id ?? v.vehicle_id ?? v.code ?? String(i)
    const label = v.label ?? v.name ?? v.vehicle_label ?? `Bus ${i+1}`
    const pos = normCoord(v) || normCoord(v.position) || normCoord(v.location)
    const bearing = v.bearing ?? v.heading
    const routeId = v.route_id ?? v.route
    return pos ? { id, label, position: pos, bearing, routeId } : null
  }).filter(Boolean)
}

export function normalizeRoutes(raw) {
  if (!Array.isArray(raw)) return []
  return raw.map((r, i) => {
    const id = r.id ?? r.route_id ?? String(i)
    const name = r.name ?? r.route_short_name ?? r.route_long_name ?? `Route ${i+1}`
    let path = r.path
    if (!Array.isArray(path) && typeof r.polyline === 'string') {
      path = decodePolyline(r.polyline)
    }
    if (!Array.isArray(path)) return null
    const color = r.color ?? r.route_color
    return { id, name, path: path.map(normCoord).filter(Boolean), color }
  }).filter(Boolean)
}

// Minimal polyline decoder (Google encoded polyline)
function decodePolyline(str) {
  let index = 0, lat = 0, lng = 0, coordinates = []
  while (index < str.length) {
    let b, shift = 0, result = 0
    do { b = str.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5 } while (b >= 0x20)
    const dlat = (result & 1) ? ~(result >> 1) : (result >> 1)
    lat += dlat
    shift = 0; result = 0
    do { b = str.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5 } while (b >= 0x20)
    const dlng = (result & 1) ? ~(result >> 1) : (result >> 1)
    lng += dlng
    coordinates.push({ lat: lat / 1e5, lng: lng / 1e5 })
  }
  return coordinates
}

