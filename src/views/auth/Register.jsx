import { Link } from 'react-router-dom'
import RegisterForm from '../../components/RegisterForm'
import { getFile } from '../../components/globalFunctions'
import { Modal } from "../../components/Modal";
import { useForm } from "../../hooks/useForm";
import '../../css/register.scss'

export const Register = () =>{

  const { modal } = useForm();

    return (
        <section className="register">
         <div className='register-left'>
          <div className='register-logo'>
          <img src={getFile('img', `logoPersonal`, 'png')} alt="" />
          </div>
          <div className='register-titles'>
            <div>
              <h2>Welcome</h2>
              <p>Regístrate ahora y prueba mi sistema.</p>
            </div>
            <div>
              <h3>¿Already have an account?</h3>
              <Link to={'/auth/login'}>Login now</Link>
            </div>
          </div>
         </div>

         <div className='register-right'>
            <RegisterForm />
         </div>
         {modal && (
        <Modal
          title="Registrado correctamente"
          subtitle="Serás redirigido al login en..."
        />
      )}
        </section>
    )
}
