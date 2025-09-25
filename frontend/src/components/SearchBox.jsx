import React, { useEffect, useRef } from 'react';

export default function SearchBox({ onPlaceSelected }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.google?.maps?.places) return;
    const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
      fields: ['geometry', 'name']
    });
    ac.addListener('place_changed', () => {
      const place = ac.getPlace();
      if (place?.geometry?.location) {
        onPlaceSelected?.({
          name: place.name,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    });
  }, []);

  return (
    <input ref={inputRef} className="input" placeholder="Search places" style={{ minWidth: 220 }} />
  );
}

