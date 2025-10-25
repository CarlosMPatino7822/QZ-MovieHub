import { getNews } from "../newsapi/news.js";
//obtenemos el parámetro "nombre" desde la URL
const params = new URLSearchParams(window.location.search);
const nombreNoticia = params.get("nombre");
console.log("Noticia seleccionada desde la URL: ", nombreNoticia);
//obtenemos todas la noticias desde la API
const noticias = await getNews();
//obtenemos el contenedor donde se mostrará el detalle de la noticia
const contenedor = document.getElementById("detalle-contenedor");
let html = "";
//buscamos la noticia por su título
for (let i = 0; i < noticias.length; i++) {
    const noticia = noticias[i];
    // Compara el título con el nombre obtenido de la URL
    if (noticia && noticia.title === nombreNoticia && contenedor) {
        const imagen = noticia.urlToImage || "https://via.placeholder.com/500x300?text=Sin+imagen";
        const descripcion = noticia.description || "Sin descripción disponible.";
        const contenido = noticia.content || "";
        const autor = noticia.author || noticia.source?.name || "Desconocido";
        const fecha = noticia.publishedAt
            ? new Date(noticia.publishedAt).toLocaleString("es-ES")
            : "Fecha desconocida";
        const enlace = noticia.url || "#";
        html = `
      <div class="detalle">
        <img src="${noticia.urlToImage}" alt="${noticia.title}">
        <div>
          <h2>${noticia.title}</h2>
          <p><strong>Autor:</strong> ${autor}</p>
          <p><strong>Fecha de publicación:</strong> ${fecha}</p>
          <p><strong>Descripción:</strong> ${descripcion}</p>
          <p>${contenido}</p>
          <p>
            <a href="${enlace}" target="_blank" rel="noopener noreferrer">
              Ver noticia completa 🔗
            </a>
          </p>
        </div>
      </div>
    `;
        contenedor.innerHTML = html;
        break;
    }
}
if (contenedor && contenedor.innerHTML.trim() === "") { //si no encontró nada
    contenedor.innerHTML = `
    <p style="color:red;">
    No se encontró la noticia con el nombre: <strong>${nombreNoticia}</strong>
    </p> `;
}
//# sourceMappingURL=detalleNoticia.js.map