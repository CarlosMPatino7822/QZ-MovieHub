import { Serie } from "../modelo/Serie.js";
import { getPopularTVShows } from "../tmdb/tmdb.js";
async function mostrarSeries() {
    console.log("Mostrando series");
    console.log("sigue el proceso");
    console.log("Aca si entro :D");
    const contenedor = document.getElementById("contenedor-cinematografia");
    const series = await getPopularTVShows();
    if (!contenedor) {
        console.error("El contenedor de cinematografia no se encontró.");
        return;
    }
    contenedor.innerHTML = "";
    console.log("Contenedor encontrado");
    // Busca y muestra la serie que coincide con el nombre
    for (let i = 0; i < series.length; i++) {
        const serie = series[i];
        if (serie) {
            contenedor.innerHTML += `
            <div class="pelicula">
                <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="https://image.tmdb.org/t/p/w500${serie.poster_path}">
                <div>
                    <h2>${serie.name}</h2>
                    <p><strong>Fecha de publicación:</strong> ${serie.first_air_date}</p>              
                    <p><strong>Descripción:</strong> ${serie.overview}</p>
                    <p><strong>:</strong> ${serie.vote_average}</p>
                    <button class="btn-detalles" data-nombre="${serie.name}">
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
            const nombreSerie = target.getAttribute("data-nombre");
            if (nombreSerie) {
                // Carga la página en la misma pestaña
                window.location.href = `descripcionCinematografia.html?nombre=${encodeURIComponent(nombreSerie)}`;
            }
        }
    });
    // Si no se encontró ninguna película, muestra mensaje
    if (contenedor.innerHTML === "") {
        contenedor.innerHTML = "<p>No se encontraron películas con ese nombre.</p>";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const btnCargarSeries = document.getElementById('btn-cargarSeries');
    if (btnCargarSeries) {
        btnCargarSeries.addEventListener('click', () => {
            mostrarSeries();
        });
    }
});
