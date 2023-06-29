// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../views/auth/AuthContext";
import { types } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/auth";

import "../css/headerdashboard.scss";

export const HeaderDashboard = () =>{

  const user = useSelector((state) => state.auth.user);
  // console.log(user);


    // const {
    //     user: { name },
    //     dispatch,
    //   } = useContext(AuthContext);
      const navigate = useNavigate();

    const dispatch = useDispatch();

      const backToHome = () =>{
        navigate('/')
      }
    
      // const { user } = useContext(AuthContext);
    
      const handleLogout = () => {
        dispatch(startLogout());
        navigate("/auth/login");
      };


    return (
        <header className="headdash">
          <div className="headdash-container">
              <div className="headdash-logo">
              <img src={getFile("img", `logoPersonal`, "png")} alt="" onClick={backToHome} />
              </div>
              <div className="headdash-btns">
              {user ?
          <div className="headdash-logged">
            <p>{user.name}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
         : false }
              </div>
          </div>
        </header>
    )
}
