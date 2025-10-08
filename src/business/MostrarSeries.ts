import { Serie } from "../modelo/Serie.js";
import { generarSeries } from "./generarSeries.js";

export function MostrarSeries(): void {

    console.log("Mostrando series");
    console.log("sigue el proceso");
    console.log("Aca si entro :D");
    const contenedor = document.getElementById("contenedor-cinematografia");


    const series = generarSeries();
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
            MostrarSeries();
        });
    }
});