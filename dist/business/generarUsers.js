import { User } from "../modelo/user.js";
import { hashPassword } from "./hashPassword.js";
/**
 * Genera una lista de usuarios de ejemplo para el sistema QZ-MovieHub.
 * Cada usuario contiene información personal con contraseñas hasheadas.
 *
 * @returns Una promesa que resuelve a un arreglo con instancias de la clase User.
 */
export async function generarUsers() {
    const users = [
        new User("carlos@gmail.com", // correo
        "U001", // idUser
        "Colombia", // país
        "Español", // idioma principal
        true, // membresía
        "101", // cédula
        "Carlos", // nombre
        "Gómez", // apellido
        25, // edad
        await hashPassword("clave123"), // clave hasheada
        "Calle 10 #45-23", // dirección
        "Matrix" // película favorita
        ),
        new User("maria@gmail.com", "U002", "México", "Español", false, "102", "María", "López", 19, await hashPassword("clave456"), // clave hasheada
        "Carrera 15 #20-10", "Titanic"),
        new User("andres@gmail.com", "U003", "Chile", "Español", true, "103", "Andrés", "Martínez", 28, await hashPassword("clave789"), // clave hasheada
        "Av. Central #33", "Avatar"),
        new User("sofia@gmail.com", "U004", "Argentina", "Español", true, "104", "Sofía", "Ramírez", 22, await hashPassword("passsofi22"), // clave hasheada
        "Calle San Martín 124", "Inception"),
        new User("daniel@gmail.com", "U005", "Perú", "Español", false, "105", "Daniel", "Torres", 30, await hashPassword("dan12345"), // clave hasheada
        "Av. Lima 321", "Interestelar")
    ];
    return users;
}
/**
 * Carga usuarios desde localStorage o genera nuevos
 * @returns Una promesa que resuelve a un arreglo de User
 */
export async function cargarUsers() {
    let users = [];
    const guardados = localStorage.getItem('users');
    if (guardados) {
        // Si hay datos en localStorage, los cargamos (ya están hasheados)
        users = JSON.parse(guardados).map((data) => new User(data.correo, data.idUser, data.pais, data.idiomaPrincipal, data.membresia, data.cedula, data.nombre, data.apellido, data.edad, data.clave, // La clave ya está hasheada en localStorage
        data.direccion, data.peliculaFavorita));
    }
    else {
        // Si no hay datos, generamos usuarios nuevos con contraseñas hasheadas
        users = await generarUsers();
        localStorage.setItem('users', JSON.stringify(users));
    }
    return users;
}
// Variable para almacenar los users cargados en cache
let usersCache = null;
/**
 * Obtiene los usuarios (carga desde cache o localStorage)
 * Esta es la función principal que debes usar en otros archivos
 * @returns Una promesa que resuelve a un arreglo de User
 */
export async function getUsers() {
    return await cargarUsers();
}
export async function recargarUsers() {
    return await cargarUsers();
}
