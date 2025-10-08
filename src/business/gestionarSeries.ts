import { Serie } from "../modelo/Serie.js";
import { generarSeries } from "./generarSeries.js";

export class GestionarSeries {
  listaSeries: Serie[] = generarSeries();
  private indiceEdicion: number | null = null;

  // AGREGAR O EDITAR SERIE
  public agregarSerie(): void {
    // Obtener valores del formulario
    const nombre = (document.getElementById("NewSerieName") as HTMLInputElement).value.trim();
    const fechaDePublicacion = (document.getElementById("NewSerieDate") as HTMLInputElement).value.trim();
    const restriccionDeEdad = (document.getElementById("NewSerieAge") as HTMLInputElement).value.trim();
    const descripcion = (document.getElementById("NewSerieDescrip") as HTMLInputElement).value.trim();
    const idiomaOriginal = (document.getElementById("NewSerieLang") as HTMLInputElement).value.trim();
    const imagen = (document.getElementById("NewSerieImagen") as HTMLInputElement).value.trim();

    // Arreglos comunes
    const doblajes = (document.getElementById("NewSerieDoblaje") as HTMLInputElement).value
      .split(",").map(d => d.trim()).filter(d => d);
    const subtitulos = (document.getElementById("NewSerieSubTitle") as HTMLInputElement).value
      .split(",").map(s => s.trim()).filter(s => s);

    // Atributos específicos de Serie
    const capitulos = (document.getElementById("NewSerieCapitulos") as HTMLInputElement).value
      .split(",").map(c => c.trim()).filter(c => c);
    const temporadasText = (document.getElementById("NewSerieTemporadas") as HTMLInputElement).value.trim();
    const creador = (document.getElementById("NewSerieCreador") as HTMLInputElement).value.trim();
    const genero = (document.getElementById("NewSerieGenero") as HTMLInputElement).value.trim();
    const actoresPrincipales = (document.getElementById("NewSerieActores") as HTMLInputElement).value
      .split(",").map(a => a.trim()).filter(a => a);
    const duracionPromedioText = (document.getElementById("NewSerieDuracion") as HTMLInputElement).value.trim();
    const calificacionText = (document.getElementById("NewSerieCalificacion") as HTMLInputElement).value.trim();
    const estado = (document.getElementById("NewSerieEstado") as HTMLInputElement).value.trim();

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
      if (!serie) return;

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
      (document.getElementById("btnAddSerie") as HTMLButtonElement).textContent = "Agregar Serie";
    } else {
      // Verificar duplicados
      const existe = this.listaSeries.find(s => s.nombre.toLowerCase() === nombre.toLowerCase());
      if (existe) {
        alert("❌ Ya existe una serie con ese nombre.");
        return;
      }

      // Crear nueva serie
      const nuevaSerie = new Serie(
        nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal,
        doblajes, subtitulos, imagen, capitulos, temporadas, creador,
        genero, actoresPrincipales, duracionPromedioCapitulo, calificacion, estado
      );

      this.listaSeries.push(nuevaSerie);
      alert("✅ Serie agregada exitosamente");
    }

    this.limpiarFormulario();
    this.mostrarSeriesEnTabla();
  }

  // MOSTRAR SERIES EN TABLA
  public mostrarSeriesEnTabla(): void {
    const tablaBody = document.querySelector("#tablaSeries tbody") as HTMLTableSectionElement;
    if (!tablaBody) return;

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
        const index = parseInt((e.target as HTMLElement).getAttribute("data-index") || "-1");
        if (index >= 0) this.eliminarSerie(index);
      });
    });

    tablaBody.querySelectorAll(".btnEditar").forEach(btn => {
      btn.addEventListener("click", e => {
        const index = parseInt((e.target as HTMLElement).getAttribute("data-index") || "-1");
        if (index >= 0) this.cargarSerieEnFormulario(index);
      });
    });
  }

  // ELIMINAR SERIE
  private eliminarSerie(index: number): void {
    const serie = this.listaSeries[index];
    if (!serie) return;

    const confirmacion = confirm(`¿Seguro que deseas eliminar "${serie.nombre}"?`);
    if (!confirmacion) return;

    this.listaSeries.splice(index, 1);
    alert("🗑️ Serie eliminada correctamente");
    this.mostrarSeriesEnTabla();
  }

  // CARGAR DATOS EN FORMULARIO PARA EDITAR
  private cargarSerieEnFormulario(index: number): void {
    const serie = this.listaSeries[index];
    if (!serie) return;

    (document.getElementById("NewSerieName") as HTMLInputElement).value = serie.nombre;
    (document.getElementById("NewSerieDate") as HTMLInputElement).value = serie.fechaDePublicacion;
    (document.getElementById("NewSerieAge") as HTMLInputElement).value = serie.restriccionDeEdad;
    (document.getElementById("NewSerieDescrip") as HTMLInputElement).value = serie.descripcion;
    (document.getElementById("NewSerieLang") as HTMLInputElement).value = serie.idiomaOriginal;
    (document.getElementById("NewSerieImagen") as HTMLInputElement).value = serie.imagen;
    (document.getElementById("NewSerieTemporadas") as HTMLInputElement).value = serie.temporadas.toString();
    (document.getElementById("NewSerieCreador") as HTMLInputElement).value = serie.creador;
    (document.getElementById("NewSerieGenero") as HTMLInputElement).value = serie.genero;
    (document.getElementById("NewSerieActores") as HTMLInputElement).value = serie.actoresPrincipales.join(", ");
    (document.getElementById("NewSerieDuracion") as HTMLInputElement).value = serie.duracionPromedioCapitulo.toString();
    (document.getElementById("NewSerieCalificacion") as HTMLInputElement).value = serie.calificacion.toString();
    (document.getElementById("NewSerieEstado") as HTMLInputElement).value = serie.estado;
    (document.getElementById("NewSerieDoblaje") as HTMLInputElement).value = serie.doblajes.join(", ");
    (document.getElementById("NewSerieSubTitle") as HTMLInputElement).value = serie.subtitulos.join(", ");
    (document.getElementById("NewSerieCapitulos") as HTMLInputElement).value = serie.capitulos.join(", ");

    this.indiceEdicion = index;
    (document.getElementById("btnAddSerie") as HTMLButtonElement).textContent = "Guardar Cambios";
  }

  // LIMPIAR FORMULARIO
  private limpiarFormulario(): void {
    const campos = [
      "NewSerieName", "NewSerieDate", "NewSerieAge", "NewSerieDescrip", "NewSerieLang",
      "NewSerieImagen", "NewSerieTemporadas", "NewSerieCreador", "NewSerieGenero",
      "NewSerieActores", "NewSerieDuracion", "NewSerieCalificacion", "NewSerieEstado",
      "NewSerieDoblaje", "NewSerieSubTitle", "NewSerieCapitulos"
    ];

    campos.forEach(id => {
      const input = document.getElementById(id) as HTMLInputElement;
      if (input) input.value = "";
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
