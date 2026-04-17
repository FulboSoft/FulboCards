'use client';
import React from 'react';
import Link from 'next/link';

export default function JuegosHubPage() {
  const games = [
    {
      title: "Jugador Oculto",
      description: "Adivina el jugador del día con pistas estilo LOLdle.",
      icon: "👤",
      link: "/juego/jugador-oculto",
      status: "Disponible",
      color: "from-green-600 to-emerald-900"
    },
    {
      title: "SBC / Desafíos",
      description: "Intercambia tus cartas repetidas por recompensas épicas.",
      icon: "📋",
      link: "#",
      status: "Próximamente",
      color: "from-blue-600 to-indigo-900"
    },
    {
      title: "Pronósticos",
      description: "Adivina resultados de la fecha real y gana monedas.",
      icon: "📈",
      link: "#",
      status: "Próximamente",
      color: "from-purple-600 to-fuchsia-900"
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-black text-white uppercase tracking-tighter mb-2">
            Centro de Juegos
          </h1>
          <p className="text-neutral-400 font-medium">
            Completa retos diarios para obtener monedas y mejorar tu colección.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div 
              key={index}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-600 transition-all shadow-2xl"
            >
              {/* Fondo con gradiente sutil */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${game.color}`}></div>
              
              <div className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {game.icon}
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                    {game.title}
                  </h2>
                  <span className={`text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest ${
                    game.status === 'Disponible' ? 'bg-green-500 text-black' : 'bg-neutral-800 text-neutral-500'
                  }`}>
                    {game.status}
                  </span>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  {game.description}
                </p>

                {game.status === 'Disponible' ? (
                  <Link 
                    href={game.link}
                    className="block w-full text-center bg-white text-black font-black py-3 rounded-xl hover:bg-yellow-500 transition-colors uppercase tracking-widest text-xs"
                  >
                    Jugar Ahora
                  </Link>
                ) : (
                  <button disabled className="w-full text-center bg-neutral-800 text-neutral-600 font-black py-3 rounded-xl uppercase tracking-widest text-xs cursor-not-allowed">
                    Bloqueado
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Sección de estadísticas de juego rápida */}
        <div className="mt-16 p-8 bg-neutral-900/50 border border-neutral-800 rounded-3xl flex flex-wrap justify-around gap-8">
          <div className="text-center">
            <span className="block text-neutral-500 text-xs font-black uppercase mb-1">Racha Diaria</span>
            <span className="text-3xl font-black text-orange-500">🔥 5 Días</span>
          </div>
          <div className="text-center">
            <span className="block text-neutral-500 text-xs font-black uppercase mb-1">Monedas Ganadas</span>
            <span className="text-3xl font-black text-yellow-500">🪙 2,450</span>
          </div>
          <div className="text-center">
            <span className="block text-neutral-500 text-xs font-black uppercase mb-1">Puesto Global</span>
            <span className="text-3xl font-black text-blue-500">#1,204</span>
          </div>
        </div>
      </div>
    </main>
  );
}