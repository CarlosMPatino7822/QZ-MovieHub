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

  const peliculas: Pelicula[] = generarPeliculas();
  peliculas.forEach((pelicula) => {
    const divPelicula = document.createElement("div");
    divPelicula.className = "pelicula";

    const enlace = document.createElement("a");
    enlace.href = "detalle.html";
    enlace.target = "_blank";

    const img = document.createElement("img");
    img.src = pelicula.getImagen();
    img.alt = pelicula.getNombre();
    enlace.appendChild(img);

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