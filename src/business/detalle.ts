import { generarPeliculas } from "./generarPeliculas.js";
import { generarSeries } from "./generarSeries.js";
import { Pelicula } from "../modelo/Pelicula.js";
import { Serie } from "../modelo/Serie.js";

const params = new URLSearchParams(window.location.search);
const nombrePeli = params.get("nombre");
console.log("Nombre de la película o serie desde URL:", nombrePeli);


// Obtenemos todas las películas y series
const peliculas: Pelicula[] = generarPeliculas();
const series: Serie[] = generarSeries();

let item: Pelicula | Serie | null = null;

// Buscar en películas con for
for (let i = 0; i < peliculas.length; i++) {
  const pelicula = peliculas[i];
  if (pelicula && pelicula.nombre === nombrePeli) {
    item = pelicula;
    break;
  }
}

// Si no lo encontró en películas, busca en series
if (!item) {
  for (let i = 0; i < series.length; i++) {
    const serie = series[i];
    if (serie && serie.nombre === nombrePeli) {
      item = serie;
      break;
    }
  }
}

// Mostrar resultado
const contenedor = document.getElementById("detalle-contenedor");

if (item && contenedor) {
  // Render común
  let html = `
    <div class="detalle">
      <img src="${item.imagen}" alt="${item.nombre}">
      <div>
        <h1>${item.nombre}</h1>
        <p><strong>Fecha de publicación:</strong> ${item.fechaDePublicacion}</p>
        <p><strong>Edad mínima:</strong> ${item.restriccionDeEdad}+</p>
        <p><strong>Descripción:</strong> ${item.descripcion}</p>
        <p><strong>Idioma original:</strong> ${item.idiomaOriginal}</p>
        <p><strong>Doblajes:</strong> ${item.doblajes.join(", ")}</p>
        <p><strong>Subtítulos:</strong> ${item.subtitulos.join(", ")}</p>
  `;

  // Render específico según sea Pelicula o Serie
  if ("director" in item) {
    // Es una Pelicula
    html += `
        <p><strong>Género:</strong> ${item.genero}</p>
        <p><strong>Director:</strong> ${item.director}</p>
        <p><strong>Duración:</strong> ${item.duracion} min</p>
        <p><strong>Premios:</strong> ${item.premios.join(", ") || "Ninguno"}</p>
        <p><strong>Actores:</strong> ${item.actores.join(", ")}</p>
    `;
  } else if ("temporadas" in item) {
    // Es una Serie
    html += `
        <p><strong>Capítulos:</strong> ${item.capitulos.join(", ")}</p>
        <p><strong>Temporadas:</strong> ${item.temporadas}</p>
        <p><strong>Creador:</strong> ${item.creador}</p>
        <p><strong>Género:</strong> ${item.genero}</p>
        <p><strong>Actores principales:</strong> ${item.actoresPrincipales.join(", ")}</p>
        <p><strong>Duración promedio capítulo:</strong> ${item.duracionPromedioCapitulo} min</p>
        <p><strong>Calificación:</strong> ${item.calificacion}/10</p>
        <p><strong>Estado:</strong> ${item.estado}</p>
    `;
  }

  html += `</div></div>`;
  contenedor.innerHTML = html;
} else if (contenedor) {
  contenedor.innerHTML = `<p style="color:red;">No se encontró la película o serie con el nombre: ${nombrePeli}</p>`;
}
