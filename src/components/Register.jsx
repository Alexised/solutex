import React, { useState } from 'react';
import Swal from 'sweetalert2'
const Register = ({ handleSumbit }) => {
  const [form, setForm] = useState({
    id: "",
    email: "",
    password: "",
    role: "user",
    confirmPassword:"",
  });

  const handleInputChange = (evt) => {
    const data = form
    const { target: { name, value } } = evt;
    switch (name) {
      case "name":
        data.username = value;
        break
      case "email":
        data.email = value;
        break
      case "password":
        data.password = value;
        break
      case "confirmPassword":
          data.confirmPassword = value;
          break
      case "phone":
          data.phone = value;
          break
      case "lastName":
            data.last_name = value;
            break
      case "cc":
            data.id = value;
            break
      default:

    }
    // console.log(data)
    setForm(data);

  }

  const sendForm = (evt) => {
    evt.preventDefault();
    if(form.confirmPassword===form.password){
      handleSumbit(form);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "las contraseñas no coinciden",
      })
    }

  }

  return (
    <form className="user" onSubmit={sendForm}>
      <div className="form-group row">
      <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="text"
            className="form-control form-control-user"
            id="name"
            placeholder="Nombre de usuario"
            name="name"
            onChange={handleInputChange}
            required
          />

        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control form-control-user"
            id="lastName"
            placeholder="Apellido"
            name="lastName"
            onChange={handleInputChange}
          />
        </div>
      </div>
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
      <div className="form-group row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <input
          type="number"
          className="form-control form-control-user"
          id="phone"
          placeholder="Telefono"
          name="phone"
          onChange={handleInputChange}
        />
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
        <input
          type="number"
          className="form-control form-control-user"
          id="cc"
          placeholder="Cedula"
          name="cc"
          onChange={handleInputChange}
          required
        />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="password"
            className="form-control form-control-user"
            id="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="password"
            className="form-control form-control-user"
            id="confirmPassword"
            placeholder="confirme Password"
            name="confirmPassword"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-user btn-block">
        Registrarse
      </button>
    </form>
  );
}

export default Register;
