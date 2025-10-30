const API_KEY = "301bfb1e19e55044b6df5cff678b9df2"; //esta clave nos permite acceder a los endoints de su API
const BASE_URL = "https://api.themoviedb.org/3"; //todas las peticiones se construirán a partir de esta dirección
// 🎬 FUNCIÓN: obtener las películas más populares del momento
export async function getPopularMovies() {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`);
    const data = await res.json(); // transformamos la respuesta a JSON
    return data.results;
}
// 📺 FUNCIÓN: obtener las series más populares
export async function getPopularTVShows() {
    const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=es-ES`);
    const data = await res.json(); // transformamos la respuesta a JSON
    return data.results;
}
