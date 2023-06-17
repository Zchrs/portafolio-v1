import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";
import InputFlag from "./InputFlag";
import { Link } from "react-router-dom";

// import { useState } from "react";

const initialForm = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
};
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,300}$/;
  let regexPhone = /^\+[0-9]{1,3}\s?[0-9]{10}$/;
  const name = document.getElementById("name");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  if (!form.name) {
    name.style.cssText = "border: red 1px solid;";
    errors.name = "Field name are required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Name field have must only letters";
  } else {
    name.style.cssText = "border: #34B0BE 1px solid;";
  }

  if (!form.lastname) {
    lastName.style.cssText = "border: red 1px solid";
    errors.lastname = "Field last name are required";
  } else if (!regexName.test(form.lastname.trim())) {
    errors.lastname = "Last name field have must only letters";
  } else {
    lastName.style.cssText = "border: #34B0BE 1px solid;";
  }

  if (!form.email) {
    email.style.cssText = "border: red 1px solid";
    errors.email = "Field email are required";
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
  } else {
    phone.style.cssText = "border: #34B0BE 1px solid;";
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
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <InputFlag />
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
        {loading && <Loader />}
        {response && <Message />}
        <div className="button-container">
          <button type="submit">Send</button>
          <button type="reset">Reset</button>
        </div>
        <Link to={'/'}>Volver al inicio</Link>
      </form>
    </div>
  );
};

export default RegisterForm;
