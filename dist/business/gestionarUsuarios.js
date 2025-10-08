import { User } from "../modelo/user.js";
import { generarUsers } from "./generarUsers.js";
export class gestionarUsuarios {
    constructor() {
        this.users = generarUsers();
        this.indiceEdicion = null;
    }
    agregarPelicula() {
        const cedula = document.getElementById("NewUserCedula").value.trim();
        const nombre = document.getElementById("NewUserNombre").value.trim();
        const apellido = document.getElementById("NewUserApellido").value.trim();
        const edad = document.getElementById("NewUserEdad").value.trim();
        const direccion = document.getElementById("NewUserDireccion").value.trim();
        const peliculaFavorita = document.getElementById("NewUserPeliculaFavorita").value.trim();
        const fechaCumple = document.getElementById("NewUserFechaCumple").value.trim();
        const clave = document.getElementById("NewUserClave").value.trim();
        const correo = document.getElementById("NewUserCorreo").value.trim();
        const idUser = document.getElementById("NewUserIdUser").value.trim();
        const pais = document.getElementById("NewUserPais").value.trim();
        const idiomaPrincipal = document.getElementById("NewUserIdiomaPrincipal").value.trim();
        const membresia = document.getElementById("NewUserMembresia").value.trim();
        if (!cedula || !nombre || !apellido || !edad || !direccion || !peliculaFavorita
            || !fechaCumple || !clave || !correo || !idUser || !pais || !idiomaPrincipal
            || !membresia) {
            alert("Complete todos los campos");
            return;
        }
        if (this.indiceEdicion !== null) {
            const peli = this.users[this.indiceEdicion];
            if (!peli)
                return;
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
            document.getElementById("btnAddUser").textContent = "Agregar Usuario";
        }
        else {
            const existe = this.users.find(u => u.cedula.toLowerCase() === cedula.toLowerCase());
            if (existe) {
                alert("X ya existe ese usuario");
                return;
            }
            const nuevoUsuario = new User(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave, correo, idUser, pais, idiomaPrincipal, membresia);
        }
    }
}
