import { User } from "../modelo/user.js";
import { Admin } from "../modelo/admin.js";
import { getAdmins } from "../business/generarAdmins.js";
import { verifyPassword } from "./hashPassword.js";
function cargarUsersDesdeLocalStorage() {
    const datos = localStorage.getItem("users");
    if (!datos)
        return []; // No hay usuarios
    const lista = JSON.parse(datos); //JSON.parse para convertir el string en un objeto
    // Reconstruir cada objeto como una instancia de la clase User ya que de otra forma no tendria los metodos de la clase
    return lista.map((u) => new User(u.correo, u.idUser, u.pais, u.idiomaPrincipal, u.membresia, u.cedula, u.nombre, u.apellido, u.edad, u.clave, u.direccion, u.peliculaFavorita));
}
export async function loguearUser(cedula, contraseña) {
    const users = cargarUsersDesdeLocalStorage(); // Cargamos los usuarios del localStorage
    for (const user of users) {
        // Compara cedula y contraseña hasheada
        if (user.cedula === cedula && await verifyPassword(contraseña, user.clave)) {
            user.logIn();
            return user;
        }
    }
    return null;
}
export async function loguearAdmin(cedula, contraseña) {
    const admins = await getAdmins();
    for (const admin of admins) {
        // Comparamos cédula y contraseña hasheada
        if (admin.cedula === cedula && await verifyPassword(contraseña, admin.clave)) {
            admin.logIn();
            return admin;
        }
    }
    return null;
}
document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btnLogin');
    const cedulaInput = document.getElementById('cedulaLoguear');
    const contraseñaInput = document.getElementById('contraseñaLoguear');
    // Agregar listener al botón
    btnLogin?.addEventListener('click', async () => {
        const cedula = cedulaInput.value.trim();
        const contraseña = contraseñaInput.value;
        if (!cedula || !contraseña) {
            alert('Por favor, ingresa tu cédula y contraseña');
            return;
        }
        const admin = await loguearAdmin(cedula, contraseña);
        if (admin) {
            alert(`¡Bienvenido/a Admin!`);
            localStorage.setItem("sessionType", "admin");
            localStorage.setItem("sessionCedula", admin.cedula);
            window.location.href = 'fronted/PanelInicioAdmin.html';
            return;
        }
        // Si no es admin, probamos como user
        const user = await loguearUser(cedula, contraseña);
        if (user) {
            // GUARDAR SESIÓN
            localStorage.setItem("sessionType", "user");
            localStorage.setItem("sessionCedula", user.cedula);
            alert(`¡Bienvenido/a ${'Usuario'}!`);
            window.location.href = `fronted/index.html?cedula=${encodeURIComponent(cedula)}`;
            return;
        }
        // Ninguno coincidió
        alert('Cédula o contraseña incorrecta. Por favor, intenta de nuevo.');
        contraseñaInput.value = '';
    });
    // Opcional: permitir login con Enter
    contraseñaInput?.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            btnLogin.click();
        }
    });
});
