import { Link } from "react-router-dom"
import { AuthRouter } from "../../router/AppRouter"

const grid = {
    display: 'grid',
}

export const AuthHome = () =>{
    return (
        <section className="authhome" style={ grid }>
          <h1>Bienvenido</h1>

          <Link to={'/register'}>Crear cuenta</Link>
          <Link to={'/login'}>Iniciar sesión</Link>
          <Link to={'/'}>Volver al inicio</Link>

          <AuthRouter />
        </section>
    )
}
