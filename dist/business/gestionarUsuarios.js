import { User } from "../modelo/user.js";
import { generarUsers } from "./generarUsers.js";
export class gestionarUsuarios {
    constructor() {
        this.users = generarUsers();
        this.indiceEdicion = null;
    }
    agregarUsuario() {
        const correo = document.getElementById("NewUserCorreo").value.trim();
        const idUser = document.getElementById("NewUserIdUser").value.trim();
        const pais = document.getElementById("NewUserPais").value.trim();
        const idiomaPrincipal = document.getElementById("NewUserIdiomaPrincipal").value.trim();
        const membresiaValor = document.getElementById("NewUserMembresia").value;
        const membresia = membresiaValor === "true";
        const cedula = document.getElementById("NewUserCedula").value.trim();
        const nombre = document.getElementById("NewUserNombre").value.trim();
        const apellido = document.getElementById("NewUserApellido").value.trim();
        const edad = parseInt(document.getElementById("NewUserEdad").value.trim());
        const clave = document.getElementById("NewUserClave").value.trim();
        const direccion = document.getElementById("NewUserDireccion").value.trim();
        const peliculaFavorita = document.getElementById("NewUserPeliculaFavorita").value.trim();
        if (!correo || !idUser || !pais || !idiomaPrincipal || !cedula || !nombre || !apellido || !edad || !clave || !direccion || !peliculaFavorita) {
            alert("Complete todos los campos");
            return;
        }
        if (this.indiceEdicion !== null) {
            const usuario = this.users[this.indiceEdicion];
            if (!usuario)
                return;
            usuario.correo = correo;
            usuario.idUser = idUser;
            usuario.pais = pais;
            usuario.idiomaPrincipal = idiomaPrincipal;
            usuario.membresia = membresia;
            usuario.cedula = cedula;
            usuario.nombre = nombre;
            usuario.apellido = apellido;
            usuario.edad = edad;
            usuario.clave = clave;
            usuario.direccion = direccion;
            usuario.peliculaFavorita = peliculaFavorita;
            alert("Usuario editado correctamente");
            this.indiceEdicion = null;
            document.getElementById("btnAddUser").textContent = "Agregar Usuario";
        }
        else {
            //VALIDAMOS SI EL USUARIO EXISTE
            const existe = this.users.find(u => u.cedula.toLowerCase() === cedula.toLowerCase());
            if (existe) {
                alert("Ya existe un usuario con esta cédula. Intenta con otra");
                return;
            }
            //CREAMOS EL NUEVO USUARIO
            const nuevoUsuario = new User(correo, idUser, pais, idiomaPrincipal, membresia, cedula, nombre, apellido, edad, clave, direccion, peliculaFavorita);
            this.users.push(nuevoUsuario);
            alert("Usuario agregado exitosamente");
        }
        this.limpiarFormulario();
        this.mostrarUsersEnTabla();
    }
    eliminarUser(index) {
        const user = this.users[index];
        if (!user)
            return;
        const confirmacion = confirm(`¿Seguro que deseas eliminar "${user.nombre}"?`);
        if (!confirmacion)
            return;
        this.users.splice(index, 1);
        alert("🗑️ Usuario eliminado correctamente");
        this.mostrarUsersEnTabla();
    }
    mostrarUsersEnTabla() {
        const tablaBody = document.querySelector("#tablaUsuarios tbody");
        if (!tablaBody)
            return;
        tablaBody.innerHTML = "";
        if (this.users.length === 0) {
            tablaBody.innerHTML = `<tr><td colspan="13" style="text-align:center;">No hay usuarios registrados</td></tr>`;
            return;
        }
        this.users.forEach((user, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
            <td>${user.getIdUser()}</td>
            <td>${user.getNombre()}</td>
            <td>${user.getApellido()}</td>
            <td>${user.getCedula()}</td>
            <td>${user.getCorreo()}</td>
            <td>${user.getEdad()}</td>
            <td>${user.getPais()}</td>
            <td>${user.getIdiomaPrincipal()}</td>
            <td>${user.getDireccion()}</td>
            <td>${user.getPeliculaFavorita()}</td>
            <td>${user.getMembresia() ? "Sí" : "No"}</td>
            <td>${user.isLoggedIn() ? "Activo" : "Inactivo"}</td>
            <td>
                <button class="btnEditar" data-index="${index}">✏️ Editar</button>
                <button class="btnEliminar" data-index="${index}">🗑️ Eliminar</button>
            </td>
        `;
            tablaBody.appendChild(fila);
        });
        tablaBody.querySelectorAll(".btnEliminar").forEach(btn => {
            btn.addEventListener("click", e => {
                const index = parseInt(e.target.getAttribute("data-index") || "-1");
                if (index >= 0)
                    this.eliminarUser(index);
            });
        });
        tablaBody.querySelectorAll(".btnEditar").forEach(btn => {
            btn.addEventListener("click", e => {
                const index = parseInt(e.target.getAttribute("data-index") || "-1");
                if (index >= 0)
                    this.cargarUsersEnFormulario(index);
            });
        });
    }
    cargarUsersEnFormulario(index) {
        const user = this.users[index];
        if (!user)
            return;
        document.getElementById("NewUserCorreo").value = user.correo;
        document.getElementById("NewUserIdUser").value = user.idUser;
        document.getElementById("NewUserPais").value = user.pais;
        document.getElementById("NewUserIdiomaPrincipal").value = user.idiomaPrincipal;
        document.getElementById("NewUserMembresia").value = user.membresia ? "true" : "false";
        document.getElementById("NewUserCedula").value = user.cedula;
        document.getElementById("NewUserNombre").value = user.nombre;
        document.getElementById("NewUserApellido").value = user.apellido;
        document.getElementById("NewUserEdad").valueAsNumber = user.edad;
        document.getElementById("NewUserClave").value = user.clave;
        document.getElementById("NewUserDireccion").value = user.direccion;
        document.getElementById("NewUserPeliculaFavorita").value = user.peliculaFavorita;
        this.indiceEdicion = index;
        document.getElementById("btnAddUser").textContent = "Guardar Cambios";
    }
    // LIMPIAR FORMULARIO
    limpiarFormulario() {
        const campos = [
            "NewUserCorreo", "NewUserIdUser", "NewUserPais", "NewUserIdiomaPrincipal", "NewUserMembresia",
            "NewUserCedula", "NewUserNombre", "NewUserApellido", "NewUserEdad", "NewUserClave",
            "NewUserDireccion", "NewUserPeliculaFavorita"
        ];
        campos.forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                if (input.type === "checkbox")
                    input.checked = false;
                else
                    input.value = "";
            }
        });
    }
}
// Instancia global
const gestorUsers = new gestionarUsuarios();
document.getElementById("btnAddUser")?.addEventListener("click", () => gestorUsers.agregarUsuario());
window.addEventListener("DOMContentLoaded", () => gestorUsers.mostrarUsersEnTabla());
// Exportar
export const gestionModule = gestorUsers;
//# sourceMappingURL=gestionarUsuarios.js.map