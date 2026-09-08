// Importacion de dependencias
import express from "express"; // Framework para crear el servidor HTTP
import cors from "cors"; // Middleware para habilitar Cross-Origin Resource Sharing
import fisicaRoutes from "./routes/fisica.routes.js"; // Rutas de los calculos fisicos


// Crear la instancia de la aplicacion Express
const app = express();
const PORT = 3000; // Puerto en el que escucha el servidor

// Middlewares globales
app.use(cors()); // Permite solicitudes desde otrosorigenes (frontend en otro puerto)
app.use(express.json()); // Permite recibir y parsear cuerpos de solicitud en formato JSON
app.use(express.static("fro/dist")); // Sirve archivos estáticos del frontend

// Ruta para verificar el estado del servidor
app.get("/status", (req, res) => {
  res.json({ status: "ok", message: "El servidor esta funcionando correctamente" });
});

// Montar las rutas de fisica bajo el prefijo /fisica
// Todas las rutas definidas en fisica.routes.js estaran disponibles en /fisica/*
app.use("/fisica", fisicaRoutes);

// Manejador de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ mensaje: "Ruta no encontrada" });
});

// Manejador global de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensaje: "Error interno del servidor" });
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
