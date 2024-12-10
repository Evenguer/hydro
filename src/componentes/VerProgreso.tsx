// src/componentes/VerProgreso.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerRegistrosAgua, obtenerMetaDiaria, registrarAgua, borrarRegistrosAgua } from '../controlador/aguaController';
import { Usuario, RegistroAgua, MetaDiaria } from '../types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../estilos/VerProgreso.css'; // Asegúrate de crear este archivo CSS

const VerProgreso: React.FC = () => {
  const [registros, setRegistros] = useState<RegistroAgua[]>([]);
  const [meta, setMeta] = useState<MetaDiaria | null>(null);
  const usuarioActual: Usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
  const navigate = useNavigate();

  useEffect(() => {
    setRegistros(obtenerRegistrosAgua(usuarioActual.id));
    setMeta(obtenerMetaDiaria(usuarioActual.id));
  }, [usuarioActual.id]);

  const totalAguaTomada = registros.reduce((total, registro) => total + registro.cantidad, 0);
  const porcentaje = meta ? (totalAguaTomada / meta.cantidad) * 100 : 0;

  const handleRestablecerProgreso = () => {
    borrarRegistrosAgua(usuarioActual.id);
    setRegistros([]);
  };

  return (
    <div className="ver-progreso">
      <h1>Progreso Diario</h1>
      <div className="tarjeta-progreso">
        <CircularProgressbar
          value={porcentaje}
          text={`${Math.round(porcentaje)}%`}
          styles={buildStyles({
            textColor: '#003366',
            pathColor: '#003366',
            trailColor: '#d6d6d6',
          })}
        />
        <div className="detalles-progreso">
          <p>Meta diaria: {meta ? `${meta.cantidad} litros` : 'No establecida'}</p>
          <p>Total agua tomada: {totalAguaTomada} litros</p>
          {meta && totalAguaTomada >= meta.cantidad ? (
            <p>¡Felicidades! Has alcanzado tu meta diaria.</p>
          ) : (
            <p>Sigue adelante, ¡puedes lograrlo!</p>
          )}
        </div>
      </div>
      <button onClick={() => navigate('/panel-principal')}>Regresar a la página principal</button>
      <button className="btn-restablecer" onClick={handleRestablecerProgreso}>Restablecer Progreso</button>
    </div>
  );
};

export default VerProgreso;