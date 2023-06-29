import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
// import { AuthContext } from "../views/auth/AuthContext"
// import { useContext } from "react"





export const PublicRoute = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    // const logged = user;
  
    const navigate = useNavigate();
  
    if (user) {
        //  navigate('/')
        return <Navigate to="/dashboard" replace />
    }
  
    return children;
  };

