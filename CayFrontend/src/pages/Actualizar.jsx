import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Actualizar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [material, setMaterial] = useState(null);

  const nombre = useRef();
  const cantidad = useRef();
  const deposito = useRef();
  const reutilizable = useRef();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/material/${id}`)
      .then(response => {
        setMaterial(response.data);
        nombre.current.value = response.data.nombre;
        cantidad.current.value = response.data.cantidad;
        deposito.current.value = response.data.deposito;
        reutilizable.current.checked = response.data.reutilizable;
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMaterial = {
      nombre: nombre.current.value,
      cantidad: cantidad.current.value,
      deposito: deposito.current.value,
      reutilizable: reutilizable.current.checked,
    };

    axios.put(`http://127.0.0.1:8000/api/material/${id}`, updatedMaterial)
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  if (!material) return <p>Cargando...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nombre} placeholder="Nombre" />
      <input type="number" ref={cantidad} placeholder="Cantidad" />
      <input type="text" ref={deposito} placeholder="Depósito" />
      <input type="checkbox" ref={reutilizable} /> Reutilizable
      <button type="submit">Actualizar</button>
    </form>
  );
}

export default Actualizar;
