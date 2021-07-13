import "./styles.scss";

import { api } from "../../services/api";
import { useState } from "react";

interface DataRegister {
  email: string;
  user: string;
  password: string;
}

const Teste = async () => {
  var response = await api.post("/users", "dados");
  console.log(response);
};

export function Register() {
  const [dataRegister, setDataRegister] = useState<DataRegister>();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const SendDataOfRegister = () => {
    setDataRegister({ email: email, user: user, password: password });
  };

  return (
    <div id="page-register">
      <div className="painel-principal">
        <aside>wqewqe</aside>
        <main>
          <form onSubmit={SendDataOfRegister}>
            <h2>Genesis</h2>
            <input
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Escolha um nome de usuário"
              onChange={(event) => setUser(event.target.value)}
              value={user}
            />
            <input type="text" placeholder="Digite sua senha" />
            <input
              type="text"
              placeholder="Confirme sua senha"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <button type="submit">Cadastrar-se</button>
          </form>
        </main>
      </div>
    </div>
  );
}
