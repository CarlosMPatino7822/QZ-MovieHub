import { getTrendingMovies, getUpcomingMovies, type MovieNews } from "../newsapi/news.js";

// Obtenemos el parámetro "nombre" desde la URL
const params = new URLSearchParams(window.location.search);
const nombreNoticia = params.get("nombre");
console.log("Noticia seleccionada desde la URL: ", nombreNoticia);

// Obtenemos todas las películas desde la API
const trending = await getTrendingMovies();
const upcoming = await getUpcomingMovies();
const noticias: MovieNews[] = [...trending, ...upcoming];

// Obtenemos el contenedor donde se mostrará el detalle de la noticia
const contenedor = document.getElementById("detalle-contenedor");

let html = "";

// Buscamos la película por su título
for (let i = 0; i < noticias.length; i++) {
  const noticia = noticias[i];
  // Compara el título con el nombre obtenido de la URL
  if (noticia && noticia.title === nombreNoticia && contenedor) {
    const imagen = noticia.poster_path 
      ? `https://image.tmdb.org/t/p/w780${noticia.poster_path}`
      : "https://via.placeholder.com/780x1170?text=Sin+imagen";
    
    const descripcion = noticia.overview || "Sin descripción disponible.";
    
    const fecha = noticia.release_date
      ? new Date(noticia.release_date).toLocaleDateString("es-ES", {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : "Fecha desconocida";
    
    // Enlace a la página de TMDB de la película
    const enlace = `https://www.themoviedb.org/movie/${noticia.id}`;

    html = `
      <div class="detalle">
        <img src="${imagen}" alt="${noticia.title}">
        <div>
          <h2>${noticia.title}</h2>
          <p><strong>Fecha de estreno:</strong> ${fecha}</p>
          <p><strong>Popularidad:</strong> ⭐ ${noticia.popularity.toFixed(1)}</p>
          <p><strong>Descripción:</strong> ${descripcion}</p>
          <p>
            <a href="${enlace}" target="_blank" rel="noopener noreferrer">
              Ver más información en TMDB 🔗
            </a>
          </p>
        </div>
      </div>
    `;
    contenedor.innerHTML = html;
    break;
  }
}

if(contenedor && contenedor.innerHTML.trim() === ""){ // Si no encontró nada
    contenedor.innerHTML = `
    <p style="color:red;">
    No se encontró la película con el nombre: <strong>${nombreNoticia}</strong>
    </p>`;
}