import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";


const useTema = () => {
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
}

export default useTema