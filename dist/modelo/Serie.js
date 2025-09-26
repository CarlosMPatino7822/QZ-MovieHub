import { Cinematografia } from "./Cinematografia.js";
export class Serie extends Cinematografia {
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
    // Getters
    getCapitulos() {
        return this.capitulos;
    }
    getTemporadas() {
        return this.temporadas;
    }
    getCreador() {
        return this.creador;
    }
    getGenero() {
        return this.genero;
    }
    getActoresPrincipales() {
        return this.actoresPrincipales;
    }
    getDuracionPromedioCapitulo() {
        return this.duracionPromedioCapitulo;
    }
    getCalificacion() {
        return this.calificacion;
    }
    getEstado() {
        return this.estado;
    }
    // Setters
    setCapitulos(capitulos) {
        this.capitulos = capitulos;
    }
    setTemporadas(temporadas) {
        this.temporadas = temporadas;
    }
    setCreador(creador) {
        this.creador = creador;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setActoresPrincipales(actores) {
        this.actoresPrincipales = actores;
    }
    setDuracionPromedioCapitulo(duracion) {
        this.duracionPromedioCapitulo = duracion;
    }
    setCalificacion(calificacion) {
        this.calificacion = calificacion;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    // Métodos adicionales
    // 1. Agregar un capítulo
    agregarCapitulo(nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
    }
    // 2. Agregar un actor principal
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
    // 3. Cambiar el estado de la serie
    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
    // 4. Calificar la serie (actualiza la calificación promedio)
    actualizarCalificacion(nuevaCalificacion) {
        this.calificacion = (this.calificacion + nuevaCalificacion) / 2;
    }
    // 5. Obtener resumen de la serie
    resumenSerie() {
        return `${this.nombre} (${this.temporadas} temporadas) - ${this.genero}. Estado: ${this.estado}`;
    }
}
