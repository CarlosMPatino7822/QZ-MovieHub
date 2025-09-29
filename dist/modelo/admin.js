import { Persona } from "./persona";
// Clase que representa a un administrador del sistema QZ-MovieHub
// Hereda de Persona y añade atributos y métodos específicos del rol de administrador
export class Admin extends Persona {
    // Constructor que crea una instancia de Admin
    // Recibe los datos personales y los atributos propios del administrador
    constructor(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave, idAdmin, telefono, fechaIngreso, eps, arl) {
        super(cedula, nombre, apellido, edad, direccion, peliculaFavorita, fechaCumple, clave);
        this.idAdmin = idAdmin;
        this.telefono = telefono;
        this.fechaIngreso = fechaIngreso;
        this.eps = eps;
        this.arl = arl;
    }
    // -------- GETTERS --------
    // Devuelve el identificador del administrador
    getIdAdmin() {
        return this.idAdmin;
    }
    // Devuelve el teléfono del administrador
    getTelefono() {
        return this.telefono;
    }
    // Devuelve la fecha de ingreso del administrador
    getFechaIngreso() {
        return this.fechaIngreso;
    }
    // Devuelve la EPS del administrador
    getEps() {
        return this.eps;
    }
    // Devuelve la ARL del administrador
    getArl() {
        return this.arl;
    }
    // -------- SETTERS --------
    // Establece el identificador del administrador
    setIdAdmin(value) {
        this.idAdmin = value;
    }
    // Establece el teléfono del administrador
    setTelefono(value) {
        this.telefono = value;
    }
    // Establece la fecha de ingreso del administrador
    setFechaIngreso(value) {
        this.fechaIngreso = value;
    }
    // Establece la EPS del administrador
    setEps(value) {
        this.eps = value;
    }
    // Establece la ARL del administrador
    setArl(value) {
        this.arl = value;
    }
    // -------- MÉTODOS ADICIONALES --------
    // Calcula la antigüedad del administrador en años dentro del sistema
    calcularAntiguedad(anioActual) {
        const fecha = new Date(this.fechaIngreso);
        const anioIngreso = fecha.getFullYear();
        const antiguedad = anioActual - anioIngreso;
        return `${this.getNombre()} ha estado desde hace ${antiguedad} años siendo parte de QZ`;
    }
    // Envía una notificación de ingreso al administrador
    notificarIngreso() {
        return `Se ha enviado un mensaje de confirmación a su teléfono ${this.telefono} por su ingreso a nombre de ${this.getNombre()}.`;
    }
    // Verifica el estado de la ARL del administrador
    verificarArl() {
        return `${this.getNombre()}, recuerda verificar tu estado en la ARL (${this.arl}).`;
    }
    // Verifica si hoy es el cumpleaños del administrador
    verificarCumple(fechaActual) {
        const [ano, mes, dia] = fechaActual.split("-");
        const [mesCumple, diaCumple] = this.getFechaCumple().split("-");
        if (mes === mesCumple && dia === diaCumple) {
            return `Feliz cumpleaños ${this.getNombre()}, hoy tienes el día libre`;
        }
        return `Hoy no es el cumple de ${this.getNombre()}.`;
    }
    // Calcula los días faltantes para la próxima reunión mensual
    calcularReunion(fechaActual) {
        const fechaIngreso = new Date(this.fechaIngreso);
        const fechaHoy = new Date(fechaActual);
        let siguienteReunion = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(), fechaIngreso.getDate());
        if (siguienteReunion < fechaHoy) {
            siguienteReunion.setMonth(siguienteReunion.getMonth() + 1);
        }
        const msPorDia = 1000 * 60 * 60 * 24;
        const diasFaltantes = Math.ceil((siguienteReunion.getTime() - fechaHoy.getTime()) / msPorDia);
        return `Faltan ${diasFaltantes} días para la próxima reunión mensual, ${this.getNombre()}.`;
    }
}
