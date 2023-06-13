import { useState } from "react";
import { helpHttp } from "../helpers/helperHttp";

export const useForm = (initialForm, validateForm) => {
  // ---------------- variables de estado -----------------------
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // ----------------- funciones form -------------------------

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

      helpHttp()
        .post("https://formsubmit.co/ajax/642ec1d2a0dafeacb76e32a80b99615e", {
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
          setTimeout(() => setResponse(false, initialForm), 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
