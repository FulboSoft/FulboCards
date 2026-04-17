'use client';
import React from 'react';
import MarketItem from '@/components/MarketItem';

const MOCK_MARKET = [
  { id: 1, title: "Lionel Messi", rarity: "legendary", price: 15000, seller: "GomeriaRenato_Admin", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Messi" },
  { id: 2, title: "Dibu Martínez", rarity: "epic", price: 4500, seller: "Seba_C", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Dibu" },
  { id: 3, title: "Enzo Fernández", rarity: "rare", price: 1200, seller: "Toto_UTN", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Enzo" },
  { id: 4, title: "Gol de Chilena", rarity: "rare", price: 850, seller: "FulboFan_99", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Goal" },
  { id: 5, title: "Defensa UTN", rarity: "common", price: 150, seller: "UTN_FRCU_User", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Defense" },
];

export default function MercadoPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      
      {/* Columna de Filtros (Izquierda) */}
      <aside className="w-full md:w-64 shrink-0 bg-neutral-900 border border-neutral-800 rounded-xl p-6 h-fit sticky top-24 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wide border-b border-neutral-700 pb-2">
          Filtros
        </h2>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-neutral-400 mb-2">Buscar Jugador / Momento</label>
          <input 
            type="text" 
            placeholder="Ej: Messi..." 
            className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-neutral-400 mb-2">Rareza Máxima</label>
          <select className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500">
            <option>Todas</option>
            <option>Común</option>
            <option>Raro</option>
            <option>Épico</option>
            <option>Legendario</option>
          </select>
        </div>

        <button className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-black py-3 rounded-lg transition-all uppercase text-xs tracking-widest">
          Buscar Ofertas
        </button>
      </aside>

      {/* Columna de Resultados (Derecha) */}
      <section className="flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Mercado Global
            </h1>
            <p className="text-neutral-500 text-sm font-bold">Encuentra las cartas más raras del servidor</p>
          </div>
          <div className="bg-neutral-800 px-4 py-2 rounded-lg border border-neutral-700 text-xs font-bold text-neutral-400">
            {MOCK_MARKET.length} RESULTADOS ENCONTRADOS
          </div>
        </div>

        {/* Lista de Ítems */}
        <div className="space-y-4">
          {MOCK_MARKET.map((item) => (
            <MarketItem 
              key={item.id}
              title={item.title}
              rarity={item.rarity as any}
              price={item.price}
              seller={item.seller}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>

        {MOCK_MARKET.length === 0 && (
          <div className="bg-neutral-900 border border-neutral-800 border-dashed rounded-xl h-64 flex flex-col items-center justify-center text-neutral-500">
            <span className="text-4xl mb-4">🛒</span>
            <p>No hay ofertas que coincidan con tu búsqueda.</p>
          </div>
        )}
      </section>

    </main>
  );
}