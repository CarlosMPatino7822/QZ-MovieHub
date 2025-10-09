// Clase que representa a un usuario dentro del sistema QZ-MovieHub.
// Contiene información personal, de sesión y de preferencia del usuario.
export class User {
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
    constructor(correo, idUser, pais, idiomaPrincipal, membresia, cedula, nombre, apellido, edad, clave, direccion, peliculaFavorita) {
        this.correo = "";
        this.idUser = "";
        this.pais = "";
        this.idiomaPrincipal = "";
        this.membresia = false;
        this.cedula = "";
        this.nombre = "";
        this.apellido = "";
        this.edad = 0;
        this.clave = "";
        this.LoggedIn = false;
        this.direccion = "";
        this.peliculaFavorita = "";
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
    getCorreo() {
        return this.correo;
    }
    /** Obtiene el identificador del usuario */
    getIdUser() {
        return this.idUser;
    }
    /** Obtiene el país de residencia del usuario */
    getPais() {
        return this.pais;
    }
    /** Obtiene el idioma principal del usuario */
    getIdiomaPrincipal() {
        return this.idiomaPrincipal;
    }
    /** Obtiene el estado de la membresía del usuario */
    getMembresia() {
        return this.membresia;
    }
    /** Obtiene la cédula del usuario */
    getCedula() {
        return this.cedula;
    }
    /** Obtiene el nombre del usuario */
    getNombre() {
        return this.nombre;
    }
    /** Obtiene el apellido del usuario */
    getApellido() {
        return this.apellido;
    }
    /** Obtiene la edad del usuario */
    getEdad() {
        return this.edad;
    }
    /** Obtiene la clave del usuario */
    getClave() {
        return this.clave;
    }
    /** Obtiene la dirección del usuario */
    getDireccion() {
        return this.direccion;
    }
    /** Obtiene la película favorita del usuario */
    getPeliculaFavorita() {
        return this.peliculaFavorita;
    }
    /** Verifica si el usuario está logueado */
    isLoggedIn() {
        return this.LoggedIn;
    }
    // ---------------- SETTERS ----------------
    /** Establece el correo electrónico del usuario */
    setCorreo(correo) {
        this.correo = correo;
    }
    /** Establece el identificador del usuario */
    setIdUser(idUser) {
        this.idUser = idUser;
    }
    /** Establece el país de residencia del usuario */
    setPais(pais) {
        this.pais = pais;
    }
    /** Establece el idioma principal del usuario */
    setIdiomaPrincipal(idiomaPrincipal) {
        this.idiomaPrincipal = idiomaPrincipal;
    }
    /** Establece el estado de la membresía del usuario */
    setMembresia(membresia) {
        this.membresia = membresia;
    }
    /** Establece la cédula del usuario */
    setCedula(cedula) {
        this.cedula = cedula;
    }
    /** Establece el nombre del usuario */
    setNombre(nombre) {
        this.nombre = nombre;
    }
    /** Establece el apellido del usuario */
    setApellido(apellido) {
        this.apellido = apellido;
    }
    /** Establece la edad del usuario */
    setEdad(edad) {
        this.edad = edad;
    }
    /** Establece la clave del usuario */
    setClave(clave) {
        this.clave = clave;
    }
    /** Establece la dirección del usuario */
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    /** Establece la película favorita del usuario */
    setPeliculaFavorita(peliculaFavorita) {
        this.peliculaFavorita = peliculaFavorita;
    }
    // ---------------- MÉTODOS ADICIONALES ----------------
    /** Devuelve un mensaje sobre el estado de la membresía */
    recordarMembresia() {
        return this.membresia
            ? `Hola ${this.getNombre()}, tu membresía está activa.`
            : `Hola ${this.getNombre()}, tu membresía no está activa.`;
    }
    /** Devuelve un mensaje sobre el idioma de preferencia del usuario */
    recordarIdioma() {
        return `Hola ${this.getNombre()}, tu idioma de preferencia es ${this.idiomaPrincipal}.`;
    }
    // ---------------- MÉTODOS DE SESIÓN ----------------
    /** Inicia sesión del usuario */
    logIn() {
        if (this.LoggedIn) {
            return `${this.nombre} ya estaba logueado.`;
        }
        this.LoggedIn = true;
        return `${this.nombre} inició sesión correctamente.`;
    }
    /** Cierra sesión del usuario */
    logOut() {
        if (!this.LoggedIn) {
            return `${this.nombre} no estaba logueado.`;
        }
        this.LoggedIn = false;
        return `${this.nombre} cerró sesión correctamente.`;
    }
    /** Devuelve un mensaje de despedida */
    despedir() {
        return `Adiós ${this.getNombre()}.`;
    }
}
