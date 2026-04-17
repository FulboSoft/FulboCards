'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function RegistroPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos para el backend:", formData);
    alert("¡Interfaz de registro lista! Esperando conexión con Django...");
  };

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      {/* Tarjeta de Registro */}
      <div className="bg-neutral-900 w-full max-w-md rounded-2xl border border-neutral-800 p-8 shadow-2xl relative overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 blur-[80px] rounded-full"></div>

        <header className="text-center mb-8">
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Únete a la Liga</h1>
          <p className="text-neutral-500 text-sm font-medium mt-2">Crea tu cuenta y recibe un sobre de bienvenida 🎁</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-black text-neutral-400 uppercase tracking-widest mb-1 ml-1">Nombre de Entrenador</label>
            <input 
              type="text" 
              placeholder="Ej: Seba_C"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 outline-none transition-all shadow-inner"
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-black text-neutral-400 uppercase tracking-widest mb-1 ml-1">Correo Electrónico</label>
            <input 
              type="email" 
              placeholder="tu@email.com"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 outline-none transition-all shadow-inner"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-neutral-400 uppercase tracking-widest mb-1 ml-1">Contraseña</label>
              <input 
                type="password" 
                placeholder="••••••"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 outline-none transition-all shadow-inner"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-black text-neutral-400 uppercase tracking-widest mb-1 ml-1">Confirmar</label>
              <input 
                type="password" 
                placeholder="••••••"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 outline-none transition-all shadow-inner"
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-xl transition-all uppercase tracking-widest text-sm shadow-[0_4px_20px_rgba(234,179,8,0.3)] mt-4"
          >
            Empezar Colección
          </button>
        </form>

        <footer className="mt-8 text-center border-t border-neutral-800 pt-6">
          <p className="text-neutral-500 text-sm">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-yellow-500 font-bold hover:underline">
              Inicia Sesión
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}