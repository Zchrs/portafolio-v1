
import {
  // componente global
  Header,
  Footer,
  Lateral,
  HomeScreen,
  ServicesScreen,
  Login,
  Register,
  // fin componente global
} from "../routes/index";
import { HashRouter as Router, Routes, Route, Outlet, HashRouter } from "react-router-dom";
import { AppRouter } from "../router/AppRouter";
import "../css/layout.scss";
import AuthApp from "./AuthLayout";


let contador = 0;

export const Layout = () => {
  window.addEventListener("scroll", function () {
    let header = document.getElementById("headerLayout");
    if (window.innerWidth > 900) {
      if (window.scrollY > 0) {
        header.style.cssText = `
        transform: translateY(-66px);
        transition: all ease .5s;
      `;
        contador = 1;
      } else {
        header.style.cssText = `
        transform: translateY(0px);
        transition: all ease .5s;
      `;
        contador = 0;
      }
    }
  });

  return (
        <div className="layout">
        <header id="headerLayout" className="layout__header">
          <Header />
        </header>
        <section className="layout__container">
          <nav className="layout__nav">
            <Lateral />
          </nav>
          <div className="layout__contain">
            <AppRouter />
          </div>
        </section>
        <footer className="layout__footer">
          <Footer />
        </footer>
      </div>
  );
};