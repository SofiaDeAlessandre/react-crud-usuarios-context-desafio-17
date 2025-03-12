import Formulario from "./components/Formulario";
import ListadoUsuarios from "./components/ListadoUsuarios";
import { useTheme } from "./contexts/ThemeContext";
import { useEffect } from "react";
const App = () => {
  const { isDarkMode } = useTheme(); 
  useEffect(() => {
    const body = document.body;
    
    // Cambiar fondo y color del texto según el tema
    if (isDarkMode) {
      body.style.backgroundColor = "#1e2939"; // Fondo oscuro
      body.style.color = "#FFF"; // Texto claro
    } else {
      body.style.backgroundColor = "#FFF"; // Fondo claro
      body.style.color = "#333"; // Texto oscuro
    }

    // Para aplicar transición suave
    body.style.transition = "background-color 0.3s, color 0.3s";
  }, [isDarkMode]);

  return (
    
<div style={{ background: isDarkMode ? '#1e2939' : '#FFF', color: isDarkMode ? '#FFF' : '#333', height: '100vh', transition: 'all 0.3s' }}>
      <h1 className="text-4xl my-5">CRUD Usuarios</h1>
      <hr />
      <Formulario />
      <ListadoUsuarios />
      </div>
  );
};

export default App;
