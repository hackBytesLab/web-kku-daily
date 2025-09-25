import { initFirebase, ensureAnon } from '../firebase.js';
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, deleteDoc, onSnapshot, serverTimestamp, getDocs } from 'firebase/firestore';

export function listenMarkers(callback) {
  initFirebase();
  const db = getFirestore();
  const col = collection(db, 'markers');
  return onSnapshot(col, (snap) => {
    const arr = [];
    snap.forEach((d) => arr.push({ id: d.id, ...d.data() }));
    // Normalize timestamp
    arr.forEach((m) => {
      if (m.createdAt && m.createdAt.toDate) {
        m.createdAt = m.createdAt.toDate().toISOString();
      }
    });
    callback(arr);
  });
}

export async function addMarkerFs({ lat, lng, title, description, photoURL }) {
  const db = getFirestore();
  const u = await ensureAnon();
  const data = {
    lat: Number(lat),
    lng: Number(lng),
    title: title ?? null,
    description: description ?? null,
    photoURL: photoURL ?? null,
    ownerUid: u?.uid || null,
    createdAt: serverTimestamp(),
  };
  const ref = await addDoc(collection(db, 'markers'), data);
  return { id: ref.id, ...data };
}

export async function updateMarkerFs(id, fields) {
  const db = getFirestore();
  await updateDoc(doc(db, 'markers', id), fields);
}

export async function deleteMarkerFs(id) {
  const db = getFirestore();
  await deleteDoc(doc(db, 'markers', id));
}

export async function clearAllMarkersFs() {
  const db = getFirestore();
  const qs = await getDocs(collection(db, 'markers'));
  const batch = [];
  qs.forEach((d) => batch.push(deleteDoc(doc(db, 'markers', d.id))));
  await Promise.all(batch);
}

