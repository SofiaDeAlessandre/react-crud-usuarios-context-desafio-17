import { useParams } from "react-router";
import useTitulo from "../hooks/useTitulo";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import useTema from "../hooks/useTema";

const UsuariosDetalle = () => {
  const { id } = useParams();

  const [usuarioDetalle, setUsuarioDetalle] = useState(null);
useTema()
  useEffect(() => {
    getOne(id);
  }, []);

  const getOne = async (id) => {
    const urlGetOne = import.meta.env.VITE_BACKEND + id;
    try {
      const res = await fetch(urlGetOne);

      if (!res.ok) {
        throw new Error("No se pudo obtener el usuario");
      }

      const data = await res.json();
      setUsuarioDetalle(data);
    } catch (error) {
      console.error(error);
    }
  };

  useTitulo("Detalle de usuario");
  return (
    <>
      <h1>Usuario detalle</h1>
      {usuarioDetalle ? (
        <>
          <h2>Nombre de usuario: {usuarioDetalle.nombre}</h2>
          <h2>Apellido de usuario: {usuarioDetalle.apellido} </h2>
          <p>Edad de usuario: {usuarioDetalle.edad}</p>
          <p>Puesto de usuario: {usuarioDetalle.puesto}</p>
          <img className="w-50 h-50" src={usuarioDetalle.foto}></img>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UsuariosDetalle;
