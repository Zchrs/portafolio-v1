import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";
import {Modal} from "./Modal";
import InputFlag from "./InputFlag";
import { Link } from "react-router-dom";


const initialForm = {
  name: "",
  lastname: "",
  email: "",
  country: "",
  phone: "",
  password: "",
  repassword: "",
  message: "",
};
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPass = /^@[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexMessage = /^.{1,300}$/;
  let regexPhone = /^\+[0-9]{1,3}\s?[0-9]{10}$/;
  const name = document.getElementById("name");
  const lastName = document.getElementById("lastname");
  const country = document.getElementById("country");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");
  const pass = document.getElementById("password");
  const repass = document.getElementById("repassword");

  if (!form.name) {
    name.style.cssText = "border: red 1px solid;";
    errors.name = "Field name is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Name field have must only letters";
  } else {
    name.style.cssText = "border: #34B0BE 1px solid;";
  }

  if (!form.lastname) {
    lastName.style.cssText = "border: red 1px solid";
    errors.lastname = "Field last name is required";
  } else if (!regexName.test(form.lastname.trim())) {
    errors.lastname = "Last name field have must only letters";
  } else {
    lastName.style.cssText = "border: #34B0BE 1px solid;";
  }

  if (!form.email) {
    email.style.cssText = "border: red 1px solid";
    errors.email = "Field email is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Email incorrect";
  } else {
    email.style.cssText = "border: #34B0BE 1px solid;";
  }

  if (!form.phone) {
    phone.style.cssText = "border: red 1px solid";
    errors.phone = "Field phone are required";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "Phone field have must only numbers";
  } else if (phone.value.length <= '12') {
    errors.phone = "Phone format incorrect";
  }else {
    phone.style.cssText = "border: #34B0BE 1px solid;";
  }


  if (!form.country) {
    // country.style.cssText = "border: red 1px solid";
    errors.country = "Field country is required";
  } else {
    // country.style.cssText = "border: #34B0BE 1px solid;";
  }


  if (!form.pass ) {
    pass.style.cssText = "border: red 1px solid";
    
  } else if (!regexPass.test(form.pass.trim())) {
    errors.pass = "pass field have must letters and numbers";
  } else {
    pass.style.cssText = "border: #34B0BE 1px solid;";
  }

  if (!form.repass ) {
    repass.style.cssText = "border: red 1px solid";
    
  } else if (!regexPass.test(form.pass.trim())) {
    errors.repass = "pass field have must letters and numbers";
  } else {
    repass.style.cssText = "border: #34B0BE 1px solid;";
  }

  if (pass.value !== repass.value) {
    repass.style.cssText = "border: red 1px solid";
    pass.style.cssText = "border: red 1px solid";
    errors.pass = "Passwords no matches"
  }else if (pass.value === '' && repass.value === '') {
    repass.style.cssText = "border: red 1px solid";
    pass.style.cssText = "border: red 1px solid";
    errors.pass = "Pass pass are required";
    errors.repass = "Please confirm repass";
  } else if (pass.value.length <= '6') {
    errors.pass = "Password must contain 7 or more characters";
  }
  else {
    pass.style.cssText = "border: #34B0BE 1px solid;";
    repass.style.cssText = "border: #34B0BE 1px solid;";
  }

  if (!form.message) {
    message.style.cssText = "border: red 1px solid";
    errors.message = "Field message are required";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "Limit characters exceded 300 max";
  } else {
    message.style.cssText = "border: #34B0BE 1px solid;";
  }

  return errors;
};

const RegisterForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    modal,
    handleChange,
    handleBlur,
    handleSubmit,
    handleSubmits,
    handleCountryChange
  } = useForm(initialForm, validationsForm);




  return (
    <div>
      <form onSubmit={handleSubmits}>
        <div className="group2">
          <label htmlFor="name">Name:</label>
          <input
            value={form.name}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="Type your name"
            required
          />
          {errors.name && <p className="warnings-form">{errors.name}</p>}
        </div>
        <div className="group2">
          <label htmlFor="lastname">Last Name:</label>
          <input
            value={form.lastname}
            onBlur={handleBlur}
            onChange={handleChange}
            form=".lastname"
            type="text"
            name="lastname"
            placeholder="Type your last name"
            id="lastname"
            required
          />
          {errors.lastname && <p className="warnings-form">{errors.lastname}</p>}
        </div>

        <div className="group2">
        <label htmlFor="country">Country:</label>
        <InputFlag
            id="country"
            onChange={handleCountryChange}
            onBlur={handleBlur}
          />

        {errors.country && <p className="warnings-form">{errors.country}</p>}
        </div>

        <div className="group2">
          <label htmlFor="email">Email:</label>
          <input
            value={form.email}
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Type your email"
            id="email"
            required
          />
          {errors.email && <p className="warnings-form">{errors.email}</p>}
        </div>
        <div className="group2">
          <label htmlFor="phone">Phone:</label>
          <input
            value={form.phone}
            onBlur={handleBlur}
            onChange={handleChange}
            type="tel"
            name="phone"
            placeholder="Type your phone ej: +1 6762358974"
            id="phone"
            required
          />
          {errors.phone && <p className="warnings-form">{errors.phone}</p>}
        </div>
        <div className="group2">
          <label htmlFor="password">Password</label>
          <input
            value={form.pass}
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Type your password"
            id="password"
            required
          />
          {errors.pass && <p className="warnings-form">{errors.pass}</p>}
        </div>
        <div className="group2">
          <label htmlFor="repassword">Confirm password</label>
          <input
            value={form.repass}
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            name="repassword"
            placeholder="Confirm password"
            id="repassword"
            required
          />
          {errors.repass && <p className="warnings-form">{errors.repass}</p>}
        </div>
        <div className="group">
          <label htmlFor="message">Message:</label>
          <textarea
            value={form.message}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Your message here"
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        {errors.message && <p className="warnings-form">{errors.message}</p>}
        
        {response && <Message />}
        <div className="button-container">
          <button type="submit">
            {loading ? <Loader /> : <p>Send</p> }
          </button>
          <button type="reset">Reset</button>
        </div>
        <Link to={'/'}>Volver al inicio</Link>
      </form>
      {modal && <Modal
            title="Registrado correctamente"
            subtitle="Redirigiendo"
          />}
    </div>
  );
};

export default RegisterForm;
