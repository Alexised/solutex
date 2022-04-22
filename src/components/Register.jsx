import React, { useState } from 'react';
import Swal from 'sweetalert2'
const Register = ({ handleSumbit }) => {
  const [form, setForm] = useState({
    user: "",
    email: "",
    password: "",
    role: "user",
    confirmPassword:"",
  });

  const handleInputChange = (evt) => {
    const data = form
    const { target: { name, value } } = evt;
    switch (name) {
      case "user":
        data.user = value;
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
        <div className="col-sm-12 mb-3 mb-sm-0">
          <input
            type="text"
            className="form-control form-control-user"
            id="user"
            placeholder="User"
            name="user"
            onChange={handleInputChange}
            required
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
        Register Account
      </button>
    </form>
  );
}

export default Register;
