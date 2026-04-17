'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// 1. Tipos de datos para nuestros jugadores
type Player = {
  id: number;
  name: string;
  nationality: string;
  league: string;
  club: string;
  position: string;
  age: number;
  imageUrl: string;
};

// 2. Base de datos simulada (El backend enviará esto en el futuro)
const PLAYERS_DB: Player[] = [
  { id: 1, name: "Lionel Messi", nationality: "Argentina", league: "MLS", club: "Inter Miami", position: "DEL", age: 36, imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Messi" },
  { id: 2, name: "Cristiano Ronaldo", nationality: "Portugal", league: "Saudi Pro League", club: "Al Nassr", position: "DEL", age: 39, imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=CR7" },
  { id: 3, name: "Emiliano Martínez", nationality: "Argentina", league: "Premier League", club: "Aston Villa", position: "ARQ", age: 31, imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Dibu" },
  { id: 4, name: "Julián Álvarez", nationality: "Argentina", league: "Premier League", club: "Man City", position: "DEL", age: 24, imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Araña" },
  { id: 5, name: "Kevin De Bruyne", nationality: "Bélgica", league: "Premier League", club: "Man City", position: "MED", age: 32, imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=KDB" },
  { id: 6, name: "Virgil van Dijk", nationality: "Países Bajos", league: "Premier League", club: "Liverpool", position: "DEF", age: 32, imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=VVD" },
];

// Nuestro jugador secreto para el MVP (Lionel Messi)
const SECRET_PLAYER = PLAYERS_DB[0];

export default function JugadorOcultoPage() {
  const [query, setQuery] = useState('');
  const [guesses, setGuesses] = useState<Player[]>([]);
  const [isWinner, setIsWinner] = useState(false);

  // Filtrar jugadores para el autocompletado (excluyendo los ya adivinados)
  const filteredPlayers = PLAYERS_DB.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) && 
    !guesses.some(g => g.id === p.id)
  );

  const handleGuess = (player: Player) => {
    setGuesses([player, ...guesses]); // Agregamos arriba de la lista
    setQuery(''); // Limpiamos el buscador
    
    if (player.id === SECRET_PLAYER.id) {
      setIsWinner(true);
    }
  };

  // Función auxiliar para determinar el color del cuadrito
  const getFeedbackColor = (value: string | number, secretValue: string | number) => {
    if (value === secretValue) return 'bg-green-500 border-green-600';
    return 'bg-neutral-800 border-neutral-700 opacity-60 text-neutral-400'; // Gris si falla
  };

  // Función especial para la edad (flechas si es mayor o menor)
  const getAgeFeedback = (age: number) => {
    if (age === SECRET_PLAYER.age) return { color: 'bg-green-500 border-green-600', icon: '✅' };
    if (age > SECRET_PLAYER.age) return { color: 'bg-neutral-800 border-neutral-700', icon: '⬇️' };
    return { color: 'bg-neutral-800 border-neutral-700', icon: '⬆️' };
  };

  return (
    <main className="min-h-screen bg-neutral-950 p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        
        <header className="text-center mb-8">
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Jugador Oculto</h1>
          <p className="text-neutral-400 font-medium">Adivina al jugador del día. Tienes pistas tras cada intento.</p>
        </header>

        {/* Buscador */}
        {!isWinner && (
          <div className="relative w-full max-w-md mx-auto mb-12 z-20">
            <input 
              type="text" 
              placeholder="Buscar jugador..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-neutral-900 border-2 border-neutral-700 rounded-xl px-4 py-4 text-white font-bold focus:border-yellow-500 outline-none transition-colors shadow-lg"
            />
            
            {/* Lista desplegable de resultados */}
            {query.length > 0 && filteredPlayers.length > 0 && (
              <ul className="absolute top-full mt-2 w-full bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden shadow-2xl max-h-60 overflow-y-auto">
                {filteredPlayers.map(player => (
                  <li 
                    key={player.id}
                    onClick={() => handleGuess(player)}
                    className="px-4 py-3 hover:bg-neutral-700 cursor-pointer flex items-center gap-3 border-b border-neutral-700/50 last:border-0 transition-colors"
                  >
                    <img src={player.imageUrl} alt={player.name} className="w-8 h-8 rounded-full bg-neutral-900" />
                    <span className="text-white font-bold">{player.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Mensaje de Victoria */}
        {isWinner && (
          <div className="mb-12 bg-green-900/40 border border-green-500 rounded-2xl p-8 text-center animate-in zoom-in duration-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
            <h2 className="text-3xl font-black text-white uppercase mb-2">¡Adivinaste!</h2>
            <p className="text-green-400 font-bold mb-6">El jugador era {SECRET_PLAYER.name}</p>
            <div className="inline-block bg-neutral-900 p-2 rounded-xl mb-6">
              <img src={SECRET_PLAYER.imageUrl} alt="Ganador" className="w-32 h-32" />
            </div>
            <div>
              <Link href="/" className="bg-yellow-500 hover:bg-yellow-400 text-black font-black py-3 px-8 rounded-xl transition-all uppercase tracking-widest text-sm">
                Cobrar Recompensa 🪙
              </Link>
            </div>
          </div>
        )}

        {/* Grilla de Intentos */}
        {guesses.length > 0 && (
          <div className="w-full overflow-x-auto pb-4">
            <div className="min-w-[800px] flex flex-col gap-2">
              
              {/* Encabezados de la tabla */}
              <div className="grid grid-cols-6 gap-2 px-2 text-xs font-black text-neutral-500 uppercase tracking-widest text-center mb-2">
                <div className="text-left">Jugador</div>
                <div>Nacionalidad</div>
                <div>Liga</div>
                <div>Club</div>
                <div>Posición</div>
                <div>Edad</div>
              </div>

              {/* Filas de intentos */}
              {guesses.map((guess, index) => {
                const ageData = getAgeFeedback(guess.age);
                
                return (
                  <div key={guess.id} className="grid grid-cols-6 gap-2 animate-in slide-in-from-top-4 fade-in duration-300">
                    
                    {/* Jugador (Nombre + Foto) */}
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 flex items-center gap-3">
                       <img src={guess.imageUrl} alt={guess.name} className="w-10 h-10 rounded-md bg-neutral-900" />
                       <span className="text-white font-bold text-sm truncate">{guess.name}</span>
                    </div>

                    {/* Atributos */}
                    <div className={`rounded-lg border-2 flex items-center justify-center p-2 text-sm font-bold text-center transition-all duration-700 delay-100 ${getFeedbackColor(guess.nationality, SECRET_PLAYER.nationality)}`}>
                      {guess.nationality}
                    </div>
                    <div className={`rounded-lg border-2 flex items-center justify-center p-2 text-sm font-bold text-center transition-all duration-700 delay-200 ${getFeedbackColor(guess.league, SECRET_PLAYER.league)}`}>
                      {guess.league}
                    </div>
                    <div className={`rounded-lg border-2 flex items-center justify-center p-2 text-sm font-bold text-center transition-all duration-700 delay-300 ${getFeedbackColor(guess.club, SECRET_PLAYER.club)}`}>
                      {guess.club}
                    </div>
                    <div className={`rounded-lg border-2 flex items-center justify-center p-2 text-sm font-bold text-center transition-all duration-700 delay-400 ${getFeedbackColor(guess.position, SECRET_PLAYER.position)}`}>
                      {guess.position}
                    </div>
                    
                    {/* Edad (Manejo especial) */}
                    <div className={`rounded-lg border-2 flex items-center justify-center gap-2 p-2 text-sm font-bold text-center transition-all duration-700 delay-500 ${ageData.color}`}>
                      <span>{guess.age}</span>
                      <span>{ageData.icon}</span>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}