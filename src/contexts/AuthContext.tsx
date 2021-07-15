import { ReactNode, createContext, useEffect, useState } from 'react'

import { auth } from '../services/firebase'

type User = {
  id: string | null
  name: string | null
  token: string | null
}
type AuthContextType = {
  user: User | undefined
  /**
   * Função Utilizada para realizar login com email e senha no firebase
   * @param email Email para logar no firebase
   * @param password Senha para logar no firebase
   */
  signInEmail: (email: string, password: string) => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}
export const AuthContext = createContext({} as AuthContextType)
export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    /**
     * Listener para verificar se está logado
     */
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, uid } = user
        setUser({
          id: uid,
          name: displayName,
          token: await user.getIdToken(),
        })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  async function signInEmail(email: string, password: string) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        if (user) {
          console.log(user)
          const { displayName, uid, getIdToken } = user
          if (!displayName || !uid) {
            throw new Error('Account with Error')
          }
          setUser({
            id: uid,
            name: displayName,
            token: await getIdToken(),
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return <AuthContext.Provider value={{ user, signInEmail }}>{props.children}</AuthContext.Provider>
}
