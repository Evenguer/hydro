// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import PanelPrincipal from './componentes/PanelPrincipal';
import RegistrarAgua from './componentes/RegistrarAgua';


const App: React.FC = () => {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    localStorage.removeItem('usuarioActual');
    navigate('/');
  };

  return (
    <div className="app-container">
      <button className="cerrar-sesion" onClick={handleCerrarSesion}>Cerrar Sesión</button>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/panel-principal" element={<PanelPrincipal />} />
          <Route path="/registrar-agua" element={<RegistrarAgua />} />
          <Route path="/ver-progreso" element={<VerProgreso />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;