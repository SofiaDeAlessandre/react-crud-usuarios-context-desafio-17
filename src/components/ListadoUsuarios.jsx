import { useContext } from "react";
import Fila from "./Fila";
import Spinner from "./Spinner";
import UsuariosContext from "../contexts/UsuariosContext";
import { useTheme } from "../contexts/ThemeContext";  // Importar el hook de tema

const ListadoUsuarios = () => {
  const { usuarios } = useContext(UsuariosContext);
  const { isDarkMode } = useTheme();  // Accede al estado del tema

  return (
    <div className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'}>
      {usuarios ? (
        <table className={`w-full text-sm text-left ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <thead className={`text-xs uppercase ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <tr>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Apellido</th>
              <th className="px-6 py-3">Edad</th>
              <th className="px-6 py-3">Puesto</th>
              <th className="px-6 py-3">Foto</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <Fila usuario={usuario} key={usuario.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ListadoUsuarios;
