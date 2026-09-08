import { useState } from "react";

export default function Aceleracion() {
    const [velocidadInicial, setVelocidadInicial] = useState(0);
    const [velocidadFinal, setVelocidadFinal] = useState(0);
    const [tiempo, setTiempo] = useState(0);
    const [aceleracion, setAceleracion] = useState(null);
    const [error, setError] = useState(null);



    const calcularAceleracion = async () => {
        try {
            const res = await fetch("http://localhost:3000/fisica/aceleracion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ velocidadInicial, velocidadFinal, tiempo }),
            });

            if (!res.ok) {
                throw new Error("Error en la solicitud"); // Lanza un error si la respuesta no es exitosa
            }

            const data = await res.json(); // Obtiene los datos de la respuesta en formato JSON
            setAceleracion(data.resultado);
            setError(null);
        } catch (error) { // Captura cualquier error que ocurra durante la solicitud o el procesamiento de la respuesta
            setError(error.message ); // Establece el mensaje de error en el estado para mostrarlo al usuario
            setAceleracion(null); 
        }
    };

    return (
        <>
            <input
                type="number"
                placeholder="Velocidad Inicial (m/s)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
                onChange={(e) => setVelocidadInicial(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Velocidad Final (m/s)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
                onChange={(e) => setVelocidadFinal(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Tiempo (s)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 text-base bg-gray-800 text-white box-border focus:outline-none focus:border-purple-500"
                onChange={(e) => setTiempo(Number(e.target.value))}
            />
            <button
                onClick={calcularAceleracion}
                className="px-5 py-2.5 rounded-lg border-none bg-purple-600 text-white text-base cursor-pointer hover:bg-purple-500 transition-colors"
            >
                Calcular Aceleración
            </button>

            {error && (
                <p className="text-lg font-semibold text-red-500">Error: {error}</p>
            )}
            {aceleracion !== null && (
                <p className="text-lg font-semibold text-white">Aceleración: {aceleracion} m/s²</p>
            )}
        </>
    );
}
