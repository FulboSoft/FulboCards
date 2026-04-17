'use client';
import React from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import CollectibleCard from '@/components/CollectibleCard';
import { useRouter } from 'next/navigation';

export default function PerfilPage() {
  // Obtenemos los datos del store global
  const { user, logout } = useAuthStore();
  const router = useRouter();


  const handleLogout = () => {
    logout();
    router.push('/login'); // Lo mandamos al login al salir
  };
  // Datos simulados adicionales para el perfil
  const stats = {
    totalCards: 124,
    packsOpened: 45,
    joinedDate: 'Abril 2026',
    rank: 'Coleccionista de Élite'
  };

  return (
    <main className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado de Perfil */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12 flex flex-col md:flex-row gap-8 items-center shadow-2xl relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10"></div>
          
          {/* Avatar Pixel Art */}
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full p-1 shadow-lg">
            <div className="w-full h-full bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-neutral-900">
               <img 
                src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Sebastian" 
                alt="Avatar" 
                className="w-full h-full object-cover"
                style={{ imageRendering: 'pixelated' }}
               />
            </div>
          </div>

          {/* Información del Usuario */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-1">
              {user?.email.split('@')[0] || 'Coleccionista'}
            </h1>
            <p className="text-yellow-500 font-bold uppercase text-sm tracking-widest mb-4">
              {stats.rank}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-neutral-800 px-4 py-2 rounded-lg border border-neutral-700">
                <span className="block text-xs text-neutral-500 uppercase font-bold">Monedas</span>
                <span className="text-xl font-black text-white">🪙 {user?.coins || 0}</span>
              </div>
              <div className="bg-neutral-800 px-4 py-2 rounded-lg border border-neutral-700">
                <span className="block text-xs text-neutral-500 uppercase font-bold">Miembro desde</span>
                <span className="text-lg font-bold text-white">{stats.joinedDate}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Grilla de Estadísticas Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl text-center">
            <span className="text-4xl mb-2 block">🎴</span>
            <span className="block text-3xl font-black text-white">{stats.totalCards}</span>
            <span className="text-xs text-neutral-500 uppercase font-black tracking-widest">Cartas Totales</span>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl text-center">
            <span className="text-4xl mb-2 block">📦</span>
            <span className="block text-3xl font-black text-white">{stats.packsOpened}</span>
            <span className="text-xs text-neutral-500 uppercase font-black tracking-widest">Sobres Abiertos</span>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl text-center">
            <span className="text-4xl mb-2 block">🏆</span>
            <span className="block text-3xl font-black text-white">12</span>
            <span className="text-xs text-neutral-500 uppercase font-black tracking-widest">Desafíos Completos</span>
          </div>
        </div>

        {/* Cartas Destacadas (Trofeos) */}
        <section>
          <div className="flex justify-between items-end mb-8 border-b border-neutral-800 pb-4">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
              Cartas Destacadas
            </h2>
            <button className="text-sm font-bold text-blue-500 hover:text-blue-400 uppercase tracking-widest">
              Ver todas
            </button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            <CollectibleCard 
              title="Lionel Messi" 
              subtitle="Capitán" 
              type="Jugador" 
              rarity="legendary" 
              description="La joya de la corona de tu colección. El mejor de todos los tiempos."
              imageUrl="https://api.dicebear.com/7.x/pixel-art/svg?seed=Messi"
            />
             <div className="opacity-40 grayscale scale-95">
                <div className="w-72 h-[28rem] rounded-xl border-4 border-dashed border-neutral-800 flex items-center justify-center">
                    <span className="text-neutral-700 font-black uppercase text-xl rotate-12">Espacio Vacío</span>
                </div>
             </div>
          </div>
        </section>

        <button 
          onClick={handleLogout}
          className="mt-4 text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-widest border border-red-500/30 px-3 py-1 rounded-md transition-colors">
          Cerrar Sesión
        </button>
      </div>
    </main>
  );
}