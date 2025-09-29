import { Cinematografia } from "./Cinematografia.js";

/**
 * Clase Pelicula representa una película, extendiendo la clase Cinematografia.
 */
export class Pelicula extends Cinematografia {
    /** Género principal de la película */
    genero: string;
    /** Director de la película */
    director: string;
    /** Duración en minutos */
    duracion: number;
    /** Lista de premios obtenidos */
    premios: string[];
    /** Lista de actores principales */
    actores: string[];

    /**
     * Constructor de la clase Pelicula.
     * @param nombre Nombre de la obra
     * @param fechaDePublicacion Fecha de publicación
     * @param restriccionDeEdad Restricción de edad
     * @param descripcion Descripción de la obra
     * @param idiomaOriginal Idioma original
     * @param doblajes Idiomas disponibles para doblaje
     * @param subtitulos Idiomas disponibles para subtítulos
     * @param imagen URL o ruta de la imagen
     * @param genero Género principal
     * @param director Director de la película
     * @param duracion Duración en minutos
     * @param premios Lista de premios obtenidos
     * @param actores Lista de actores principales
     */
    constructor(
        nombre: string,
        fechaDePublicacion: string,
        restriccionDeEdad: string,
        descripcion: string,
        idiomaOriginal: string,
        doblajes: string[],
        subtitulos: string[],
        imagen: string,
        genero: string,
        director: string,
        duracion: number,
        premios: string[] = [],
        actores: string[] = []
    ) {
        super(
            nombre,
            fechaDePublicacion,
            restriccionDeEdad,
            descripcion,
            idiomaOriginal,
            doblajes,
            subtitulos,
            imagen
        );
        this.director = director;
        this.duracion = duracion;
        this.genero = genero;
        this.premios = premios;
        this.actores = actores;
    }

    /** Obtiene el género principal de la película */
    public getGenero(): string {
        return this.genero;
    }

    /** Obtiene el director de la película */
    public getDirector(): string {
        return this.director;
    }

    /** Obtiene la duración en minutos */
    public getDuracion(): number {
        return this.duracion;
    }

    /** Obtiene la lista de premios */
    public getPremios(): string[] {
        return this.premios;
    }

    /** Obtiene la lista de actores */
    public getActores(): string[] {
        return this.actores;
    }

    /**
     * Establece el género principal de la película
     * @param genero Nuevo género
     */
    public setGenero(genero: string): void {
        this.genero = genero;
    }

    /**
     * Establece el director de la película
     * @param director Nuevo director
     */
    public setDirector(director: string): void {
        this.director = director;
    }

    /**
     * Establece la duración en minutos
     * @param duracion Nueva duración
     */
    public setDuracion(duracion: number): void {
        this.duracion = duracion;
    }

    /**
     * Establece la lista de premios
     * @param premios Nueva lista de premios
     */
    public setPremios(premios: string[]): void {
        this.premios = premios;
    }

    /**
     * Establece la lista de actores
     * @param actores Nueva lista de actores
     */
    public setActores(actores: string[]): void {
        this.actores = actores;
    }

    /**
     * Verifica si la película ha ganado un premio específico.
     * @param premio Premio a verificar
     * @returns true si ha ganado el premio, false en caso contrario
     */
    public esGanadoraDePremio(premio: string): boolean {
        if (!Array.isArray(this.premios)) return false;
        for (let i = 0; i < this.premios.length; i++) {
            if (this.premios[i] === premio) {
                return true;
            }
        }
        return false;
    }

    /**
     * Agrega un actor a la lista si no existe.
     * @param actor Nombre del actor a agregar
     */
    public agregarActor(actor: string): void {
        if (!Array.isArray(this.actores)) {
            this.actores = [];
        }
        let existe = false;
        for (let i = 0; i < this.actores.length; i++) {
            if (this.actores[i] === actor) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            this.actores.push(actor);
        }
    }

    /**
     * Devuelve la duración en horas.
     * @returns Duración en horas
     */
    public calcularDuracionEnHoras(): number {
        return this.duracion / 60;
    }

    /**
     * Verifica si la película fue dirigida por un director específico.
     * @param director Nombre del director a verificar
     * @returns true si coincide, false en caso contrario
     */
    public esDelDirector(director: string): boolean {
        return this.director === director;
    }

    /**
     * Devuelve el género principal de la película.
     * @returns Género principal
     */
    public obtenerGeneroPrincipal(): string {
        return this.genero;
    }
}