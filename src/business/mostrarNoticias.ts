import { getTrendingMovies, getUpcomingMovies, type MovieNews } from "../newsapi/news.js";

async function mostrarNoticias() {
    const contenedor = document.getElementById("contenedor-news");

    if(!contenedor){
        console.log("El contenedor de noticias no se encontró");
        return;
    }

    contenedor.innerHTML = "<p>Cargando noticias...</p>";

    try {
        // Obtenemos películas en tendencia y próximas
        const trending = await getTrendingMovies();
        const upcoming = await getUpcomingMovies();
        
        // Combinamos ambas listas (primero trending, luego upcoming)
        const noticias: MovieNews[] = [...trending.slice(0, 10), ...upcoming.slice(0, 10)];

        contenedor.innerHTML = "";

        if (!noticias || noticias.length === 0) {
            contenedor.innerHTML = "<p>No se encontraron noticias.</p>";
            return;
        }
        console.log("contenedor encontrado");

        // Recorremos el arreglo de noticias y generamos el html
        for(let i = 0; i < noticias.length; i++){
            const noticia = noticias[i];
            if(noticia){
                // Formateamos la fecha
                const fecha = new Date(noticia.release_date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                // URL de la imagen
                const imagenUrl = noticia.poster_path 
                    ? `https://image.tmdb.org/t/p/w500${noticia.poster_path}`
                    : 'https://via.placeholder.com/500x750?text=Sin+Imagen';

                contenedor.innerHTML += `
                <div class="news">
                    <img src="${imagenUrl}" alt="${noticia.title}">
                    <div>
                        <h2>${noticia.title}</h2>
                        <p><strong>Fecha de publicación:</strong> ${fecha}</p>
                        <p><strong>Popularidad:</strong> ⭐ ${noticia.popularity.toFixed(1)}</p>
                        <p><strong>Descripción:</strong> ${noticia.overview || 'Sin descripción disponible'}</p>
                        <button class="btn-detalles" data-nombre="${noticia.title}">
                            Ver noticia completa
                        </button>
                        <hr>
                    </div>
                </div>
                `;
            }
        }

        // Delegación de eventos para los botones
        contenedor.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            if(target.classList.contains("btn-detalles")){
                const nombreNoticia = target.getAttribute("data-nombre");
                if(nombreNoticia){
                    window.location.href = `detalleNoticia.html?nombre=${encodeURIComponent(nombreNoticia)}`;
                }
            }
        });

    } catch (error) {
        console.error("Error al cargar noticias:", error);
        contenedor.innerHTML = "<p>Error al cargar las noticias. Intenta de nuevo más tarde.</p>";
    }
}

// Agregar el evento al botón para mostrar las noticias
document.addEventListener('DOMContentLoaded', () => {
  const btnCargar = document.getElementById('btn-cargar');
  if (btnCargar) {
    btnCargar.addEventListener('click', () => {
      mostrarNoticias();
    });
  }
});