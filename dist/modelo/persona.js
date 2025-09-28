export class Persona {
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
    getCedula() {
        return this.cedula;
    }
    getClave() {
        return this.clave;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getEdad() {
        return this.edad;
    }
    getDireccion() {
        return this.direccion;
    }
    getPeliculaFavorita() {
        return this.peliculaFavorita;
    }
    getFechaCumple() {
        return this.fechaCumple;
    }
    setCedula(value) {
        this.cedula = value;
    }
    setClave(value) {
        this.clave = value;
    }
    setNombre(value) {
        this.nombre = value;
    }
    setApellido(value) {
        this.apellido = value;
    }
    setEdad(value) {
        this.edad = value;
    }
    setDireccion(value) {
        this.direccion = value;
    }
    setPeliculaFavorita(value) {
        this.peliculaFavorita = value;
    }
    setFechaCumple(value) {
        this.fechaCumple = value;
    }
    logIn() {
        if (this.LoggedIn) {
            return '$(this.nombre) ya estaba logueado';
        }
        return '$(this.nombre) inicio sesion correctamente';
    }
    logOut() {
        if (!this.LoggedIn) {
            return '${ this.nombre } no estaba logueado';
        }
        this.LoggedIn = false;
        return '${ this.nombre } cerró sesión correctamente';
    }
    recordarPeliculaFavorita() {
        return `Hola ${this.nombre}, tu película favorita es "${this.peliculaFavorita}"`;
    }
    contenido() {
        if (this.edad >= 18) {
            return `Hola ${this.nombre}, tienes acceso a todo el contenido.`;
        }
        return `Hola ${this.nombre}, algunos contenidos están restringidos por tu edad.`;
    }
    contenidoSimilar() {
        return `Tu película favorita es ${this.peliculaFavorita}, recuerda que puedes encontrar contenido similar a tu gusto.`;
    }
}
