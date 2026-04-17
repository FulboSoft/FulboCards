import CollectibleCard from '@/components/CollectibleCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-12 text-center tracking-wider">
          MI COLECCIÓN
        </h1>
        
        <div className="flex flex-wrap gap-8 justify-center">
          <CollectibleCard 
            title="Lionel Messi" 
            subtitle="Final Mundial 2022" 
            type="Momento" 
            description="El instante exacto en el que levanta la copa del mundo con la túnica negra (bisht), consagrándose en Qatar."
            rarity="legendary" 
            imageUrl="https://api.dicebear.com/7.x/pixel-art/svg?seed=Messi"
          />
          <CollectibleCard 
            title="Atajada del Dibu" 
            subtitle="Minuto 123" 
            type="Momento" 
            description="Emiliano Martínez estira su pierna izquierda para atajar el remate de Kolo Muani, salvando a Argentina en el último segundo."
            rarity="epic" 
            imageUrl="https://api.dicebear.com/7.x/pixel-art/svg?seed=Dibu"
          />
          <CollectibleCard 
            title="Jugador Base" 
            subtitle="Primera División" 
            type="Jugador" 
            description="Debutó en primera en el año 2023. Se destaca por su velocidad y control del balón en espacios reducidos."
            rarity="common" 
            imageUrl="https://api.dicebear.com/7.x/pixel-art/svg?seed=Player"
          />
        </div>
      </div>
    </main>
  );
}