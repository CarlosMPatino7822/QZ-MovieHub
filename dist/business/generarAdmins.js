import { Admin } from "../modelo/admin.js";
export function generarAdmins() {
    const admins = [
        new Admin("201", "Laura", "Pérez", 30, "Av. 20", "Inception", "1995-08-10", "admin123", "A001", "3001112233", "2018-03-01", "SURA", "Positiva"),
        new Admin("202", "Andrés", "Martínez", 40, "Calle 50", "Avatar", "1983-02-15", "admin456", "A002", "3102223344", "2015-06-10", "Sanitas", "Bolívar"),
        new Admin("203", "Miguel", "Suarez", 35, "Calle 100", "Gladiator", "1988-12-05", "admin789", "A003", "3203334455", "2016-11-20", "Compensar", "Colpatria")
    ];
    return admins;
}
export const admins = generarAdmins();
