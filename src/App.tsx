import React from 'react'
// import { Contador } from './components/Contador'
import { ContadorConHook } from './components/ContadorConHook'
// import { Funciones } from './typescript/Funciones'
// import { ObjetosLiterales } from './typescript/ObjetosLiterales'
// import { TiposBasicos } from './typescript/TiposBasicos'

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a Typescript con React</h1>
      <hr></hr>
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      <ContadorConHook/>
    </div>
  )
}
export default App;
