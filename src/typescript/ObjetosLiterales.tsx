import React from 'react'
// type,class,interface
interface Persona{
    nombreCompleto:string;
    edad:number;
    direccion:Direccion
}
interface Direccion {
    pais:string;
    casaNo:number;
}
export const ObjetosLiterales = () => {

    // const persona:Persona = {
    //     nombreCompleto:'cloud',
    //     edad:28,
    //     direccion:{
    //         pais:'Canada',
    //         casaNo:615
    //     }
    // }
    const persona:Persona = {
        nombreCompleto:'cloud',
        edad:28,
        direccion:{
            pais:'Canada',
            casaNo:615
        }
      
    }
    return (
        <>
          <h3>Objetos Literales</h3>
          <code>
              <pre>
              {JSON.stringify(persona,null,2)}  
              </pre>
              </code>
          
        </>
    )
}
