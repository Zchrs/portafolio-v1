
import { Link, useNavigate } from "react-router-dom";
import { Backend, routes } from "../contentBack/Backend";
import React, {useContext, useEffect} from "react";
import { AuthContext } from "../views/auth/AuthContext";
import { types } from "../types/types";

import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../actions/userActions";

import "../css/header.scss";


let contadorMenu = 0;

function showHideMenu() {
  let subMenu = document.getElementById("submenu");
  if (contadorMenu == 0 && window.innerWidth <= 950) {
    subMenu.style.cssText = `height: 100vh;`;
    contadorMenu = 1;
  } else {
    subMenu.style.cssText = `height: 0vh;`;
    contadorMenu = 0;
  }
}
export const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleLogOut = () => {
    dispatch({
      type: types.authLogout,
    });
    navigate("/auth/login");
  };


  // const {
  //   user: { name },
  //   dispatch,
  // } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const { user } = useContext(AuthContext);

  // const handleLogout = () => {
  //   dispatch({
  //     type: types.logout,
  //   });
  //   navigate("/auth/login");
  // };

  // window.addEventListener("scroll", function () {
  //   let phoneNumber = document.getElementById("phone-number");
  //   let openAccountBtn = document.getElementById("open-account-btn");
  //   let demoAccountBtn = document.getElementById("demo-account-btn");

  //   let logo = document.getElementById("logo");
  //   let headers = document.getElementById("cabeza");
  //   let nav = document.querySelector(".nav");

  //   if (window.innerWidth > 950) {
  //     if (window.scrollY > 0) {
  //       headers.style.cssText = `
  //       box-shadow: #ff4f6f62 1px 2px 5px;
  //       transition: ease .8s;
  //         `;
  //       nav.style.cssText = `transform: translateX(50px);`;
  //       logo.style.cssText = `
  //       transition: all ease .2s; 
  //       transform: translateY(65px);
  //       position: absolute; 
  //       rotateY(360deg); 
  //       width: 40px;
  //       height: 40px; 
  //       z-index: 9999;
  //       height: 100%;
  //       `;
  //       demoAccountBtn.style.cssText = `
  //       right: 10px;
  //       position: absolute;
  //       transform: translateY(60px); 
  //       transition: all ease .2s; 
  //       transition-delay: .2s;
  //       z-index: 9999;
  //       `;
  //       openAccountBtn.style.cssText = `
  //       right: 100px;
  //       position: absolute;
  //       transform: translateY(60px); 
  //       transition: all ease .2s; 
  //       transition-delay: .1s; 
  //       z-index: 9999;

  //       `;
  //       phoneNumber.style.cssText = `
  //       opacity: 0;
  //       `;
  //     } else {
  //       headers.style.cssText = `
  //         transition: ease .8s;
  //         display: flex;
  //         justify-content: space-between;
  //         `;
  //       demoAccountBtn.style.cssText = `
  //       transform: translateY(0px); 
  //       transition: 
  //       all ease .3s; 
  //       transition-delay: .2s;`;
  //       openAccountBtn.style.cssText = `
  //       transform: translateY(0px); 
  //       transition: 
  //       all ease .3s; 
  //       transition-delay: .1s;`;
  //       nav.style.cssText = `margin-left: 0px`;
  //       logo.style.cssText = `
  //       transform: translateY(0px); 
  //       rotateY(360deg); 
  //       width: 50px; 
  //       height: 50px; 
  //       position: relative;
  //       `;
  //       phoneNumber.style.cssText = `opacity: 1;`;
  //     }
  //   }
  // });

  // const {
  //   user: { name },
  //   dispatch,
  // } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const { user } = useContext(AuthContext);

  // const handleLogout = () => {
  //   dispatch({
  //     type: types.logout,
  //   });
  //   navigate("/auth/login");
  // };

  useEffect(() => {
    const handleScroll = () => {
      let phoneNumber = document.getElementById("phone-number");
      let openAccountBtn = document.getElementById("open-account-btn");
      let demoAccountBtn = document.getElementById("demo-account-btn");

      let logo = document.getElementById("logo");
      let headers = document.getElementById("cabeza");
      let nav = document.querySelector(".nav");

      if (window.innerWidth > 950) {
        if (window.scrollY > 0) {
          headers.style.cssText = `
            box-shadow: #ff4f6f62 1px 2px 5px;
            transition: ease .8s;
          `;
          nav.style.cssText = `transform: translateX(50px);`;
          logo.style.cssText = `
            transition: all ease .2s; 
            transform: translateY(65px);
            position: absolute; 
            rotateY(360deg); 
            width: 40px;
            height: 40px; 
            z-index: 9999;
            height: 100%;
          `;
          demoAccountBtn.style.cssText = `
            right: 10px;
            position: absolute;
            transform: translateY(60px); 
            transition: all ease .2s; 
            transition-delay: .2s;
            z-index: 9999;
          `;
          openAccountBtn.style.cssText = `
            right: 100px;
            position: absolute;
            transform: translateY(60px); 
            transition: all ease .2s; 
            transition-delay: .1s; 
            z-index: 9999;
          `;
          phoneNumber.style.cssText = `
            opacity: 0;
          `;
        } else {
          headers.style.cssText = `
            transition: ease .8s;
            display: flex;
            justify-content: space-between;
          `;
          demoAccountBtn.style.cssText = `
            transform: translateY(0px); 
            transition: all ease .3s; 
            transition-delay: .2s;
          `;
          openAccountBtn.style.cssText = `
            transform: translateY(0px); 
            transition: all ease .3s; 
            transition-delay: .1s;
          `;
          nav.style.cssText = `margin-left: 0px`;
          logo.style.cssText = `
            transform: translateY(0px); 
            rotateY(360deg); 
            width: 50px; 
            height: 50px; 
            position: relative;
          `;
          phoneNumber.style.cssText = `opacity: 1;`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" id="cabeza">
      <div className="header__sub-header">
        <Link className="logo" to={"/"}>
          <div id="logo">
            <img src={getFile("img", `logoPersonal`, "png")} alt="" />
          </div>
        </Link>
        <div className="header__sub-nav">
          <ul>
            <li id="phone-number">
              <Link to={"/"}>
                <button>
                  <i>
                    <img src={getFile("img", `whatsapp-logo`, "svg")} alt="" />
                  </i>
                  +57 302-849-2871
                </button>
              </Link>
            </li>
            {/* <li>
              <Link to={"/"}>ES</Link>
            </li> */}
            <li id="open-account-btn">
              {!user ?
              <Link to={"auth/register"}>
                <button>{Backend.textButtonsHome.registerBtn}</button>
              </Link>
              : false } 
            </li>
            <li id="demo-account-btn">
              {!user ?
              <Link to={"auth/login"}>
                <button>{Backend.textButtonsHome.loginBtn}</button>
              </Link>
               : false } 
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <div onClick={showHideMenu} id="logo" className="logo2">
          <img src={getFile("img", `logoPersonal`, "png")} alt="" />
        </div>
        <div className="nav">
          <ul id="submenu">
            {routes.map(({ id, name }) => (
              <li onClick={showHideMenu} key={id}>
                <Link to={id}>{name}</Link>
              </li>
            ))}
          {user ?
            <li>
              <Link to={'/dashboard'}>Dashboard</Link>
            </li>
         : false }
          </ul>
        </div>
        {user ?
           <div className="user-logged">
            <p>{user.name}</p>
            <button onClick={handleLogOut}>Logout</button>
          </div>
         : false }
      </nav>
    </header>
  );
};
