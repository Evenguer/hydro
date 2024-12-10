// src/controlador/authController.ts
import { Usuario } from '../types';

const USUARIOS_KEY = 'usuarios';

export const registrarUsuario = (usuario: Usuario) => {
  const usuarios: Usuario[] = JSON.parse(localStorage.getItem(USUARIOS_KEY) || '[]');
  usuarios.push(usuario);
  localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
};

export const iniciarSesion = (email: string, password: string): Usuario | null => {
  const usuarios: Usuario[] = JSON.parse(localStorage.getItem(USUARIOS_KEY) || '[]');
  return usuarios.find(usuario => usuario.email === email && usuario.password === password) || null;
};