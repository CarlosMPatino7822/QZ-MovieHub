import {Cinematografia} from "./Cinematografia";

export class Serie extends Cinematografia {
    capitulos: string[];
    temporadas: number;
    creador: string;
    genero: string;
    actoresPrincipales: string[];
    duracionPromedioCapitulo: number;
    calificacion: number;
    estado: string;

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

    // Getters
    public getCapitulos(): string[] {
        return this.capitulos;
    }

    public getTemporadas(): number {
        return this.temporadas;
    }

    public getCreador(): string {
        return this.creador;
    }

    public getGenero(): string {
        return this.genero;
    }

    public getActoresPrincipales(): string[] {
        return this.actoresPrincipales;
    }

    public getDuracionPromedioCapitulo(): number {
        return this.duracionPromedioCapitulo;
    }

    public getCalificacion(): number {
        return this.calificacion;
    }

    public getEstado(): string {
        return this.estado;
    }

    // Setters
    public setCapitulos(capitulos: string[]): void {
        this.capitulos = capitulos;
    }

    public setTemporadas(temporadas: number): void {
        this.temporadas = temporadas;
    }

    public setCreador(creador: string): void {
        this.creador = creador;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public setActoresPrincipales(actores: string[]): void {
        this.actoresPrincipales = actores;
    }

    public setDuracionPromedioCapitulo(duracion: number): void {
        this.duracionPromedioCapitulo = duracion;
    }

    public setCalificacion(calificacion: number): void {
        this.calificacion = calificacion;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    // Métodos adicionales

    // 1. Agregar un capítulo
    public agregarCapitulo(nombreCapitulo: string): void {
        this.capitulos.push(nombreCapitulo);
    }

    // 2. Agregar un actor principal
    public agregarActorPrincipal(actor: string): void {
        if (!this.actoresPrincipales.includes(actor)) {
            this.actoresPrincipales.push(actor);
        }
    }

    // 3. Cambiar el estado de la serie
    public cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
    }

    // 4. Calificar la serie (actualiza la calificación promedio)
    public actualizarCalificacion(nuevaCalificacion: number): void {
        this.calificacion = (this.calificacion + nuevaCalificacion) / 2;
    }

    // 5. Obtener resumen de la serie
    public resumenSerie(): string {
        return `${this.nombre} (${this.temporadas} temporadas) - ${this.genero}. Estado: ${this.estado}`;
    }
}