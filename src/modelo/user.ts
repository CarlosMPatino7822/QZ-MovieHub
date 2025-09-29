// Importa la clase Persona para heredar sus atributos y métodos
import { Persona } from "./persona"

// Clase que representa a un usuario del sistema QZ-MovieHub.
// Hereda de Persona y añade atributos y métodos específicos para el usuario.
export class User extends Persona {
    // Correo electrónico del usuario
    private correo: string;
    // Identificador único del usuario
    private idUser: string;
    // País de residencia del usuario
    private pais: string;
    // Idioma principal del usuario
    private idiomaPrincipal: string;
    // Estado de la membresía del usuario
    private membresia: boolean;

    // Constructor que crea una instancia de User.
    // Incluye los parámetros de Persona más los atributos específicos del usuario.
    constructor(
        cedula: string, 
        nombre: string, 
        apellido: string, 
        edad: number, 
        direccion: string, 
        peliculaFavorita: string,
        fechaCumple: string, 
        clave: string, 
        correo: string, 
        idUser: string, 
        pais: string, 
        idiomaPrincipal: string,
        membresia: boolean
    ) {
        super(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave);
        this.correo = correo;
        this.idUser = idUser;
        this.pais = pais;
        this.idiomaPrincipal = idiomaPrincipal;
        this.membresia = membresia;
    }

    // ---------------- GETTERS ----------------

    // Obtiene el correo electrónico del usuario
    public getCorreo(): string {
        return this.correo;
    }

    // Obtiene el identificador del usuario
    public getIdUser(): string {
        return this.idUser;
    }

    // Obtiene el país de residencia del usuario
    public getPais(): string {
        return this.pais;
    }

    // Obtiene el idioma principal del usuario
    public getIdiomaPrincipal(): string {
        return this.idiomaPrincipal;
    }

    // Obtiene el estado de la membresía del usuario
    public getMembresia(): boolean {
        return this.membresia;
    }

    // ---------------- SETTERS ----------------

    // Establece el correo electrónico del usuario
    public setCorreo(correo: string): void {
        this.correo = correo;
    }

    // Establece el identificador del usuario
    public setIdUser(idUser: string): void {
        this.idUser = idUser;
    }

    // Establece el país de residencia del usuario
    public setPais(pais: string): void {
        this.pais = pais;
    }

    // Establece el idioma principal del usuario
    public setIdiomaPrincipal(idiomaPrincipal: string): void {
        this.idiomaPrincipal = idiomaPrincipal;
    }

    // Establece el estado de la membresía del usuario
    public setMembresia(membresia: boolean): void {
        this.membresia = membresia;
    }

    // ---------------- MÉTODOS ADICIONALES ----------------

    // Devuelve un mensaje sobre el estado de la membresía
    public recordarMembresia(): string {
        return this.membresia
            ? `Hola ${this.getNombre()}, tu membresía está activa. `
            : `Hola ${this.getNombre()}, tu membresía no está activa. `;
    }

    // Devuelve un mensaje sobre el idioma de preferencia del usuario
    public recordarIdioma(): string {
        return `Hola ${this.getNombre()}, tu idioma de preferencia es ${this.idiomaPrincipal}.`;
    }

    // Devuelve un saludo personalizado al usuario
    public saludar(): string {
        return `Hola, ${this.getNombre()} ${this.getApellido()}, bienvenido`;
    }

    // Incrementa la edad y devuelve un mensaje de cumpleaños
    public felizCumple(): string {
        this.edad += 1;
        return `¡Feliz cumpleaños ${this.getNombre()}! Ahora tienes ${this.edad} años`;
    }

    // Devuelve un mensaje de despedida al usuario
    public despedir(): string {
        return `Adiós ${this.getNombre()}`;
    }
}