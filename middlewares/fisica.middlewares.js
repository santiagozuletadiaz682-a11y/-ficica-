// Middlewares de validacion para cada calculo fisico
// Cada middleware valida: campos obligatorios, tipos de datos, valores negativos y division por cero
// Si hay error, retorna respuesta 400 con mensaje descriptivo
// Si todo es valido, llama a next() para pasar al controlador

/**
 * Valida los datos para el calculo de velocidad
 * Campos requeridos: distancia (number), tiempo (number)
 * Restricciones: no negativos, tiempo no puede ser 0
 */
export const validarVelocidad = (req, res, next) => {
  const { distancia, tiempo } = req.body;

  // Verificar que todos los campos obligatorios estan presentes
  if (distancia === undefined || tiempo === undefined) {
    return res.status(400).json({
      mensaje: "La distancia y el tiempo son datos obligatorios",
    });
  }

  // Verificar que los valores sean de tipo number
  if (typeof distancia !== "number" || typeof tiempo !== "number") {
    return res.status(400).json({
      mensaje: "Distancia y tiempo deben ser números",
    });
  }

  // Verificar que no hayan valores negativos
  if (distancia < 0 || tiempo < 0) {
    return res.status(400).json({
      mensaje: "La distancia y el tiempo no pueden ser negativos",
    });
    
  }

  // Verificar que el tiempo no sea 0 (evitar division por cero)
  if (tiempo === 0) {
    return res.status(400).json({
      mensaje: "El tiempo no puede ser 0",
    });
  }

  next(); // Todo valido, pasar al controlador
};

/**
 * Valida los datos para el calculo de aceleracion
 * Campos requeridos: velocidadInicial, velocidadFinal, tiempo (todos number)
 * Restricciones: no negativos, tiempo no puede ser 0
 */
export const validarAceleracion = (req, res, next) => {
  const { velocidadInicial, velocidadFinal, tiempo } = req.body;

  // Verificar que todos los campos obligatorios estan presentes
  if (velocidadInicial === undefined || velocidadFinal === undefined || tiempo === undefined) {
    return res.status(400).json({
      mensaje: "La velocidad inicial, velocidad final y tiempo son datos obligatorios",
    });
  }

  // Verificar que los valores sean de tipo number
  if (typeof velocidadInicial !== "number" || typeof velocidadFinal !== "number" || typeof tiempo !== "number") {
    return res.status(400).json({
      mensaje: "Todos los valores deben ser números",
    });
  }

  // Verificar que no hayan valores negativos
  if (velocidadInicial < 0 || velocidadFinal < 0 || tiempo < 0) {
    return res.status(400).json({
      mensaje: "Los valores no pueden ser negativos",
    });
  }

  // Verificar que el tiempo no sea 0 (evitar division por cero)
  if (tiempo === 0) {
    return res.status(400).json({
      mensaje: "El tiempo no puede ser 0",
    });
  }

  next(); // Todo valido, pasar al controlador
};

/**
 * Valida los datos para el calculo de fuerza
 * Campos requeridos: masa (number), aceleracion (number)
 * Restricciones: no negativos
 */
export const validarFuerza = (req, res, next) => {
  const { masa, aceleracion } = req.body;

  // Verificar que todos los campos obligatorios estan presentes
  if (masa === undefined || aceleracion === undefined) {
    return res.status(400).json({
      mensaje: "La masa y la aceleración son datos obligatorios",
    });
  }

  // Verificar que los valores sean de tipo number
  if (typeof masa !== "number" || typeof aceleracion !== "number") {
    return res.status(400).json({
      mensaje: "Masa y aceleración deben ser números",
    });
  }

  // Verificar que no hayan valores negativos
  if (masa < 0 || aceleracion < 0) {
    return res.status(400).json({
      mensaje: "Los valores no pueden ser negativos",
    });
  }

  next(); // Todo valido, pasar al controlador
};

/**
 * Valida los datos para el calculo de energia cinetica
 * Campos requeridos: masa (number), velocidad (number)
 * Restricciones: no negativos
 */
export const validarEnergia = (req, res, next) => {
  const { masa, velocidad } = req.body;

  // Verificar que todos los campos obligatorios estan presentes
  if (masa === undefined || velocidad === undefined) {
    return res.status(400).json({
      mensaje: "La masa y la velocidad son datos obligatorios",
    });
  }

  // Verificar que los valores sean de tipo number
  if (typeof masa !== "number" || typeof velocidad !== "number") {
    return res.status(400).json({
      mensaje: "Masa y velocidad deben ser números",
    });
  }

  // Verificar que no hayan valores negativos
  if (masa < 0 || velocidad < 0) {
    return res.status(400).json({
      mensaje: "Los valores no pueden ser negativos",
    });
  }

  next(); // Todo valido, pasar al controlador
};

/**
 * Valida los datos para el calculo de densidad
 * Campos requeridos: masa (number), volumen (number)
 * Restricciones: no negativos, volumen no puede ser 0
 */
export const validarDensidad = (req, res, next) => {
  const { masa, volumen } = req.body;

  // Verificar que todos los campos obligatorios estan presentes
  if (masa === undefined || volumen === undefined) {
    return res.status(400).json({
      mensaje: "La masa y el volumen son datos obligatorios",
    });
  }

  // Verificar que los valores sean de tipo number
  if (typeof masa !== "number" || typeof volumen !== "number") {
    return res.status(400).json({
      mensaje: "Masa y volumen deben ser números",
    });
  }

  // Verificar que no hayan valores negativos
  if (masa < 0 || volumen < 0) {
    return res.status(400).json({
      mensaje: "Los valores no pueden ser negativos",
    });
  }

  // Verificar que el volumen no sea 0 (evitar division por cero)
  if (volumen === 0) {
    return res.status(400).json({
      mensaje: "El volumen no puede ser 0",
    });
  }

  next();
};

/**
 * Valida los datos para el calculo de distancia
 * Campos requeridos: velocidad (number), tiempo (number)
 * Restricciones: no negativos
 */
export const validarDistancia = (req, res, next) => {
  const { velocidad, tiempo } = req.body;

  // Verificar que todos los campos obligatorios estan presentes
  if (velocidad === undefined || tiempo === undefined) {
    return res.status(400).json({
      mensaje: "La velocidad y el tiempo son datos obligatorios",
    });
  }

  // Verificar que los valores sean de tipo number
  if (typeof velocidad !== "number" || typeof tiempo !== "number") {
    return res.status(400).json({
      mensaje: "Velocidad y tiempo deben ser números",
    });
  }

  // Verificar que no hayan valores negativos
  if (velocidad < 0 || tiempo < 0) {
    return res.status(400).json({
      mensaje: "Los valores no pueden ser negativos",
    });
  }

  next();
};
