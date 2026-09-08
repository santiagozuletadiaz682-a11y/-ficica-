import { useState } from "react";

export default function Energia() {
    const [masa, setMasa] = useState(0);
    const [velocidad, setVelocidad] = useState(0);
    const [energia, setEnergia] = useState(null);

    const calcularEnergia = async () => {
        const resultado = await fetch("http://localhost:3000/fisica/energia", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ masa, velocidad }),
        });
        const data = await resultado.json();
        setEnergia(data.resultado);
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
                placeholder="Velocidad (m/s)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
                onChange={(e) => setVelocidad(Number(e.target.value))}
            />
            <button
                onClick={calcularEnergia}
                className="px-5 py-2.5 rounded-lg border-none bg-purple-600 text-white text-base cursor-pointer hover:bg-purple-500 transition-colors"
            >
                Calcular Energía
            </button>
            {energia !== null && (
                <p className="text-lg font-semibold text-white">Energía: {energia} J</p>
            )}
        </>
    );
}
