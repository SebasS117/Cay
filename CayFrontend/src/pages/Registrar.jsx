import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Registrar() {
  const [error, setError] = useState('');
  const nombre = useRef();
  const cantidad = useRef();
  const deposito = useRef();
  const reutilizable = useRef();
  const navigate = useNavigate();

  const validateData = () => {
    if (!nombre.current.value || !cantidad.current.value || !deposito.current.value) {
      setError('Todos los campos son obligatorios');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateData()) {
      return;
    }

    const data = {
      nombre: nombre.current.value,
      cantidad: cantidad.current.value,
      deposito: deposito.current.value,
      reutilizable: reutilizable.current.checked,
    };

    axios.post("http://127.0.0.1:8000/api/material/", data)
      .then(() => navigate("/"))
      .catch((error) => {
        console.log(error);
        setError('Error al registrar el material');
      });
  };

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} method="post">
        <input type="text" name="nombre" ref={nombre} placeholder="Ingrese nombre" />
        <input type="number" name="cantidad" ref={cantidad} placeholder="Ingrese cantidad" />
        <input type="text" name="deposito" ref={deposito} placeholder="Ingrese depósito" />
        <label>
          Reutilizable
          <input type="checkbox" name="reutilizable" ref={reutilizable} />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </>
  );
}

export default Registrar;
