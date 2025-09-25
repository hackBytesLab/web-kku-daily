import { EventEmitter } from 'events';

const emitter = new EventEmitter();
emitter.setMaxListeners(0);

export function emitMarkersChanged() {
  emitter.emit('change');
}

export function onMarkersChanged(listener) {
  emitter.on('change', listener);
  return () => emitter.off('change', listener);
}
