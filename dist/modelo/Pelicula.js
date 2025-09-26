import { Cinematografia } from "./Cinematografia";
export class Pelicula extends Cinematografia {
    constructor(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen, genero, director, duracion) {
        super(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen);
        this.director = director;
        this.duracion = duracion;
        this.genero = genero;
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
    //metodos aducionales
    reproducir() {
        console.log(`Reproduciendo la película: ${this.nombre}`);
    }
    agregarDoblaje(idioma) {
        if (!this.doblajes.includes(idioma)) {
            this.doblajes.push(idioma);
        }
    }
    agregarSubtitulo(idioma) {
        if (!this.subtitulos.includes(idioma)) {
            this.subtitulos.push(idioma);
        }
    }
    tieneDoblaje(idioma) {
        return this.doblajes.includes(idioma);
    }
    tieneSubtitulo(idioma) {
        return this.subtitulos.includes(idioma);
    }
    resumen() {
        return `${this.nombre} (${this.fechaDePublicacion}) - ${this.descripcion}`;
    }
}
