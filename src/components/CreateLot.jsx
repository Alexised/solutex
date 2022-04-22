import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const CreateLot = ({
  handleSumbit,
  product,
}) => {
  const [form, setForm] = useState([
    {
      name: "",
      availableQuantity: "",
      price: "",
      description: "",
      user: localStorage.getItem("id"),
    },
  ]);

  const handleInputChange = (evt) => {
    const data = [...form];
    const {
      target: { name, value },
    } = evt;
    switch (name) {
      case "name":
        data[0].name = value;
        break;
      case "availableQuantity":
        data[0].availableQuantity = value;
        break;
      case "price":
        data[0].price = value;
        break;
      case "description":
        data[0].description = value;
        break;
      default:
        break;
    }
    setForm(data);
  };

  const sendForm = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className="user" onSubmit={sendForm}>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="text"
            className="form-control form-control-user"
            id="name"
            placeholder="Nombre"
            name="name"
            value={form[0].name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control form-control-user"
            id="availableQuantity"
            placeholder="cantidad"
            name="availableQuantity"
            value={form[0].availableQuantity}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="number"
            className="form-control form-control-user"
            id="price"
            placeholder="precio"
            name="price"
            value={form[0].price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control form-control-user"
            id="description"
            placeholder="decripcion"
            name="description"
            value={form[0].description}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>

      <button type="submit" className="btn btn-primary btn-user btn-block">
        Registrar Lote
      </button>
    </form>
  );
};

export default CreateLot;
