import { Persona } from "./persona";

export class Admin extends Persona {
    idAdmin: string;
    telefono: string;
    fechaIngreso: string;
    eps: string;
    arl: string;

    constructor(cedula: string, nombre: string, apellido: string, edad: number, direccion: string, peliculaFavorita: string,
        fechaCumple: string, clave: string, idAdmin: string, telefono: string, fechaIngreso: string, eps: string, arl: string) {
        super(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave);

        this.idAdmin = idAdmin;
        this.telefono = telefono;
        this.fechaIngreso = fechaIngreso;
        this.eps = eps;
        this.arl = arl;
    }

    getIdAdmin(): string {
        return this.idAdmin;
    }

    getTelefono(): string {
        return this.telefono;
    }

    getFechaIngreso(): string {
        return this.fechaIngreso;
    }

    getEps(): string {
        return this.eps;
    }

    getArl(): string {
        return this.arl;
    }

    setIdAdmin(value: string): void {
        this.idAdmin = value;
    }

    setTelefono(value: string): void {
        this.telefono = value;
    }

    setFechaIngreso(value: string): void {
        this.fechaIngreso = value;
    }

    setEps(value: string): void {
        this.eps = value;
    }

    setArl(value: string): void {
        this.arl = value;
    }

    calcularAntiguedad(anioActual: number): string {

        const fecha = new Date(this.fechaIngreso);
        const anioIngreso = fecha.getFullYear();
        const antiguedad = anioActual - anioIngreso;

        return `${this.getNombre()} ha estado desde hace ${antiguedad} años siendo parte de QZ`;
    }

    notificarIngreso(): string {
        return `Se ha enviado un mensaje de confirmación a su teléfono ${this.telefono} por su ingreso a nombre de${this.getNombre()}.`;
    }

    verificarArl(): string {
        return `${this.getNombre()}, recuerda verificar tu estado en la ARL (${this.arl}).`;
    }

    verificarCumple(fechaActual: string): string {
        const [anio, mes, dia] = fechaActual.split("-");
        const [mesCumple, diaCumple] = this.getFechaCumple().split("-");

        if (mes === mesCumple && dia === diaCumple) {
            return `Feliz cumpleaños ${this.getNombre()}, hoy tienes el día libre`;
        }
        return `Hoy no es el cumple de ${this.getNombre()}.`;
    }

    calcularReunion(fechaActual: string): string {
        const fechaIngreso = new Date(this.fechaIngreso);
        const fechaHoy = new Date(fechaActual);

        let siguienteReunion = new Date(
            fechaHoy.getFullYear(),
            fechaHoy.getMonth(),
            fechaIngreso.getDate()
        );

        if (siguienteReunion < fechaHoy) {
            siguienteReunion.setMonth(siguienteReunion.getMonth() + 1);
        }
        const msPorDia = 1000 * 60 * 60 * 24;
        const diasFaltantes = Math.ceil((siguienteReunion.getTime() - fechaHoy.getTime()) / msPorDia);

        return `Faltan ${diasFaltantes} días para la próxima reunión mensual, ${this.getNombre()}.`;
    }
}

