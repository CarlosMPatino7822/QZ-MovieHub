import { generarPeliculas } from "./generarPeliculas.js";
/**
 * Busca una película por nombre y la muestra en el contenedor correspondiente.
 * Si no se encuentra, muestra un mensaje de error.
 * Si el campo está vacío, solicita al usuario que ingrese un nombre.
 */
export function buscarPeliculaByNombre() {
    var _a;
    console.log("Aca si entro :D");
    const contenedor = document.getElementById("contenedor-Peliculas");
    // Genera la lista de películas
    const peliculas = generarPeliculas();
    if (!contenedor) {
        console.error("El contenedor de películas no se encontró.");
        return;
    }
    contenedor.innerHTML = "";
    console.log("Contenedor encontrado");
    const input = document.getElementById("filtrar");
    const nombrePeli = (_a = input === null || input === void 0 ? void 0 : input.value) !== null && _a !== void 0 ? _a : "";
    console.log("El nombre de la pelicula es: " + nombrePeli);
    if (nombrePeli.trim() === "") {
        contenedor.innerHTML = "<p>Por favor ingresa el nombre de una película.</p>";
        return;
    }
    // Busca y muestra la película que coincide con el nombre
    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        if (pelicula && pelicula.nombre == nombrePeli) {
            const movie = pelicula;
            contenedor.innerHTML += `
            <div class="pelicula">
                <img src="${movie.imagen}" alt="${movie.nombre}">
                <div>
                    <h2>${movie.nombre}</h2>
                    <p><strong>Fecha de publicación:</strong> ${movie.fechaDePublicacion}</p>
                    <p><strong>Edad mínima:</strong> ${movie.restriccionDeEdad}+</p>
                    <p><strong>Descripción:</strong> ${movie.descripcion}</p>
                    <p><strong>Idioma original:</strong> ${movie.idiomaOriginal}</p>
                    <p><strong>Doblajes:</strong> ${movie.doblajes.join(", ")}</p>
                    <p><strong>Subtítulos:</strong> ${movie.subtitulos.join(", ")}</p>
                    <button class="btn-detalles" data-nombre="${movie.nombre}">
                        Ver detalles
                    </button>
                </div>
            </div>
        `;
        }
    } // delegación de eventos para los botones
    contenedor.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("btn-detalles")) {
            const nombrePeli = target.getAttribute("data-nombre");
            if (nombrePeli) {
                window.open(`descripcionCinematografia.html?nombre=${encodeURIComponent(nombrePeli)}`, "_blank");
            }
        }
    });
    // Si no se encontró ninguna película, muestra mensaje
    if (contenedor.innerHTML === "") {
        contenedor.innerHTML = "<p>No se encontraron películas con ese nombre.</p>";
    }
}
/**
 * Agrega el evento al botón para mostrar las películas cuando el DOM está cargado.
 */
document.addEventListener('DOMContentLoaded', () => {
    const Buscar = document.getElementById('btn-filtrar');
    if (Buscar) {
        Buscar.addEventListener('click', () => {
            buscarPeliculaByNombre();
        });
    }
});
