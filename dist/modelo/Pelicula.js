import { Cinematografia } from "./Cinematografia.js";
export class Pelicula extends Cinematografia {
    constructor(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen, genero, director, duracion, premios = [], actores = []) {
        super(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen);
        this.director = director;
        this.duracion = duracion;
        this.genero = genero;
        this.premios = premios;
        this.actores = actores;
    }
    // Getters
    getGenero() {
        return this.genero;
    }
    getDirector() {
        return this.director;
    }
    getDuracion() {
        return this.duracion;
    }
    getPremios() {
        return this.premios;
    }
    getActores() {
        return this.actores;
    }
    // Setters
    setGenero(genero) {
        this.genero = genero;
    }
    setDirector(director) {
        this.director = director;
    }
    setDuracion(duracion) {
        this.duracion = duracion;
    }
    setPremios(premios) {
        this.premios = premios;
    }
    setActores(actores) {
        this.actores = actores;
    }
    esGanadoraDePremio(premio) {
        if (!Array.isArray(this.premios))
            return false;
        for (let i = 0; i < this.premios.length; i++) {
            if (this.premios[i] === premio) {
                return true;
            }
        }
        return false;
    }
    agregarActor(actor) {
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
    // Método 3: Devuelve la duración en horas
    calcularDuracionEnHoras() {
        return this.duracion / 60;
    }
    // Método 4: Verifica si la película fue dirigida por un director específico
    esDelDirector(director) {
        return this.director === director;
    }
    // Método 5: Devuelve el género principal de la película
    obtenerGeneroPrincipal() {
        return this.genero;
    }
}
