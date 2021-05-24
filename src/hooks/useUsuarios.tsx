import { useState, useRef, useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';



export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1);

    useEffect(() => {
     //llamado al API
    //  reqResApi.get('/users')
    cargarUsuarios();
    }, [])


    const cargarUsuarios= async()=>{
        const resp = await reqResApi.get<ReqResListado>('/users',{
            params:{
                page: paginaRef.current //referencia al valor que contiene
            }
        })

        if(resp.data.data.length >0){
            setUsuarios( resp.data.data);
            paginaRef.current ++;
        }else{
            alert('No hay mas registros');
        }
        setUsuarios(resp.data.data);
        // reqResApi.get<ReqResListado>('/users')
        
        // .then(resp=>{
        //     console.log(resp.data.data);
        //     setUsuarios(resp.data.data)
        // })
        // .catch(console.log);
    }
    return {
        usuarios,
        cargarUsuarios,
    }
}


