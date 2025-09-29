/**
 * Clase Cinematografia representa una obra cinematográfica con sus atributos principales.
 */
export class Cinematografia {
    /**
     * Constructor de la clase Cinematografia.
     * @param nombre Nombre de la obra
     * @param fechaDePublicacion Fecha de publicación
     * @param restriccionDeEdad Restricción de edad
     * @param descripcion Descripción de la obra
     * @param idiomaOriginal Idioma original
     * @param doblajes Idiomas disponibles para doblaje
     * @param subtitulos Idiomas disponibles para subtítulos
     * @param imagen URL o ruta de la imagen
     */
    constructor(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen) {
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
    /** Obtiene el nombre de la obra */
    getNombre() {
        return this.nombre;
    }
    /** Obtiene la fecha de publicación */
    getFechaDePublicacion() {
        return this.fechaDePublicacion;
    }
    /** Obtiene la restricción de edad */
    getRestriccionDeEdad() {
        return this.restriccionDeEdad;
    }
    /** Obtiene la descripción de la obra */
    getDescripcion() {
        return this.descripcion;
    }
    /** Obtiene el idioma original */
    getIdiomaOriginal() {
        return this.idiomaOriginal;
    }
    /** Obtiene la lista de doblajes */
    getDoblajes() {
        return this.doblajes;
    }
    /** Obtiene la lista de subtítulos */
    getSubtitulos() {
        return this.subtitulos;
    }
    /** Obtiene la imagen de la obra */
    getImagen() {
        return this.imagen;
    }
    // Setters
    /**
     * Establece el nombre de la obra
     * @param nombre Nuevo nombre
     */
    setNombre(nombre) {
        this.nombre = nombre;
    }
    /**
     * Establece la fecha de publicación
     * @param fecha Nueva fecha
     */
    setFechaDePublicacion(fecha) {
        this.fechaDePublicacion = fecha;
    }
    /**
     * Establece la restricción de edad
     * @param restriccion Nueva restricción
     */
    setRestriccionDeEdad(restriccion) {
        this.restriccionDeEdad = restriccion;
    }
    /**
     * Establece la descripción de la obra
     * @param descripcion Nueva descripción
     */
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    /**
     * Establece el idioma original
     * @param idioma Nuevo idioma
     */
    setIdiomaOriginal(idioma) {
        this.idiomaOriginal = idioma;
    }
    /**
     * Establece la lista de doblajes
     * @param doblajes Nueva lista de doblajes
     */
    setDoblajes(doblajes) {
        this.doblajes = doblajes;
    }
    /**
     * Establece la lista de subtítulos
     * @param subtitulos Nueva lista de subtítulos
     */
    setSubtitulos(subtitulos) {
        this.subtitulos = subtitulos;
    }
    /**
     * Establece la imagen de la obra
     * @param imagen Nueva imagen
     */
    setImagen(imagen) {
        this.imagen = imagen;
    }
    // Métodos adicionales
    /**
     * Agrega un idioma a la lista de doblajes si no existe.
     * @param idioma Idioma a agregar
     */
    agregarDoblaje(idioma) {
        let existe = false;
        for (let i = 0; i < this.doblajes.length; i++) {
            if (this.doblajes[i] === idioma) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            this.doblajes.push(idioma);
        }
    }
    /**
     * Agrega un idioma a la lista de subtítulos si no existe.
     * @param idioma Idioma a agregar
     */
    agregarSubtitulo(idioma) {
        let existe = false;
        for (let i = 0; i < this.subtitulos.length; i++) {
            if (this.subtitulos[i] === idioma) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            this.subtitulos.push(idioma);
        }
    }
    /**
     * Verifica si existe un doblaje en el idioma especificado.
     * @param idioma Idioma a verificar
     * @returns true si existe, false en caso contrario
     */
    tieneDoblaje(idioma) {
        for (let i = 0; i < this.doblajes.length; i++) {
            if (this.doblajes[i] === idioma) {
                return true;
            }
        }
        return false;
    }
    /**
     * Verifica si existe un subtítulo en el idioma especificado.
     * @param idioma Idioma a verificar
     * @returns true si existe, false en caso contrario
     */
    tieneSubtitulo(idioma) {
        for (let i = 0; i < this.subtitulos.length; i++) {
            if (this.subtitulos[i] === idioma) {
                return true;
            }
        }
        return false;
    }
    /**
     * Devuelve un resumen de la obra.
     * @returns Resumen en formato string
     */
    resumen() {
        return `${this.nombre} (${this.fechaDePublicacion}) - ${this.descripcion}`;
    }
}
