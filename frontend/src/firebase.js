import { initializeApp, getApps } from 'firebase/app';
import { getAuth, signInAnonymously, connectAuthEmulator, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { getFirestore, doc, setDoc, deleteDoc, getDoc, collection, getDocs, addDoc, serverTimestamp, onSnapshot, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, connectStorageEmulator } from 'firebase/storage';

let app, auth, db, storage;

export function initFirebase() {
  if (getApps().length) return { app, auth, db, storage };
  const cfg = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };
  if (!cfg.apiKey) return null; // not configured
  app = initializeApp(cfg);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  // Use session persistence so each new tab/reload asks for sign-in again
  try { setPersistence(auth, browserSessionPersistence); } catch {}

  // Connect to emulators in development if enabled
  // Use emulators only when explicitly enabled via env
  const useEmu = import.meta.env.VITE_USE_EMULATORS === '1';
  if (useEmu) {
    try {
      connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    } catch {}
    try { connectFirestoreEmulator(db, '127.0.0.1', 8080); } catch {}
    try { connectStorageEmulator(storage, '127.0.0.1', 9199); } catch {}
  }
  return { app, auth, db, storage };
}

export async function ensureAnon() {
  const inited = initFirebase();
  if (!inited) return null;
  const { user } = await signInAnonymously(getAuth());
  return user;
}

// Auth helpers for UI
export function watchAuth(callback) {
  initFirebase();
  return onAuthStateChanged(getAuth(), (u) => callback(u));
}

export async function signInWithGoogle() {
  initFirebase();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const res = await signInWithPopup(getAuth(), provider);
  return res.user;
}

export async function signInWithGoogleRedirect() {
  initFirebase();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  await signInWithRedirect(getAuth(), provider);
}

export async function getGoogleRedirectResult() {
  initFirebase();
  try {
    const res = await getRedirectResult(getAuth());
    return res?.user || null;
  } catch (e) {
    throw e;
  }
}

export function currentUser() {
  initFirebase();
  return getAuth().currentUser || null;
}

export async function emailSignIn(email, password) {
  initFirebase();
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
  return user;
}

export async function emailSignUp({ email, password, displayName }) {
  initFirebase();
  const { user } = await createUserWithEmailAndPassword(getAuth(), email, password);
  if (displayName) await updateProfile(user, { displayName });
  return user;
}

export async function signOutUser() {
  initFirebase();
  await signOut(getAuth());
}

export async function uploadMarkerImage(markerId, file) {
  const inited = initFirebase();
  if (!inited) throw new Error('Firebase not configured');
  const path = `markers/${markerId}/${Date.now()}_${file.name}`;
  const r = ref(getStorage(), path);
  await uploadBytes(r, file);
  return getDownloadURL(r);
}

// Likes helpers
export async function getLikeState(markerId, uid) {
  const inited = initFirebase();
  if (!inited) return { liked: false, count: 0 };
  const likeDoc = await getDoc(doc(getFirestore(), `markers/${markerId}/likes/${uid}`));
  const snap = await getDocs(collection(getFirestore(), `markers/${markerId}/likes`));
  return { liked: likeDoc.exists(), count: snap.size };
}

export async function toggleLike(markerId, uid) {
  const d = doc(getFirestore(), `markers/${markerId}/likes/${uid}`);
  const exists = (await getDoc(d)).exists();
  if (exists) {
    await deleteDoc(d);
  } else {
    await setDoc(d, { createdAt: serverTimestamp() });
  }
  return getLikeState(markerId, uid);
}

// Comments helpers
export function listenComments(markerId, cb) {
  const col = collection(getFirestore(), `markers/${markerId}/comments`);
  return onSnapshot(col, (snap) => {
    const arr = [];
    snap.forEach((d) => arr.push({ id: d.id, ...d.data() }));
    arr.sort((a, b) => (a.createdAt?.toMillis?.() || 0) - (b.createdAt?.toMillis?.() || 0));
    cb(arr);
  });
}

export async function addComment(markerId, { uid, text }) {
  const col = collection(getFirestore(), `markers/${markerId}/comments`);
  await addDoc(col, { uid, text, createdAt: serverTimestamp() });
}
