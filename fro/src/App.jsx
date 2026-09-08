import { useState } from 'react'
import './App.css'
import Velocidad from './componetes/velocidad'
import Aceleracion from './componetes/Aceleración'
import Fuerza from './componetes/Fuerza.jsx'
import Densidad from './componetes/Densidad.jsx'
import Energia from './componetes/Energía.jsx'
import Distancia from './componetes/Distancia.jsx'


const secciones = [

  { id: 'velocidad', nombre: 'Velocidad', componente: <Velocidad /> },
  { id: 'aceleracion', nombre: 'Aceleración', componente: <Aceleracion /> },
  { id: 'fuerza', nombre: 'Fuerza', componente: <Fuerza /> },
  { id: 'densidad', nombre: 'Densidad', componente: <Densidad /> },
  { id: 'energia', nombre: 'Energía', componente: <Energia /> },
  { id: 'distancia', nombre: 'Distancia', componente: <Distancia /> }


]

function App() {
  const [seccionActiva, setSeccionActiva] = useState('velocidad')
  const actual = secciones.find(s => s.id === seccionActiva)

  return (
    <div className="flex min-h-screen bg-linear-to-t from-gray-900 to-indigo-500">   {/* // Cambié el color de fondo a un degradado lineal */}
      <aside className="w-56 bg-gray-900 border-r border-gray-700 p-6 flex flex-col gap-4 shrink-0"> {/* // Cambié el color de fondo del aside a un gris más oscuro */}
        <h2 className="text-2xl font-bold text-white text-center">Física</h2> {/* // Cambié el color del texto a blanco */}
        <nav className="flex flex-col gap-1"> 
          {secciones.map(s => (
            <button
              key={s.id}
              className={`text-left px-4 py-2.5 rounded-lg text-base transition-colors ${ // Cambié el color de fondo y el color del texto de los botones según si están activos o no
                seccionActiva === s.id
                  ? 'bg-purple-900/30 border border-purple-500/50 text-purple-400 font-semibold'
                  : 'bg-transparent border border-transparent text-gray-300 hover:bg-gray-800 hover:border-gray-600 hover:text-white'
              }`}
              onClick={() => setSeccionActiva(s.id)}
            >
              {s.nombre}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 flex flex-col items-center gap-6"> {/* // Cambié el color de fondo del main a un gris más oscuro */}
        <h1 className="text-4xl font-semibold text-white m-0">{actual.nombre}</h1>
        <div className="flex flex-col gap-3 items-center w-full max-w-sm">
          {actual.componente}
        </div>
      </main>
    </div>
  )
}

export default App
