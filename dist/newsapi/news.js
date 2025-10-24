const API_KEY = "6d30ac3094ba483db18fe40cb5ba81ef";
export async function getMovieNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=cinema%20OR%20películas%20OR%20estrenos%20OR%20actores&language=es&sortBy=publishedAt&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Error al obtener noticias del servidor");
        }
        const data = await response.json();
        return data.articles;
    }
    catch (error) {
        console.error("Error en getMovieNews:", error);
        return [];
    }
}
//# sourceMappingURL=news.js.map