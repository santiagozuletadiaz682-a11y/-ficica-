// Controladores para los calculos fisicos
// Cada funcion recibe la solicitud (req) y respuesta (res) de Express
// Los datos llegan en req.body despues de pasar por el middleware de validacion

/**
 * Calcula la velocidad
 * Formula: v = d / t (velocidad = distancia / tiempo)
 * @param {Object} req.body - { distancia: number, tiempo: number }
 * @returns {Object} JSON con el resultado y unidad "km/h"
 */
export const calcularVelocidad = (req, res) => {
  try {
    const { distancia, tiempo } = req.body;
    const velocidad = distancia / tiempo;
    res.status(200).json({
      operacion: "velocidad",
      distancia,
      tiempo,
      resultado: Number(velocidad.toFixed(4)),
      unidad: "km/h",
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al calcular la velocidad" });
  }
};

/**
 * Calcula la aceleracion
 * Formula: a = (vf - vi) / t (aceleracion = cambio de velocidad / tiempo)
 * @param {Object} req.body - { velocidadInicial: number, velocidadFinal: number, tiempo: number }
 * @returns {Object} JSON con el resultado y unidad "m/s²"
 */
export const calcularAceleracion = (req, res) => {
  try {
    const { velocidadInicial, velocidadFinal, tiempo } = req.body;
    const aceleracion = (velocidadFinal - velocidadInicial) / tiempo;
    res.status(200).json({
      operacion: "aceleracion",
      velocidadInicial,
      velocidadFinal,
      tiempo,
      resultado: Number(aceleracion.toFixed(4)),
      unidad: "m/s²",
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al calcular la aceleración" });
  }
};

/**
 * Calcula la fuerza (Segunda Ley de Newton)
 * Formula: F = m * a (fuerza = masa * aceleracion)
 * @param {Object} req.body - { masa: number, aceleracion: number }
 * @returns {Object} JSON con el resultado y unidad "N" (Newtons)
 */
export const calcularFuerza = (req, res) => {
  try {
    const { masa, aceleracion } = req.body;
    const fuerza = masa * aceleracion;
    res.status(200).json({
      operacion: "fuerza",
      masa,
      aceleracion,
      resultado: Number(fuerza.toFixed(4)),
      unidad: "N",
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al calcular la fuerza" });
  }
};

/**
 * Calcula la energia cinetica
 * Formula: E = 0.5 * m * v² (energia = mitad * masa * velocidad al cuadrado)
 * @param {Object} req.body - { masa: number, velocidad: number }
 * @returns {Object} JSON con el resultado y unidad "J" (Joules)
 */
export const calcularEnergia = (req, res) => {
  try {
    const { masa, velocidad } = req.body;
    const energia = 0.5 * masa * Math.pow(velocidad, 2);
    res.status(200).json({
      operacion: "energia",
      masa,
      velocidad,
      resultado: Number(energia.toFixed(4)),
      unidad: "J",
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al calcular la energía cinética" });
  }
};

/**
 * Calcula la densidad
 * Formula: p = m / V (densidad = masa / volumen)
 * @param {Object} req.body - { masa: number, volumen: number }
 * @returns {Object} JSON con el resultado y unidad "kg/m³"
 */
export const calcularDensidad = (req, res) => {
  try {
    const { masa, volumen } = req.body;
    const densidad = masa / volumen;
    res.status(200).json({
      operacion: "densidad",
      masa,
      volumen,
      resultado: Number(densidad.toFixed(4)),
      unidad: "kg/m³",
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al calcular la densidad" });
  }
};

/**
 * Calcula la distancia
 * Formula: d = v * t (distancia = velocidad * tiempo)
 * @param {Object} req.body - { velocidad: number, tiempo: number }
 * @returns {Object} JSON con el resultado y unidad "km"
 */
export const calcularDistancia = (req, res) => {
  try {
    const { velocidad, tiempo } = req.body;
    const distancia = velocidad * tiempo;
    res.status(200).json({
      operacion: "distancia",
      velocidad,
      tiempo,
      resultado: Number(distancia.toFixed(4)),
      unidad: "km",
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al calcular la distancia" });
  }
};
