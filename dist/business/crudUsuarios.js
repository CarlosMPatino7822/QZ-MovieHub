import { User } from "../modelo/user.js";
import { users } from "./generarUsers.js";
export function save(newUser = new User()) {
    // Verificar si ya existe un usuario con la misma cédula
    const existe = users.some(u => u.getCedula() === newUser.getCedula());
    if (existe) {
        console.log("Usuario ya existe");
        alert("Usuario ya existe");
        return null;
    }
    else {
        users.push(newUser);
        console.log("Usuario guardado correctamente");
        return newUser;
    }
}
export function () { }
delete ();
