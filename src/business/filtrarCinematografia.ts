import { generarPeliculas } from "./generarPeliculas.js";
import { generarSeries } from "./generarSeries.js"
/**
 * Busca una película por nombre y la muestra en el contenedor correspondiente.
 * Si no se encuentra, muestra un mensaje de error.
 * Si el campo está vacío, solicita al usuario que ingrese un nombre.
 */
export function buscarByNombre(): void {
    console.log("Aca si entro :D");
    const contenedor = document.getElementById("contenedor-cinematografia");

    // Genera la lista de películas
    const peliculas = generarPeliculas();
    // Genera series
    const series = generarSeries();
    if (!contenedor) {
        console.error("El contenedor de cinematografia no se encontró.");
        return;
    }
    contenedor.innerHTML = "";
    console.log("Contenedor encontrado");
    const input = document.getElementById("filtrar") as HTMLInputElement | null;
    const nombreCinematografico: string = input?.value ?? "";
    console.log("El nombre es: " + nombreCinematografico);
    if (nombreCinematografico.trim() === "") {
        contenedor.innerHTML = "<p>Por favor ingresa el nombre de una película o serie valido.</p>";
        return;
    }

    // Busca y muestra la película que coincide con el nombre
    for (let i = 0; i < peliculas.length; i++) {
        const movie = peliculas[i];
        if (movie && movie.nombre == nombreCinematografico) {
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
    }// delegación de eventos para los botones
    // Busca y muestra la película que coincide con el nombre
    for (let i = 0; i < series.length; i++) {
        const serie = series[i];
        if (serie && serie.nombre == nombreCinematografico) {
            contenedor.innerHTML += `
            <div class="pelicula">
                <img src="${serie.imagen}" alt="${serie.nombre}">
                <div>
                    <h2>${serie.nombre}</h2>
                    <p><strong>Fecha de publicación:</strong> ${serie.fechaDePublicacion}</p>
                    <p><strong>Edad mínima:</strong> ${serie.restriccionDeEdad}+</p>
                    <p><strong>Descripción:</strong> ${serie.descripcion}</p>
                    <p><strong>Idioma original:</strong> ${serie.idiomaOriginal}</p>
                    <p><strong>Doblajes:</strong> ${serie.doblajes.join(", ")}</p>
                    <p><strong>Subtítulos:</strong> ${serie.subtitulos.join(", ")}</p>
                    <button class="btn-detalles" data-nombre="${serie.nombre}">
                        Ver detalles
                    </button>
                </div>
            </div>
        `;
        }
    }// delegación de eventos para los botones


    contenedor.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("btn-detalles")) {
            const nombreCinematografico = target.getAttribute("data-nombre");
            if (nombreCinematografico) {
                // Carga la página en la misma pestaña
                window.location.href = `descripcionCinematografia.html?nombre=${encodeURIComponent(nombreCinematografico)}`;
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
            buscarByNombre();
        });
    }
});