/**
 * Módulo para mostrar películas en el contenedor principal de la página.
 *
 * Importa la clase Pelicula y la función generarPeliculas para obtener y renderizar la información de las películas.
 */
import { Pelicula } from "../modelo/Pelicula.js";
import { generarPeliculas } from "./generarPeliculas.js";
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
export function MostrarPelicula() {
    console.log("Mostrando peliculas");
    console.log("sigue el proceso");
    /**
     * Elemento contenedor donde se insertarán las películas.
     */
    const contenedor = document.getElementById("contenedor-Peliculas");
    if (!contenedor) {
        console.error("No se encontró el contenedor con id='contenedor-Peliculas'");
        return;
    }
    contenedor.innerHTML = "";
    console.log("Contenedor encontrado");
    /**
     * Arreglo de películas a mostrar.
     */
    const peliculas = generarPeliculas();
    peliculas.forEach((pelicula) => {
        /**
         * Elemento div para cada película.
         */
        const divPelicula = document.createElement("div");
        divPelicula.className = "pelicula";
        /**
         * Enlace a la página de detalles de la película.
         */
        const enlace = document.createElement("a");
        enlace.href = "detalle.html";
        enlace.target = "_blank";
        /**
         * Imagen de la película.
         */
        const img = document.createElement("img");
        img.src = pelicula.getImagen();
        img.alt = pelicula.getNombre();
        enlace.appendChild(img);
        /**
         * Div con la información textual de la película.
         */
        const divInfo = document.createElement("div");
        divInfo.innerHTML = `
      <h2>${pelicula.getNombre()}</h2>
      <p><strong>Fecha de publicación:</strong> ${pelicula.getFechaDePublicacion()}</p>
      <p><strong>Edad mínima:</strong> ${pelicula.getRestriccionDeEdad()}+</p>
      <p><strong>Descripción:</strong> ${pelicula.getDescripcion()}</p>
      <p><strong>Idioma original:</strong> ${pelicula.getIdiomaOriginal()}</p>
      <p><strong>Doblajes:</strong> ${pelicula.getDoblajes().join(", ")}</p>
      <p><strong>Subtítulos:</strong> ${pelicula.getSubtitulos().join(", ")}</p>
    `;
        /**
         * Botón para ver detalles de la película.
         */
        const btnDetalles = document.createElement("button");
        btnDetalles.textContent = "Ver detalles";
        btnDetalles.addEventListener("click", () => {
            window.open("detalle.html", "_blank");
        });
        divInfo.appendChild(btnDetalles);
        divPelicula.appendChild(enlace);
        divPelicula.appendChild(divInfo);
        contenedor.appendChild(divPelicula);
    });
    if (contenedor != null) {
        console.log("contenedor llenito");
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
