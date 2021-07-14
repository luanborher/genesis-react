import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

export function useAuth() {
  const v = useContext(AuthContext)
  return v
}
