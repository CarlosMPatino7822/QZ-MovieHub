import {Cinematografia} from "./Cinematografia";
export class Pelicula extends Cinematografia {
    genero: string;
    director: string;
    duracion: number;
    premios: string[];
    actores: string[];

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

    // Getters
    public getGenero(): string {
        return this.genero;
    }

    public getDirector(): string {
        return this.director;
    }

    public getDuracion(): number {
        return this.duracion;
    }

    public getPremios(): string[] {
        return this.premios;
    }

    public getActores(): string[] {
        return this.actores;
    }

    // Setters
    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public setDirector(director: string): void {
        this.director = director;
    }

    public setDuracion(duracion: number): void {
        this.duracion = duracion;
    }

    public setPremios(premios: string[]): void {
        this.premios = premios;
    }

    public setActores(actores: string[]): void {
        this.actores = actores;
    }

    public esGanadoraDePremio(premio: string): boolean {
    if (!Array.isArray(this.premios)) return false;
    for (let i = 0; i < this.premios.length; i++) {
        if (this.premios[i] === premio) {
            return true;
        }
    }
    return false;
}

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

    // Método 3: Devuelve la duración en horas
    public calcularDuracionEnHoras(): number {
        return this.duracion / 60;
    }

    // Método 4: Verifica si la película fue dirigida por un director específico
    public esDelDirector(director: string): boolean {
        return this.director === director;
    }

    // Método 5: Devuelve el género principal de la película
    public obtenerGeneroPrincipal(): string {
        return this.genero;
    }
}