import {useEffect,useState} from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
    const [usuario, setUsuario] = useState<Usuario[]>([])
    useEffect(() => {
     //llamado al API
    //  reqResApi.get('/users')
    reqResApi.get<ReqResListado>('/users')
     .then(resp=>{
         console.log(resp.data.data);
     })
     .catch(console.log);
    }, [])
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
            </table>
        </>
    )
}
