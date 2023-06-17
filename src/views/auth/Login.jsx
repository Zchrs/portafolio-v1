import { Link } from "react-router-dom"
import { getFile } from "../../components/globalFunctions"
import '../../css/login.scss';

export const Login = () =>{
    return (
      <section className="login">

         <div className='login-left'>
          <div className='login-logo'>
          <img src={getFile('img', `logoPersonal`, 'png')} alt="" />
          </div>
          <div className='login-titles'>
            <div>
              <h2>Welcome</h2>
              <p>Iniciar sesión</p>
            </div>
            <div>
              <h3>¿Not have an account?</h3>
              <Link to={'/auth/register'}>Create account</Link>
            </div>
          </div>
         </div>

         <div className='login-right'>
            <div className="login-form">
              <form action="" method="post">
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="" />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="pass" id="" />
                </div>
              </form>
              <div className="button-container"><button type="submit">Login</button>
              <Link to={'/'}>Volver al inicio</Link>
              </div>
              
            </div>
         </div>
        </section>
    )
}
