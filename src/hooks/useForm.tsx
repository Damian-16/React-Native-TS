import React from 'react'
import { useState } from 'react';

export const useForm = <T extends Object>(formulario:T) => {
    const [state, setState] = useState(formulario);
  
    // const[formulario,setFormulario]= useState({
    //     email:'test@test.com',
    //     password:'123456'
    // })
    const onChange =(value:string, campo: keyof T)=>{
        setState({
            ...state,
            [campo]:value// al ponerle[]a campo lo que estamos haciendo es decirle a js que lo compute como el valor que recibe de parametros
        })

    }
    return {
        ...state,
        formulario:state,
        onChange,
            
    }
}
