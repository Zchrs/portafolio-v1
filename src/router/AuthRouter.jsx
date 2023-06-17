import { HashRouter as Routes, Route } from "react-router-dom";

import {
 Login,
 Register,
 AuthHome
} from "../routes/index";
import AuthLayout from "../layouts/AuthLayout";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthHome />} >
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
      </Route> 
    </Routes>
  );
};