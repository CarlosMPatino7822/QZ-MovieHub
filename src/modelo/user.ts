import { Persona } from "./persona";

export class User extends Persona {
    private correo: string;
    private idUser: string;
    private pais: string;
    private idiomaPrincipal: string;
    private membresia: boolean;

    constructor( cedula: string, nombre: string, apellido: string, edad: number, direccion: string, peliculaFavorita: string,
                 fechaCumple: string, clave: string, correo: string, idUser: string, pais: string, idiomaPrincipal: string,
                 membresia: boolean) {
       super(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave);
        this.correo = correo;
        this.idUser = idUser;
        this.pais = pais;
        this.idiomaPrincipal = idiomaPrincipal;
        this.membresia = membresia;
    }


    public getCorreo(): string {
        return this.correo;
    }

    public setCorreo(correo: string): void {
        this.correo = correo;
    }

    public getIdUser(): string {
        return this.idUser;
    }

    public setIdUser(idUser: string): void {
        this.idUser = idUser;
    }

    public getPais(): string {
        return this.pais;
    }

    public setPais(pais: string): void {
        this.pais = pais;
    }

    public getIdiomaPrincipal(): string {
        return this.idiomaPrincipal;
    }

    public setIdiomaPrincipal(idiomaPrincipal: string): void {
        this.idiomaPrincipal = idiomaPrincipal;
    }

    public getMembresia(): boolean {
        return this.membresia;
    }

    public setMembresia(membresia: boolean): void {
        this.membresia = membresia;
    }


    public recordarMembresia(): string {
        return this.membresia
            ? `Hola ${this.getNombre()}, tu membresía está activa. `
            : `Hola ${this.getNombre()}, tu membresía no está activa. `;
    }

    public recordarIdioma(): string {
        return `Hola ${this.getNombre()}, tu idioma de preferencia es ${this.idiomaPrincipal}.`;
    }
     
    saludar(): string {
        return 'Hola, ${ this.nombre } ${ this.apellido }, bienvenido';
    }

    
    felizCumple(): string {
        this.edad += 1;
        return '¡Feliz cumpleaños ${ this.nombre } !Ahora tienes ${ this.edad } años';
    }

    
    despedir(): string {
        return 'Adiós ${ this.nombre }';
    }
}