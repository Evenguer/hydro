// src/componentes/RegistrarAgua.tsx
import React, { useState } from 'react';
import registrarAgua from '../controlador/aguaController';
import { Usuario, RegistroAgua } from '../types';

const RegistrarAgua: React.FC = () => {
  const [cantidad, setCantidad] = useState<number>(0);
  const usuarioActual: Usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');

  const handleRegistrar = () => {
    const nuevoRegistro: RegistroAgua = {
      id: Date.now(),
      cantidad,
      fecha: new Date().toISOString(),
      usuarioId: usuarioActual.id,
    };
    registrarAgua(nuevoRegistro);
    setCantidad(0);
    alert('Registro de agua guardado');
  };

  return (
    <div className="registrar-agua">
      <h1>Registrar Agua</h1>
      <input
        type="number"
        placeholder="Cantidad en litros"
        value={cantidad}
        onChange={(e) => setCantidad(parseFloat(e.target.value))}
      />
      <button onClick={handleRegistrar}>Registrar</button>
    </div>
  );
};

export default RegistrarAgua;