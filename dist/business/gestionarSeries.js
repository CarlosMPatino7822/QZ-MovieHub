import { Serie } from "../modelo/Serie.js";
import { getPopularTVShows } from "../tmdb/tmdb.js";
import { generarSeries } from "../business/generarSeries.js";
export class GestionarSeries {
    constructor() {
        this.listaSeries = generarSeries();
        this.indiceEdicion = null;
    }
    // AGREGAR O EDITAR SERIE
    agregarSerie() {
        // Obtener valores del formulario
        const nombre = document.getElementById("NewSerieName").value.trim();
        const fechaDePublicacion = document.getElementById("NewSerieDate").value.trim();
        const restriccionDeEdad = document.getElementById("NewSerieAge").value.trim();
        const descripcion = document.getElementById("NewSerieDescrip").value.trim();
        const idiomaOriginal = document.getElementById("NewSerieLang").value.trim();
        const imagen = document.getElementById("NewSerieImagen").value.trim();
        // Arreglos comunes
        const doblajes = document.getElementById("NewSerieDoblaje").value
            .split(",").map(d => d.trim()).filter(d => d);
        const subtitulos = document.getElementById("NewSerieSubTitle").value
            .split(",").map(s => s.trim()).filter(s => s);
        // Atributos específicos de Serie
        const capitulos = document.getElementById("NewSerieCapitulos").value
            .split(",").map(c => c.trim()).filter(c => c);
        const temporadasText = document.getElementById("NewSerieTemporadas").value.trim();
        const creador = document.getElementById("NewSerieCreador").value.trim();
        const genero = document.getElementById("NewSerieGenero").value.trim();
        const actoresPrincipales = document.getElementById("NewSerieActores").value
            .split(",").map(a => a.trim()).filter(a => a);
        const duracionPromedioText = document.getElementById("NewSerieDuracion").value.trim();
        const calificacionText = document.getElementById("NewSerieCalificacion").value.trim();
        const estado = document.getElementById("NewSerieEstado").value.trim();
        // Conversión de valores numéricos
        const temporadas = parseInt(temporadasText);
        const duracionPromedioCapitulo = parseFloat(duracionPromedioText);
        const calificacion = parseFloat(calificacionText);
        // Validación de campos obligatorios
        if (!nombre || !fechaDePublicacion) {
            alert("⚠️ Debes ingresar al menos el nombre y la fecha de publicación.");
            return;
        }
        // Si se está editando una serie existente
        if (this.indiceEdicion !== null) {
            const serie = this.listaSeries[this.indiceEdicion];
            if (!serie)
                return;
            serie.nombre = nombre;
            serie.fechaDePublicacion = fechaDePublicacion;
            serie.restriccionDeEdad = restriccionDeEdad;
            serie.descripcion = descripcion;
            serie.idiomaOriginal = idiomaOriginal;
            serie.imagen = imagen;
            serie.doblajes = doblajes;
            serie.subtitulos = subtitulos;
            serie.capitulos = capitulos;
            serie.temporadas = temporadas;
            serie.creador = creador;
            serie.genero = genero;
            serie.actoresPrincipales = actoresPrincipales;
            serie.duracionPromedioCapitulo = duracionPromedioCapitulo;
            serie.calificacion = calificacion;
            serie.estado = estado;
            alert("✏️ Serie editada correctamente");
            this.indiceEdicion = null;
            document.getElementById("btnAddSerie").textContent = "Agregar Serie";
        }
        else {
            // Verificar duplicados
            const existe = this.listaSeries.find(s => s.nombre.toLowerCase() === nombre.toLowerCase());
            if (existe) {
                alert("❌ Ya existe una serie con ese nombre.");
                return;
            }
            // Crear nueva serie
            const nuevaSerie = new Serie(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen, capitulos, temporadas, creador, genero, actoresPrincipales, duracionPromedioCapitulo, calificacion, estado);
            this.listaSeries.push(nuevaSerie);
            alert("✅ Serie agregada exitosamente");
        }
        this.limpiarFormulario();
        this.mostrarSeriesEnTabla();
    }
    // MOSTRAR SERIES EN TABLA
    mostrarSeriesEnTabla() {
        const tablaBody = document.querySelector("#tablaSeries tbody");
        if (!tablaBody)
            return;
        tablaBody.innerHTML = "";
        if (this.listaSeries.length === 0) {
            tablaBody.innerHTML = `<tr><td colspan="15" style="text-align:center;">No hay series registradas</td></tr>`;
            return;
        }
        this.listaSeries.forEach((serie, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
        <td>${serie.nombre}</td>
        <td>${serie.fechaDePublicacion}</td>
        <td>${serie.restriccionDeEdad}</td>
        <td>${serie.descripcion}</td>
        <td>${serie.idiomaOriginal}</td>
        <td>${serie.doblajes.join(", ")}</td>
        <td>${serie.subtitulos.join(", ")}</td>
        <td><img src="${serie.imagen}" alt="${serie.nombre}" width="100"></td>
        <td>${serie.temporadas}</td>
        <td>${serie.creador}</td>
        <td>${serie.genero}</td>
        <td>${serie.actoresPrincipales.join(", ")}</td>
        <td>${serie.duracionPromedioCapitulo} min</td>
        <td>${serie.calificacion}</td>
        <td>${serie.estado}</td>
        <td>
          <button class="btnEditar" data-index="${index}">✏️ Editar</button>
          <button class="btnEliminar" data-index="${index}">🗑️ Eliminar</button>
        </td>
      `;
            tablaBody.appendChild(fila);
        });
        // Asignar eventos a botones
        tablaBody.querySelectorAll(".btnEliminar").forEach(btn => {
            btn.addEventListener("click", e => {
                const index = parseInt(e.target.getAttribute("data-index") || "-1");
                if (index >= 0)
                    this.eliminarSerie(index);
            });
        });
        tablaBody.querySelectorAll(".btnEditar").forEach(btn => {
            btn.addEventListener("click", e => {
                const index = parseInt(e.target.getAttribute("data-index") || "-1");
                if (index >= 0)
                    this.cargarSerieEnFormulario(index);
            });
        });
    }
    // ELIMINAR SERIE
    eliminarSerie(index) {
        const serie = this.listaSeries[index];
        if (!serie)
            return;
        const confirmacion = confirm(`¿Seguro que deseas eliminar "${serie.nombre}"?`);
        if (!confirmacion)
            return;
        this.listaSeries.splice(index, 1);
        alert("🗑️ Serie eliminada correctamente");
        this.mostrarSeriesEnTabla();
    }
    // CARGAR DATOS EN FORMULARIO PARA EDITAR
    cargarSerieEnFormulario(index) {
        const serie = this.listaSeries[index];
        if (!serie)
            return;
        document.getElementById("NewSerieName").value = serie.nombre;
        document.getElementById("NewSerieDate").value = serie.fechaDePublicacion;
        document.getElementById("NewSerieAge").value = serie.restriccionDeEdad;
        document.getElementById("NewSerieDescrip").value = serie.descripcion;
        document.getElementById("NewSerieLang").value = serie.idiomaOriginal;
        document.getElementById("NewSerieImagen").value = serie.imagen;
        document.getElementById("NewSerieTemporadas").value = serie.temporadas.toString();
        document.getElementById("NewSerieCreador").value = serie.creador;
        document.getElementById("NewSerieGenero").value = serie.genero;
        document.getElementById("NewSerieActores").value = serie.actoresPrincipales.join(", ");
        document.getElementById("NewSerieDuracion").value = serie.duracionPromedioCapitulo.toString();
        document.getElementById("NewSerieCalificacion").value = serie.calificacion.toString();
        document.getElementById("NewSerieEstado").value = serie.estado;
        document.getElementById("NewSerieDoblaje").value = serie.doblajes.join(", ");
        document.getElementById("NewSerieSubTitle").value = serie.subtitulos.join(", ");
        document.getElementById("NewSerieCapitulos").value = serie.capitulos.join(", ");
        this.indiceEdicion = index;
        document.getElementById("btnAddSerie").textContent = "Guardar Cambios";
    }
    // LIMPIAR FORMULARIO
    limpiarFormulario() {
        const campos = [
            "NewSerieName", "NewSerieDate", "NewSerieAge", "NewSerieDescrip", "NewSerieLang",
            "NewSerieImagen", "NewSerieTemporadas", "NewSerieCreador", "NewSerieGenero",
            "NewSerieActores", "NewSerieDuracion", "NewSerieCalificacion", "NewSerieEstado",
            "NewSerieDoblaje", "NewSerieSubTitle", "NewSerieCapitulos"
        ];
        campos.forEach(id => {
            const input = document.getElementById(id);
            if (input)
                input.value = "";
        });
    }
}
// Instancia global
const gestorSeries = new GestionarSeries();
// Eventos
document.getElementById("btnAddSerie")?.addEventListener("click", () => gestorSeries.agregarSerie());
window.addEventListener("DOMContentLoaded", () => gestorSeries.mostrarSeriesEnTabla());
// Exportar
export const gestionModule = gestorSeries;
//# sourceMappingURL=gestionarSeries.js.map