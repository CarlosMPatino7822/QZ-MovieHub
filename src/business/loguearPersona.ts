import { User } from "../modelo/user.js";
import { users } from "./generarUsers.js";


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

        // Llamar a la función de login
        const user = loguearUser(cedula, contraseña);

        // Manejar el resultado
        if (user) {
            alert(`¡Bienvenido/a ${user.nombre || 'Usuario'}!`);
            // Redirigir a index.html
            window.location.href = 'index.html';
        } else {
            alert('Cédula o contraseña incorrecta. Por favor, intenta de nuevo.');
            // Limpiar el campo de contraseña
            contraseñaInput.value = '';
        }
    });

    // Opcional: permitir login con Enter
    contraseñaInput?.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            btnLogin.click();
        }
    });
});
