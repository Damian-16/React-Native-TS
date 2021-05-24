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
type AuthAction ={type:'logout'};

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

    default:
        return state;
}
}


export const Login = () => {
   const [{validando}, dispatch] = useReducer(authReducer, initialState,)
   //en vez de state desestructuramos con {} para traer validando
   useEffect(() => {
       setTimeout( () => {
           dispatch({type:'logout'})
       },1500);
   }, []);
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
       
        <div className="alert alert-danger">
            No autenticado
        </div>
        <div className="alert alert-success">
            Autenticado
        </div>
        <button
        className="btn btn-primary">Login
        </button>
        <button
        className="btn btn-danger">Logout
        </button>

        </>
    )
}
