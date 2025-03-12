import useTitulo from "../hooks/useTitulo";
import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import useTema from "../hooks/useTema";



const NoEncontrado = () => {
  useTitulo("No Encontrado");
  useTema()
  return <div
  style={{
    background: isDarkMode ? '#1e2939' : '#FFF',
    color: isDarkMode ? '#FFF' : '#333',
    height: '100vh',
    transition: 'all 0.3s',
  }}
>
  <div>No encontrado</div>
</div>;
};

export default NoEncontrado;


