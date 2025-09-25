// Service switcher: Local mock (Design Mode) vs API-backed markers
import * as localSvc from './markersLocal.js';
import * as apiSvc from './markersApi.js';

const DESIGN = import.meta.env.VITE_DESIGN_MODE === '1';
const svc = DESIGN ? localSvc : apiSvc;

export const listenMarkers = svc.listenMarkers;
export const addMarker = svc.addMarker;
export const updateMarker = svc.updateMarker;
export const deleteMarker = svc.deleteMarker;
export const clearAllMarkers = svc.clearAllMarkers;
