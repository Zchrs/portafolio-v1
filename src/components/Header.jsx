import { Link, Outlet } from "react-router-dom";
import { Images } from "../assets/img/index";
import { Backend, routes } from "../contentBack/Backend";

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
  window.addEventListener("scroll", function () {
    let openAccountBtn = document.getElementById("open-account-btn");
    let demoAccountBtn = document.getElementById("demo-account-btn");

    let logo = document.getElementById("logo");
    let headers = document.getElementById("cabeza");
    let nav = document.querySelector(".nav");

    if (window.innerWidth > 950) {
      if (window.scrollY > 0) {
        headers.style.cssText = `box-shadow: #acd63967 1px 2px 5px;
          backdrop-filter: blur(20px);
          background: #3b3d3493;
          transition: ease .8s;
          
          `;
        nav.style.cssText = `transform: translateX(60px);`;
        logo.style.cssText = `
        transform: translateY(64px) 
        rotateY(360deg); width: 40px; 
        height: 100%;
        `;
        demoAccountBtn.style.cssText = `
        transform: translateY(60px); 
        transition: all ease .2s; 
        transition-delay: .2s;
        `;
        openAccountBtn.style.cssText = `
        transform: translateY(60px); 
        transition: all ease .2s; 
        transition-delay: .1s; 
        `;
      } else {
        headers.style.cssText = `box-shadow: #acd63967 0px 0px 0px;
          backdrop-filter: blur(0px);
          background: black;
          transition: ease .8s;
          display: flex;
          justify-content: space-between;
          `;
        demoAccountBtn.style.cssText = `transform: translateY(0px); transition: all ease .3s; transition-delay: .2s;`;
        openAccountBtn.style.cssText = `transform: translateY(0px); transition: all ease .3s; transition-delay: .1s;`;
        nav.style.cssText = `margin-left: 0px`;
        logo.style.cssText = `transform: translateY(-5px); width: 50px; height: 100%;`;
      }
    }
  });

  return (
    <header className="header" id="cabeza">
      <div className="header__sub-header">
        <Link to={"/"}>
          <div id="logo" className="logo">
            <img src={Images.gDevLogo} alt="" />
          </div>
        </Link>
        <div className="header__sub-nav">
          <ul>
            <li>
              <Link to={"/"}>
                <button>
                  <i>
                    <img src={Images.whatsappLogo} alt="" />
                  </i>
                  +57 302-849-2871
                </button>
              </Link>
            </li>
            {/* <li>
              <Link to={"/"}>ES</Link>
            </li> */}
            <li id="open-account-btn">
              <Link to={"/"}>
                <button>{Backend.textButtonsHome.registerBtn}</button>
              </Link>
            </li>
            <li id="demo-account-btn">
              <Link to={"/"}>
                <button>{Backend.textButtonsHome.loginBtn}</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr /> */}
      <nav>
        <div onClick={showHideMenu} id="logo" className="logo2">
          <img src={Images.gDevLogo} alt="" />
        </div>
        <div className="nav">
          <ul id="submenu">
            {routes.map(({ id, name }) => (
              <li key={id}>
                <Link to={id}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
