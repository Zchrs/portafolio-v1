import { Link } from "react-router-dom";
import "../css/footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>More About me</h3>
          <Link to={'about'}>About me</Link>
          <Link to={'skills'}>Skills</Link>
          </div>
        <div>
          <h3>More services</h3>
          <Link to={'portfolio'}>Portfolio</Link>
          <Link to={'services'}>Services</Link>
          </div>
        <div>
          <h3>Users</h3>
          <Link to={'/auth/register'}>Register</Link>
          <Link to={'/auth/login'}>Login</Link>
          </div>
        <div>
          <h3>Contact</h3>
          <Link>gustavocastrillondev@gmail.com</Link>
          <Link>Send me a message</Link>
          </div>
      </div> 
      <p className="footer__p">
        <strong>&copy; </strong> 
        Gustavo Castrillon Developer 2023
      </p>
    </footer>
  );
};
