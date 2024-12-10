// src/componentes/Registro.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrarUsuario } from '../controlador/authController';
import { Usuario } from '../types';
import '../estilos/Registro.css'; // Importa el archivo CSS

const Registro: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistro = () => {
    const nuevoUsuario: Usuario = {
      id: Date.now(),
      nombre,
      email,
      password,
    };
    registrarUsuario(nuevoUsuario);
    navigate('/');
  };

  return (
    <div className="registro-container">
      <h1>Registro</h1>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistro}>Registrarse</button>
    </div>
  );
};

export default Registro;