import { Link } from "react-router-dom"


export const Header = () =>{
    return (
        <header>
          <div className="logo"><img src="" alt="" /></div>
          <nav>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About Me</Link></li>
              <li><Link to={"/services"}>Services</Link></li>
              <li><Link to={"/portfolio"}>Portfolio</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
          </nav>
        </header>
    )
}
