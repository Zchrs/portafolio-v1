import { fetchWithToken, fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const res = await fetchWithoutToken(
      "auth/login",
      { email, password },
      "POST"
    );
    const body = await res.json();
    if (body.ok) {
      localStorage.setItem("token", body.user.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        loginSuccess({
          name: body.user.name,
        })
      );
    } else {
      alert(
        "No existe el usuario y/o email o constraseña incorrecto.",
        body.msg
      );
      dispatch(checkingFinish());
    }
  };
};

const loginSuccess = (user) => ({
  type: types.authLogin,
  payload: { user },
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });

const checkingFinish = () => ({ type: types.authCheckingFinish });

export const startChecking = () => {
  return async (dispatch) => {
    const res = await fetchWithToken("auth/renew");
    const body = await res.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        loginSuccess({
          name: body.name,
        })
      );
    } else {
      console.log(body.msg);
      dispatch(checkingFinish());
    }
    // debugger
  };
};


const startRegister = async (
  e, 
  name, 
  lastName, 
  email, 
  country, 
  phone,
  password,
  repassword,
  message
  ) => {
  e.preventDefault();
  setErrors(validateForm);
  setLoading(true);
  const finalForm = {
    ...form,
  }
  try {
    helpHttp()
    const response = await axios.post("https://backend-gcdev.vercel.app/api/auth/register", finalForm, {
    // const response = await axios.post("http://localhost:4000/api/auth/register", finalForm, {
     
      body: finalForm,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(response);
    setLoading(false);
        setResponse(true);
        setForm(initialForm);
        setTimeout(() => setResponse(false, initialForm, ));
        // setTimeout(() => setResponse(false, initialForm, window.location.href = "http://localhost:5173/#/auth/login" ), 200);
      
  } catch (error) {
    console.log(error);
  }
  setLoading(false);
  setModal(true)
};
