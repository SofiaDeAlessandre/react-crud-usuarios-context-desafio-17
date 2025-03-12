import { Link, NavLink } from "react-router";
import { useTheme } from "../contexts/ThemeContext";

const NavBar = () => {

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-amber-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Educación IT
        </Link>
        <button onClick={toggleTheme} className="text-amber-50">Cambiar a modo {isDarkMode ? 'Claro' : 'Oscuro'}</button>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="text-white hover:text-gray-200">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/usuarios" className="text-white hover:text-gray-200">
              Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className="text-white hover:text-gray-200">
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="text-white hover:text-gray-200">
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
