import { User } from "./user.js";

/**
 * Clase que representa a un administrador del sistema QZ-MovieHub.
 * Hereda de la clase User
 * Añade atributos y métodos específicos del rol de administrador.
 */
export class Admin extends User {
    /** Identificador único del administrador */
    public idAdmin: string;

    /** Teléfono de contacto del administrador */
    public telefono: string;

    /** Fecha de ingreso al sistema (formato: YYYY-MM-DD) */
    public fechaIngreso: string;

    /** EPS asociada al administrador */
    public eps: string;

    /** ARL asociada al administrador */
    public arl: string;

    /**
     * Constructor que crea una instancia de Admin.
     * Recibe los datos de usuario más los específicos del administrador.
     *
     * @param correo - Correo electrónico del administrador
     * @param pais - País de residencia
     * @param idiomaPrincipal - Idioma principal
     * @param membresia - Estado de membresía
     * @param cedula - Cédula del administrador
     * @param nombre - Nombre del administrador
     * @param apellido - Apellido del administrador
     * @param edad - Edad del administrador
     * @param clave - Clave de acceso
     * @param direccion - Dirección de residencia
     * @param peliculaFavorita - Película favorita
     * @param idAdmin - Identificador único del administrador
     * @param telefono - Teléfono de contacto
     * @param fechaIngreso - Fecha de ingreso al sistema
     * @param eps - EPS asociada
     * @param arl - ARL asociada
     */
    constructor(
        correo: string,
        pais: string,
        idiomaPrincipal: string,
        membresia: boolean,
        cedula: string,
        nombre: string,
        apellido: string,
        edad: number,
        clave: string,
        direccion: string,
        peliculaFavorita: string,
        idAdmin: string,
        telefono: string,
        fechaIngreso: string,
        eps: string,
        arl: string
    ) {
        super(
            correo,
            "", // idUser sin uso
            pais,
            idiomaPrincipal,
            membresia,
            cedula,
            nombre,
            apellido,
            edad,
            clave,
            direccion,
            peliculaFavorita
        );

        // Atributos propios del admin
        this.idAdmin = idAdmin;
        this.telefono = telefono;
        this.fechaIngreso = fechaIngreso;
        this.eps = eps;
        this.arl = arl;
    }

    // ------------------- GETTERS -------------------

    /** Obtiene el identificador del administrador */
    public getIdAdmin(): string {
        return this.idAdmin;
    }

    /** Obtiene el teléfono del administrador */
    public getTelefono(): string {
        return this.telefono;
    }

    /** Obtiene la fecha de ingreso del administrador */
    public getFechaIngreso(): string {
        return this.fechaIngreso;
    }

    /** Obtiene la EPS del administrador */
    public getEps(): string {
        return this.eps;
    }

    /** Obtiene la ARL del administrador */
    public getArl(): string {
        return this.arl;
    }

    // ------------------- SETTERS -------------------

    /** Establece el identificador del administrador */
    public setIdAdmin(value: string): void {
        this.idAdmin = value;
    }

    /** Establece el teléfono del administrador */
    public setTelefono(value: string): void {
        this.telefono = value;
    }

    /** Establece la fecha de ingreso del administrador */
    public setFechaIngreso(value: string): void {
        this.fechaIngreso = value;
    }

    /** Establece la EPS del administrador */
    public setEps(value: string): void {
        this.eps = value;
    }

    /** Establece la ARL del administrador */
    public setArl(value: string): void {
        this.arl = value;
    }

    // ------------------- MÉTODOS ADICIONALES -------------------

    /**
     * Calcula la antigüedad del administrador dentro del sistema.
     * @param anioActual - Año actual para calcular la diferencia.
     * @returns Un mensaje indicando cuántos años lleva el administrador.
     */
    public calcularAntiguedad(anioActual: number): string {
        const fecha = new Date(this.fechaIngreso);
        const anioIngreso = fecha.getFullYear();
        const antiguedad = anioActual - anioIngreso;
        return `${this.getNombre()} ha estado ${antiguedad} años siendo parte de QZ-MovieHub.`;
    }

    /**
     * Envía una notificación de ingreso al administrador.
     * @returns Un mensaje confirmando la notificación.
     */
    public notificarIngreso(): string {
        return `Se ha enviado una notificación al teléfono ${this.telefono} por su ingreso, ${this.getNombre()}.`;
    }

    /**
     * Verifica el estado de la ARL del administrador.
     * @returns Un mensaje recordatorio sobre la ARL.
     */
    public verificarArl(): string {
        return `${this.getNombre()}, recuerda verificar tu estado en la ARL (${this.arl}).`;
    }

    /**
     * Calcula los días faltantes para la próxima reunión mensual.
     * @param fechaActual - Fecha actual en formato "YYYY-MM-DD".
     * @returns Un mensaje indicando cuántos días faltan.
     */
    public calcularReunion(fechaActual: string): string {
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
        const diasFaltantes = Math.ceil(
            (siguienteReunion.getTime() - fechaHoy.getTime()) / msPorDia
        );

        return `Faltan ${diasFaltantes} días para la próxima reunión mensual, ${this.getNombre()}.`;
    }

    /**
     * Envía un mensaje de cierre de sesión del administrador.
     * @returns Un mensaje de despedida.
     */
    public despedirAdmin(): string {
        return `El administrador ${this.getNombre()} ha cerrado sesión correctamente.`;
    }
}
