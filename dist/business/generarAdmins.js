import { Admin } from "../modelo/admin.js";
import { hashPassword } from "./hashPassword.js";
/**
 * Genera una lista de administradores con contraseñas hasheadas
 * @returns Una promesa que resuelve a un arreglo de Admin
 */
export async function generarAdmins() {
    const admins = [
        new Admin("admin@eam.edu.co", "Colombia", "Español", true, "201", "Laura", "Pérez", 30, await hashPassword("admin123"), // Contraseña hasheada
        "Calle 10 #45-23", "Inception", "A001", "3001112233", "2018-03-01", "SURA", "Positiva"),
        new Admin("admin2@eam.edu.co", "Colombia", "Español", true, "202", "Andrés", "Martínez", 40, await hashPassword("admin456"), // Contraseña hasheada
        "Calle 50", "Avatar", "A002", "3102223344", "2015-06-10", "Sanitas", "Sura ARL"),
        new Admin("admin3@eam.edu.co", "Colombia", "Español", true, "203", "Miguel", "Suarez", 35, await hashPassword("admin789"), // Contraseña hasheada
        "Carrera 20 #30-40", "Gladiator", "A003", "3203334455", "2016-11-20", "Compensar", "Colmena")
    ];
    return admins;
}
/**
 * Carga administradores desde localStorage o genera nuevos
 * @returns Una promesa que resuelve a un arreglo de Admin
 */
async function cargarAdmins() {
    let admins = [];
    const guardados = localStorage.getItem('admins');
    if (guardados) {
        // Parsear y reconstruir instancias
        admins = JSON.parse(guardados).map((data) => new Admin(data.correo, data.pais, data.idiomaPrincipal, data.membresia, data.cedula, data.nombre, data.apellido, data.edad, data.clave, // Ya está hasheada
        data.direccion, data.peliculaFavorita, data.idAdmin, data.telefono, data.fechaIngreso, data.eps, data.arl));
    }
    else {
        // Generar nuevos admins con contraseñas hasheadas
        admins = await generarAdmins();
        localStorage.setItem('admins', JSON.stringify(admins));
    }
    return admins;
}
// Variable para almacenar los admins cargados
let adminsCache = null;
/**
 * Obtiene los administradores (carga desde cache o localStorage)
 * @returns Una promesa que resuelve a un arreglo de Admin
 */
export async function getAdmins() {
    if (!adminsCache) {
        adminsCache = await cargarAdmins();
    }
    return adminsCache;
}
export const admins = getAdmins();
