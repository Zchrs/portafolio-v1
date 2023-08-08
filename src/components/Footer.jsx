import { NavLink } from "react-router-dom";
import "../css/footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>More About me</h3>
          <NavLink className={({isActive}) => `${ isActive ? 'active' : '' }`} to={'about'}>About me</NavLink>
          <NavLink to={'skills'}>Skills</NavLink>
          </div>
        <div>
          <h3>More services</h3>
          <NavLink to={'portfolio'}>Portfolio</NavLink>
          <NavLink to={'services'}>Services</NavLink>
          </div>
        <div>
          <h3>Users</h3>
          <NavLink to={'/auth/register'}>Register</NavLink>
          <NavLink to={'/auth/login'}>Login</NavLink>
          </div>
        <div>
          <h3>Contact</h3>
          <p>gustavocastrillondev@gmail.com</p>
          <NavLink to={'contact'}>Send me a message</NavLink>
          </div>
      </div> 
      <p className="footer__p">
        <strong>&copy; </strong> 
        Gustavo Castrillon Developer 2023
      </p>
    </footer>
  );
};
