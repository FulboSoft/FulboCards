'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import api from '@/services/api'; // El cliente Axios que configuramos

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Acá tu React le manda los datos a la API de tu amigo
      const response = await api.post('/api/users/login/', { email, password });
      
      // Guardamos el token que Django nos devuelve
      localStorage.setItem('accessToken', response.data.token);
      alert('¡Ingreso exitoso!');
      
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 w-96">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Iniciar Sesión</h1>
        
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:border-blue-500 outline-none"
        />
        
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:border-blue-500 outline-none"
        />
        
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded transition-colors">
          Ingresar
        </button>
        <p className="mt-6 text-center text-neutral-500 text-sm">
          ¿No tienes cuenta?{' '}
          <Link href="/registro" className="text-blue-500 font-bold hover:underline">
            Regístrate gratis
          </Link>
        </p>
      </form>
    </main>
  );
}