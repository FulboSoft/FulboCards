import React from 'react';

interface MarketItemProps {
  title: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  price: number;
  seller: string;
  imageUrl: string;
}

export default function MarketItem({ title, rarity, price, seller, imageUrl }: MarketItemProps) {
  const rarityColors = {
    common: 'border-stone-500 bg-stone-100 text-stone-900',
    rare: 'border-blue-500 bg-blue-100 text-blue-900',
    epic: 'border-purple-500 bg-purple-100 text-purple-900',
    legendary: 'border-yellow-500 bg-amber-50 text-amber-900 shadow-[0_0_10px_rgba(234,179,8,0.3)]',
  };

  return (
    <div className="group bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center gap-6 hover:border-neutral-600 transition-all mb-3">
      {/* Miniatura de la Carta */}
      <div className={`w-16 h-20 border-2 rounded-md overflow-hidden flex-shrink-0 ${rarityColors[rarity]}`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover" 
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Info del Ítem */}
      <div className="flex-1">
        <h3 className="text-white font-black uppercase text-lg leading-none mb-1">{title}</h3>
        <div className="flex gap-3 items-center">
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-neutral-800 text-neutral-400 rounded">
            {rarity}
          </span>
          <span className="text-xs text-neutral-500 italic">Vendedor: {seller}</span>
        </div>
      </div>

      {/* Precio y Acción */}
      <div className="text-right flex flex-col items-end gap-2">
        <div className="flex items-center gap-2 text-yellow-500 font-black text-xl">
          <span>🪙</span>
          <span>{price.toLocaleString()}</span>
        </div>
        <button className="bg-white text-black text-xs font-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-widest">
          Comprar
        </button>
      </div>
    </div>
  );
}