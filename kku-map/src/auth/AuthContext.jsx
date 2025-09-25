import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const USERS_KEY = 'kku_users_v1'
const CURRENT_USER_KEY = 'kku_current_user_v1'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    try {
      const raw = localStorage.getItem(USERS_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [currentId, setCurrentId] = useState(() => {
    try {
      return localStorage.getItem(CURRENT_USER_KEY) || null
    } catch {
      return null
    }
  })

  useEffect(() => {
    try { localStorage.setItem(USERS_KEY, JSON.stringify(users)) } catch {}
  }, [users])

  useEffect(() => {
    try {
      if (currentId) localStorage.setItem(CURRENT_USER_KEY, currentId)
      else localStorage.removeItem(CURRENT_USER_KEY)
    } catch {}
  }, [currentId])

  const user = useMemo(() => users.find((u) => u.id === currentId) || null, [users, currentId])

  const register = useCallback((name, email, password) => {
    const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase())
    if (exists) throw new Error('อีเมลนี้ถูกใช้งานแล้ว')
    const u = { id: uuidv4(), name, email, password } // Not secure; demo only
    setUsers((prev) => [...prev, u])
    setCurrentId(u.id)
    return u
  }, [users])

  const login = useCallback((email, password) => {
    const u = users.find((x) => x.email.toLowerCase() === email.toLowerCase() && x.password === password)
    if (!u) throw new Error('อีเมลหรือรหัสผ่านไม่ถูกต้อง')
    setCurrentId(u.id)
    return u
  }, [users])

  const logout = useCallback(() => {
    setCurrentId(null)
  }, [])

  const value = useMemo(() => ({ user, users, register, login, logout }), [user, users, register, login, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

