import { User } from "../modelo/user.js";
import { generarUsers } from "./generarUsers.js";

export class gestionarUsuarios {
    users: User[] = generarUsers();
    private indiceEdicion: numbre | null = null;

    public agregarPelicula(): void {
        const cedula = (document.getElementById("NewUserCedula") as HTMLInputElement).value.trim();
        const nombre = (document.getElementById("NewUserNombre") as HTMLInputElement).value.trim();
        const apellido = (document.getElementById("NewUserApellido") as HTMLInputElement).value.trim();
        const edad = (document.getElementById("NewUserEdad") as HTMLInputElement).value.trim();
        const direccion = (document.getElementById("NewUserDireccion") as HTMLInputElement).value.trim();
        const peliculaFavorita = (document.getElementById("NewUserPeliculaFavorita") as HTMLInputElement).value.trim();
        const fechaCumple = (document.getElementById("NewUserFechaCumple") as HTMLInputElement).value.trim();
        const clave = (document.getElementById("NewUserClave") as HTMLInputElement).value.trim();
        const correo = (document.getElementById("NewUserCorreo") as HTMLInputElement).value.trim();
        const idUser = (document.getElementById("NewUserIdUser") as HTMLInputElement).value.trim();
        const pais = (document.getElementById("NewUserPais") as HTMLInputElement).value.trim();
        const idiomaPrincipal = (document.getElementById("NewUserIdiomaPrincipal") as HTMLInputElement).value.trim();
        const membresia = (document.getElementById("NewUserMembresia") as HTMLInputElement).value.trim();

        if (!cedula || !nombre || !apellido || !edad || !direccion || !peliculaFavorita
            || !fechaCumple || !clave || !correo || !idUser || !pais || !idiomaPrincipal
            || !membresia) {
            alert("Complete todos los campos")
            return;
        }

        if(this.indiceEdicion !== null){
            const peli = this.users[this.indiceEdicion];
            if(!peli) return

            peli.cedula = cedula;
            peli.nombre = nombre;
            peli.apellido = apellido;
            peli.edad = edad;
            peli.direccion = direccion;
            peli.peliculaFavorita = peliculaFavorita;
            peli.fechaCumple = fechaCumple;
            peli.clave = clave;
            peli.correo = correo;
            peli.idUser = idUser;
            peli.pais = pais;
            peli.idiomaPrincipal = idiomaPrincipal;
            peli.membresia = membresia;

            alert("Usuario editado correctamente");
            this.indiceEdicion = null;
            (document.getElementById("btnAddUser") as HTMLButtonElement).textContent = "Agregar Usuario";
        } else {
            const existe = this.users.find(u => u.cedula.toLowerCase() === cedula.toLowerCase());
            if(existe){
                alert("X ya existe ese usuario");
                return;
            }

            const nuevoUsuario = new User(
                cedula, nombre, apellido, edad, direccion, peliculaFavorita,
            fechaCumple, clave, correo, idUser, pais, idiomaPrincipal, membresia
            );
        }
    }
}