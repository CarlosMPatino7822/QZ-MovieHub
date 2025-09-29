// Clase que representa a una persona en el sistema QZ-MovieHub.
export class Persona {
    // Constructor que crea una instancia de Persona
    constructor(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.direccion = direccion;
        this.edad = edad;
        this.peliculaFavorita = peliculaFavorita;
        this.fechaCumple = fechaCumple;
        this.LoggedIn = false;
        this.clave = clave;
    }
    // ---------------- GETTERS ----------------
    // Obtiene la cédula de la persona
    getCedula() {
        return this.cedula;
    }
    // Obtiene la clave de la persona
    getClave() {
        return this.clave;
    }
    // Obtiene el nombre de la persona
    getNombre() {
        return this.nombre;
    }
    // Obtiene el apellido de la persona
    getApellido() {
        return this.apellido;
    }
    // Obtiene la edad de la persona
    getEdad() {
        return this.edad;
    }
    // Obtiene la dirección de la persona
    getDireccion() {
        return this.direccion;
    }
    // Obtiene la película favorita de la persona
    getPeliculaFavorita() {
        return this.peliculaFavorita;
    }
    // Obtiene la fecha de cumpleaños de la persona
    getFechaCumple() {
        return this.fechaCumple;
    }
    // ---------------- SETTERS ----------------
    // Establece la cédula de la persona
    setCedula(value) {
        this.cedula = value;
    }
    // Establece la clave de la persona
    setClave(value) {
        this.clave = value;
    }
    // Establece el nombre de la persona
    setNombre(value) {
        this.nombre = value;
    }
    // Establece el apellido de la persona
    setApellido(value) {
        this.apellido = value;
    }
    // Establece la edad de la persona
    setEdad(value) {
        this.edad = value;
    }
    // Establece la dirección de la persona
    setDireccion(value) {
        this.direccion = value;
    }
    // Establece la película favorita de la persona
    setPeliculaFavorita(value) {
        this.peliculaFavorita = value;
    }
    // Establece la fecha de cumpleaños de la persona
    setFechaCumple(value) {
        this.fechaCumple = value;
    }
    // ---------------- MÉTODOS DE SESIÓN ----------------
    // Inicia sesión para la persona
    logIn() {
        if (this.LoggedIn) {
            return `${this.nombre} ya estaba logueado`;
        }
        this.LoggedIn = true;
        return `${this.nombre} inicio sesion correctamente`;
    }
    // Cierra sesión de la persona
    logOut() {
        if (!this.LoggedIn) {
            return `${this.nombre} no estaba logueado`;
        }
        this.LoggedIn = false;
        return `${this.nombre} cerró sesión correctamente`;
    }
    // ---------------- MÉTODOS ADICIONALES ----------------
    // Devuelve un mensaje recordando la película favorita de la persona
    recordarPeliculaFavorita() {
        return `Hola ${this.nombre}, tu película favorita es "${this.peliculaFavorita}"`;
    }
    // Devuelve un mensaje sobre el acceso a contenido según la edad
    contenido() {
        if (this.edad >= 18) {
            return `Hola ${this.nombre}, tienes acceso a todo el contenido.`;
        }
        return `Hola ${this.nombre}, algunos contenidos están restringidos por tu edad.`;
    }
    // Devuelve un mensaje recomendando contenido similar a la película favorita
    contenidoSimilar() {
        return `Tu película favorita es ${this.peliculaFavorita}, recuerda que puedes encontrar contenido similar a tu gusto.`;
    }
}
