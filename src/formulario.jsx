import { useState } from 'react'
import './Formulario.css'

function Formulario() {
  const [count, setCount] = useState(0)

  const enviarCredenciales = () => {
    // ACÁ CONSUMIMOS Y HACEMOS LA VALIDACIÓN
    console.log('Botón presionado');
  };

  return (
    <>
      {/* Inputs */}
      <div>
        <input type="text" name="username" id="" placeholder='Usuario'/>
        <input type="text" name="password" id="" placeholder='Contraseña'/>
      </div>
      {/* Boton */}
      <button onClick={enviarCredenciales}>
        <span>Ingresar</span>
      </button>
    </>
  )
}

export default Formulario