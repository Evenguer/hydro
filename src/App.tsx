// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import PanelPrincipal from './componentes/PanelPrincipal';
import RegistrarAgua from './componentes/RegistrarAgua';
import VerProgreso from './componentes/VerProgreso';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/panel-principal" element={<PanelPrincipal />} />
        <Route path="/registrar-agua" element={<RegistrarAgua />} />
        <Route path="/ver-progreso" element={<VerProgreso />} />
      </Routes>
    </Router>
  );
};

export default App;