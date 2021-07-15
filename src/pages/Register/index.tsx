import './styles.scss'

import { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import logotipo from '../../assets/images/logotipo.png'
import { useState } from 'react'

interface DataRegister {
  email: string
  displayName: string
  password: string
}

export function Register() {
  const [dataRegister, setDataRegister] = useState<Partial<DataRegister>>({
    email: '',
    displayName: '',
    password: '',
  })

  const SendDataOfRegister = (e: FormEvent) => {
    e.preventDefault()
    SendData()
  }

  const SendData = async () => {
    var res = await api.post('/users', dataRegister)
    console.log(res)
  }

  return (
    <div id="page-register">
      <div className="painel-principal">
        <aside></aside>
        <main>
          <form onSubmit={SendDataOfRegister}>
            <img src={logotipo} alt="Logotipo do projeto" />
            <input
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(event) => setDataRegister({ ...dataRegister, email: event.target.value })}
              value={dataRegister.email}
            />
            <input
              type="text"
              placeholder="Escolha um nome de usuário"
              onChange={(event) =>
                setDataRegister({
                  ...dataRegister,
                  displayName: event.target.value,
                })
              }
              value={dataRegister.displayName}
            />
            <input type="text" placeholder="Digite sua senha" />
            <input
              type="text"
              placeholder="Confirme sua senha"
              onChange={(event) =>
                setDataRegister({
                  ...dataRegister,
                  password: event.target.value,
                })
              }
              value={dataRegister.password}
            />
            <button type="submit">Cadastrar-se</button>
            <p>
              Já possui uma conta? <Link to="/">clique aqui</Link>
            </p>
          </form>
        </main>
      </div>
    </div>
  )
}
