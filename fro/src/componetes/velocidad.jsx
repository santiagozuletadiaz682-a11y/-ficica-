import { useState } from "react";

export default function Velocidad() {
  const [distancia, setDistancia] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [velocidad, setVelocidad] = useState(null);

  const calcularVelocidad = async () => {
    const res = await fetch("http://localhost:3000/fisica/velocidad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ distancia, tiempo }),
    });
    const data = await res.json();
    setVelocidad(data.resultado);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Distancia (km)"
        className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
        onChange={(e) => setDistancia(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Tiempo (h)"
        className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
        onChange={(e) => setTiempo(Number(e.target.value))}
      />
      <button
        onClick={calcularVelocidad}
        className="px-5 py-2.5 rounded-lg border-none bg-purple-600 text-white text-base cursor-pointer hover:bg-purple-500 transition-colors"
      >
        Calcular Velocidad
      </button>
      {velocidad !== null && (
        <p className="text-lg font-semibold text-white">Velocidad: {velocidad} km/h</p>
      )}
    </>
  );
}
