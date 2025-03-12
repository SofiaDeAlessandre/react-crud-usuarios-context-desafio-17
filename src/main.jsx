import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Rutas from "./routes/Rutas.jsx";
import NavBar from "./components/NavBar.jsx";
import { UsuariosProvider } from "./contexts/UsuariosContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <UsuariosProvider>
      <BrowserRouter>
        <NavBar />
        <div className="container mx-auto">
          <Rutas />
        </div>
      </BrowserRouter>
    </UsuariosProvider>
    </ThemeProvider>
  </StrictMode>
);
