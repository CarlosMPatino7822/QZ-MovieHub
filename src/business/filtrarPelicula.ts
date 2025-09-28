import { generarPeliculas } from "./generarPeliculas.js";

export function buscarPeliculaByNombre(): void {
    console.log("Aca si entro :D");
    const contenedor = document.getElementById("contenedor-Peliculas");
   

    const peliculas = generarPeliculas();
    if (!contenedor) {
        console.error("El contenedor de películas no se encontró.");
        return;
    }
    contenedor.innerHTML = "";
    console.log("Contenedor encontrado");
    const input = document.getElementById("filtrar") as HTMLInputElement | null;
    const nombrePeli: string = input?.value ?? "";
    console.log("El nombre de la pelicula es: " + nombrePeli);
    if (nombrePeli.trim() === "") {
        contenedor.innerHTML = "<p>Por favor ingresa el nombre de una película.</p>";
        return;
    }

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        if (pelicula && pelicula.nombre == nombrePeli) {
            const movie = pelicula;
            contenedor.innerHTML += `
                <div class="pelicula">
                    <img src="${movie.imagen}" alt="${movie.nombre}">
                    <div>
                        <h2>${movie.nombre}</h2>
                        <p><strong>Fecha de publicación:</strong> ${movie.fechaDePublicacion}</p>
                        <p><strong>Edad mínima:</strong> ${movie.restriccionDeEdad}+</p>
                        <p><strong>Descripción:</strong> ${movie.descripcion}</p>
                        <p><strong>Idioma original:</strong> ${movie.idiomaOriginal}</p>
                        <p><strong>Doblajes:</strong> ${movie.doblajes.join(", ")}</p>
                        <p><strong>Subtítulos:</strong> ${movie.subtitulos.join(", ")}</p>
                    </div>
                </div>
            `;
        }
        
    }
    if (contenedor.innerHTML === "") {
        contenedor.innerHTML = "<p>No se encontraron películas con ese nombre.</p>";
    }
    
}

// Agregar el evento al botón para mostrar las películas
document.addEventListener('DOMContentLoaded', () => {
  const Buscar = document.getElementById('btn-filtrar');
  if (Buscar) {
    Buscar.addEventListener('click', () => {
      buscarPeliculaByNombre();
    });
  }
});