import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'

export default function AuthModal({ open, onClose }) {
  const { login, register } = useAuth()
  const [tab, setTab] = useState('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (!open) return null

  const reset = () => { setName(''); setEmail(''); setPassword(''); setError('') }

  const submit = async (e) => {
    e.preventDefault()
    try {
      setError('')
      if (tab === 'signin') {
        await login(email.trim(), password)
      } else {
        if (!name.trim()) throw new Error('กรุณากรอกชื่อ')
        await register(name.trim(), email.trim(), password)
      }
      reset()
      onClose?.()
    } catch (err) {
      setError(err?.message || 'เกิดข้อผิดพลาด')
    }
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-body auth" onClick={(e) => e.stopPropagation()}>
        <div className="tabs">
          <button className={`tab ${tab === 'signin' ? 'active' : ''}`} onClick={() => setTab('signin')}>Sign in</button>
          <button className={`tab ${tab === 'signup' ? 'active' : ''}`} onClick={() => setTab('signup')}>Sign up</button>
        </div>
        <form className="auth-form" onSubmit={submit}>
          {tab === 'signup' && (
            <label>
              ชื่อผู้ใช้
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="ชื่อ-นามสกุล" />
            </label>
          )}
          <label>
            อีเมล
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </label>
          <label>
            รหัสผ่าน
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </label>
          {error ? <div className="error">{error}</div> : null}
          <div className="form-actions">
            <button type="button" className="btn ghost" onClick={onClose}>ยกเลิก</button>
            <button className="btn primary" type="submit">{tab === 'signin' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

