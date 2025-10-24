import { getNews } from "../newsapi/news";
async function mostrarNoticias() {
    const contenedor = document.getElementById("contenedor-news");
    const noticias = await getNews();
    if (!contenedor) {
        console.log("El contenedor de news no se encontro");
        return;
    }
    contenedor.innerHTML = "";
    console.log("contenedor encontrado");
    for (let i = 0; i < noticias.length; i++) {
        const noticia = noticias[i];
        if (noticia) {
            contenedor.innerHTML += `
            <div class="news">
                <img src="https://image.tmdb.org/t/p/w500${noticia.urlToImage}" alt="https://image.tmdb.org/t/p/w500${noticia.urlToImage}">
                <div>
                    <h2>${noticia.title}</h2>
                    <p><strong>Fecha de publicación:</strong> ${noticia.publishedAt}</p>
                    <p><strong>Descripción:</strong> ${noticia.description}</p>
                    <p><strong>Autor:</strong> ${noticia.author}</p>
                    <p><strong>Autor:</strong> ${noticia.source}</p>
                    <p><strong>Autor:</strong> ${noticia.url}</p>
                    <button class="btn-detalles" data-nombre="${noticia.title}">
                        Ver detalles
                    </button>
                </div>
            </div>
            `;
        }
    }
    contenedor.addEventListener("click", (e => {
        const target = e.target;
        if (target.classList.contains("btn-noticias")) {
            const nombreNoticia = target.getAttribute("data-title");
            if (nombreNoticia) {
                window.location.href = `Noticias.html?nombre=${encodeURIComponent(nombreNoticia)}`;
            }
        }
    }));
    if (contenedor.innerHTML === "") {
        contenedor.innerHTML = "<p>No se encontraron noticias con ese nombre.</p>";
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
//# sourceMappingURL=mostrarNoticias.js.map