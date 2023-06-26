import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../views/auth/AuthContext"
// import { useContext } from "react"





export const PublicRoute = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
  
    const navigate = useNavigate();
  
    if (user) {
        return <Navigate to="/" />
    }
  
    return children;
  };

