import {useReducer,useEffect} from 'react'
interface AuthState{
    validando:boolean;
    token:string | null;
    username:string;
    nombre:string;

}
const initialState:AuthState ={
    validando:true,
    token:null, //no esta autenticado
    username:'',
    nombre:'',

}
type LoginPayload = {
    username:string;
    nombre:string;
}
type AuthAction =
| {type:'logout'}
| {type:'login',payload:LoginPayload}
const authReducer = (state:AuthState,action:AuthAction):AuthState =>{
// el state no deberia modificarse
switch (action.type) {
    case 'logout':
        return{
            validando:false,
            token:null,
            nombre:'',
            username:'',
        }
        
        break;
    case 'login':
        //tambien podemos hacer const{nombre,username}=action.payload; para desestructurar ya si solo usar esos nombres
        return {
            validando:false,
            token:'abc123',
            nombre:action.payload.nombre,
            username:action.payload.username,
        }

    default:
        return state;
}
}


export const Login = () => {
   const [{validando,token,nombre}, dispatch] = useReducer(authReducer, initialState,)
   //en vez de state desestructuramos con {} para traer validando
   useEffect(() => {
       setTimeout( () => {
           dispatch({type:'logout'})
       },1500);
   }, []);
   const login =() =>{
       dispatch(
      {type:'login',
       payload:{
                nombre:'damian',
                username:'damipher'
       }})
   }
   if(validando){
       return (
           <>
           <h3>Login</h3>
        <div className="alert alert-info">
            Validando...
        </div>
           </>
       )
   }  
   return (
        <>
        <h3>Login</h3>
        {
            (token)
            ?<div className="alert alert-success">Autenticado como: {nombre}</div>
            :<div className="alert alert-danger">No autenticado</div>
        }
       
        {
            (token)
            ? <button
            className="btn btn-danger">Logout
            </button>
            : <button onClick={login}
            className="btn btn-primary">Login
            </button>
        }
       
       

        </>
    )
}
