import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Eliminar() {
  const idRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = idRef.current.value;

    axios.delete(`http://127.0.0.1:8000/api/material/${id}`)
      .then(() => {
        alert("Material eliminado con éxito");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={idRef} placeholder="ID del Material" />
      <button type="submit">Eliminar</button>
    </form>
  );
}

export default Eliminar;
