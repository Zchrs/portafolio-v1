import { Link } from 'react-router-dom'
import RegisterForm from '../../components/RegisterForm'

import '../../css/register.scss'
import { AuthRouter } from '../../router/AppRouter'
export const Register = () =>{
    return (
        <section className="register">
         <div className='register-left'>
          <div>
            <h2>Bienvenido</h2>
            <p>Regístrate ahora y prueba mi sistema.</p>
            <p>¿Ya tienes una cuenta?</p>
            <Link to={'/auth/login'}>Iniciar sesión</Link>
          </div>
         </div>
         <div className='register-right'>
            <RegisterForm />
         </div>
        </section>
    )
}
