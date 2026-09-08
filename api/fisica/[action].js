export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ mensaje: "Método no permitido" });
  }

  const { action } = req.query;
  const body = req.body;

  try {
    switch (action) {
      case "velocidad": {
        const { distancia, tiempo } = body;
        if (distancia === undefined || tiempo === undefined)
          return res.status(400).json({ mensaje: "La distancia y el tiempo son datos obligatorios" });
        if (typeof distancia !== "number" || typeof tiempo !== "number")
          return res.status(400).json({ mensaje: "Distancia y tiempo deben ser números" });
        if (distancia < 0 || tiempo < 0)
          return res.status(400).json({ mensaje: "La distancia y el tiempo no pueden ser negativos" });
        if (tiempo === 0)
          return res.status(400).json({ mensaje: "El tiempo no puede ser 0" });
        const resultado = distancia / tiempo;
        return res.status(200).json({ operacion: "velocidad", distancia, tiempo, resultado: Number(resultado.toFixed(4)), unidad: "km/h" });
      }

      case "aceleracion": {
        const { velocidadInicial, velocidadFinal, tiempo } = body;
        if (velocidadInicial === undefined || velocidadFinal === undefined || tiempo === undefined)
          return res.status(400).json({ mensaje: "La velocidad inicial, velocidad final y tiempo son datos obligatorios" });
        if (typeof velocidadInicial !== "number" || typeof velocidadFinal !== "number" || typeof tiempo !== "number")
          return res.status(400).json({ mensaje: "Todos los valores deben ser números" });
        if (velocidadInicial < 0 || velocidadFinal < 0 || tiempo < 0)
          return res.status(400).json({ mensaje: "Los valores no pueden ser negativos" });
        if (tiempo === 0)
          return res.status(400).json({ mensaje: "El tiempo no puede ser 0" });
        const resultado = (velocidadFinal - velocidadInicial) / tiempo;
        return res.status(200).json({ operacion: "aceleracion", velocidadInicial, velocidadFinal, tiempo, resultado: Number(resultado.toFixed(4)), unidad: "m/s²" });
      }

      case "fuerza": {
        const { masa, aceleracion } = body;
        if (masa === undefined || aceleracion === undefined)
          return res.status(400).json({ mensaje: "La masa y la aceleración son datos obligatorios" });
        if (typeof masa !== "number" || typeof aceleracion !== "number")
          return res.status(400).json({ mensaje: "Masa y aceleración deben ser números" });
        if (masa < 0 || aceleracion < 0)
          return res.status(400).json({ mensaje: "Los valores no pueden ser negativos" });
        const resultado = masa * aceleracion;
        return res.status(200).json({ operacion: "fuerza", masa, aceleracion, resultado: Number(resultado.toFixed(4)), unidad: "N" });
      }

      case "energia": {
        const { masa, velocidad } = body;
        if (masa === undefined || velocidad === undefined)
          return res.status(400).json({ mensaje: "La masa y la velocidad son datos obligatorios" });
        if (typeof masa !== "number" || typeof velocidad !== "number")
          return res.status(400).json({ mensaje: "Masa y velocidad deben ser números" });
        if (masa < 0 || velocidad < 0)
          return res.status(400).json({ mensaje: "Los valores no pueden ser negativos" });
        const resultado = 0.5 * masa * Math.pow(velocidad, 2);
        return res.status(200).json({ operacion: "energia", masa, velocidad, resultado: Number(resultado.toFixed(4)), unidad: "J" });
      }

      case "densidad": {
        const { masa, volumen } = body;
        if (masa === undefined || volumen === undefined)
          return res.status(400).json({ mensaje: "La masa y el volumen son datos obligatorios" });
        if (typeof masa !== "number" || typeof volumen !== "number")
          return res.status(400).json({ mensaje: "Masa y volumen deben ser números" });
        if (masa < 0 || volumen < 0)
          return res.status(400).json({ mensaje: "Los valores no pueden ser negativos" });
        if (volumen === 0)
          return res.status(400).json({ mensaje: "El volumen no puede ser 0" });
        const resultado = masa / volumen;
        return res.status(200).json({ operacion: "densidad", masa, volumen, resultado: Number(resultado.toFixed(4)), unidad: "kg/m³" });
      }

      case "distancia": {
        const { velocidad, tiempo } = body;
        if (velocidad === undefined || tiempo === undefined)
          return res.status(400).json({ mensaje: "La velocidad y el tiempo son datos obligatorios" });
        if (typeof velocidad !== "number" || typeof tiempo !== "number")
          return res.status(400).json({ mensaje: "Velocidad y tiempo deben ser números" });
        if (velocidad < 0 || tiempo < 0)
          return res.status(400).json({ mensaje: "Los valores no pueden ser negativos" });
        const resultado = velocidad * tiempo;
        return res.status(200).json({ operacion: "distancia", velocidad, tiempo, resultado: Number(resultado.toFixed(4)), unidad: "km" });
      }

      default:
        return res.status(404).json({ mensaje: "Ruta no encontrada" });
    }
  } catch (error) {
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
}
