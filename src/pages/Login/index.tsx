import './styles.scss'

import { useAuth } from 'hooks/useAuth'
import { useState } from 'react'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signInEmail } = useAuth()
  return (
    <div id="page-login">
      <div className="painel-principal">
        <aside>Aside</aside>
        <main>Main</main>
      </div>
    </div>
  )
}
