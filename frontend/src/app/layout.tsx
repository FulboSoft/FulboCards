import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FulboCards",
  description: "Colecciona los mejores momentos del fútbol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            </div>

            {/* Módulo de Usuario / Monedas */}
            <div className="flex items-center gap-4 bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700">
              <span className="text-yellow-500 font-bold">🪙 500</span>
              <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs">
                👤
              </div>
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