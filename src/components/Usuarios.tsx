import {useEffect,useState,useRef} from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
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



    const renderItem = ({id,first_name,last_name,email,avatar}:Usuario )=>{
        return(
            <tr key={ id.toString() }>
                <td>
                    <img 
                    src={avatar} 
                    alt={first_name}
                    style={{
                        width: 35,
                        borderRadius: 100
                    }}/></td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }
    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>{
                    usuarios.map(usuario=>renderItem(usuario))
                    }</tbody>
            </table>
            <button 
            className="btn btn-primary"
            onClick={cargarUsuarios}
            >Siguientes</button>
        </>
    )
}
