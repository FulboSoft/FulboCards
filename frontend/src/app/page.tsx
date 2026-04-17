'use client';
import React, { useState } from 'react';
import CollectibleCard from '@/components/CollectibleCard';

// Definimos el tipo de datos para nuestras cartas
type Card = {
  id: number;
  title: string;
  subtitle: string;
  type: 'Jugador' | 'Momento';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  description: string;
  imageUrl: string;
};

// Datos de prueba (El "Mock")
const INITIAL_CARDS: Card[] = [
  { id: 1, title: "Lionel Messi", subtitle: "Final 2022", type: "Momento", rarity: "legendary", description: "El momento en que el 10 levanta la copa del mundo.", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Messi" },
  { id: 2, title: "Dibu Martínez", subtitle: "Atajada Final", type: "Momento", rarity: "epic", description: "La atajada que valió un mundial en el minuto 123.", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Dibu" },
  { id: 3, title: "Angel Di María", subtitle: "Final 2021", type: "Momento", rarity: "rare", description: "El gol por arriba del arquero en el Maracaná.", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Fideo" },
  { id: 4, title: "Jugador Promesa", subtitle: "UTN FRCU", type: "Jugador", rarity: "common", description: "Un joven talento surgido de las inferiores locales.", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Student" },
  { id: 5, title: "Julián Álvarez", subtitle: "Semifinal", type: "Momento", rarity: "epic", description: "Corrida épica desde mitad de cancha contra Croacia.", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Araña" },
];

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'common' | 'rare' | 'epic' | 'legendary'>('all');

  // Lógica de filtrado
  const filteredCards = filter === 'all' 
    ? INITIAL_CARDS 
    : INITIAL_CARDS.filter(card => card.rarity === filter);

  return (
    <main className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase">
            Mi Álbum Digital
          </h1>
          
          {/* Botonera de Filtros - Estilo Retro */}
          <div className="flex flex-wrap justify-center gap-2 bg-neutral-900 p-2 rounded-xl border border-neutral-800 inline-flex">
            {['all', 'common', 'rare', 'epic', 'legendary'].map((r) => (
              <button
                key={r}
                onClick={() => setFilter(r as any)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all
                  ${filter === r 
                    ? 'bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]' 
                    : 'text-neutral-500 hover:text-white hover:bg-neutral-800'}
                `}
              >
                {r === 'all' ? 'Todas' : r}
              </button>
            ))}
          </div>
        </header>

        {/* Grilla de Cartas con Animación de entrada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {filteredCards.map((card) => (
            <div key={card.id} className="animate-fade-in-up">
              <CollectibleCard 
                title={card.title}
                subtitle={card.subtitle}
                type={card.type}
                rarity={card.rarity}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            </div>
          ))}
          
          {filteredCards.length === 0 && (
            <div className="col-span-full py-20 text-neutral-600 font-bold uppercase tracking-widest">
              No tienes cartas de esta rareza todavía 📦
            </div>
          )}
        </div>
      </div>
    </main>
  );
}