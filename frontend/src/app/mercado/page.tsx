import React from 'react';

export default function MercadoPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto flex gap-8">
      
      {/* Columna de Filtros (Izquierda) */}
      <aside className="w-64 shrink-0 bg-neutral-900 border border-neutral-800 rounded-xl p-6 h-fit sticky top-24">
        <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wide border-b border-neutral-700 pb-2">
          Filtros
        </h2>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-neutral-400 mb-2">Buscar Jugador</label>
          <input 
            type="text" 
            placeholder="Ej: Messi..." 
            className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-neutral-400 mb-2">Rareza</label>
          <select className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500">
            <option>Todas</option>
            <option>Común</option>
            <option>Raro</option>
            <option>Épico</option>
            <option>Legendario</option>
          </select>
        </div>

        <button className="w-full bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-2 rounded transition-colors">
          Aplicar Filtros
        </button>
      </aside>

      {/* Columna de Resultados (Derecha) */}
      <section className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-black text-white tracking-wider">
            MERCADO DE TRANSFERENCIAS
          </h1>
          <span className="text-neutral-400 text-sm">Mostrando 0 resultados</span>
        </div>

        {/* Zona vacía por ahora */}
        <div className="bg-neutral-900 border border-neutral-800 border-dashed rounded-xl h-96 flex flex-col items-center justify-center text-neutral-500">
          <span className="text-4xl mb-4">🛒</span>
          <p>El mercado está vacío en este momento.</p>
          <p className="text-sm">Pronto podrás comprar y vender cartas aquí.</p>
        </div>
      </section>

    </main>
  );
}