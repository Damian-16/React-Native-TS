import React from 'react'

export const TiposBasicos = () => {
    let nombre:string | number  = 'damian';
    nombre=123;
    const nombre2:string='nicolas';
    const edad = 35;
    const estaActivo:boolean=true;

    const poderes:string[] = ['fuego','aire','agua','tierra'];
    // poderes.push(1);//no  es string no se añade
    // poderes.push('rayo');
    // poderes.push(true);no  es string no se añade


    return (
        <>
           <h3>Tipos Basicos</h3> 
           {nombre},{edad},{(estaActivo)?'activo':'no acitvo'}
        <br/>
        {poderes.join(', ')}
        </>
    )
}
