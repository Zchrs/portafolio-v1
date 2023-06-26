import { Routes, Route } from "react-router-dom";

import {
 Login,
 Register,
 AuthHome
} from "../routes/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startChecking } from "../actions/auth";


export const AuthRouter = () => {

  const dispatch = useDispatch();
  const {checking, name } = useSelector( state => state.auth );

  // if (checking) {
  //   return ( <h4>Cargando...</h4> )
  // }

  useEffect(() =>{
      dispatch(startChecking())
  }, [dispatch])
  console.log(checking);

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthHome />} >
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
      </Route> 
    </Routes>
  );
};