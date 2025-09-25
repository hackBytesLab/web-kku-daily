export async function GET(req, { params }) {
  const base = process.env.TRANSIT_PROXY_BASE
  if (!base) {
    return new Response(null, { status: 204 })
  }
  const segs = Array.isArray(params.path) ? params.path : []
  const url = `${base}/${segs.join('/')}`
  try {
    const upstream = await fetch(url, { headers: { 'accept': 'application/json' } })
    const body = await upstream.text()
    return new Response(body, { status: upstream.status, headers: { 'content-type': upstream.headers.get('content-type') || 'application/json' } })
  } catch (e) {
    return new Response(JSON.stringify({ error: 'proxy_failed', message: String(e) }), { status: 502 })
  }
}

