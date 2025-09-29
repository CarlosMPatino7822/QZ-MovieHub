// Clase que representa a una persona en el sistema QZ-MovieHub.
export class Persona {
    // Cédula de la persona
    cedula: string;
    // Nombre de la persona
    nombre: string;
    // Apellido de la persona
    apellido: string;
    // Edad de la persona
    edad: number;
    // Dirección de la persona
    direccion: string;
    // Película favorita de la persona
    peliculaFavorita: string;
    // Fecha de cumpleaños de la persona
    fechaCumple: string;
    // Estado de sesión de la persona
    private LoggedIn: boolean;
    // Clave de acceso de la persona
    clave: string;

    // Constructor que crea una instancia de Persona
    constructor(
        cedula: string, 
        nombre: string, 
        apellido: string,
        edad: number, 
        direccion: string, 
        peliculaFavorita: string, 
        fechaCumple: string, 
        clave: string
    ) {
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
    getCedula(): string {
        return this.cedula;
    }

    // Obtiene la clave de la persona
    getClave(): string {
        return this.clave;
    }

    // Obtiene el nombre de la persona
    getNombre(): string {
        return this.nombre;
    }

    // Obtiene el apellido de la persona
    getApellido(): string {
        return this.apellido;
    }

    // Obtiene la edad de la persona
    getEdad(): number {
        return this.edad;
    }

    // Obtiene la dirección de la persona
    getDireccion(): string {
        return this.direccion;
    }

    // Obtiene la película favorita de la persona
    getPeliculaFavorita(): string {
        return this.peliculaFavorita;
    }

    // Obtiene la fecha de cumpleaños de la persona
    getFechaCumple(): string {
        return this.fechaCumple;
    }

    // ---------------- SETTERS ----------------

    // Establece la cédula de la persona
    setCedula(value: string): void {
        this.cedula = value;
    }

    // Establece la clave de la persona
    setClave(value: string): void {
        this.clave = value;
    }

    // Establece el nombre de la persona
    setNombre(value: string): void {
        this.nombre = value;
    }

    // Establece el apellido de la persona
    setApellido(value: string): void {
        this.apellido = value;
    }

    // Establece la edad de la persona
    setEdad(value: number): void {
        this.edad = value;
    }

    // Establece la dirección de la persona
    setDireccion(value: string): void {
        this.direccion = value;
    }

    // Establece la película favorita de la persona
    setPeliculaFavorita(value: string): void {
        this.peliculaFavorita = value;
    }

    // Establece la fecha de cumpleaños de la persona
    setFechaCumple(value: string): void {
        this.fechaCumple = value;
    }

    // ---------------- MÉTODOS DE SESIÓN ----------------

    // Inicia sesión para la persona
    logIn(): string {
        if (this.LoggedIn) {
            return `${this.nombre} ya estaba logueado`;
        }
        this.LoggedIn = true;
        return `${this.nombre} inicio sesion correctamente`;
    }

    // Cierra sesión de la persona
    logOut(): string {
        if (!this.LoggedIn) {
            return `${this.nombre} no estaba logueado`;
        }
        this.LoggedIn = false;
        return `${this.nombre} cerró sesión correctamente`;
    }

    // ---------------- MÉTODOS ADICIONALES ----------------

    // Devuelve un mensaje recordando la película favorita de la persona
    recordarPeliculaFavorita(): string {
        return `Hola ${this.nombre}, tu película favorita es "${this.peliculaFavorita}"`;
    }

    // Devuelve un mensaje sobre el acceso a contenido según la edad
    contenido(): string {
        if (this.edad >= 18) {
            return `Hola ${this.nombre}, tienes acceso a todo el contenido.`;
        }
        return `Hola ${this.nombre}, algunos contenidos están restringidos por tu edad.`;
    }

    // Devuelve un mensaje recomendando contenido similar a la película favorita
    contenidoSimilar(): string {
        return `Tu película favorita es ${this.peliculaFavorita}, recuerda que puedes encontrar contenido similar a tu gusto.`;
    }
}