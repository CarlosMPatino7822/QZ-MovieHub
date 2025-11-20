
import { User } from "../modelo/user.js";
import { generarUsers } from "./generarUsers.js";

export class gestionarUsuarios {

    constructor() {
    const usuariosGuardados = localStorage.getItem('users');

    if (usuariosGuardados) {

        const lista = JSON.parse(usuariosGuardados); //JSON.parse para convertir el string en un objeto

        // Reconstruir cada objeto como una instancia de la clase User ya que de otra forma no tendria los metodos de la clase
        this.users = lista.map((u: any) => new User(
            u.correo,
            u.idUser,
            u.pais,
            u.idiomaPrincipal,
            u.membresia,
            u.cedula,
            u.nombre,
            u.apellido,
            u.edad,
            u.clave,
            u.direccion,
            u.peliculaFavorita
        ));

    } else {
        this.users = generarUsers();  // Si no hay usuarios guardados, cargar los generados por defecto
        localStorage.setItem('users', JSON.stringify(this.users)); // Guardar en localStorage
    }

    this.indiceEdicion = null; //Ver si estamos editando o no
    }

    users: User[] = generarUsers();
    private indiceEdicion: number | null = null;

    public agregarUsuario(): void {
        const correo = (document.getElementById("NewUserCorreo") as HTMLInputElement).value.trim();
        const idUser = (document.getElementById("NewUserIdUser") as HTMLInputElement).value.trim();
        const pais = (document.getElementById("NewUserPais") as HTMLInputElement).value.trim();
        const idiomaPrincipal = (document.getElementById("NewUserIdiomaPrincipal") as HTMLInputElement).value.trim();

        const membresiaValor = (document.getElementById("NewUserMembresia") as HTMLInputElement).value;
        const membresia = membresiaValor === "true";

        const cedula = (document.getElementById("NewUserCedula") as HTMLInputElement).value.trim();
        const nombre = (document.getElementById("NewUserNombre") as HTMLInputElement).value.trim();
        const apellido = (document.getElementById("NewUserApellido") as HTMLInputElement).value.trim();
        const edad = parseInt((document.getElementById("NewUserEdad") as HTMLInputElement).value.trim());
        const clave = (document.getElementById("NewUserClave") as HTMLInputElement).value.trim();
        const direccion = (document.getElementById("NewUserDireccion") as HTMLInputElement).value.trim();
        const peliculaFavorita = (document.getElementById("NewUserPeliculaFavorita") as HTMLInputElement).value.trim();

        if (!correo || !idUser || !pais || !idiomaPrincipal || !cedula || !nombre || !apellido || !edad || !clave || !direccion || !peliculaFavorita) {
            alert("Complete todos los campos");
            return;
        }

        if (this.indiceEdicion !== null) {
            const usuario = this.users[this.indiceEdicion];
            if (!usuario) return;

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
            (document.getElementById("btnAddUser") as HTMLButtonElement).textContent = "Agregar Usuario";
            
            // GUARDAR CAMBIOS EN LOCAL STORAGE DESPUÉS DE EDITAR
            localStorage.setItem('users', JSON.stringify(this.users));
        } else {
            // VALIDAMOS SI EL USUARIO EXISTE
            const existe = this.users.find(u => u.cedula.toLowerCase() === cedula.toLowerCase());
            if (existe) {
                alert("Ya existe un usuario con esta cédula. Intenta con otra");
                return;
            }

            // CREAMOS EL NUEVO USUARIO
            const nuevoUsuario = new User(
                correo, idUser, pais, idiomaPrincipal, membresia,
                cedula, nombre, apellido, edad, clave, direccion, peliculaFavorita
            );

            this.users.push(nuevoUsuario);
            alert("Usuario agregado exitosamente");
            
            // GUARDAR CAMBIOS EN LOCAL STORAGE DESPUÉS DE AGREGAR
            localStorage.setItem('users', JSON.stringify(this.users));
        }

        this.limpiarFormulario();
        this.mostrarUsersEnTabla();
    }

    private eliminarUser(index: number): void {
        const user = this.users[index];
        if (!user) return;

        const confirmacion = confirm(`¿Seguro que deseas eliminar "${user.nombre}"?`);
        if (!confirmacion) return;

        this.users.splice(index, 1);
        alert("🗑️ Usuario eliminado correctamente");
        
        // GUARDAR CAMBIOS EN LOCAL STORAGE DESPUÉS DE ELIMINAR
        localStorage.setItem('users', JSON.stringify(this.users));
        
        this.mostrarUsersEnTabla();
    }

    public mostrarUsersEnTabla(): void {   
        const tablaBody = document.querySelector("#tablaUsuarios tbody") as HTMLTableSectionElement;
        if (!tablaBody) return;

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
                const index = parseInt((e.target as HTMLElement).getAttribute("data-index") || "-1");
                if (index >= 0) this.eliminarUser(index);
            });
        });

        tablaBody.querySelectorAll(".btnEditar").forEach(btn => {
            btn.addEventListener("click", e => {
                const index = parseInt((e.target as HTMLElement).getAttribute("data-index") || "-1");
                if (index >= 0) this.cargarUsersEnFormulario(index);
            });
        });
    }

    private cargarUsersEnFormulario(index: number): void {
        const user = this.users[index];
        if (!user) return;

        (document.getElementById("NewUserCorreo") as HTMLInputElement).value = user.correo;
        (document.getElementById("NewUserIdUser") as HTMLInputElement).value = user.idUser;
        (document.getElementById("NewUserPais") as HTMLInputElement).value = user.pais;
        (document.getElementById("NewUserIdiomaPrincipal") as HTMLInputElement).value = user.idiomaPrincipal;
        (document.getElementById("NewUserMembresia") as HTMLInputElement).value = user.membresia ? "true" : "false";
        (document.getElementById("NewUserCedula") as HTMLInputElement).value = user.cedula;
        (document.getElementById("NewUserNombre") as HTMLInputElement).value = user.nombre;
        (document.getElementById("NewUserApellido") as HTMLInputElement).value = user.apellido;
        (document.getElementById("NewUserEdad") as HTMLInputElement).valueAsNumber = user.edad;
        (document.getElementById("NewUserClave") as HTMLInputElement).value = user.clave;
        (document.getElementById("NewUserDireccion") as HTMLInputElement).value = user.direccion;
        (document.getElementById("NewUserPeliculaFavorita") as HTMLInputElement).value = user.peliculaFavorita;

        this.indiceEdicion = index;
        (document.getElementById("btnAddUser") as HTMLButtonElement).textContent = "Guardar Cambios";
    }

    // LIMPIAR FORMULARIO
    private limpiarFormulario(): void {
        const campos = [
            "NewUserCorreo", "NewUserIdUser", "NewUserPais", "NewUserIdiomaPrincipal", "NewUserMembresia",
            "NewUserCedula", "NewUserNombre", "NewUserApellido", "NewUserEdad", "NewUserClave",
            "NewUserDireccion", "NewUserPeliculaFavorita"
        ];

        campos.forEach(id => {
            const input = document.getElementById(id) as HTMLInputElement;
            if (input) {
                if (input.type === "checkbox") input.checked = false;
                else input.value = "";
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
