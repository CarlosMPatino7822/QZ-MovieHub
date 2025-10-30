import { Cinematografia } from "./Cinematografia.js";
/**
 * Clase Serie representa una serie de televisión, extendiendo la clase Cinematografia.
 */
export class Serie extends Cinematografia {
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
    constructor(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen, capitulos, temporadas, creador, genero, actoresPrincipales, duracionPromedioCapitulo, calificacion, estado) {
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
    getCapitulos() {
        return this.capitulos;
    }
    /** Obtiene el número de temporadas */
    getTemporadas() {
        return this.temporadas;
    }
    /** Obtiene el creador de la serie */
    getCreador() {
        return this.creador;
    }
    /** Obtiene el género principal de la serie */
    getGenero() {
        return this.genero;
    }
    /** Obtiene la lista de actores principales */
    getActoresPrincipales() {
        return this.actoresPrincipales;
    }
    /** Obtiene la duración promedio de cada capítulo */
    getDuracionPromedioCapitulo() {
        return this.duracionPromedioCapitulo;
    }
    /** Obtiene la calificación promedio de la serie */
    getCalificacion() {
        return this.calificacion;
    }
    /** Obtiene el estado actual de la serie */
    getEstado() {
        return this.estado;
    }
    /**
     * Establece la lista de capítulos
     * @param capitulos Nueva lista de capítulos
     */
    setCapitulos(capitulos) {
        this.capitulos = capitulos;
    }
    /**
     * Establece el número de temporadas
     * @param temporadas Nuevo número de temporadas
     */
    setTemporadas(temporadas) {
        this.temporadas = temporadas;
    }
    /**
     * Establece el creador de la serie
     * @param creador Nuevo creador
     */
    setCreador(creador) {
        this.creador = creador;
    }
    /**
     * Establece el género principal de la serie
     * @param genero Nuevo género
     */
    setGenero(genero) {
        this.genero = genero;
    }
    /**
     * Establece la lista de actores principales
     * @param actores Nueva lista de actores principales
     */
    setActoresPrincipales(actores) {
        this.actoresPrincipales = actores;
    }
    /**
     * Establece la duración promedio de cada capítulo
     * @param duracion Nueva duración promedio
     */
    setDuracionPromedioCapitulo(duracion) {
        this.duracionPromedioCapitulo = duracion;
    }
    /**
     * Establece la calificación promedio de la serie
     * @param calificacion Nueva calificación
     */
    setCalificacion(calificacion) {
        this.calificacion = calificacion;
    }
    /**
     * Establece el estado actual de la serie
     * @param estado Nuevo estado
     */
    setEstado(estado) {
        this.estado = estado;
    }
    /**
     * Agrega un capítulo a la lista de capítulos.
     * @param nombreCapitulo Nombre del capítulo a agregar
     */
    agregarCapitulo(nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
    }
    /**
     * Agrega un actor principal si no existe en la lista.
     * @param actor Nombre del actor a agregar
     */
    agregarActorPrincipal(actor) {
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
    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
    /**
     * Actualiza la calificación promedio de la serie.
     * @param nuevaCalificacion Nueva calificación a considerar
     */
    actualizarCalificacion(nuevaCalificacion) {
        this.calificacion = (this.calificacion + nuevaCalificacion) / 2;
    }
    /**
     * Devuelve un resumen de la serie.
     * @returns Resumen en formato string
     */
    resumenSerie() {
        return `${this.nombre} (${this.temporadas} temporadas) - ${this.genero}. Estado: ${this.estado}`;
    }
}
