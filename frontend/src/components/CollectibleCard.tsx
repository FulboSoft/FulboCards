import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  type: 'Jugador' | 'Momento';
  description?: string;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
  imageUrl?: string;
}

export default function CollectibleCard({
  title,
  subtitle,
  type,
  description = "Un momento épico que quedará grabado en la historia del fútbol mundial.",
  rarity = 'common',
  imageUrl = '/placeholder.png'
}: CardProps) {

  // Configuramos colores más fuertes y reales simulando los tipos de Pokémon (Fuego, Agua, Psíquico, Oscuro/Dorado)
  const theme = {
    common: {
      border: 'bg-yellow-400', // El clásico borde amarillo
      background: 'bg-gradient-to-br from-red-600 to-red-800', 
      text: 'text-white',
    },
    rare: {
      border: 'bg-slate-300', 
      background: 'bg-gradient-to-br from-blue-600 to-blue-900', 
      text: 'text-white',
    },
    epic: {
      border: 'bg-fuchsia-400', 
      background: 'bg-gradient-to-br from-purple-700 to-indigo-900', 
      text: 'text-white',
    },
    legendary: {
      border: 'bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300', // Borde dorado foil
      background: 'bg-gradient-to-br from-zinc-800 to-black', 
      text: 'text-yellow-400',
    }
  };

  const current = theme[rarity];
  const isHolo = rarity === 'epic' || rarity === 'legendary';

  return (
    <div className={`w-72 h-[28rem] rounded-xl p-3 shadow-2xl relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 ${current.border}`}>

      {/* Efecto Holográfico para cartas raras */}
      {isHolo && (
        <div className="absolute inset-0 z-50 pointer-events-none mix-blend-color-dodge opacity-0 group-hover:opacity-60 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white to-transparent" style={{ backgroundSize: '200% 200%' }} />
      )}

      {/* Fondo interno de la carta */}
      <div className={`w-full h-full rounded-lg flex flex-col p-2 shadow-inner border border-black/20 ${current.background}`}>

        {/* Cabecera: Nombre y Tipo (estilo HP) */}
        <div className={`flex justify-between items-center mb-1 px-1 ${current.text}`}>
          <h2 className="font-bold text-xl uppercase tracking-tighter drop-shadow-md">{title}</h2>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold uppercase">{type}</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shadow-inner border border-white/30 text-xs shadow-black/50">
              {type === 'Jugador' ? '⚽' : '📸'}
            </div>
          </div>
        </div>

        {/* Marco de la Imagen */}
        <div className="w-full h-44 bg-slate-200 border-4 border-gray-300 shadow-[2px_2px_5px_rgba(0,0,0,0.5)] relative overflow-hidden flex-shrink-0">
           <img
             src={imageUrl}
             alt={title}
             className="w-full h-full object-cover"
             style={{ imageRendering: 'pixelated' }}
           />
        </div>

        {/* Barra de información debajo de la imagen (Estilo Peso/Altura de Pokémon) */}
        <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 text-gray-800 text-[10px] font-bold px-2 py-0.5 mt-1 mx-2 flex justify-between shadow-sm border border-gray-300 rounded-sm">
          <span>{subtitle || 'Datos Desconocidos'}</span>
          <span>Edición 2026</span>
        </div>

        {/* Caja de Texto / Contexto (Estilo caja de ataques) */}
        <div className="mt-2 flex-1 bg-gradient-to-b from-amber-50 to-amber-100 border border-amber-200/50 shadow-inner rounded-sm p-3 flex flex-col relative overflow-hidden">
            <h3 className="font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2 text-sm flex justify-between items-center">
                <span>Contexto Histórico</span>
                <span className="text-gray-400 font-normal text-xs">#001</span>
            </h3>
            <p className="text-xs text-gray-700 leading-snug font-medium z-10">
                {description}
            </p>
        </div>

        {/* Footer (Estilo debilidad/resistencia/rareza) */}
        <div className="mt-1 flex justify-between items-end px-1 text-[9px] font-bold text-white/70">
            <span>Ilus. FulboCards</span>
            <span className="text-white drop-shadow-md text-xs">
                {rarity === 'common' && '⚫'}
                {rarity === 'rare' && '♦️'}
                {rarity === 'epic' && '⭐'}
                {rarity === 'legendary' && '🌟'}
            </span>
        </div>

      </div>
    </div>
  );
}