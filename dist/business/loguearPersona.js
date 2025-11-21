import { User } from "../modelo/user.js";
import { Admin } from "../modelo/admin.js";
import { getAdmins } from "../business/generarAdmins.js";
import { verifyPassword } from "./hashPassword.js";
import { recargarUsers } from "./generarUsers.js";
// LOGIN USER
export async function loguearUser(cedula, password) {
    const users = await recargarUsers();
    for (const user of users) {
        if (user.cedula === cedula) {
            const isValid = await verifyPassword(password, user.clave);
            if (isValid) {
                user.logIn();
                return user;
            }
            return null;
        }
    }
    return null;
}
// LOGIN ADMIN
export async function loguearAdmin(cedula, password) {
    const admins = await getAdmins();
    for (const admin of admins) {
        if (admin.cedula === cedula) {
            const isValid = await verifyPassword(password, admin.clave);
            if (isValid) {
                admin.logIn();
                return admin;
            }
            return null;
        }
    }
    return null;
}
// EVENTO DEL BOTÓN
document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btnLogin');
    const cedulaInput = document.getElementById('cedulaLoguear');
    const passwordInput = document.getElementById('contraseñaLoguear');
    btnLogin?.addEventListener('click', async () => {
        const cedula = cedulaInput.value.trim();
        const password = passwordInput.value;
        if (!cedula || !password) {
            alert("Por favor ingresa ambos campos");
            return;
        }
        // PRIMERO PROBAMOS ADMIN
        const admin = await loguearAdmin(cedula, password);
        if (admin) {
            localStorage.setItem("sessionType", "admin");
            localStorage.setItem("sessionCedula", admin.cedula);
            alert("Bienvenido Administrador");
            window.location.href = "fronted/PanelInicioAdmin.html";
            return;
        }
        // SI NO, PROBAMOS USER
        const user = await loguearUser(cedula, password);
        if (user) {
            localStorage.setItem("sessionType", "user");
            localStorage.setItem("sessionCedula", user.cedula);
            alert("Bienvenido Usuario");
            window.location.href = `fronted/index.html?cedula=${encodeURIComponent(user.cedula)}`;
            return;
        }
        // SI NINGUNO COINCIDE
        alert("Cédula o contraseña incorrecta");
        passwordInput.value = "";
    });
    // ENTER PARA LOGUEAR
    passwordInput?.addEventListener("keypress", (e) => {
        if (e.key === "Enter")
            btnLogin.click();
    });
});
