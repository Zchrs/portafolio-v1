import { Link } from "react-router-dom"
// import { useContext } from "react";
// import { AuthContext } from "../views/auth/AuthContext";
import { useSelector } from "react-redux";



import "../css/navDashboard.scss"
export const NavDashboard = () =>{
    // const { user: { name } } = useContext(AuthContext); con useContext
    const user = useSelector((state) => state.auth.user); // con redux

    return (
        <nav className="nav" >
            <div className="nav-avatar">
                <div className="nav-avatar__container">
                    <div className="nav-photo"></div>
                     {user ?
                    <p className="nav__p">{user.name}</p>
                    : false }
                </div>
            </div>
        <div className="nav-menu">
            
            <Link to={'/dashboard'}><i></i>Panel</Link>
            <Link to={'/dashboard/profile'}><i></i>Profile</Link>
            <Link to={'/dashboard/gallery'}><i></i>Gallery</Link>
            <Link to={'/dashboard/cruds'}><i></i>Cruds</Link>
            <Link to={'/dashboard/docs'}><i></i>Docs</Link>
          
        </div>
        </nav>
    )
}
