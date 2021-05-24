import {useReducer} from 'react'

export const Login = () => {
    // const [state, dispatch] = useReducer(reducer, initialState, init)
    return (
        <>
        <h3>Login</h3>
        <div className="alert alert-info">
            Validando...
        </div>
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
