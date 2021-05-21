import React from 'react'
const sumar = (a:number,b:number):number => {
    return a + b; 
}
const restar=(a:number,b:number):number[]=>{
    return [a,b]//esto devuelve la suma de los elementos del array x ej en este caso se ingresa 2 y 3 entonces da 23
}
export const Funciones = () => {
    return (
        <>
            <h3>Funciones</h3>
           <span> El resultado es:  {sumar(10,1)},{restar(2,3)}</span>
        </>
    )
}
