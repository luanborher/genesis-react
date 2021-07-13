import "./styles.scss";

import { api } from "../../services/api";

const Teste = async () => {
  var response = await api.post('/users', 'dados')
  console.log(response)
}


export function Register() {
  return (
    <div id="page-register">
      <div className="painel-principal">
        <aside>wqewqe</aside>
        <main>
          <form>
            <h2>Genesis</h2>
            <input type="text" placeholder="Digite seu e-mail" />
            <input type="text" placeholder="Escolha um nome de usuário" />
            <input type="text" placeholder="Digite sua senha" />
            <input type="text" placeholder="Confirme sua senha" />
            <button type="submit">Cadastrar-se</button>
          </form>
        </main>
      </div>
    </div>
  );
}
