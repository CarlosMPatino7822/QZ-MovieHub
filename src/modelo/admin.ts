import { Persona } from "./persona"

// Clase que representa a un administrador del sistema QZ-MovieHub
// Hereda de Persona y añade atributos y métodos específicos del rol de administrador
export class Admin extends Persona {
    // Identificador único del administrador
    idAdmin: string
    // Teléfono de contacto del administrador
    telefono: string
    // Fecha de ingreso al sistema
    fechaIngreso: string
    // EPS asociada al administrador
    eps: string
    // ARL asociada al administrador
    arl: string

    // Constructor que crea una instancia de Admin
    // Recibe los datos personales y los atributos propios del administrador
    constructor(
        cedula: string, nombre: string, apellido: string, edad: number,
        direccion: string, peliculaFavorita: string, fechaCumple: string,
        clave: string, idAdmin: string, telefono: string, fechaIngreso: string,
        eps: string, arl: string
    ) {
        super(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave)
        this.idAdmin = idAdmin
        this.telefono = telefono
        this.fechaIngreso = fechaIngreso
        this.eps = eps
        this.arl = arl
    }

    // -------- GETTERS --------

    // Devuelve el identificador del administrador
    getIdAdmin(): string {
        return this.idAdmin
    }

    // Devuelve el teléfono del administrador
    getTelefono(): string {
        return this.telefono
    }

    // Devuelve la fecha de ingreso del administrador
    getFechaIngreso(): string {
        return this.fechaIngreso
    }

    // Devuelve la EPS del administrador
    getEps(): string {
        return this.eps
    }

    // Devuelve la ARL del administrador
    getArl(): string {
        return this.arl
    }

    // -------- SETTERS --------

    // Establece el identificador del administrador
    setIdAdmin(value: string): void {
        this.idAdmin = value
    }

    // Establece el teléfono del administrador
    setTelefono(value: string): void {
        this.telefono = value
    }

    // Establece la fecha de ingreso del administrador
    setFechaIngreso(value: string): void {
        this.fechaIngreso = value
    }

    // Establece la EPS del administrador
    setEps(value: string): void {
        this.eps = value
    }

    // Establece la ARL del administrador
    setArl(value: string): void {
        this.arl = value
    }

    // -------- MÉTODOS ADICIONALES --------

    // Calcula la antigüedad del administrador en años dentro del sistema
    calcularAntiguedad(anioActual: number): string {
        const fecha = new Date(this.fechaIngreso)
        const anioIngreso = fecha.getFullYear()
        const antiguedad = anioActual - anioIngreso
        return `${this.getNombre()} ha estado desde hace ${antiguedad} años siendo parte de QZ`
    }

    // Envía una notificación de ingreso al administrador
    notificarIngreso(): string {
        return `Se ha enviado un mensaje de confirmación a su teléfono ${this.telefono} por su ingreso a nombre de ${this.getNombre()}.`
    }

    // Verifica el estado de la ARL del administrador
    verificarArl(): string {
        return `${this.getNombre()}, recuerda verificar tu estado en la ARL (${this.arl}).`
    }

    // Verifica si hoy es el cumpleaños del administrador
    verificarCumple(fechaActual: string): string {
        const [ano, mes, dia] = fechaActual.split("-")
        const [mesCumple, diaCumple] = this.getFechaCumple().split("-")
        if (mes === mesCumple && dia === diaCumple) {
            return `Feliz cumpleaños ${this.getNombre()}, hoy tienes el día libre`
        }
        return `Hoy no es el cumple de ${this.getNombre()}.`
    }

    // Calcula los días faltantes para la próxima reunión mensual
    calcularReunion(fechaActual: string): string {
        const fechaIngreso = new Date(this.fechaIngreso)
        const fechaHoy = new Date(fechaActual)
        let siguienteReunion = new Date(
            fechaHoy.getFullYear(),
            fechaHoy.getMonth(),
            fechaIngreso.getDate()
        )
        if (siguienteReunion < fechaHoy) {
            siguienteReunion.setMonth(siguienteReunion.getMonth() + 1)
        }
        const msPorDia = 1000 * 60 * 60 * 24
        const diasFaltantes = Math.ceil((siguienteReunion.getTime() - fechaHoy.getTime()) / msPorDia)
        return `Faltan ${diasFaltantes} días para la próxima reunión mensual, ${this.getNombre()}.`
    }
}