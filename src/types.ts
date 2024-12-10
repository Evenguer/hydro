// src/types.ts
export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
}

export interface RegistroAgua {
  id: number;
  cantidad: number; // Cantidad de agua en litros
  fecha: string;
  usuarioId: number;
}

export interface MetaDiaria {
  id: number;
  cantidad: number; // Meta diaria en litros
  usuarioId: number;
}