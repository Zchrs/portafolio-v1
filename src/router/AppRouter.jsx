import { HashRouter as Switch, Routes, Route, Navigate } from "react-router-dom";

import {
  // componente global
  // fin componente global
  HomeScreen,
  AboutScreen,
  ContactScreen,
  ServicesScreen,
  PortfolioScreen,
  SkillsScreen,
  AuthHome,
  Login,
  Register
} from "../routes/index";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../actions/auth";
import { useEffect } from "react";
import { Page404 } from "../components/Page404";



export const AppRouter = () => {

  useSelector((state) => state.auth.user);

  return (
    <Routes>
      <Route exact path="/*" element={<HomeScreen />} />
      <Route exact path="/about" element={<AboutScreen />} />
      <Route exact path="/services" element={<ServicesScreen />} />
      <Route exact path="/portfolio" element={<PortfolioScreen />} />
      <Route exact path="/skills" element={<SkillsScreen />} />
      <Route exact path="/contact" element={<ContactScreen />} />
      <Route path="/*" element={ <Page404 /> }></Route>
    </Routes>
  );
};

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  );
};
