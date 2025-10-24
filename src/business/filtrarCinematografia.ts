
import { getPopularMovies } from "../tmdb/tmdb.js";
import { getPopularTVShows } from "../tmdb/tmdb.js";

/**
 * Busca una película por nombre y la muestra en el contenedor correspondiente.
 * Si no se encuentra, muestra un mensaje de error.
 * Si el campo está vacío, solicita al usuario que ingrese un nombre.
 */
async function buscarByNombre(): Promise<void> {
    console.log("Aca si entro :D");
    
    const contenedor = document.getElementById("contenedor-cinematografia");

    // Genera la lista de películas
    const peliculas = await getPopularMovies();
    // Genera series
    const series = await getPopularTVShows();
    
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
        if (movie && movie.title == nombreCinematografico) {
            contenedor.innerHTML += `
            <div class="pelicula">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="https://image.tmdb.org/t/p/w500${movie.title}">
                <div>
                    <h2>${movie.title}</h2>
                    <p><strong>Fecha de publicación:</strong> ${movie.release_date}</p>
                    <p><strong>Descripción:</strong> ${movie.overview}</p>
                    <p><strong>Votos:</strong> ${movie.vote_average}</p>
                    <button class="btn-detalles" data-nombre="${movie.title}">
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
        if (serie && serie.name == nombreCinematografico) {
            contenedor.innerHTML += `
            <div class="pelicula">
                <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                <div>
                    <h2>${serie.name}</h2>
                    <p><strong>Fecha de publicación:</strong> ${serie.first_air_date}</p>
                    <p><strong>Votos:</strong> ${serie.vote_average}</p>
                    <p><strong>Descripción:</strong> ${serie.overview}</p>
                    <button class="btn-detalles" data-nombre="${serie.name}">
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
        contenedor.innerHTML = "<p>No se encontraron películas ni series con ese nombre.</p>";
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