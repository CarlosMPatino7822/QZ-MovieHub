/**
 * Clase Cinematografia representa una obra cinematográfica con sus atributos principales.
 */
export class Cinematografia {
    /** Nombre de la obra */
    nombre: string;
    /** Fecha de publicación */
    fechaDePublicacion: string;
    /** Restricción de edad */
    restriccionDeEdad: string;
    /** Descripción de la obra */
    descripcion: string;
    /** Idioma original */
    idiomaOriginal: string;
    /** Lista de idiomas disponibles para doblaje */
    doblajes: string[];
    /** Lista de idiomas disponibles para subtítulos */
    subtitulos: string[];
    /** URL o ruta de la imagen representativa */
    imagen: string;

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

    /** Obtiene el nombre de la obra */
    public getNombre(): string {
        return this.nombre;
    }

    /** Obtiene la fecha de publicación */
    public getFechaDePublicacion(): string {
        return this.fechaDePublicacion;
    }

    /** Obtiene la restricción de edad */
    public getRestriccionDeEdad(): string {
        return this.restriccionDeEdad;
    }

    /** Obtiene la descripción de la obra */
    public getDescripcion(): string {
        return this.descripcion;
    }

    /** Obtiene el idioma original */
    public getIdiomaOriginal(): string {
        return this.idiomaOriginal;
    }

    /** Obtiene la lista de doblajes */
    public getDoblajes(): string[] {
        return this.doblajes;
    }

    /** Obtiene la lista de subtítulos */
    public getSubtitulos(): string[] {
        return this.subtitulos;
    }

    /** Obtiene la imagen de la obra */
    public getImagen(): string {
        return this.imagen;
    }

    // Setters

    /**
     * Establece el nombre de la obra
     * @param nombre Nuevo nombre
     */
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    /**
     * Establece la fecha de publicación
     * @param fecha Nueva fecha
     */
    public setFechaDePublicacion(fecha: string): void {
        this.fechaDePublicacion = fecha;
    }

    /**
     * Establece la restricción de edad
     * @param restriccion Nueva restricción
     */
    public setRestriccionDeEdad(restriccion: string): void {
        this.restriccionDeEdad = restriccion;
    }

    /**
     * Establece la descripción de la obra
     * @param descripcion Nueva descripción
     */
    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    /**
     * Establece el idioma original
     * @param idioma Nuevo idioma
     */
    public setIdiomaOriginal(idioma: string): void {
        this.idiomaOriginal = idioma;
    }

    /**
     * Establece la lista de doblajes
     * @param doblajes Nueva lista de doblajes
     */
    public setDoblajes(doblajes: string[]): void {
        this.doblajes = doblajes;
    }

    /**
     * Establece la lista de subtítulos
     * @param subtitulos Nueva lista de subtítulos
     */
    public setSubtitulos(subtitulos: string[]): void {
        this.subtitulos = subtitulos;
    }

    /**
     * Establece la imagen de la obra
     * @param imagen Nueva imagen
     */
    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    // Métodos adicionales

    /**
     * Agrega un idioma a la lista de doblajes si no existe.
     * @param idioma Idioma a agregar
     */
    public agregarDoblaje(idioma: string): void {
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
    public agregarSubtitulo(idioma: string): void {
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
    public tieneDoblaje(idioma: string): boolean {
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
    public tieneSubtitulo(idioma: string): boolean {
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
    public resumen(): string {
        return `${this.nombre} (${this.fechaDePublicacion}) - ${this.descripcion}`;
    }
}