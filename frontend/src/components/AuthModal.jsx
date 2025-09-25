import React, { useEffect, useState } from 'react';
import { signInWithGoogle, emailSignIn, emailSignUp } from '../firebase.js';

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => { if (!open) { setError(''); setEmail(''); setPassword(''); setName(''); } }, [open]);
  if (!open) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-content" style={{ width: 'min(560px, 92vw)', overflow:'hidden' }}>
        <div style={{ background: 'radial-gradient(1200px 300px at -10% -20%, rgba(79,70,229,.35), transparent)', padding: 18 }}>
          <div className="modal-title" style={{ fontSize: 22 }}>Welcome</div>
          <div className="muted">Sign in to save, like and comment.</div>
        </div>
        <div className="modal-header" style={{ border:'none', paddingTop: 8 }}>
          <div className="toolbar">
            <button className={`btn ${mode==='signin'?'btn-primary':''}`} onClick={()=>setMode('signin')}>Sign in</button>
            <button className={`btn ${mode==='signup'?'btn-primary':''}`} onClick={()=>setMode('signup')}>Sign up</button>
          </div>
          <button className="btn btn-ghost" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body" style={{ display:'grid', gap:10 }}>
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
          <div style={{ display:'flex', gap:8, marginTop:8 }}>
            <button className="btn btn-primary" onClick={async()=>{
              try {
                if (mode==='signin') await emailSignIn(email, password); else await emailSignUp({ email, password, displayName: name });
                onClose();
              } catch (e) { setError(e.message); }
            }}>{mode==='signin'?'Sign in':'Create account'}</button>
            <button className="btn" onClick={async()=>{ try { await signInWithGoogle(); onClose(); } catch(e){ setError(e.message); } }}>Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

