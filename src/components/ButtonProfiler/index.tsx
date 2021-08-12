import './styles.scss'
import 'react-dropdown/style.css'

import { useState } from 'react'

export function Button({ ...props }) {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state)
  }

  let className = state ? '' : 'invisivel'

  return (
    <div id="option">
      <button className="rightButton">Perfil</button>
      <button className="leftButton" onClick={handleClick}>
        v
      </button>
      <button id="sair" className={className}>
        Sair
      </button>
    </div>
  )
}
