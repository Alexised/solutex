import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import { DataGrid } from '@mui/x-data-grid';


const formatData = (data,setData) => {
let operation=[]
data.map((item) => {
  let aux = {
    id:item.ID_OPERATION,
    OPERATION_NAME: item.OPERATION_NAME,
    OPERATION_COST: item.OPERATION_COST,
  }
  operation.push(aux)
})
setData(operation)
}

const CreateLot = ({
  operation,
}) => {
  const [data, setData] = useState([
    
  ])
  
  const [form, setForm] = useState([
    {
      name: "",
      availableQuantity: "",
      price: "",
      description: "",
      user: localStorage.getItem("id"),
    },
  ]);

  const column = [
    { field: 'id', headerName: 'id', width: 60 },
    { field: 'OPERATION_NAME', headerName: 'Nombre', width: 120 },
    { field: 'OPERATION_COST', headerName: 'Costo', width: 120 },

  ]
  const columns = React.useMemo(
    () =>
    column.map((col) =>
        col.field === "rating" ? { ...col, filterable: false } : col
      ),
    [column]
  );

  useEffect(() => {
    if(operation.length > 0) {
    formatData(operation,setData)
    }

  }, [operation]);
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
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid checkboxSelection rows={data} columns={columns} />
    </div>
      </div>
      <button type="submit" className="btn btn-primary btn-user btn-block">
        Registrar Lote
      </button>
    </form>
  );
};

export default CreateLot;
