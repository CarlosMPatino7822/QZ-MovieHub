const TMDB_API_KEY = "301bfb1e19e55044b6df5cff678b9df2";
const BASE_URL = "https://api.themoviedb.org/3";
// Obtener películas próximas (funciona como noticias)
export async function getUpcomingMovies() {
    const url = `${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=es-ES`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results || [];
    }
    catch (error) {
        console.error("Error al obtener películas próximas:", error);
        return [];
    }
}
// Obtener películas en tendencia (últimas 24 horas)
export async function getTrendingMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}&language=es-ES`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results || [];
    }
    catch (error) {
        console.error("Error al obtener películas en tendencia:", error);
        return [];
    }
}
