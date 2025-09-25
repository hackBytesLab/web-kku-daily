import React, { useEffect, useState } from 'react';
import MapApp from './pages/MapApp.jsx';
import LoginPage from './pages/Login.jsx';

export default function App() {
  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route === 'login' ? <LoginPage /> : <MapApp />;
}

function getRoute() {
  const h = window.location.hash || '#/login';
  if (h.startsWith('#/login')) return 'login';
  return 'app';
}
