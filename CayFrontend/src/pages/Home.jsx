import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';


function Home() {
  const[data, setData] = useState([]);

  useEffect(() =>{
    axios.get("http://127.0.0.1:8000/api/material/").then((response) =>{
      console.log(response),
      setData(response.data)
    }).catch((error)=>{
      console.log("Error en la solicitud",error);
    })
  },[])
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ingreso de Residuos</h1>

      <Link to="/registrar" className="mb-2 inline-block mr-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Registrar
        </button>
      </Link>

      <Link to="/delete" className="mb-2 inline-block mr-5">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Eliminar
        </button>
      </Link>

      <Link to="/update" className="mb-2 inline-block mr-5">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Actualizar
        </button>
      </Link>

      <table className="table-auto w-full mt-4 border bg-[aliceblue]">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Deposito</th>
            <th className="px-4 py-2">Reutilizable</th>
          </tr>
        </thead>
        <tbody>
          {data.map((material) => (
            <tr key={user.id}>
              <td className="px-4 py-2">{material.id}</td>
              <td className="px-4 py-2">{material.nombre}</td>
              <td className="px-4 py-2">{material.deposito}</td>
              <td className="px-4 py-2">{material.reutilizable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
