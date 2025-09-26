
import { Pelicula } from "../modelo/Pelicula.js";

// Función para generar películas
export function generarPeliculas(): Pelicula[] {
    const peliculas: Pelicula[] = [
        new Pelicula(
            "El Padrino",
            "1972-03-24",
            "+18",
            "La saga de una familia de inmigrantes sicilianos en Nueva York que se convierte en una de las más poderosas familias del crimen organizado.",
            "Inglés",
            ["Español", "Francés", "Italiano"],
            ["Español", "Francés", "Italiano", "Portugués"],
            "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg", // El Padrino
            "Drama",
            "Francis Ford Coppola",
            175
        ),
        new Pelicula(
            "Inception",
            "2010-07-16",
            "+13",
            "Un ladrón que roba secretos corporativos a través del uso de la tecnología de intercambio de sueños recibe la tarea inversa de plantar una idea en la mente de un CEO.",
            "Inglés",
            ["Español", "Francés", "Alemán", "Japonés"],
            ["Español", "Francés", "Alemán", "Japonés", "Coreano"],
            "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg", // Inception
            "Ciencia Ficción",
            "Christopher Nolan",
            148
        ),
        new Pelicula(
            "Coco",
            "2017-11-22",
            "Apta para todo público",
            "Un joven músico mexicano debe navegar por la Tierra de los Muertos para desbloquear el verdadero significado de la familia.",
            "Inglés",
            ["Español", "Francés", "Portugués", "Italiano"],
            ["Español", "Francés", "Portugués", "Italiano", "Alemán"],
            "https://m.media-amazon.com/images/I/81v+QFQpKPL._AC_SY679_.jpg", // Coco
            "Animación",
            "Lee Unkrich",
            105
        ),
        new Pelicula(
            "Parasite",
            "2019-05-30",
            "+15",
            "Una familia pobre se infiltra en una casa rica haciéndose pasar por personal cualificado.",
            "Coreano",
            ["Inglés", "Español", "Francés"],
            ["Inglés", "Español", "Francés", "Japonés", "Chino"],
            "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY679_.jpg", // Parasite
            "Thriller",
            "Bong Joon-ho",
            132
        ),
        new Pelicula(
            "Avengers: Endgame",
            "2019-04-26",
            "+13",
            "Los Vengadores supervivientes trabajan para revertir el daño causado por Thanos en Infinity War.",
            "Inglés",
            ["Español", "Francés", "Alemán", "Italiano", "Portugués"],
            ["Español", "Francés", "Alemán", "Italiano", "Portugués", "Japonés"],
            "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
            "Acción",
            "Anthony Russo, Joe Russo",
            181
        ),
        new Pelicula(
            "Spirited Away",
            "2001-07-20",
            "Apta para todo público",
            "Una niña de 10 años queda atrapada en un mundo alternativo de espíritus y debe trabajar en un balneario para liberar a sus padres transformados.",
            "Japonés",
            ["Inglés", "Español", "Francés", "Alemán"],
            ["Inglés", "Español", "Francés", "Alemán", "Coreano"],
            "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg", // Spirited Away
            "Animación",
            "Hayao Miyazaki",
            125
        )
    ];
    
    return peliculas;
}

// Exportar el arreglo de películas
export const peliculasArray: Pelicula[] = generarPeliculas();