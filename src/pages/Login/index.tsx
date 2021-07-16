import './styles.scss'

import { FormEvent, useState } from 'react'

import { AiFillEye } from 'react-icons/ai'
import ilustration from '../../assets/images/ilustration.png'
import logotipo from '../../assets/images/logotipo.png'
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom'

interface DataLogin {
  email: string
  password: string
}

export function Login() {
  const history = useHistory()
  const { signInEmail, user } = useAuth()
  const [dataLogin, setDataLogin] = useState<DataLogin>({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    console.log(user)
    const { email, password } = dataLogin
    if (email && password) {
      signInEmail(email, password)
    }
  }

  const handleShowPassword = (e: FormEvent) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  const handlePathOfRegister = (e: FormEvent) => {
    e.preventDefault()
    history.push(`/register`)
  }

  return (
    <div id="page-login">
      <div className="painel-principal">
        <aside style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={ilustration}
            alt="Imagem de ilustração"
            style={{ width: '85%', height: '85%', opacity: 0.9 }}
          />
        </aside>
        <main>
          <form onSubmit={handleLogin}>
            <img src={logotipo} alt="Logotipo do projeto" />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setDataLogin({ ...dataLogin, email: event.target.value })}
              value={dataLogin.email}
            />
            <div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                onChange={(event) => setDataLogin({ ...dataLogin, password: event.target.value })}
                value={dataLogin.password}></input>
              <AiFillEye onClick={(e) => handleShowPassword(e)} size="25px" className="eye" />
            </div>
            <button type="submit">Entrar</button>
            <div className="separator">
              <strong>Ainda não possui um cadastro?</strong>
            </div>
          </form>
          <div className="button-register">
            <button onClick={handlePathOfRegister}>Registrar-se</button>
          </div>
        </main>
      </div>
    </div>
  )
}
