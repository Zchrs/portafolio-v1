import React, { useEffect, useState } from 'react';

export const TypeWriter = ({ text }) => {
  const [charactersWritten, setCharactersWritten] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let arr = text.split('');
      let i = 0;

      let interval = setInterval(() => {
        if (i === arr.length - 1) {
          document.getElementById('titulo').innerHTML += arr[i];
          clearInterval(interval);
        } else {
          if (arr[i] === ' ') {
            document.getElementById('titulo').innerHTML += arr[i];
            document.getElementById('titulo').innerHTML += arr[i + 1];
            i += 2;
          } else {
            document.getElementById('titulo').innerHTML += arr[i];
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
    <p id="titulo" ></p>
  );
};