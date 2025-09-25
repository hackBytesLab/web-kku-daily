// Approx KKU bounds and useful seed data

export const KKU_BOUNDS = {
  north: 16.4889,
  south: 16.4545,
  west: 102.8060,
  east: 102.8420,
};

export const KKU_CENTER = { lat: 16.4746, lng: 102.8200 };

// Rough campus polygon (replace with official coordinates when available)
export const KKU_POLYGON = [
  { lat: 16.4878, lng: 102.8090 },
  { lat: 16.4865, lng: 102.8355 },
  { lat: 16.4802, lng: 102.8405 },
  { lat: 16.4690, lng: 102.8390 },
  { lat: 16.4608, lng: 102.8330 },
  { lat: 16.4578, lng: 102.8200 },
  { lat: 16.4600, lng: 102.8110 },
  { lat: 16.4705, lng: 102.8065 },
];

// Sample KKTransit stops (approximate)
export const TRANSIT_STOPS = [
  { id: 'stop1', name: 'Main Gate Stop', position: { lat: 16.4738, lng: 102.8109 } },
  { id: 'stop2', name: 'Complex Stop', position: { lat: 16.4805, lng: 102.8237 } },
  { id: 'stop3', name: 'Dorm Zone Stop', position: { lat: 16.4653, lng: 102.8304 } },
];

// Sample nearby food places (approximate)
export const FOOD_PLACES = [
  { id: 'food1', name: 'Somtum Mae Praew', position: { lat: 16.4761, lng: 102.8224 } },
  { id: 'food2', name: 'KKU Night Market', position: { lat: 16.4699, lng: 102.8256 } },
  { id: 'food3', name: 'Canteen Complex', position: { lat: 16.4808, lng: 102.8230 } },
];
