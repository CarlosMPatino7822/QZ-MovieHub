import { User } from "../modelo/user.js";
export function generarUsers() {
    const users = [
        new User("101", //cedula
        "Carlos", //nombre
        "Gómez", //apellido
        25, //edad
        "Calle 10", //direccion
        "Matrix", //peliculaFavorita
        "2000-05-20", //fechaNacimiento
        "clave123", //clave
        "carlos@gmail.com", "U001", "Colombia", "Español", true),
        new User("102", "María", "Lopez", 19, "Carrera 15", "Titanic", "2005-09-10", "clave456", "maria@gmail.com", "U002", "México", "Español", false),
        new User("103", "Andrés", "Martínez", 28, "Av. Central", "Avatar", "1997-01-18", "clave789", "andres@gmail.com", "U003", "Chile", "Español", true)
    ];
    return users;
}
// Exportamos la lista generada directamente
export const users = generarUsers();
