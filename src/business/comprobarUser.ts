// comprobarUser.ts

import { cargarUsers} from "./generarUsers.js";
import { User } from "../modelo/user.js";


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
  const cedula = localStorage.getItem("sessionCedula");
  if (!cedula) {
    alert("Sesión inválida. Por favor, inicie sesión nuevamente.");
    window.location.href = "../index.html";
    return; // Detener la función, porque no hay cedula válida
  }

  const usuarioActivo = await comprobarUser(cedula as string);

  if (!usuarioActivo) {
    alert("Sesión inválida. Por favor, inicie sesión nuevamente.");
    window.location.href = "../index.html";
  }

};

// Auto-ejecutar cuando se carga la página
window.addEventListener("DOMContentLoaded", () => { void verificarSesion(); });
