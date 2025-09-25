let loadingPromise = null;

export default function loadGoogleMaps(apiKey) {
  if (typeof window === 'undefined') return Promise.reject(new Error('window not available'));
  if (window.google && window.google.maps) return Promise.resolve(window.google);

  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const params = new URLSearchParams({ key: apiKey, libraries: 'places,geometry' });
    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google);
    script.onerror = () => reject(new Error('Failed to load Google Maps')); 
    document.head.appendChild(script);
  });

  return loadingPromise;
}
