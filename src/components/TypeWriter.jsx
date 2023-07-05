import React, { useEffect, useState } from 'react';
import "../css/globals.scss";

export const TypeWriter = ({ text }) => {
  const [charactersWritten, setCharactersWritten] = useState(0);
  
  useEffect(() => {
    let titulo = document.getElementById('titulo');
    const timeout = setTimeout(() => {
      let arr = text.split('');
      let i = 0;

      let interval = setInterval(() => {
        if (i === arr.length - 1) {
          titulo.innerHTML += arr[i];
          clearInterval(interval);
        } else {
          if (arr[i] === ' ') {
            titulo.innerHTML += arr[i];
            titulo.innerHTML += arr[i + 1];
            i += 2;
          } else {
            titulo.innerHTML += arr[i];
            i++;
          }
        }

        setCharactersWritten(i);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }, 7000);

    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    
    <p className='home__p' id="titulo"></p>
    
  );
};