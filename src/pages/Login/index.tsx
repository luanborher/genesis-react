import './styles.scss'

import { FormEvent, useState } from 'react'

import logotipo from '../../assets/images/logotipo.png'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'

interface DataLogin {
  email: string
  password: string
}

export function Login() {
  const { signInEmail, user } = useAuth()
  const [dataLogin, setDataLogin] = useState<DataLogin>({
    email: '',
    password: '',
  })
  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    const { email, password } = dataLogin
    if (email && password) {
      signInEmail(email, password)
    }
  }

  return (
    <div id="page-login">
      <div className="painel-principal">
        <aside></aside>
        <main>
          <form onSubmit={handleLogin}>
            <img src={logotipo} alt="Logotipo do projeto" />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setDataLogin({ ...dataLogin, email: event.target.value })}
              value={dataLogin.email}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={(event) => setDataLogin({ ...dataLogin, password: event.target.value })}
              value={dataLogin.password}
            />
            <button type="submit">Entrar</button>
            <div className="separator">
              <strong>Ainda não possui um cadastro?</strong>
            </div>
          </form>
          <div className="button-register">
            <button type="submit">Registrar-se</button>
          </div>
        </main>
      </div>
    </div>
  )
}
