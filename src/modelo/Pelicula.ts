import {Cinematografia} from "./Cinematografia";
export class Pelicula extends Cinematografia {
    genero: string;
    director: string;
    duracion: number;
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
        duracion: number
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

    

    //metodos aducionales
    reproducir(): void {
        console.log(`Reproduciendo la película: ${this.nombre}`);
    }
    public agregarDoblaje(idioma: string): void {
        if (!this.doblajes.includes(idioma)) {
            this.doblajes.push(idioma);
        }
    }

    public agregarSubtitulo(idioma: string): void {
        if (!this.subtitulos.includes(idioma)) {
            this.subtitulos.push(idioma);
        }
    }

    public tieneDoblaje(idioma: string): boolean {
        return this.doblajes.includes(idioma);
    }

    public tieneSubtitulo(idioma: string): boolean {
        return this.subtitulos.includes(idioma);
    }

    public resumen(): string {
        return `${this.nombre} (${this.fechaDePublicacion}) - ${this.descripcion}`;
    }

    
}