import { Persona } from "./persona";
export class User extends Persona {
    constructor(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave, correo, idUser, pais, idiomaPrincipal, membresia) {
        super(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave);
        this.correo = correo;
        this.idUser = idUser;
        this.pais = pais;
        this.idiomaPrincipal = idiomaPrincipal;
        this.membresia = membresia;
    }
    getCorreo() {
        return this.correo;
    }
    setCorreo(correo) {
        this.correo = correo;
    }
    getIdUser() {
        return this.idUser;
    }
    setIdUser(idUser) {
        this.idUser = idUser;
    }
    getPais() {
        return this.pais;
    }
    setPais(pais) {
        this.pais = pais;
    }
    getIdiomaPrincipal() {
        return this.idiomaPrincipal;
    }
    setIdiomaPrincipal(idiomaPrincipal) {
        this.idiomaPrincipal = idiomaPrincipal;
    }
    getMembresia() {
        return this.membresia;
    }
    setMembresia(membresia) {
        this.membresia = membresia;
    }
    recordarMembresia() {
        return this.membresia
            ? `Hola ${this.getNombre()}, tu membresía está activa. `
            : `Hola ${this.getNombre()}, tu membresía no está activa. `;
    }
    recordarIdioma() {
        return `Hola ${this.getNombre()}, tu idioma de preferencia es ${this.idiomaPrincipal}.`;
    }
    saludar() {
        return 'Hola, ${ this.nombre } ${ this.apellido }, bienvenido';
    }
    felizCumple() {
        this.edad += 1;
        return '¡Feliz cumpleaños ${ this.nombre } !Ahora tienes ${ this.edad } años';
    }
    despedir() {
        return 'Adiós ${ this.nombre }';
    }
}
