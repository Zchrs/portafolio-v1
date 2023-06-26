
import { AuthContext } from "../views/auth/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { logged } from "../actions/auth";



export const PrivateRoute = ({ children }) =>{
    // const { user } =  useContext(AuthContext);
    const user = useSelector((state) => state.auth.user);

    if (!user) {
        return <Navigate to="/" />
    }
      return children;
}

