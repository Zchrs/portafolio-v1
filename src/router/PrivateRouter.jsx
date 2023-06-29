import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



export const PrivateRoute = ({ children }) =>{
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    if (!user) {
        // navigate('/')
        return <Navigate to="/" replace />
    }
      return children;
}

