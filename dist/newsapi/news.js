const API_KEY = "6d30ac3094ba483db18fe40cb5ba81ef";
export async function getMovieNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=cinema&language=es&apiKey=6d30ac3094ba483db18fe40cb5ba81ef`);
        if (!response.ok) {
            throw new Error("Error al obtener noticias del servidor");
            return [];
        }
        const data = await response.json();
        return Array.isArray(data.articles) ? data.articles : [];
    }
    catch (error) {
        console.error("Error en getMovieNews:", error);
        return [];
    }
}
export async function getNews() {
    const res = await fetch(`https://newsapi.org/v2/everything?q=movies&language=es&apiKey=${API_KEY}`);
    const data = await res.json();
    return data.articles;
}
//# sourceMappingURL=news.js.map