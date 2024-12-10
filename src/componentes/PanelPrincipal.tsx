// src/componentes/PanelPrincipal.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PanelPrincipal: React.FC = () => {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    localStorage.removeItem('usuarioActual');
    navigate('/');
  };

  return (
    <div className="panel-principal">
      <h1>Panel Principal</h1>
      <button onClick={() => navigate('/registrar-agua')}>Registrar Agua</button>
      <button onClick={() => navigate('/ver-progreso')}>Ver Progreso</button>
      <button className="btn-cerrar-sesion" onClick={handleCerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default PanelPrincipal;