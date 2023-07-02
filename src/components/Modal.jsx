import { CheckSuccess } from "./CheckSuccess";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import "../css/modal.scss";



export const Modal = ({ title, subtitle, img }) => {

    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    useEffect(() => {
      if (seconds === 0) {
        window.location.href = import.meta.env.VITE_APP_API_LOGIN_URL;
      }
    }, [seconds]);
  

    return createPortal(

      <div className="modal" id="modal">
        <div className="modal-container">
          <div className="modal-content">
            <img src={getFile("img", `${img}`, "png")} alt="" />
            <div className="modal-group">
              <h2>{title}</h2>
            </div>
          </div>
          <CheckSuccess />
          <p> {subtitle} en <strong> {seconds}</strong> segundos... </p>
          <button >Close Modal</button>
        </div>
      </div>,
    document.getElementById("modal-container")
  );
};
