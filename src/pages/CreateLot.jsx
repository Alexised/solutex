import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import FormLot from "../components/CreateLot";
import Swal from "sweetalert2";
import config from "../config";

const API = `${config.api_url}/createlot`;

const CreateLot = (props) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div
                className="col-lg-5 d-none d-lg-block bg-register-image"
              />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Crear lote</h1>
                  </div>
                  <FormLot product={props} />
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(CreateLot);
