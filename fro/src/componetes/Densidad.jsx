import { useState } from "react";

export default function Densidad() {
    const [masa, setMasa] = useState(0);
    const [volumen, setVolumen] = useState(0);
    const [densidad, setDensidad] = useState(null);

    const calcularDensidad = async () => {
        const densidadCalculada = await fetch("http://localhost:3000/fisica/densidad", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ masa, volumen }),
        });
        const data = await densidadCalculada.json();
        setDensidad(data.resultado);
    };

    return (
        <>
            <input
                type="number"
                placeholder="Masa (kg)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
                onChange={(e) => setMasa(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Volumen (m³)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
                onChange={(e) => setVolumen(Number(e.target.value))}
            />
            <button
                onClick={calcularDensidad}
                className="px-5 py-2.5 rounded-lg border-none bg-purple-600 text-white text-base cursor-pointer hover:bg-purple-500 transition-colors"
            >
                Calcular Densidad
            </button>
            {densidad !== null && (
                <p className="text-lg font-semibold text-white">Densidad: {densidad} kg/m³</p>
            )}
        </>
    );
}
