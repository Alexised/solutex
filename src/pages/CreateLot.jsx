import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import FormLot from "../components/CreateLot";
import Swal from "sweetalert2";
import config from "../config";

const API = `${config.api_url}/`;


const getOperations = async(setOperation) => {
  try {;
    const result = await fetch(`${config.api_url}operation`)
    const select = await result.json();
    if(select.result){
    setOperation(select.result);
    } 
  } catch (error) {
    console.error('Error :(', error);
  }
};
const CreateLot = (props) => {
  const [operation, setOperation] = useState({});
  useEffect(() => {
    if(localStorage.getItem("SOLUTEX_TOKEN")==null){
      window.location.href =window.location.origin;
    }
    getOperations(setOperation)
  
  }, []);
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
                  <FormLot operation={operation} />
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
