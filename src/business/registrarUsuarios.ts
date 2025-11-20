/*import { User } from "../modelo/user.js";
import { generarUsers } from "./generarUsers.js";

export class registrarUsuarios {

    users: User[] = generarUsers();
    private indiceEdicion: number | null = null;

    public async agregarUsuario(): Promise<void> {
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
            //VALIDAMOS SI EL USUARIO EXISTE
            const existe = this.users.find(u => u.cedula.toLowerCase() === cedula.toLowerCase());
            if (existe) {
                alert("Ya existe un usuario con esta cédula. Intenta con otra");
                return;
            }

            //CREAMOS EL NUEVO USUARIO
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
const registrarUsuario = new registrarUsuarios();

document.getElementById("btnAddUser")?.addEventListener("click", () => registrarUsuario.agregarUsuario());

// Exportar
export const gestionModule = registrarUsuario;
*/