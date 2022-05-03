import React, { useState } from "react";
import Swal from "sweetalert2";
const RecoveryPassword = ({ handleSumbit }) => {
  const [form, setForm] = useState({
    user: "",
    email: "",
    password: "",
    role: "user",
    confirmPassword: "",
  });

  const handleInputChange = (evt) => {
    const data = form;
    const {
      target: { value },
    } = evt;
        data.email = value;

    // console.log(data)
    setForm(data);
  };

  const sendForm = (evt) => {
    evt.preventDefault();
    if (form.confirmPassword === form.password) {
      handleSumbit(form);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "las contraseñas no coinciden",
      });
    }
  };

  return (
    <form className="user" onSubmit={sendForm}>
      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-user"
          id="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-user btn-block">
        Enviar Correo Recuperar Contraseña
      </button>
    </form>
  );
};
export default RecoveryPassword;