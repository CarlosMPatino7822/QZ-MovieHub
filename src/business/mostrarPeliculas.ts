/**
 * Módulo para mostrar películas en el contenedor principal de la página.
 *
 * Importa la clase Pelicula y la función generarPeliculas para obtener y renderizar la información de las películas.
 */
import { Pelicula } from "../modelo/Pelicula.js";
import { getPopularMovies } from "../tmdb/tmdb.js";

/**
 * Muestra las películas en el contenedor con id 'contenedor-Peliculas'.
 *
 * - Obtiene el contenedor del DOM.
 * - Llama a generarPeliculas para obtener el listado de películas.
 * - Por cada película, crea un bloque visual con imagen, información y botón de detalles.
 *
 * Variables:
 * contenedor - Elemento HTML donde se mostrarán las películas.
 * peliculas - Arreglo de objetos Pelicula generados.
 *
 * Métodos:
 * MostrarPelicula - Función principal para renderizar las películas.
 */
async function mostrarPelicula() {
/** 
  console.log("Mostrando peliculas");
  console.log("sigue el proceso");
  /**
   * Elemento contenedor donde se insertarán las películas.
   */
  const contenedor = document.getElementById("contenedor-cinematografia");

  // Genera la lista de películas
  const peliculas = await  getPopularMovies();
  if (!contenedor) {
    console.error("El contenedor de películas no se encontró.");
    return;
  }
  contenedor.innerHTML = "";
  console.log("Contenedor encontrado");


  for (let i = 0; i < peliculas.length; i++) {
    const movie = peliculas[i];
    if (movie) {
      contenedor.innerHTML += `
            <div class="pelicula">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                <div>
                    <h2>${movie.title}</h2>
                    <p><strong>Fecha de publicación:</strong> ${movie.release_date}</p>
                    <p><strong>Descripción:</strong> ${movie.overview}</p>
                    <p><strong>Idioma original:</strong> ${movie.vote_average}</p>
                    <button class="btn-detalles" data-nombre="${movie.title}">
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
      const nombrePeli = target.getAttribute("data-nombre");
      if (nombrePeli) {
        // Carga la página en la misma pestaña
        window.location.href = `descripcionCinematografia.html?nombre=${encodeURIComponent(nombrePeli)}`;
      }
    }
  });
  // Si no se encontró ninguna película, muestra mensaje
  if (contenedor.innerHTML === "") {
    contenedor.innerHTML = "<p>No se encontraron películas con ese nombre.</p>";
  }
}

// Agregar el evento al botón para mostrar las películas
document.addEventListener('DOMContentLoaded', () => {
  const btnCargar = document.getElementById('btn-cargar');
  if (btnCargar) {
    btnCargar.addEventListener('click', () => {
      mostrarPelicula();
    });
  }
});
