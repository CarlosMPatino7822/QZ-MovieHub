import { Serie } from "../modelo/Serie.js";
import { generarSeries } from "./generarSeries.js";

export function MostrarSeries(): void {

    console.log("Mostrando series");
    console.log("sigue el proceso");
    const contenedor = document.getElementById("contenedor-Peliculas");
    if (!contenedor) {
        console.error("No se encontró el contenedor con id='contenedor-Peliculas'");
        return;
    }
    contenedor.innerHTML = "";
    console.log("Contenedor encontrado");

    const series: Serie[] = generarSeries();
    series.forEach((serie) => {
        const divSerie = document.createElement("div");
        divSerie.className = "pelicula";

        const enlace = document.createElement("a");
        enlace.href = "detalle.html";
        enlace.target = "_blank";

        const img = document.createElement("img");
        img.src = serie.getImagen();
        img.alt = serie.getNombre();
        enlace.appendChild(img);
        const divInfo = document.createElement("div");
        divInfo.innerHTML = `
      <h2>${serie.getNombre()}</h2>
      <p><strong>Fecha de publicación:</strong> ${serie.getFechaDePublicacion()}</p>
      <p><strong>Edad mínima:</strong> ${serie.getRestriccionDeEdad()}+</p>
      <p><strong>Descripción:</strong> ${serie.getDescripcion()}</p>
      <p><strong>Idioma original:</strong> ${serie.getIdiomaOriginal()}</p>
      <p><strong>Doblajes:</strong> ${serie.getDoblajes().join(", ")}</p>
      <p><strong>Subtítulos:</strong> ${serie.getSubtitulos().join(", ")}</p>
    `;
        const btnDetalles = document.createElement("button");
        btnDetalles.textContent = "Ver detalles";
        btnDetalles.addEventListener("click", () => {
            window.open("detalle.html", "_blank");
        });
        divInfo.appendChild(btnDetalles);
        divSerie.appendChild(enlace);
        divSerie.appendChild(divInfo);
        contenedor.appendChild(divSerie);
    });
    if (contenedor != null) {
        console.log("contenedor llenito");
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