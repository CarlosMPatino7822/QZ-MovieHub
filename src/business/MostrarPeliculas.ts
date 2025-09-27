import { Pelicula } from "../modelo/Pelicula.js";
import { generarPeliculas } from "./generarPeliculas.js";

export function MostrarPelicula(): void {
  console.log("Mostrando peliculas");
  console.log("sigue el proceso");
 const contenedor = document.getElementById("contenedor-Peliculas");
  if (!contenedor) {
    console.error("No se encontró el contenedor con id='contenedor-Peliculas'");
    return;
  }
  contenedor.innerHTML = "";
  console.log("Contenedor encontrado");
    contenedor.innerHTML = "";
    const peliculas: Pelicula[] = generarPeliculas();
    peliculas.forEach((pelicula) => {
      contenedor.innerHTML += `<div class="pelicula">
          <a href="detalle.html" target="_blank">
            <img src="${pelicula.getImagen()}" alt="${pelicula.getNombre()}">
          </a>
          <div>
            <h2>${pelicula.getNombre()}</h2>
            <p><strong>Fecha de publicación:</strong> ${pelicula.getFechaDePublicacion()}</p>
            <p><strong>Edad mínima:</strong> ${pelicula.getRestriccionDeEdad()}+</p>
            <p><strong>Descripción:</strong> ${pelicula.getDescripcion()}</p>
            <p><strong>Idioma original:</strong> ${pelicula.getIdiomaOriginal()}</p>
            <p><strong>Doblajes:</strong> ${pelicula.getDoblajes().join(", ")}</p>
            <p><strong>Subtítulos:</strong> ${pelicula.getSubtitulos().join(", ")}</p>
            <button onclick="window.open('detalle.html', '_blank')">Ver detalles</button>
          </div>
        </div>`
    });
  if (contenedor != null) {
    console.log("contenedor llenito")
  }
}

// Agregar el evento al botón para mostrar las películas
document.addEventListener('DOMContentLoaded', () => {
  const btnCargar = document.getElementById('btn-cargar');
  if (btnCargar) {
    btnCargar.addEventListener('click', () => {
      MostrarPelicula();
    });
  }
});