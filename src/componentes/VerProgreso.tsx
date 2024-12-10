// src/componentes/VerProgreso.tsx
import React, { useState, useEffect } from 'react';
import { obtenerRegistrosAgua, obtenerMetaDiaria } from '../controlador/aguaController';
import { Usuario, RegistroAgua, MetaDiaria } from '../types';

const VerProgreso: React.FC = () => {
  const [registros, setRegistros] = useState<RegistroAgua[]>([]);
  const [meta, setMeta] = useState<MetaDiaria | null>(null);
  const usuarioActual: Usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');

  useEffect(() => {
    setRegistros(obtenerRegistrosAgua(usuarioActual.id));
    setMeta(obtenerMetaDiaria(usuarioActual.id));
  }, [usuarioActual.id]);

  const totalAguaTomada = registros.reduce((total, registro) => total + registro.cantidad, 0);

  return (
    <div className="ver-progreso">
      <h1>Progreso Diario</h1>
      <p>Meta diaria: {meta ? `${meta.cantidad} litros` : 'No establecida'}</p>
      <p>Total agua tomada: {totalAguaTomada} litros</p>
      {meta && totalAguaTomada >= meta.cantidad ? (
        <p>¡Felicidades! Has alcanzado tu meta diaria.</p>
      ) : (
        <p>Sigue adelante, ¡puedes lograrlo!</p>
      )}
    </div>
  );
};

export default VerProgreso;