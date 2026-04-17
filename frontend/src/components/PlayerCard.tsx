import React from 'react';

// Definimos la forma de los datos que va a recibir la carta
interface PlayerCardProps {
  name: string;
  rating: number;
  position: string;
  nationality: string; // Puede ser un emoji de bandera o código de país por ahora
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
}

export default function PlayerCard({ 
  name, 
  rating, 
  position, 
  nationality, 
  rarity = 'common' 
}: PlayerCardProps) {
  
  // Un diccionario simple para cambiar el color según la rareza
  const rarityColors = {
    common: 'bg-slate-200 border-slate-400 text-slate-800',
    rare: 'bg-blue-200 border-blue-500 text-blue-900',
    epic: 'bg-purple-200 border-purple-500 text-purple-900',
    legendary: 'bg-gradient-to-br from-yellow-200 to-yellow-500 border-yellow-600 text-yellow-900',
  };

  return (
    <div className={`w-48 h-72 rounded-xl border-4 flex flex-col relative shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer ${rarityColors[rarity]}`}>
      
      {/* Cabecera: Media y Posición */}
      <div className="absolute top-2 left-2 flex flex-col items-center">
        <span className="text-2xl font-bold">{rating}</span>
        <span className="text-sm font-semibold">{position}</span>
        <span className="text-xl mt-1">{nationality}</span>
      </div>

      {/* Silueta / Foto del jugador (Placeholder) */}
      <div className="flex-1 flex justify-center items-end pb-2">
        <div className="w-24 h-24 bg-black/10 rounded-full flex items-center justify-center mb-4">
           👤
        </div>
      </div>

      {/* Nombre e Info */}
      <div className="h-1/3 bg-black/20 w-full rounded-b-lg flex flex-col items-center justify-center p-2">
        <h3 className="font-bold text-lg text-center leading-tight uppercase tracking-wide">
          {name}
        </h3>
        {/* Acá en el futuro pueden ir las stats (PAC, SHO, PAS, etc.) */}
        <div className="flex gap-2 text-xs mt-2 font-semibold">
          <span>PAC 85</span>
          <span>SHO 90</span>
        </div>
      </div>

    </div>
  );
}