// hashPassword.ts
/**
 * Utilidad para hashear contraseñas usando SHA-256
 * Este módulo proporciona funciones para hashear y verificar contraseñas de forma segura
 */

/**
 * Hashea una contraseña usando el algoritmo SHA-256
 * @param password - La contraseña en texto plano
 * @returns Una promesa que resuelve al hash en formato hexadecimal
 */
export async function hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

/**
 * Verifica si una contraseña coincide con un hash
 * @param password - La contraseña en texto plano a verificar
 * @param hash - El hash almacenado para comparar
 * @returns Una promesa que resuelve a true si coinciden, false si no
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    const passwordHash = await hashPassword(password);
    return passwordHash === hash;
}