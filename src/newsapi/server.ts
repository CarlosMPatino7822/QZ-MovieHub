// src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getMovieNews } from "./news.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// === Endpoint para noticias ===
app.get("/api/news", async (req, res) => {
  try {
    const articles = await getMovieNews();
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener noticias" });
  }
});

// Servir archivos estáticos (frontend)
app.use(express.static("src/public"));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});