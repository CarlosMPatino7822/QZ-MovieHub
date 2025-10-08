import { Pelicula } from "../modelo/Pelicula.js";
import { generarPeliculas } from "./generarPeliculas.js";

export class gestionarPeliculas {
  peliculas: Pelicula[] = generarPeliculas();
  private indiceEdicion: number | null = null; // guarda el índice de la película que se está editando

  // AGREGAR O EDITAR PELÍCULA
  public agregarPelicula(): void {
    const name = (document.getElementById("NewPeliName") as HTMLInputElement).value.trim();
    const fechaPublicacion = (document.getElementById("NewPeliDate") as HTMLInputElement).value.trim();
    const restriccionEdad = (document.getElementById("NewPeliAge") as HTMLInputElement).value.trim();
    const descripcion = (document.getElementById("NewPeliDescrip") as HTMLInputElement).value.trim();
    const idiomaOriginal = (document.getElementById("NewPeliLang") as HTMLInputElement).value.trim();
    const imagen = (document.getElementById("NewPeliImagen") as HTMLInputElement).value.trim();
    const genero = (document.getElementById("NewPeliGenre") as HTMLInputElement).value.trim();
    const director = (document.getElementById("NewPeliDirector") as HTMLInputElement).value.trim();
    const duracionText = (document.getElementById("NewPeliDuration") as HTMLInputElement).value.trim();

    const doblajes = (document.getElementById("NewPeliDoblaje") as HTMLInputElement).value
      .split(",").map(d => d.trim()).filter(d => d);
    const subtitulos = (document.getElementById("NewPeliSubTitle") as HTMLInputElement).value
      .split(",").map(s => s.trim()).filter(s => s);
    const actores = (document.getElementById("NewPeliActors") as HTMLInputElement).value
      .split(",").map(a => a.trim()).filter(a => a);
    const premios = (document.getElementById("NewPeliAwards") as HTMLInputElement).value
      .split(",").map(p => p.trim()).filter(p => p);

    if (!name || !fechaPublicacion || !restriccionEdad || !descripcion || !idiomaOriginal || !imagen || !genero || !director || !duracionText) {
      alert("Completa todos los campos antes de guardar.");
      return;
    }

    const duracion = parseInt(duracionText);

    // Si hay un índice en edición -> actualiza la película
    if (this.indiceEdicion !== null) {
      const peli = this.peliculas[this.indiceEdicion];
      if (!peli) return;

      peli.nombre = name;
      peli.fechaDePublicacion = fechaPublicacion;
      peli.restriccionDeEdad = restriccionEdad;
      peli.descripcion = descripcion;
      peli.idiomaOriginal = idiomaOriginal;
      peli.imagen = imagen;
      peli.genero = genero;
      peli.director = director;
      peli.duracion = duracion;
      peli.doblajes = doblajes;
      peli.subtitulos = subtitulos;
      peli.actores = actores;
      peli.premios = premios;

      alert("Película editada correctamente");
      this.indiceEdicion = null;
      (document.getElementById("btnAddPeli") as HTMLButtonElement).textContent = "Agregar Película";
    } else {
      // Crear nueva película
      const existe = this.peliculas.find(p => p.nombre.toLowerCase() === name.toLowerCase());
      if (existe) {
        alert("❌ Ya existe una película con ese nombre.");
        return;
      }

      const nuevaPeli = new Pelicula(
        name, fechaPublicacion, restriccionEdad, descripcion, idiomaOriginal,
        doblajes, subtitulos, imagen, genero, director, duracion, premios, actores
      );

      this.peliculas.push(nuevaPeli);
      alert("✅ Película agregada exitosamente");
    }

    this.limpiarFormulario();
    this.mostrarPeliculasEnTabla();
  }

