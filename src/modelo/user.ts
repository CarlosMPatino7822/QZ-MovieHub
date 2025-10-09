// Clase que representa a un usuario dentro del sistema QZ-MovieHub.
// Contiene información personal, de sesión y de preferencia del usuario.

export class User {
    public correo: string = "";
    public idUser: string = "";
    public pais: string = "";
    public idiomaPrincipal: string = "";
    public membresia: boolean = false;
    public cedula: string = "";
    public nombre: string = "";
    public apellido: string = "";
    public edad: number = 0;
    public clave: string = "";
    private LoggedIn: boolean = false;
    public direccion: string = "";
    public peliculaFavorita: string = "";
    
    /**
     * Constructor que crea una nueva instancia de User.
     * @param correo - Correo electrónico del usuario
     * @param idUser - Identificador único del usuario
     * @param pais - País de residencia del usuario
     * @param idiomaPrincipal - Idioma principal del usuario
     * @param membresia - Estado de membresía del usuario
     * @param cedula - Cédula del usuario
     * @param nombre - Nombre del usuario
     * @param apellido - Apellido del usuario
     * @param edad - Edad del usuario
     * @param clave - Clave de acceso del usuario
     * @param direccion - Dirección del usuario
     * @param peliculaFavorita - Película favorita del usuario
     */

    constructor(
        correo: string,
        idUser: string,
        pais: string,
        idiomaPrincipal: string,
        membresia: boolean,
        cedula: string,
        nombre: string,
        apellido: string,
        edad: number,
        clave: string,
        direccion: string,
        peliculaFavorita: string
    ) {
        this.correo = correo;
        this.idUser = idUser;
        this.pais = pais;
        this.idiomaPrincipal = idiomaPrincipal;
        this.membresia = membresia;
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.clave = clave;
        this.direccion = direccion;
        this.peliculaFavorita = peliculaFavorita;
        this.LoggedIn = false; 
    }

    // ---------------- GETTERS ----------------

    /** Obtiene el correo electrónico del usuario */
    public getCorreo(): string {
        return this.correo;
    }

    /** Obtiene el identificador del usuario */
    public getIdUser(): string {
        return this.idUser;
    }

    /** Obtiene el país de residencia del usuario */
    public getPais(): string {
        return this.pais;
    }

    /** Obtiene el idioma principal del usuario */
    public getIdiomaPrincipal(): string {
        return this.idiomaPrincipal;
    }

    /** Obtiene el estado de la membresía del usuario */
    public getMembresia(): boolean {
        return this.membresia;
    }

    /** Obtiene la cédula del usuario */
    public getCedula(): string {
        return this.cedula;
    }

    /** Obtiene el nombre del usuario */
    public getNombre(): string {
        return this.nombre;
    }

    /** Obtiene el apellido del usuario */
    public getApellido(): string {
        return this.apellido;
    }

    /** Obtiene la edad del usuario */
    public getEdad(): number {
        return this.edad;
    }

    /** Obtiene la clave del usuario */
    public getClave(): string {
        return this.clave;
    }

    /** Obtiene la dirección del usuario */
    public getDireccion(): string {
        return this.direccion;
    }

    /** Obtiene la película favorita del usuario */
    public getPeliculaFavorita(): string {
        return this.peliculaFavorita;
    }

    /** Verifica si el usuario está logueado */
    public isLoggedIn(): boolean {
        return this.LoggedIn;
    }


    // ---------------- SETTERS ----------------

    /** Establece el correo electrónico del usuario */
    public setCorreo(correo: string): void {
        this.correo = correo;
    }

    /** Establece el identificador del usuario */
    public setIdUser(idUser: string): void {
        this.idUser = idUser;
    }

    /** Establece el país de residencia del usuario */
    public setPais(pais: string): void {
        this.pais = pais;
    }

    /** Establece el idioma principal del usuario */
    public setIdiomaPrincipal(idiomaPrincipal: string): void {
        this.idiomaPrincipal = idiomaPrincipal;
    }

    /** Establece el estado de la membresía del usuario */
    public setMembresia(membresia: boolean): void {
        this.membresia = membresia;
    }

    /** Establece la cédula del usuario */
    public setCedula(cedula: string): void {
        this.cedula = cedula;
    }

    /** Establece el nombre del usuario */
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    /** Establece el apellido del usuario */
    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    /** Establece la edad del usuario */
    public setEdad(edad: number): void {
        this.edad = edad;
    }

    /** Establece la clave del usuario */
    public setClave(clave: string): void {
        this.clave = clave;
    }

    /** Establece la dirección del usuario */
    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    /** Establece la película favorita del usuario */
    public setPeliculaFavorita(peliculaFavorita: string): void {
        this.peliculaFavorita = peliculaFavorita;
    }


    // ---------------- MÉTODOS ADICIONALES ----------------

    /** Devuelve un mensaje sobre el estado de la membresía */
    public recordarMembresia(): string {
        return this.membresia
            ? `Hola ${this.getNombre()}, tu membresía está activa.`
            : `Hola ${this.getNombre()}, tu membresía no está activa.`;
    }

    /** Devuelve un mensaje sobre el idioma de preferencia del usuario */
    public recordarIdioma(): string {
        return `Hola ${this.getNombre()}, tu idioma de preferencia es ${this.idiomaPrincipal}.`;
    }

    // ---------------- MÉTODOS DE SESIÓN ----------------

    /** Inicia sesión del usuario */
    public logIn(): string {
        if (this.LoggedIn) {
            return `${this.nombre} ya estaba logueado.`;
        }
        this.LoggedIn = true;
        return `${this.nombre} inició sesión correctamente.`;
    }

    /** Cierra sesión del usuario */
    public logOut(): string {
        if (!this.LoggedIn) {
            return `${this.nombre} no estaba logueado.`;
        }
        this.LoggedIn = false;
        return `${this.nombre} cerró sesión correctamente.`;
    }

    /** Devuelve un mensaje de despedida */
    public despedir(): string {
        return `Adiós ${this.getNombre()}.`;
    }
}