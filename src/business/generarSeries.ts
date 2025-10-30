import { Serie } from "../modelo/Serie.js";

/**
 * Genera un arreglo de objetos de tipo Serie.
 *
 * Cada objeto contiene la información detallada de una serie:
 * - nombre
 * - fecha de publicación
 * - restricción de edad
 * - descripción
 * - idioma original
 * - doblajes disponibles
 * - subtítulos disponibles
 * - imagen (URL de póster o carátula)
 * - lista de capítulos
 * - número de temporadas
 * - creador
 * - género
 * - actores principales
 * - duración promedio de capítulos
 * - calificación (ej. IMDb)
 * - estado (En emisión, Finalizada, etc.)
 *
 * @returns {Serie[]} Un arreglo con series predefinidas
 */
export function generarSeries(): Serie[] {
  const series: Serie[] = [
    new Serie(
      "Breaking Bad", // nombre
      "2008-01-20", // fechaDePublicacion
      "+18", // restriccionDeEdad
      "Un profesor de química con cáncer terminal se convierte en fabricante de metanfetaminas para asegurar el futuro de su familia.", // descripción
      "Inglés", // idiomaOriginal
      ["Español", "Francés", "Alemán"], // doblajes
      ["Español", "Francés", "Alemán", "Portugués"], // subtítulos
      "https://www.orientaserie.it/wp-content/uploads/2022/09/A1pkVxm26RL._AC_SL1500_.jpg", // imagen
      ["Piloto", "Cat’s in the Bag...", "…And the Bag’s in the River"], // capitulos (ejemplo)
      5, // temporadas
      "Vince Gilligan", // creador
      "Drama", // género
      ["Bryan Cranston", "Aaron Paul", "Anna Gunn"], // actores principales
      47, // duración promedio de capítulo (minutos)
      9.5, // calificación
      "Finalizada" // estado
    ),
    new Serie(
      "Stranger Things",
      "2016-07-15",
      "+13",
      "Un grupo de niños descubre una serie de eventos sobrenaturales en su pueblo, relacionados con experimentos secretos del gobierno y una dimensión paralela.",
      "Inglés",
      ["Español", "Francés", "Alemán", "Italiano"],
      ["Español", "Francés", "Alemán", "Italiano", "Portugués"],
      "https://m.media-amazon.com/images/I/91FTgJZL-kL._UF894,1000_QL80_.jpg",
      ["Capítulo Uno: La desaparición de Will Byers", "Capítulo Dos: La chica rara en la calle Maple"],
      4,
      "The Duffer Brothers",
      "Ciencia Ficción",
      ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
      50,
      8.7,
      "En emisión"
    ),
    new Serie(
      "Dark",
      "2017-12-01",
      "+16",
      "Una pequeña ciudad alemana se ve sacudida por la misteriosa desaparición de un niño, revelando secretos familiares y una conspiración que abarca varias generaciones.",
      "Alemán",
      ["Español", "Inglés", "Francés"],
      ["Español", "Inglés", "Francés", "Portugués", "Italiano"],
      "https://i.pinimg.com/736x/5e/0e/5a/5e0e5a3ba85c112a89a1cf604f3198d1.jpg",
      ["Secretos", "Mentiras", "Pasado y presente"],
      3,
      "Baran bo Odar, Jantje Friese",
      "Thriller / Ciencia Ficción",
      ["Louis Hofmann", "Lisa Vicari", "Andreas Pietschmann"],
      53,
      8.8,
      "Finalizada"
    )
  ];

  return series;
}

/**
 * Exporta un arreglo de series ya generado.
 *
 * Esto permite reutilizar `seriesArray` en otros módulos
 * sin tener que invocar directamente `generarSeries()`.
 */
export const seriesArray: Serie[] = generarSeries();
