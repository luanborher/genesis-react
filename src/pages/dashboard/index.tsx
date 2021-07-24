import './styles.scss'

import { Button } from '../../components/ButtonProfiler/index'
import Logotipo from '../../assets/images/logotipo.png'
import { RoomBlock } from './../../components/RoomBlock/index'

export function DashBoard() {
  return (
    <div id="page-boards">
      <header>
        <div className="container">
          <img src={Logotipo} alt="logotipo padrão do sistema" />

          <div>
            <button>+ Criar sala</button>
            <Button />
          </div>
        </div>
      </header>
      <main>
        <div className="list-block">
          <RoomBlock />
          <RoomBlock />
          <RoomBlock />
        </div>
      </main>
    </div>
  )
}
