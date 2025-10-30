import { Cinematografia } from "./Cinematografia.js";
/**
 * Clase Pelicula representa una película, extendiendo la clase Cinematografia.
 */
export class Pelicula extends Cinematografia {
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
    constructor(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen, genero, director, duracion, premios = [], actores = []) {
        super(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen);
        this.director = director;
        this.duracion = duracion;
        this.genero = genero;
        this.premios = premios;
        this.actores = actores;
    }
    /** Obtiene el género principal de la película */
    getGenero() {
        return this.genero;
    }
    /** Obtiene el director de la película */
    getDirector() {
        return this.director;
    }
    /** Obtiene la duración en minutos */
    getDuracion() {
        return this.duracion;
    }
    /** Obtiene la lista de premios */
    getPremios() {
        return this.premios;
    }
    /** Obtiene la lista de actores */
    getActores() {
        return this.actores;
    }
    /**
     * Establece el género principal de la película
     * @param genero Nuevo género
     */
    setGenero(genero) {
        this.genero = genero;
    }
    /**
     * Establece el director de la película
     * @param director Nuevo director
     */
    setDirector(director) {
        this.director = director;
    }
    /**
     * Establece la duración en minutos
     * @param duracion Nueva duración
     */
    setDuracion(duracion) {
        this.duracion = duracion;
    }
    /**
     * Establece la lista de premios
     * @param premios Nueva lista de premios
     */
    setPremios(premios) {
        this.premios = premios;
    }
    /**
     * Establece la lista de actores
     * @param actores Nueva lista de actores
     */
    setActores(actores) {
        this.actores = actores;
    }
    /**
     * Verifica si la película ha ganado un premio específico.
     * @param premio Premio a verificar
     * @returns true si ha ganado el premio, false en caso contrario
     */
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
    /**
     * Agrega un actor a la lista si no existe.
     * @param actor Nombre del actor a agregar
     */
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
    /**
     * Devuelve la duración en horas.
     * @returns Duración en horas
     */
    calcularDuracionEnHoras() {
        return this.duracion / 60;
    }
    /**
     * Verifica si la película fue dirigida por un director específico.
     * @param director Nombre del director a verificar
     * @returns true si coincide, false en caso contrario
     */
    esDelDirector(director) {
        return this.director === director;
    }
    /**
     * Devuelve el género principal de la película.
     * @returns Género principal
     */
    obtenerGeneroPrincipal() {
        return this.genero;
    }
}
//# sourceMappingURL=Pelicula.js.map