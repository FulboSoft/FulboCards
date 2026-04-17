'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useAuthStore } from '@/store/useAuthStore';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ACÁ sacamos los datos del store global para saber si estás logueado
  const { isAuthenticated, user } = useAuthStore();

  return (
    <html lang="es">
      <body className={`${inter.className} bg-neutral-900 text-white min-h-screen flex flex-col`}>
        
        {/* Barra de Navegación Global */}
        <nav className="bg-neutral-950 border-b border-neutral-800 px-8 py-4 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            
            {/* Logo / Nombre */}
            <Link href="/" className="text-2xl font-black tracking-tighter text-yellow-500 hover:text-yellow-400 transition-colors">
              FULBOCARDS
            </Link>

            {/* Links de Navegación */}
            <div className="flex gap-6 font-semibold text-sm uppercase tracking-wide">
              <Link href="/" className="text-neutral-400 hover:text-white transition-colors">Mi Colección</Link>
              <Link href="/sobres" className="text-neutral-400 hover:text-white transition-colors">Sobres</Link>
              <Link href="/mercado" className="text-neutral-400 hover:text-white transition-colors">Mercado</Link>
              <Link href="/juego" className="text-neutral-400 hover:text-white transition-colors">Juegos</Link>
            </div>

            {/* ZONA DE USUARIO DINÁMICA */}
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                // SI ESTÁ LOGUEADO: Muestra Monedas y Avatar
                <div className="flex items-center gap-4 bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700">
                  <span className="text-yellow-500 font-bold">🪙 {user?.coins}</span>
                  <div className="w-[1px] h-4 bg-neutral-600"></div>
                  <Link href="/perfil" className="w-8 h-8 rounded-full overflow-hidden border border-neutral-500 hover:scale-110 transition-transform">
                    <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${user?.email}`} alt="Perfil" />
                  </Link>
                </div>
              ) : (
                // SI NO ESTÁ LOGUEADO: Muestra botón Ingresar
                <Link href="/login" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-bold text-sm transition-colors uppercase tracking-widest">
                  Ingresar
                </Link>
              )}
            </div>

          </div>
        </nav>

        {/* Contenido dinámico de las páginas */}
        <div className="flex-1">
          {children}
        </div>

      </body>
    </html>
  );
}