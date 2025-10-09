import { User } from "../modelo/user.js";
import { users } from "./generarUsers.js";
import { Admin } from "../modelo/admin.js";
import { admins } from "./generarAdmins.js";


export function loguearUser(cedula: string, contraseña: string): User | null {
    for (const user of users) {
        if (user.cedula === cedula && user.clave === contraseña) {
            user.logIn();
            return user;
        } else {
            console.log("Usuario oontraseña")
        }
    }
    return null;
}

export function loguearAdmin(cedula: string, contraseña: string): Admin | null {
    for (const admin of admins) {
        if (admin.cedula === cedula && admin.clave === contraseña) {
            admin.logIn();
            return admin;
        } else {
            console.log("Admin oontraseña")
        }
    }
    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btnLogin') as HTMLButtonElement;
    const cedulaInput = document.getElementById('cedulaLoguear') as HTMLInputElement;
    const contraseñaInput = document.getElementById('contraseñaLoguear') as HTMLInputElement;

    // Agregar listener al botón
    btnLogin?.addEventListener('click', () => {
        // Obtener valores
        const cedula = cedulaInput.value.trim();
        const contraseña = contraseñaInput.value;

        // Validar que se hayan ingresado datos
        if (!cedula || !contraseña) {
            alert('Por favor, ingresa tu cédula y contraseña');
            return;
        }

        
        const admin = loguearAdmin(cedula, contraseña);
        if (admin) {
            alert(`¡Bienvenido/a Admin ${admin.nombre || 'Usuario'}!`);
            window.location.href = 'PanelInicioAdmin.html';
            return;
        }

        // Si no es admin, probamos como user
        const user = loguearUser(cedula, contraseña);
        if (user) {
            alert(`¡Bienvenido/a ${user.nombre || 'Usuario'}!`);
            window.location.href = 'index.html';
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
