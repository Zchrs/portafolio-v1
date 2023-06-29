
import {
  // componente global
  Header,
  Footer,
  Lateral,
  // fin componente global
} from "../routes/index";
import { AppRouter } from "../router/AppRouter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startChecking } from "../actions/auth";


import "../css/layout.scss";




export const Layout = () => {


  useEffect(() => {
    let contador = 0;

    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(startChecking());
  }, [dispatch])

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
