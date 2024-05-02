import { useState } from 'react'
import Formulario from './formulario'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Iniciar sesión</h1>
      <div>
      <Formulario />
      </div>
    </>
  )
}

export default App
