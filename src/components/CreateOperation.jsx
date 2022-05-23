import React, { useState } from "react";
import Swal from "sweetalert2";
const CreateOperation = ({ handleSumbit }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  const handleInputChange = (evt) => {
    const data = form;
    const {
      target: { name, value },
    } = evt;
    switch (name) {
      case "name":
        data.name = value;
        break;
      case "price":
        data.price = value;
        break;
      default:
    }
    // console.log(data)
    setForm(data);
  };

  const sendForm = (evt) => {
    evt.preventDefault();
    handleSumbit(form);
  };

  return (
    <form className="user" onSubmit={sendForm}>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="text"
            className="form-control form-control-user"
            id="name"
            placeholder="nombre operacion"
            name="name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control form-control-user"
            id="price"
            placeholder="precio operacion"
            name="price"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-user btn-block">
        Crear
      </button>
    </form>
  );
};

export default CreateOperation;
