import { User } from "../modelo/user.js";
/**
 * Genera una lista de usuarios de ejemplo para el sistema QZ-MovieHub.
 * Cada usuario contiene información personal y de preferencias.
 *
 * @returns Un arreglo con instancias de la clase User.
 */
export function generarUsers() {
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
        "clave123", // clave
        "Calle 10 #45-23", // dirección
        "Matrix" // película favorita
        ),
        new User("maria@gmail.com", "U002", "México", "Español", false, "102", "María", "López", 19, "clave456", "Carrera 15 #20-10", "Titanic"),
        new User("andres@gmail.com", "U003", "Chile", "Español", true, "103", "Andrés", "Martínez", 28, "clave789", "Av. Central #33", "Avatar"),
        new User("sofia@gmail.com", "U004", "Argentina", "Español", true, "104", "Sofía", "Ramírez", 22, "passsofi22", "Calle San Martín 124", "Inception"),
        new User("daniel@gmail.com", "U005", "Perú", "Español", false, "105", "Daniel", "Torres", 30, "dan12345", "Av. Lima 321", "Interestelar")
    ];
    return users;
}
function cargarUsers() {
    let users = [];
    const guardados = localStorage.getItem('users');
    if (guardados) {
        users = JSON.parse(guardados).map((data) => new User(data.correo, data.idUser, data.pais, data.idiomaPrincipal, data.membresia, data.cedula, data.nombre, data.apellido, data.edad, data.clave, data.direccion, data.peliculaFavorita));
    }
    else {
        users = generarUsers();
        localStorage.setItem('users', JSON.stringify(users));
    }
    return users;
}
// Exportamos la lista generada directamente
export const users = generarUsers();
