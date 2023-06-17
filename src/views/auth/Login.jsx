import { Link } from "react-router-dom"

export const Login = () =>{
    return (
        <section className="login">
          <h1>Login</h1>
          <Link to={'/auth/register'}>Crear cuenta</Link>
        </section>
    )
}
