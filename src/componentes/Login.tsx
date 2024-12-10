// src/componentes/Login.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { iniciarSesion } from '../controlador/authController';
import '../estilos/Login.css'; // Importa el archivo CSS

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const usuario = iniciarSesion(email, password);
    if (usuario) {
      localStorage.setItem('usuarioActual', JSON.stringify(usuario));
      navigate('/panel-principal');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <p>¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
    </div>
  );
};

export default Login;