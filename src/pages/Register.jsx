import React, { useEffect, useState } from "react";
import { Link, withRouter } from 'react-router-dom';
import Header from '../components/Header';
import FormRegister from '../components/Register';
import Swal from 'sweetalert2'
import config from '../config';

const API = `${config.api_url}users`;

const createUser = async(form) => {
  const payload = {
    method: 'POST',
    headers: { "Content-Type": "application/json","Authorization":'Bearer '+localStorage.getItem("SOLUTEX_TOKEN"), },
    body: JSON.stringify(form),
  };

  try {
    const result = await fetch(API, payload)
    const user = await result.json();
    if (user && user?.result?.ID_USERS) {
      localStorage.setItem('userEco', JSON.stringify(user.result.id))
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: "Usuario registrado con exito",
      })
      window.location = "/";
    }else{ 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `se ah presentado un error al guardar el usuario ${user?.status?.description}`,
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

const Register = () => {

  return(
  <>
  <Header />
  <div className="container">
    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-5 d-none d-lg-block bg-register-image" />
          <div className="col-lg-7">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Crear Cuenta</h1>
              </div>
              <FormRegister handleSumbit={createUser} />
              <hr />
              <div className="text-center">
                <Link className="small" to="/login">¿Ya tienes una cuenta? ¡Iniciar sesión!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default withRouter(Register);
