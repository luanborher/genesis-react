import { ReactNode, createContext, useEffect, useState } from 'react'

import { auth } from '../services/firebase'

type User = {
  id: string | null
  name: string | null
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
/**
 * Cria o Context
 */
export const AuthContext = createContext({} as AuthContextType)
/**
 * Provider Do Context
 */
export function AuthContextProvider(props: AuthContextProviderProps) {
  /**
   * State Repassado no Context
   */
  const [user, setUser] = useState<User>()
  /**
   * Toda vez que inicia o hook o Effect é chamado e coloca no state o usuario do firebase, state que é repassado no context
   */
  useEffect(() => {
    /**
     * Listener para verificar se está logado
     */
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, uid } = user

        setUser({
          id: uid,
          name: displayName,
        })
      }
    })
    /**
     * Quando o componente é desmontado o unsubscribe é chamado retirando o listener do auth
     */
    return () => {
      unsubscribe()
    }
  }, [])

  async function signInEmail(email: string, password: string) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user) {
          const { displayName, uid } = user
          if (displayName || uid) {
            throw new Error('Account with Error')
          }
          setUser({
            id: uid,
            name: displayName,
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return <AuthContext.Provider value={{ user, signInEmail }}>{props.children}</AuthContext.Provider>
}
