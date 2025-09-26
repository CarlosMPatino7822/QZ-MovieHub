export class Cinematografia {
    nombre: string;
    fechaDePublicacion: string;
    restriccionDeEdad: string;
    descripcion: string;
    idiomaOriginal: string;
    doblajes: string[];
    subtitulos: string[];
    imagen: string;

    constructor(
        nombre: string,
        fechaDePublicacion: string,
        restriccionDeEdad: string,
        descripcion: string,
        idiomaOriginal: string,
        doblajes: string[],
        subtitulos: string[],
        imagen: string
    ) {
        this.nombre = nombre;
        this.fechaDePublicacion = fechaDePublicacion;
        this.restriccionDeEdad = restriccionDeEdad;
        this.descripcion = descripcion;
        this.idiomaOriginal = idiomaOriginal;
        this.doblajes = doblajes;
        this.subtitulos = subtitulos;
        this.imagen = imagen;
    }

    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getFechaDePublicacion(): string {
        return this.fechaDePublicacion;
    }

    public getRestriccionDeEdad(): string {
        return this.restriccionDeEdad;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public getIdiomaOriginal(): string {
        return this.idiomaOriginal;
    }

    public getDoblajes(): string[] {
        return this.doblajes;
    }

    public getSubtitulos(): string[] {
        return this.subtitulos;
    }

    public getImagen(): string {
        return this.imagen;
    }

    // Setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setFechaDePublicacion(fecha: string): void {
        this.fechaDePublicacion = fecha;
    }

    public setRestriccionDeEdad(restriccion: string): void {
        this.restriccionDeEdad = restriccion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public setIdiomaOriginal(idioma: string): void {
        this.idiomaOriginal = idioma;
    }

    public setDoblajes(doblajes: string[]): void {
        this.doblajes = doblajes;
    }

    public setSubtitulos(subtitulos: string[]): void {
        this.subtitulos = subtitulos;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    // Métodos adicionales

    public agregarDoblaje(idioma: string): void {
        if (!this.doblajes.includes(idioma)) {
            this.doblajes.push(idioma);
        }
    }

    public agregarSubtitulo(idioma: string): void {
        if (!this.subtitulos.includes(idioma)) {
            this.subtitulos.push(idioma);
        }
    }

    public tieneDoblaje(idioma: string): boolean {
        return this.doblajes.includes(idioma);
    }

    public tieneSubtitulo(idioma: string): boolean {
        return this.subtitulos.includes(idioma);
    }

    public resumen(): string {
        return `${this.nombre} (${this.fechaDePublicacion}) - ${this.descripcion}`;
    }
}