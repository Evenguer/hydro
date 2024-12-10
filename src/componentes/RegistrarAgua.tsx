// src/componentes/RegistrarAgua.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrarAgua, establecerMetaDiaria } from '../controlador/aguaController';
import { Usuario, RegistroAgua, MetaDiaria } from '../types';
import '../estilos/RegistrarAgua.css'; // Importa el archivo CSS

const RegistrarAgua: React.FC = () => {
  const [cantidad, setCantidad] = useState<number>(0);
  const [meta, setMeta] = useState<number>(0);
  const usuarioActual: Usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
  const navigate = useNavigate();

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

  const handleEstablecerMeta = () => {
    const nuevaMeta: MetaDiaria = {
      id: Date.now(),
      cantidad: meta,
      usuarioId: usuarioActual.id,
    };
    establecerMetaDiaria(nuevaMeta);
    alert('Meta diaria establecida');
  };

  return (
    <div className="registrar-agua">
      <div className="tarjeta">
        <h1>Registrar Agua</h1>
        <input
          type="number"
          placeholder="Cantidad en litros"
          value={cantidad}
          onChange={(e) => setCantidad(parseFloat(e.target.value))}
        />
        <button onClick={handleRegistrar}>Registrar</button>
      </div>
      <div className="tarjeta">
        <h1>Establecer Meta Diaria</h1>
        <input
          type="number"
          placeholder="Meta diaria en litros"
          value={meta}
          onChange={(e) => setMeta(parseFloat(e.target.value))}
        />
        <button onClick={handleEstablecerMeta}>Establecer Meta</button>
      </div>
      <button className="btn-regresar" onClick={() => navigate('/panel-principal')}>Regresar al Panel Principal</button>
    </div>
  );
};

export default RegistrarAgua;