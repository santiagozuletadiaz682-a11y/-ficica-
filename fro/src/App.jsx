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
  const [menuAbierto, setMenuAbierto] = useState(false)
  const actual = secciones.find(s => s.id === seccionActiva)

  const seleccionar = (id) => {
    setSeccionActiva(id)
    setMenuAbierto(false)
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-linear-to-t from-gray-900 to-indigo-500">

      {/* Header móvil */}
      <header className="md:hidden bg-gray-900 border-b border-gray-700 p-4 flex items-center justify-between sticky top-0 z-50">
        <h2 className="text-xl font-bold text-white">Física</h2>
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label="Menú"
        >
          {menuAbierto ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <nav className="md:hidden bg-gray-900 border-b border-gray-700 p-4 flex flex-col gap-1 sticky top-16 z-40">
          {secciones.map(s => (
            <button
              key={s.id}
              className={`text-left px-4 py-2.5 rounded-lg text-base transition-colors ${
                seccionActiva === s.id
                  ? 'bg-purple-900/30 border border-purple-500/50 text-purple-400 font-semibold'
                  : 'bg-transparent border border-transparent text-gray-300 hover:bg-gray-800 hover:border-gray-600 hover:text-white'
              }`}
              onClick={() => seleccionar(s.id)}
            >
              {s.nombre}
            </button>
          ))}
        </nav>
      )}

      {/* Sidebar desktop */}
      <aside className="hidden md:flex w-56 bg-gray-900 border-r border-gray-700 p-6 flex-col gap-4 shrink-0 sticky top-0 h-screen">
        <h2 className="text-2xl font-bold text-white text-center">Física</h2>
        <nav className="flex flex-col gap-1">
          {secciones.map(s => (
            <button
              key={s.id}
              className={`text-left px-4 py-2.5 rounded-lg text-base transition-colors ${
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

      {/* Contenido principal */}
      <main className="flex-1 p-4 sm:p-6 flex flex-col items-center gap-6">
        <div className="w-full max-w-sm bg-gray-800/50 border border-gray-700 rounded-2xl p-5 text-center">
          <p className="text-lg sm:text-xl text-purple-400 font-semibold m-0">Hola! Bienvenido a la app de Fisica</p>
          <p className="text-sm text-gray-400 mt-2 m-0">Selecciona una operacion para comenzar</p>
        </div>
        <h1 className="text-2xl sm:text-4xl font-semibold text-white m-0">{actual.nombre}</h1>
        <div className="flex flex-col gap-3 items-center w-full max-w-sm">
          {actual.componente}
        </div>
      </main>
    </div>
  )
}

export default App
