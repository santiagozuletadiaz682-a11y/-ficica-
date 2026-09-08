import { useState } from "react";

export default function Fuerza() {
    const [masa, setMasa] = useState(0);
    const [aceleracion, setAceleracion] = useState(0);
    const [fuerza, setFuerza] = useState(null);

    const calcularFuerza = async () => {
        const res = await fetch("http://localhost:3000/fisica/fuerza", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ masa, aceleracion }),
        });
        const data = await res.json();
        setFuerza(data.resultado);
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
                placeholder="Aceleración (m/s²)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
                onChange={(e) => setAceleracion(Number(e.target.value))}
            />
            <button
                onClick={calcularFuerza}
                className="px-5 py-2.5 rounded-lg border-none bg-purple-600 text-white text-base cursor-pointer hover:bg-purple-500 transition-colors"
            >
                Calcular Fuerza
            </button>
            {fuerza !== null && (
                <p className="text-lg font-semibold text-white">Fuerza: {fuerza} N</p>
            )}
        </>
    );
}
