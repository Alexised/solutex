import React, { useEffect, useState } from "react";
import { Link, withRouter } from 'react-router-dom';
import Header from '../components/Header';
import FormRecoveryPassword from '../components/RecoveryPassword';
import Swal from 'sweetalert2'
import config from '../config';

const API = `${config.api_url}users`;


const RecoveryPassword = () => {
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
                <h1 className="h4 text-gray-900 mb-4">Recuperar Contraseña</h1>
              </div>
              <FormRecoveryPassword />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default withRouter(RecoveryPassword);
