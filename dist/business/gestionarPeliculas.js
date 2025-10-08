var _a;
import { Pelicula } from "../modelo/Pelicula.js";
import { generarPeliculas } from "./generarPeliculas.js";
export class gestionarPeliculas {
    constructor() {
        this.peliculas = generarPeliculas();
        this.indiceEdicion = null; // guarda el índice de la película que se está editando
    }
    // AGREGAR O EDITAR PELÍCULA
    agregarPelicula() {
        const name = document.getElementById("NewPeliName").value.trim();
        const fechaPublicacion = document.getElementById("NewPeliDate").value.trim();
        const restriccionEdad = document.getElementById("NewPeliAge").value.trim();
        const descripcion = document.getElementById("NewPeliDescrip").value.trim();
        const idiomaOriginal = document.getElementById("NewPeliLang").value.trim();
        const imagen = document.getElementById("NewPeliImagen").value.trim();
        const genero = document.getElementById("NewPeliGenre").value.trim();
        const director = document.getElementById("NewPeliDirector").value.trim();
        const duracionText = document.getElementById("NewPeliDuration").value.trim();
        const doblajes = document.getElementById("NewPeliDoblaje").value
            .split(",").map(d => d.trim()).filter(d => d);
        const subtitulos = document.getElementById("NewPeliSubTitle").value
            .split(",").map(s => s.trim()).filter(s => s);
        const actores = document.getElementById("NewPeliActors").value
            .split(",").map(a => a.trim()).filter(a => a);
        const premios = document.getElementById("NewPeliAwards").value
            .split(",").map(p => p.trim()).filter(p => p);
        if (!name || !fechaPublicacion || !restriccionEdad || !descripcion || !idiomaOriginal || !imagen || !genero || !director || !duracionText) {
            alert("Completa todos los campos antes de guardar.");
            return;
        }
        const duracion = parseInt(duracionText);
        // Si hay un índice en edición -> actualiza la película
        if (this.indiceEdicion !== null) {
            const peli = this.peliculas[this.indiceEdicion];
            if (!peli)
                return;
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
            document.getElementById("btnAddPeli").textContent = "Agregar Película";
        }
        else {
            // Crear nueva película
            const existe = this.peliculas.find(p => p.nombre.toLowerCase() === name.toLowerCase());
            if (existe) {
                alert("❌ Ya existe una película con ese nombre.");
                return;
            }
            const nuevaPeli = new Pelicula(name, fechaPublicacion, restriccionEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen, genero, director, duracion, premios, actores);
            this.peliculas.push(nuevaPeli);
            alert("✅ Película agregada exitosamente");
        }
        this.limpiarFormulario();
        this.mostrarPeliculasEnTabla();
    }
    // MOSTRAR TABLA
    mostrarPeliculasEnTabla() {
        const tablaBody = document.querySelector("#tablaPeliculas tbody");
        if (!tablaBody)
            return;
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
                const index = parseInt(e.target.getAttribute("data-index") || "-1");
                if (index >= 0)
                    this.eliminarPelicula(index);
            });
        });
        tablaBody.querySelectorAll(".btnEditar").forEach(btn => {
            btn.addEventListener("click", e => {
                const index = parseInt(e.target.getAttribute("data-index") || "-1");
                if (index >= 0)
                    this.cargarPeliculaEnFormulario(index);
            });
        });
    }
    // ELIMINAR
    eliminarPelicula(index) {
        const pelicula = this.peliculas[index];
        if (!pelicula)
            return;
        const confirmacion = confirm(`¿Seguro que deseas eliminar "${pelicula.nombre}"?`);
        if (!confirmacion)
            return;
        this.peliculas.splice(index, 1);
        alert("🗑️ Película eliminada correctamente");
        this.mostrarPeliculasEnTabla();
    }
    // CARGAR DATOS PARA EDITAR
    cargarPeliculaEnFormulario(index) {
        const peli = this.peliculas[index];
        if (!peli)
            return;
        document.getElementById("NewPeliName").value = peli.nombre;
        document.getElementById("NewPeliDate").value = peli.fechaDePublicacion;
        document.getElementById("NewPeliAge").value = peli.restriccionDeEdad;
        document.getElementById("NewPeliDescrip").value = peli.descripcion;
        document.getElementById("NewPeliLang").value = peli.idiomaOriginal;
        document.getElementById("NewPeliImagen").value = peli.imagen;
        document.getElementById("NewPeliGenre").value = peli.genero;
        document.getElementById("NewPeliDirector").value = peli.director;
        document.getElementById("NewPeliDuration").value = peli.duracion.toString();
        document.getElementById("NewPeliDoblaje").value = peli.doblajes.join(", ");
        document.getElementById("NewPeliSubTitle").value = peli.subtitulos.join(", ");
        document.getElementById("NewPeliActors").value = peli.actores.join(", ");
        document.getElementById("NewPeliAwards").value = peli.premios.join(", ");
        this.indiceEdicion = index;
        document.getElementById("btnAddPeli").textContent = "Guardar Cambios";
    }
    // LIMPIAR FORMULARIO
    limpiarFormulario() {
        const campos = [
            "NewPeliName", "NewPeliDate", "NewPeliAge", "NewPeliDescrip", "NewPeliLang",
            "NewPeliImagen", "NewPeliGenre", "NewPeliDirector", "NewPeliDuration",
            "NewPeliDoblaje", "NewPeliSubTitle", "NewPeliActors", "NewPeliAwards"
        ];
        campos.forEach(id => {
            const input = document.getElementById(id);
            if (input)
                input.value = "";
        });
    }
}
// Instancia global
const gestorPeliculas = new gestionarPeliculas();
// Eventos
(_a = document.getElementById("btnAddPeli")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => gestorPeliculas.agregarPelicula());
window.addEventListener("DOMContentLoaded", () => gestorPeliculas.mostrarPeliculasEnTabla());
// Exportar
export const gestionModule = gestorPeliculas;
