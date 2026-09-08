import { useState } from "react";

export default function Distancia() {
    const [velocidad, setVelocidad] = useState(0);
    const [tiempo, setTiempo] = useState(0);
    const [distancia, setDistancia] = useState(null);

    const calcularDistancia = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/fisica/distancia`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ velocidad, tiempo }),
        });
        const data = await res.json();
        setDistancia(data.resultado);
    };

    return (
        <>
            <input
                type="number"
                placeholder="Velocidad (km/h)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
                onChange={(e) => setVelocidad(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Tiempo (h)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
                onChange={(e) => setTiempo(Number(e.target.value))}
            />
            <button
                onClick={calcularDistancia}
                className="px-5 py-2.5 rounded-lg border-none bg-purple-600 text-white text-base cursor-pointer hover:bg-purple-500 transition-colors"
            >
                Calcular Distancia
            </button>
            {distancia !== null && (
                <p className="text-lg font-semibold text-white">Distancia: {distancia} km</p>
            )}
        </>
    );
}
