'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DailyReward() {
  const [isOpen, setIsOpen] = useState(false);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    // Simulamos que el backend nos dice que hoy no reclamamos el sobre
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-neutral-900 border-2 border-yellow-500/50 rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(234,179,8,0.3)] relative overflow-hidden">
        {/* Luces de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-yellow-500/20 blur-[60px]"></div>

        <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 italic">
          ¡Regalo Diario!
        </h2>
        <p className="text-neutral-400 text-sm mb-8 font-medium">
          Por volver hoy a FulboCards, tienes un sobre esperándote.
        </p>

        <div className="relative group mb-8 flex justify-center">
          <div className="text-8xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-bounce">
            📦
          </div>
        </div>

        {!claimed ? (
          <button
            onClick={() => setClaimed(true)}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-xl transition-all uppercase tracking-widest text-sm"
          >
            Reclamar Sobre
          </button>
        ) : (
          <div className="animate-in zoom-in duration-300">
            <p className="text-green-400 font-bold mb-4 italic">¡Sobre añadido a tu inventario!</p>
            <Link 
              href="/sobres/abrir"
              className="block w-full bg-white text-black font-black py-4 rounded-xl transition-all uppercase tracking-widest text-sm"
            >
              Ir a Abrirlo Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}