// src/controlador/aguaController.ts
import { RegistroAgua, MetaDiaria } from '../types';

const REGISTROS_AGUA_KEY = 'registrosAgua';
const METAS_DIARIAS_KEY = 'metasDiarias';

export const registrarAgua = (registro: RegistroAgua) => {
  const registros: RegistroAgua[] = JSON.parse(localStorage.getItem(REGISTROS_AGUA_KEY) || '[]');
  registros.push(registro);
  localStorage.setItem(REGISTROS_AGUA_KEY, JSON.stringify(registros));
};

export const obtenerRegistrosAgua = (usuarioId: number): RegistroAgua[] => {
  const registros: RegistroAgua[] = JSON.parse(localStorage.getItem(REGISTROS_AGUA_KEY) || '[]');
  return registros.filter(registro => registro.usuarioId === usuarioId);
};

export const establecerMetaDiaria = (meta: MetaDiaria) => {
  const metas: MetaDiaria[] = JSON.parse(localStorage.getItem(METAS_DIARIAS_KEY) || '[]');
  const metaExistente = metas.find(m => m.usuarioId === meta.usuarioId);
  if (metaExistente) {
    metaExistente.cantidad = meta.cantidad;
  } else {
    metas.push(meta);
  }
  localStorage.setItem(METAS_DIARIAS_KEY, JSON.stringify(metas));
};

export const obtenerMetaDiaria = (usuarioId: number): MetaDiaria | null => {
  const metas: MetaDiaria[] = JSON.parse(localStorage.getItem(METAS_DIARIAS_KEY) || '[]');
  return metas.find(meta => meta.usuarioId === usuarioId) || null;
};

export const borrarRegistrosAgua = (usuarioId: number) => {
  const registros: RegistroAgua[] = JSON.parse(localStorage.getItem(REGISTROS_AGUA_KEY) || '[]');
  const registrosFiltrados = registros.filter(registro => registro.usuarioId !== usuarioId);
  localStorage.setItem(REGISTROS_AGUA_KEY, JSON.stringify(registrosFiltrados));
};