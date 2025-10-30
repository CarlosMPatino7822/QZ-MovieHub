import { getPopularMovies } from "../tmdb/tmdb.js";
import { getPopularTVShows } from "../tmdb/tmdb.js";
const params = new URLSearchParams(window.location.search);
const nombrePeli = params.get("nombre");
console.log("Nombre de la película o serie desde URL:", nombrePeli);
// Obtenemos todas las películas y series
const peliculas = await getPopularMovies();
const series = await getPopularTVShows();
const contenedor = document.getElementById("detalle-contenedor");
// Inicializamos variable
let html = "";
// Buscar en series
for (let i = 0; i < series.length; i++) {
    const serie = series[i];
    if (serie && serie.name === nombrePeli && contenedor) {
        html = `
        <div class="detalle">
          <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
          <div>
            <h1>${serie.name}</h1>
            <p><strong>Fecha de publicación:</strong> ${serie.first_air_date}</p>
            <p><strong>Descripción:</strong> ${serie.overview}</p>
            <p><strong>Promedio de votos:</strong> ⭐${serie.vote_average}</p>
          </div>
        </div>
      `;
        contenedor.innerHTML = html;
    }
}
// Buscar en películas
for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];
    if (pelicula && pelicula.title === nombrePeli && contenedor) {
        html = `
        <div class="detalle">
          <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" 
               alt="${pelicula.title}">
          <div>
            <h1>${pelicula.title}</h1>
            <p><strong>Fecha de publicación:</strong> ${pelicula.release_date}</p>
            <p><strong>Descripción:</strong> ${pelicula.overview}</p>
            <p><strong>Promedio de votos:</strong> ⭐${pelicula.vote_average}</p>
          </div>
        </div>
      `;
        contenedor.innerHTML = html;
    }
}
// Si no se encontró nada:
if (contenedor && contenedor.contains == null) {
    contenedor.innerHTML = `
    <p style="color:red;">No se encontró la película o serie con el nombre: ${nombrePeli}</p>
  `;
}
//# sourceMappingURL=detalle.js.map