import { useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import UsuariosContext from "../contexts/UsuariosContext";
import { useTheme } from "../contexts/ThemeContext";

const Fila = ({ usuario }) => {
  const { borrarUsuario, setUsuarioAEditar } = useContext(UsuariosContext);
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();

  const handleEliminar = (id) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás revertirlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarUsuario(id);
        Swal.fire({
          title: "Eliminado!",
          text: "El usuario fue eliminado.",
          icon: "success",
        });
      }
    });
  };

  const handleEditar = (usuario) => {
    setUsuarioAEditar(usuario);
  };

  const handleVer = (id) => {
    navigate(`/usuarios/detalle/${id}`);
  };

  return (
    <tr className={`border-b ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
    <th className={`px-6 py-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{usuario.nombre}</th>
    <td className={`px-6 py-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{usuario.apellido}</td>
    <td className={`px-6 py-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{usuario.edad}</td>
    <td className={`px-6 py-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{usuario.puesto}</td>
    <td className={`px-6 py-4 w-40 h-40 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <img src={usuario.foto} alt={`${usuario.nombre} ${usuario.apellido}`} />
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleVer(usuario.id)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer mr-2"
        >
          Ver
        </button>
        <button
          onClick={() => handleEditar(usuario)}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 cursor-pointer mr-2"
        >
          Editar
        </button>
        <button
          onClick={() => handleEliminar(usuario.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer mr-2"
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default Fila;
