import { Pelicula } from "../modelo/Pelicula.js";
import { generarPeliculas } from "./generarPeliculas.js";

export function MostrarPelicula(): void {
  console.log("Mostrando peliculas");
  const contenedor = document.getElementById('contenedor');
  if (contenedor !== null) {
    contenedor.innerHTML = "";
    const peliculas: Pelicula[] = generarPeliculas();
    peliculas.forEach((pelicula) => {
      contenedor.innerHTML += `<div class="pelicula">
          <img src="${pelicula.getImagen()}" alt="${pelicula.getNombre()}">
          <div>
            <h2>${pelicula.getNombre()}</h2>
            <p><strong>Fecha de publicación:</strong> ${pelicula.getFechaDePublicacion()}</p>
            <p><strong>Edad mínima:</strong> ${pelicula.getRestriccionDeEdad()}+</p>
            <p><strong>Descripción:</strong> ${pelicula.getDescripcion()}</p>
            <p><strong>Idioma original:</strong> ${pelicula.getIdiomaOriginal()}</p>
            <p><strong>Doblajes:</strong> ${pelicula.getDoblajes().join(", ")}</p>
            <p><strong>Subtítulos:</strong> ${pelicula.getSubtitulos().join(", ")}</p>
          </div>
        </div>`
    });
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