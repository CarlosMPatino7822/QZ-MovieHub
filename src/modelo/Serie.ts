import {Cinematografia} from "./Cinematografia.js";

/**
 * Clase Serie representa una serie de televisión, extendiendo la clase Cinematografia.
 */
export class Serie extends Cinematografia {
    /** Lista de capítulos de la serie */
    capitulos: string[];
    /** Número de temporadas */
    temporadas: number;
    /** Creador de la serie */
    creador: string;
    /** Género principal de la serie */
    genero: string;
    /** Lista de actores principales */
    actoresPrincipales: string[];
    /** Duración promedio de cada capítulo en minutos */
    duracionPromedioCapitulo: number;
    /** Calificación promedio de la serie */
    calificacion: number;
    /** Estado actual de la serie (ej. "En emisión", "Finalizada") */
    estado: string;

    /**
     * Constructor de la clase Serie.
     * @param nombre Nombre de la obra
     * @param fechaDePublicacion Fecha de publicación
     * @param restriccionDeEdad Restricción de edad
     * @param descripcion Descripción de la obra
     * @param idiomaOriginal Idioma original
     * @param doblajes Idiomas disponibles para doblaje
     * @param subtitulos Idiomas disponibles para subtítulos
     * @param imagen URL o ruta de la imagen
     * @param capitulos Lista de capítulos
     * @param temporadas Número de temporadas
     * @param creador Creador de la serie
     * @param genero Género principal
     * @param actoresPrincipales Lista de actores principales
     * @param duracionPromedioCapitulo Duración promedio de cada capítulo
     * @param calificacion Calificación promedio
     * @param estado Estado actual de la serie
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
        capitulos: string[],
        temporadas: number,
        creador: string,
        genero: string,
        actoresPrincipales: string[],
        duracionPromedioCapitulo: number,
        calificacion: number,
        estado: string
    ) {
        super(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen);
        this.capitulos = capitulos;
        this.temporadas = temporadas;
        this.creador = creador;
        this.genero = genero;
        this.actoresPrincipales = actoresPrincipales;
        this.duracionPromedioCapitulo = duracionPromedioCapitulo;
        this.calificacion = calificacion;
        this.estado = estado;
    }

    /** Obtiene la lista de capítulos */
    public getCapitulos(): string[] {
        return this.capitulos;
    }

    /** Obtiene el número de temporadas */
    public getTemporadas(): number {
        return this.temporadas;
    }

    /** Obtiene el creador de la serie */
    public getCreador(): string {
        return this.creador;
    }

    /** Obtiene el género principal de la serie */
    public getGenero(): string {
        return this.genero;
    }

    /** Obtiene la lista de actores principales */
    public getActoresPrincipales(): string[] {
        return this.actoresPrincipales;
    }

    /** Obtiene la duración promedio de cada capítulo */
    public getDuracionPromedioCapitulo(): number {
        return this.duracionPromedioCapitulo;
    }

    /** Obtiene la calificación promedio de la serie */
    public getCalificacion(): number {
        return this.calificacion;
    }

    /** Obtiene el estado actual de la serie */
    public getEstado(): string {
        return this.estado;
    }

    /**
     * Establece la lista de capítulos
     * @param capitulos Nueva lista de capítulos
     */
    public setCapitulos(capitulos: string[]): void {
        this.capitulos = capitulos;
    }

    /**
     * Establece el número de temporadas
     * @param temporadas Nuevo número de temporadas
     */
    public setTemporadas(temporadas: number): void {
        this.temporadas = temporadas;
    }

    /**
     * Establece el creador de la serie
     * @param creador Nuevo creador
     */
    public setCreador(creador: string): void {
        this.creador = creador;
    }

    /**
     * Establece el género principal de la serie
     * @param genero Nuevo género
     */
    public setGenero(genero: string): void {
        this.genero = genero;
    }

    /**
     * Establece la lista de actores principales
     * @param actores Nueva lista de actores principales
     */
    public setActoresPrincipales(actores: string[]): void {
        this.actoresPrincipales = actores;
    }

    /**
     * Establece la duración promedio de cada capítulo
     * @param duracion Nueva duración promedio
     */
    public setDuracionPromedioCapitulo(duracion: number): void {
        this.duracionPromedioCapitulo = duracion;
    }

    /**
     * Establece la calificación promedio de la serie
     * @param calificacion Nueva calificación
     */
    public setCalificacion(calificacion: number): void {
        this.calificacion = calificacion;
    }

    /**
     * Establece el estado actual de la serie
     * @param estado Nuevo estado
     */
    public setEstado(estado: string): void {
        this.estado = estado;
    }

    /**
     * Agrega un capítulo a la lista de capítulos.
     * @param nombreCapitulo Nombre del capítulo a agregar
     */
    public agregarCapitulo(nombreCapitulo: string): void {
        this.capitulos.push(nombreCapitulo);
    }

    /**
     * Agrega un actor principal si no existe en la lista.
     * @param actor Nombre del actor a agregar
     */
    public agregarActorPrincipal(actor: string): void {
        let existe = false;
        for (let i = 0; i < this.actoresPrincipales.length; i++) {
            if (this.actoresPrincipales[i] === actor) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            this.actoresPrincipales.push(actor);
        }
    }

    /**
     * Cambia el estado actual de la serie.
     * @param nuevoEstado Nuevo estado de la serie
     */
    public cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
    }

    /**
     * Actualiza la calificación promedio de la serie.
     * @param nuevaCalificacion Nueva calificación a considerar
     */
    public actualizarCalificacion(nuevaCalificacion: number): void {
        this.calificacion = (this.calificacion + nuevaCalificacion) / 2;
    }

    /**
     * Devuelve un resumen de la serie.
     * @returns Resumen en formato string
     */
    public resumenSerie(): string {
        return `${this.nombre} (${this.temporadas} temporadas) - ${this.genero}. Estado: ${this.estado}`;
    }
}