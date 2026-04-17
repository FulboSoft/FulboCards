import React from 'react';
import Link from 'next/link';

export default function SobresPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-black text-white mb-4 text-center tracking-wider">
        TIENDA DE SOBRES
      </h1>
      <p className="text-neutral-400 text-center mb-12">
        Usa tus monedas para conseguir nuevos momentos y jugadores.
      </p>

      <div className="flex flex-wrap gap-8 justify-center items-end">
        
        {/* Sobre Básico */}
        <div className="bg-neutral-800 border-2 border-neutral-600 rounded-xl p-6 w-64 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
          <div className="w-32 h-48 bg-slate-500 rounded-lg mb-4 shadow-lg flex items-center justify-center text-5xl">
            📦
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Sobre Base</h2>
          <p className="text-sm text-neutral-400 text-center mb-4">Incluye 3 cartas. Probabilidad de Raro: 10%</p>
          <Link href="/sobres/abrir" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded text-center block">
            🪙 100
          </Link>
        </div>

        {/* Sobre Premium */}
        <div className="bg-neutral-800 border-2 border-purple-500 rounded-xl p-6 w-72 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer relative shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <div className="absolute -top-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            Más Popular
          </div>
          <div className="w-40 h-56 bg-purple-600 rounded-lg mb-4 shadow-lg flex items-center justify-center text-6xl">
            ✨
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Sobre Épico</h2>
          <p className="text-sm text-neutral-400 text-center mb-4">Incluye 5 cartas. Asegura 1 carta Épica o superior.</p>
          <Link href="/sobres/abrir" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded text-lg text-center block">
            🪙 500
          </Link>
        </div>

        {/* Sobre Leyenda */}
        <div className="bg-neutral-800 border-2 border-yellow-500 rounded-xl p-6 w-64 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
          <div className="w-32 h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg mb-4 shadow-lg flex items-center justify-center text-5xl">
            👑
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Sobre Leyenda</h2>
          <p className="text-sm text-neutral-400 text-center mb-4">Incluye 1 carta, pero asegura que sea Legendaria.</p>
          <Link href="/sobres/abrir" className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 rounded text-center block">
            🪙 2000
          </Link>
        </div>

      </div>
    </main>
  );
}