  // MOSTRAR TABLA
  public mostrarPeliculasEnTabla(): void {
    const tablaBody = document.querySelector("#tablaPeliculas tbody") as HTMLTableSectionElement;
    if (!tablaBody) return;

    tablaBody.innerHTML = "";

    if (this.peliculas.length === 0) {
      tablaBody.innerHTML = `<tr><td colspan="15" style="text-align:center;">No hay películas registradas</td></tr>`;
      return;
    }

    this.peliculas.forEach((pelicula, index) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${pelicula.nombre}</td>
        <td>${pelicula.fechaDePublicacion}</td>
        <td>${pelicula.restriccionDeEdad}</td>
        <td>${pelicula.descripcion}</td>
        <td>${pelicula.idiomaOriginal}</td>
        <td>${pelicula.doblajes.join(", ")}</td>
        <td>${pelicula.subtitulos.join(", ")}</td>
        <td><img src="${pelicula.imagen}" alt="${pelicula.nombre}" width="100"></td>
        <td>${pelicula.genero}</td>
        <td>${pelicula.director}</td>
        <td>${pelicula.duracion} min</td>
        <td>${pelicula.premios.length > 0 ? pelicula.premios.join(", ") : "—"}</td>
        <td>${pelicula.actores.length > 0 ? pelicula.actores.join(", ") : "—"}</td>
        <td>
          <button class="btnEditar" data-index="${index}">✏️ Editar</button>
          <button class="btnEliminar" data-index="${index}">🗑️ Eliminar</button>
        </td>
      `;
      tablaBody.appendChild(fila);
    });

    // Asignar eventos a los botones
    tablaBody.querySelectorAll(".btnEliminar").forEach(btn => {
      btn.addEventListener("click", e => {
        const index = parseInt((e.target as HTMLElement).getAttribute("data-index") || "-1");
        if (index >= 0) this.eliminarPelicula(index);
      });
    });

    tablaBody.querySelectorAll(".btnEditar").forEach(btn => {
      btn.addEventListener("click", e => {
        const index = parseInt((e.target as HTMLElement).getAttribute("data-index") || "-1");
        if (index >= 0) this.cargarPeliculaEnFormulario(index);
      });
    });
  }

  // ELIMINAR
  private eliminarPelicula(index: number): void {
    const pelicula = this.peliculas[index];
    if (!pelicula) return;

    const confirmacion = confirm(`¿Seguro que deseas eliminar "${pelicula.nombre}"?`);
    if (!confirmacion) return;

    this.peliculas.splice(index, 1);
    alert("🗑️ Película eliminada correctamente");
    this.mostrarPeliculasEnTabla();
  }

  // CARGAR DATOS PARA EDITAR
  private cargarPeliculaEnFormulario(index: number): void {
    const peli = this.peliculas[index];
    if (!peli) return;

    (document.getElementById("NewPeliName") as HTMLInputElement).value = peli.nombre;
    (document.getElementById("NewPeliDate") as HTMLInputElement).value = peli.fechaDePublicacion;
    (document.getElementById("NewPeliAge") as HTMLInputElement).value = peli.restriccionDeEdad;
    (document.getElementById("NewPeliDescrip") as HTMLInputElement).value = peli.descripcion;
    (document.getElementById("NewPeliLang") as HTMLInputElement).value = peli.idiomaOriginal;
    (document.getElementById("NewPeliImagen") as HTMLInputElement).value = peli.imagen;
    (document.getElementById("NewPeliGenre") as HTMLInputElement).value = peli.genero;
    (document.getElementById("NewPeliDirector") as HTMLInputElement).value = peli.director;
    (document.getElementById("NewPeliDuration") as HTMLInputElement).value = peli.duracion.toString();
    (document.getElementById("NewPeliDoblaje") as HTMLInputElement).value = peli.doblajes.join(", ");
    (document.getElementById("NewPeliSubTitle") as HTMLInputElement).value = peli.subtitulos.join(", ");
    (document.getElementById("NewPeliActors") as HTMLInputElement).value = peli.actores.join(", ");
    (document.getElementById("NewPeliAwards") as HTMLInputElement).value = peli.premios.join(", ");

    this.indiceEdicion = index;
    (document.getElementById("btnAddPeli") as HTMLButtonElement).textContent = "Guardar Cambios";
  }

  // LIMPIAR FORMULARIO
  private limpiarFormulario(): void {
    const campos = [
      "NewPeliName", "NewPeliDate", "NewPeliAge", "NewPeliDescrip", "NewPeliLang",
      "NewPeliImagen", "NewPeliGenre", "NewPeliDirector", "NewPeliDuration",
      "NewPeliDoblaje", "NewPeliSubTitle", "NewPeliActors", "NewPeliAwards"
    ];

    campos.forEach(id => {
      const input = document.getElementById(id) as HTMLInputElement;
      if (input) input.value = "";
    });
  }
}

// Instancia global
const gestorPeliculas = new gestionarPeliculas();

// Eventos
document.getElementById("btnAddPeli")?.addEventListener("click", () => gestorPeliculas.agregarPelicula());
window.addEventListener("DOMContentLoaded", () => gestorPeliculas.mostrarPeliculasEnTabla());

// Exportar
export const gestionModule = gestorPeliculas;
