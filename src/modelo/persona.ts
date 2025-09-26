export class Persona {
    cedula: string;
    nombre: string;
    apellido: string;
    edad: number;
    direccion: string;
    peliculaFavorita: string;
    fechaCumple: string;
    private LoggedIn: boolean;
    clave: string;

    constructor(cedula: string, nombre: string, apellido: string,
        edad: number, direccion: string, peliculaFavorita: string, fechaCumple: string, clave: string) {
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
    getCedula(): string {
        return this.cedula;
    }
    getClave(): string {
        return this.clave;
    }

    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    getEdad(): number {
        return this.edad;
    }

    getDireccion(): string {
        return this.direccion;
    }

    getPeliculaFavorita(): string {
        return this.peliculaFavorita;
    }

    getFechaCumple(): string {
        return this.fechaCumple;
    }


    setCedula(value: string): void {
        this.cedula = value;
    }
    setClave(value: string): void {
        this.clave = value;
    }

    setNombre(value: string): void {
        this.nombre = value;
    }

    setApellido(value: string): void {
        this.apellido = value;
    }

    setEdad(value: number): void {
        this.edad = value;
    }

    setDireccion(value: string): void {
        this.direccion = value;
    }

    setPeliculaFavorita(value: string): void {
        this.peliculaFavorita = value;
    }

    setFechaCumple(value: string): void {
        this.fechaCumple = value;
    }


    logIn(): string {
        if (this.LoggedIn) {
            return '$(this.nombre) ya estaba logueado';
        }
        return '$(this.nombre) inicio sesion correctamente'
    }

    logOut(): string {
        if (!this.LoggedIn) {
            return '${ this.nombre } no estaba logueado';
        }
        this.LoggedIn = false;
        return '${ this.nombre } cerró sesión correctamente';
    }

    recordarPeliculaFavorita(): string {
        return `Hola ${this.nombre}, tu película favorita es "${this.peliculaFavorita}"`;
    }

    contenido(): string {
        if (this.edad >= 18) {
            return `Hola ${this.nombre}, tienes acceso a todo el contenido.`;
        }
        return `Hola ${this.nombre}, algunos contenidos están restringidos por tu edad.`;
    }
    contenidoSimilar(): string {
        return `Tu película favorita es ${this.peliculaFavorita}, recuerda que puedes encontrar contenido similar a tu gusto.`;
    }

}