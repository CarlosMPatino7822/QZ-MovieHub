
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0rVPvCfkTXyDY39-5NmH0gdYa7bU9h8mNQ&s",
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
            "https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8",
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWcgIg5K--d6FU9eD1Qo4VorLa9AaC0eunQ&s",
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHqERudQeMKbEpp97lLK_unmW1aJZLdP_-A&s",
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
            "https://images.justwatch.com/poster/139509768/s166/vengadores-endgame",
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHhC_D4Go2WigKSjRPW52g8XwIX-mpfSLnA&s",
            "Animación",
            "Hayao Miyazaki",
            125
        )
    ];
    
    return peliculas;
}

// Exportar el arreglo de películas
export const peliculasArray: Pelicula[] = generarPeliculas();