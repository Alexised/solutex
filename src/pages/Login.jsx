import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Swal from 'sweetalert2'
import API from '../config';
const TOKEN_KEY = "SOLUTEX_TOKEN";
const url = `${API.api_url}users/login`;
export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}


const Login = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
const handleInputChange = (evt) => {
  
  const data = form
  const { target: { name, value } } = evt;

  switch (name) {
    case "email":
      data.email = value;
      break
    case "password":
      data.password = value;
      break
    default:

  }
  // console.log(data)
  setForm(data);

}

const auth = async(form) => {
  const payload = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  };

  try {
    const result = await fetch(url, payload)
    const user = await result.json();
    if (user && user.result) {
      // localStorage.setItem('userEco', JSON.stringify(user))
      setToken(user.result)
      Swal.fire({
        icon: 'success',
        title: 'login',
        text: "Usuario logeado con exito",
      })
      props.history.push('/')
    }else{ 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "se ah presentado un error al iniciar session",
      })
      // console.error('Error :(', error);
    }

    // console.log(result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error,
    })
    // console.error('Error :(', error);
  }
}

const sendForm = (evt) => {
  evt.preventDefault();
  auth(form);

  

}

return (
  <>
    <Header />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Bienvenido de vuelta
                      </h1>
                    </div>
                    <form className="user"  onSubmit={sendForm}>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-user"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Ingrese su correo"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          className="form-control form-control-user"
                          id="password"
                          placeholder="Password"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Ingresar
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/register">
                        Crear Cuenta!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
export default Login;
