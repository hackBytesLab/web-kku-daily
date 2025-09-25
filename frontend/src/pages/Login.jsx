import React, { useEffect, useState } from 'react';
import { signInWithGoogle, signInWithGoogleRedirect, getGoogleRedirectResult, emailSignIn, emailSignUp, watchAuth, currentUser, signOutUser } from '../firebase.js';

export default function LoginPage() {
  const [mode, setMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // If already signed in, go to app
    const unsub = watchAuth((u) => { if (u) window.location.hash = '#/app'; });
    return () => unsub();
  }, []);

  useEffect(() => {
    // Handle redirect result (Google Sign-In)
    getGoogleRedirectResult().then((u)=>{ if (u) window.location.hash = '#/app'; }).catch((e)=>setError(e.message || 'Google sign-in failed'));
  }, []);

  return (
    <div className="app hero-bg" style={{ minHeight:'100vh', display:'grid', placeItems:'center' }}>
      <div className="panel" style={{ width:'min(560px, 92vw)' }}>
        <div className="panel-header">
          <div className="panel-title">{mode==='signin'?'Sign in':'Create account'}</div>
          <a className="btn btn-ghost" href="#/app">Back</a>
        </div>
        <div className="panel-body" style={{ display:'grid', gap:10 }}>
          <div className="toolbar">
            <button className={`btn ${mode==='signin'?'btn-primary':''}`} onClick={()=>setMode('signin')}>Sign in</button>
            <button className={`btn ${mode==='signup'?'btn-primary':''}`} onClick={()=>setMode('signup')}>Sign up</button>
          </div>
          {mode==='signup' && (
            <>
              <label className="label">Name</label>
              <input className="input" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
            </>
          )}
          <label className="label">Email</label>
          <input className="input" type="email" placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label className="label">Password</label>
          <input className="input" type="password" placeholder="••••••••" value={password} onChange={(e)=>setPassword(e.target.value)} />
          {error && <div style={{ color: 'salmon' }}>{error}</div>}
          <div className="toolbar" style={{ justifyContent:'space-between' }}>
            <button className="btn btn-primary" onClick={async()=>{ try { if(mode==='signin') await emailSignIn(email,password); else await emailSignUp({ email, password, displayName:name }); } catch(e){ setError(e.message);} }}> {mode==='signin'?'Sign in':'Sign up'} </button>
            <button className="btn" onClick={async()=>{
              setError('');
              try {
                // Try popup first (faster UX). If popup is blocked, fallback to redirect.
                await signInWithGoogle();
                window.location.hash = '#/app';
              } catch (e) {
                const code = e?.code || '';
                if (code.includes('popup')) {
                  try { await signInWithGoogleRedirect(); } catch (er) { setError(er.message || 'Google sign-in failed'); }
                } else {
                  setError(e.message || 'Google sign-in failed');
                }
              }
            }}>Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}
