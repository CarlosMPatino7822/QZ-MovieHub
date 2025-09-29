// Importa la clase Persona para heredar sus atributos y métodos
import { Persona } from "./persona";
// Clase que representa a un usuario del sistema QZ-MovieHub.
// Hereda de Persona y añade atributos y métodos específicos para el usuario.
export class User extends Persona {
    // Constructor que crea una instancia de User.
    // Incluye los parámetros de Persona más los atributos específicos del usuario.
    constructor(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave, correo, idUser, pais, idiomaPrincipal, membresia) {
        super(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave);
        this.correo = correo;
        this.idUser = idUser;
        this.pais = pais;
        this.idiomaPrincipal = idiomaPrincipal;
        this.membresia = membresia;
    }
    // ---------------- GETTERS ----------------
    // Obtiene el correo electrónico del usuario
    getCorreo() {
        return this.correo;
    }
    // Obtiene el identificador del usuario
    getIdUser() {
        return this.idUser;
    }
    // Obtiene el país de residencia del usuario
    getPais() {
        return this.pais;
    }
    // Obtiene el idioma principal del usuario
    getIdiomaPrincipal() {
        return this.idiomaPrincipal;
    }
    // Obtiene el estado de la membresía del usuario
    getMembresia() {
        return this.membresia;
    }
    // ---------------- SETTERS ----------------
    // Establece el correo electrónico del usuario
    setCorreo(correo) {
        this.correo = correo;
    }
    // Establece el identificador del usuario
    setIdUser(idUser) {
        this.idUser = idUser;
    }
    // Establece el país de residencia del usuario
    setPais(pais) {
        this.pais = pais;
    }
    // Establece el idioma principal del usuario
    setIdiomaPrincipal(idiomaPrincipal) {
        this.idiomaPrincipal = idiomaPrincipal;
    }
    // Establece el estado de la membresía del usuario
    setMembresia(membresia) {
        this.membresia = membresia;
    }
    // ---------------- MÉTODOS ADICIONALES ----------------
    // Devuelve un mensaje sobre el estado de la membresía
    recordarMembresia() {
        return this.membresia
            ? `Hola ${this.getNombre()}, tu membresía está activa. `
            : `Hola ${this.getNombre()}, tu membresía no está activa. `;
    }
    // Devuelve un mensaje sobre el idioma de preferencia del usuario
    recordarIdioma() {
        return `Hola ${this.getNombre()}, tu idioma de preferencia es ${this.idiomaPrincipal}.`;
    }
    // Devuelve un saludo personalizado al usuario
    saludar() {
        return `Hola, ${this.getNombre()} ${this.getApellido()}, bienvenido`;
    }
    // Incrementa la edad y devuelve un mensaje de cumpleaños
    felizCumple() {
        this.edad += 1;
        return `¡Feliz cumpleaños ${this.getNombre()}! Ahora tienes ${this.edad} años`;
    }
    // Devuelve un mensaje de despedida al usuario
    despedir() {
        return `Adiós ${this.getNombre()}`;
    }
}
