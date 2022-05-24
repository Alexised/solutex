import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Operations from "../components/operations";
import Swal from "sweetalert2";
import config from "../config";

const API = `${config.api_url}`;
const editOperations = async(row) => {
  try {;
    const payload = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
    };
    const result = await fetch(`${config.api_url}operation`,payload)
    const operation = await result.json();

  } catch (error) {
    console.error('Error :(', error);
  }
};

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
              <div className="col-lg-12">
                <div className="p-5">
                <Operations operation={operation} editOperations={editOperations}/>

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
