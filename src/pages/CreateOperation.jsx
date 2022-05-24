import React, { useEffect, useState } from "react";
import { Link, withRouter } from 'react-router-dom';
import Header from '../components/Header';
import FormCreateOperation from '../components/CreateOperation';
import Swal from 'sweetalert2'
import config from '../config';

const API = `${config.api_url}operation`;

const createOperation = async(form) => {
  const payload = {
    method: 'POST',
    headers: { "Content-Type": "application/json","Authorization":'Bearer '+localStorage.getItem("SOLUTEX_TOKEN"), },
    body: JSON.stringify(form),
  };

  try {
    const result = await fetch(API, payload)
    const operation = await result.json();
    if (operation?.status?.code === "SUCCESS") {
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: "operacion registrada con exito",
      })
      window.location = "/createoperation";
    }else{ 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `se ah presentado un error al guardar la operacion`,
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
const CreateOperation = () => {
  useEffect(() => {
    // if(localStorage.getItem("SOLUTEX_TOKEN")==null){
    //   window.location.href =window.location.origin;
    // }
  }, []);
  return(
  <>
  <Header />
  <div className="container">
    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-5 d-none d-lg-block bg-login-image" />
          <div className="col-lg-7">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Crear operacion</h1>
              </div>
              <FormCreateOperation handleSumbit={createOperation}/>
              <hr />
              <div className="text-center">
                <Link className="small" to="/operation">ver las operaciones que existen </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default withRouter(CreateOperation);
