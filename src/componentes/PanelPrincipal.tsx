// src/componentes/PanelPrincipal.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/PanelPrincipal.css';

const PanelPrincipal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="panel-principal">
      <h1>Panel Principal</h1>
      <button onClick={() => navigate('/registrar-agua')}>Registrar Agua</button>
      <button onClick={() => navigate('/ver-progreso')}>Ver Progreso</button>
    </div>
  );
};

export default PanelPrincal