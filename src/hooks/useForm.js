import axios from "axios";
import { useState } from "react";
import { helpHttp } from "../helpers/helperHttp";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogin } from "../actions/auth";
import { fetchWithoutToken } from "../helpers/fetch";



export const useForm = (initialForm, validateForm) => {
  // ---------------- variables de estado -----------------------
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [response, setResponse] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const dispatch = useDispatch();
  // ----------------- funciones form -------------------------

  const loadingActive = () => {
    setLoading(true);
    return async (dispatch) => {
      const res = await fetchWithoutToken(
        "auth/login",
        { email, password },
        "POST"
      );
      const body = await res.json();
      if (body.ok) {

        dispatch(
          loginSuccess({
            name: body.user.name,
          })
        );
      } 
      setLoading(false);
      
    };
  };
   

  const handleCountryChange = (label) => {
    setSelectedCountry(label);
    setForm({
      ...form,
      country: label,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm);
    

    if (Object.keys(errors).length === 0) {
      alert("Enviando...");
      setLoading(true);

      console.log('EJECUTANDO LA FUNCIÓN');

      helpHttp()
        .post("http://localhost:4000/api/auth/register", {
          body: Form,
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false, initialForm, window.location.reload()), 500);
        });
    } else {
      return;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors(validateForm);

    try {
      helpHttp()
      dispatch(startLogin( form.email, form.password ))
        .post("http://localhost:4000/api/auth/login", {
          body: form,
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false, initialForm, window.location.reload()), 500);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmits = async (e, label) => {
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
      return
    }
    setLoading(false);
    setModal(true)
  };

  return {
    form,
    errors,
    loading,
    response,
    modal,
    loadingActive,
    handleChange,
    handleBlur,
    handleSubmit,
    handleSubmits,
    handleLogin,
    handleCountryChange
  };
};
