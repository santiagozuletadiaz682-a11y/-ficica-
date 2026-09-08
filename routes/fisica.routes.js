// Importacion de dependencias y modulos
import { Router } from "express"; // Clase Router de Express para definir rutas
// Importar funciones de validacion (middlewares) para cada calculo
import {
  validarVelocidad,
  validarAceleracion,
  validarFuerza,
  validarEnergia,
  validarDensidad,
  validarDistancia,
} from "../middlewares/fisica.middlewares.js";
// Importar controladores que realizan los calculos fisicos
import {
  calcularVelocidad,
  calcularAceleracion,
  calcularFuerza,
  calcularEnergia,
  calcularDensidad,
  calcularDistancia,
} from "../controllers/fisica.controllers.js";

// Crear instancia de Router
const router = Router();

// Definir rutas POST para cada calculo fisico
// Cada ruta tiene: middleware de validacion -> controlador de calculo
// POST /fisica/velocidad - Calcula velocidad: v = d / t
router.post("/velocidad", validarVelocidad, calcularVelocidad);
// POST /fisica/aceleracion - Calcula aceleracion: a = (vf - vi) / t
router.post("/aceleracion", validarAceleracion, calcularAceleracion);
// POST /fisica/fuerza - Calcula fuerza: F = m * a
router.post("/fuerza", validarFuerza, calcularFuerza);
// POST /fisica/energia - Calcula energia cinetica: E = 0.5 * m * v^2
router.post("/energia", validarEnergia, calcularEnergia);
// POST /fisica/densidad - Calcula densidad: p = m / V
router.post("/densidad", validarDensidad, calcularDensidad);
// POST /fisica/distancia - Calcula distancia: d = v * t
router.post("/distancia", validarDistancia, calcularDistancia);

// Exportar el router para usarlo en app.js
export default router;
