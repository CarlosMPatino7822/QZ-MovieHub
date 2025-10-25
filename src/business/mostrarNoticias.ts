import { getNews } from "../newsapi/news.js";

async function mostrarNoticias() {
    const contenedor = document.getElementById("contenedor-news");

    if(!contenedor){
        console.log("El contenedor de noticias no se encontró");
        return;
    }

    contenedor.innerHTML = "<p>Cargando noticias...</p>";

    //obtenemos las noticias desde la API
    const noticias = await getNews();

    contenedor.innerHTML = "";

    if (!noticias || noticias.length === 0) { //si no hay noticias
        contenedor.innerHTML = "<p>No se encontraron noticias.</p>";
        return;
    }
    console.log("contenedor encontrado");

    //recorremos el arreglo de noticias y generamos el html
    for(let i=0; i < noticias.length; i++){
        const noticia = noticias[i];
        if(noticia){
            contenedor.innerHTML += `
            <div class="news">
                <img src="${noticia.urlToImage}" alt="${noticia.urlToImage}">
                <div>
                    <h2>${noticia.title}</h2>
                    <p><strong>Fecha de publicación:</strong> ${noticia.publishedAt}</p>
                    <p><strong>Autor:</strong> ${noticia.author}</p>
                    <button class="btn-detalles" data-nombre="${noticia.title}">
                        Ver noticia completa
                    </button>
                    <hr>
                </div>
            </div>
            `;
        }
    }
    contenedor.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if(target.classList.contains("btn-detalles")){
            const nombreNoticia = target.getAttribute("data-nombre");
            if(nombreNoticia){
                window.location.href = `detalleNoticia.html?nombre=${encodeURIComponent(nombreNoticia)}`;
            }
        }
    });

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