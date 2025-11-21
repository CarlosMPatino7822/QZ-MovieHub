// comprobarUser.ts

import { cargarUsers, generarUsers } from "./generarUsers.js";
import { verifyPassword } from "./hashPassword.js";
import { User } from "../modelo/user.js";

const params = new URLSearchParams(window.location.search);
const cedula = params.get("cedula");
console.log("Nombre de la película o serie desde URL:", cedula);

//Devuelve la instancia `User` si las credenciales son válidas, o `null` si no.
 
export const comprobarUser = async (cedula: string): Promise<User | null> => {
  const users = await cargarUsers();

  // Ejemplo de recorrido: for...of
  for (const u of users) {
    if (u.cedula === cedula) {    
      return u;
    }
  }

  return null;
};
// Verificar si hay sesión activa
export const verificarSesion = async (): Promise<void> => {

  if (!cedula) {
    alert("Hola BRO INICIE SESIÓN MKON");
    window.location.href = "../index.html";
    return; // Detener la función, porque no hay cedula válida
  }

  const usuarioActivo = await comprobarUser(cedula as string);

  if (!usuarioActivo) {
    alert("Hola BRO INICIE SESIÓN MKON");
    window.location.href = "../index.html";
  }

};

// Auto-ejecutar cuando se carga la página
window.addEventListener("DOMContentLoaded", () => { void verificarSesion(); });
