'use client'; // Necesario en Next.js porque usamos useState y onClick

import React, { useState } from 'react';
import CollectibleCard from '@/components/CollectibleCard';

// Tipos para simular la respuesta del backend
type CardData = {
  id: string;
  title: string;
  subtitle: string;
  type: 'Jugador' | 'Momento';
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  imageUrl: string;
};

export default function PackOpeningPage() {
  const [status, setStatus] = useState<'idle' | 'opening' | 'revealed'>('idle');
  const [cards, setCards] = useState<CardData[]>([]);

  // Simulación de la llamada a la API de Django
  const handleOpenPack = () => {
    setStatus('opening');

    // Simulamos que el servidor tarda 2.5 segundos en calcular las probabilidades
    setTimeout(() => {
      const mockResponse: CardData[] = [
        {
          id: '1',
          title: "Jugador Base",
          subtitle: "Primera División",
          type: "Jugador",
          description: "Un jugador sólido para empezar tu equipo.",
          rarity: "common",
          imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Base1"
        },
        {
          id: '2',
          title: "Ángel Di María",
          subtitle: "Copa América",
          type: "Momento",
          description: "El característico festejo del corazón tras un gol decisivo.",
          rarity: "rare",
          imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Fideo"
        },
        {
          id: '3',
          title: "Lionel Messi",
          subtitle: "Final Mundial 2022",
          type: "Momento",
          description: "Levantando la copa más deseada del mundo.",
          rarity: "legendary",
          imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Messi"
        }
      ];
      setCards(mockResponse);
      setStatus('revealed');
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-neutral-950 p-8 flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Luces de fondo dramáticas */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-30">
        <div className="w-96 h-96 bg-purple-600 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-5xl">
        
        {/* ESTADO 1 y 2: SOBRE CERRADO / TEMBLANDO */}
        {status !== 'revealed' && (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white mb-8 tracking-widest uppercase">
              {status === 'idle' ? 'Abre tu Sobre' : 'Revelando...'}
            </h1>
            
            {/* El Sobre Físico */}
            <div 
              onClick={status === 'idle' ? handleOpenPack : undefined}
              className={`
                relative w-64 h-96 bg-gradient-to-br from-purple-700 to-indigo-900 
                rounded-xl border-4 border-fuchsia-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]
                flex flex-col items-center justify-center cursor-pointer transition-all duration-300
                ${status === 'idle' ? 'hover:scale-105 hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]' : ''}
                ${status === 'opening' ? 'animate-pulse scale-110 brightness-150 shadow-[0_0_100px_rgba(255,255,255,0.8)]' : ''}
              `}
              // Truco CSS para que tiemble sin instalar librerías
              style={status === 'opening' ? { transform: 'scale(1.1) rotate(2deg)' } : {}}
            >
              <div className="text-6xl mb-4">✨</div>
              <h2 className="text-2xl font-black text-white tracking-tighter shadow-black drop-shadow-lg">
                SOBRE ÉPICO
              </h2>
              <span className="text-fuchsia-200 text-sm font-bold mt-2">Contiene 3 cartas</span>
              
              {/* Instrucción */}
              {status === 'idle' && (
                <div className="absolute -bottom-16 text-neutral-400 font-semibold animate-bounce">
                  Haz clic para abrir
                </div>
              )}
            </div>
          </div>
        )}

        {/* ESTADO 3: CARTAS REVELADAS */}
        {status === 'revealed' && (
          <div className="w-full animate-fade-in-up">
            <h1 className="text-4xl font-black text-white mb-12 text-center tracking-wider drop-shadow-lg">
              ¡NUEVAS CARTAS!
            </h1>
            
            <div className="flex flex-wrap gap-8 justify-center items-center">
              {cards.map((card, index) => (
                <div 
                  key={card.id} 
                  // Un pequeño retraso en la animación para que aparezcan en cascada (una por una)
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 300}ms`, animationFillMode: 'both' }}
                >
                  <CollectibleCard 
                    title={card.title}
                    subtitle={card.subtitle}
                    type={card.type}
                    description={card.description}
                    rarity={card.rarity}
                    imageUrl={card.imageUrl}
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => setStatus('idle')}
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-8 rounded-full border border-neutral-600 transition-colors uppercase tracking-widest text-sm"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}