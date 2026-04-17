import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  coins: number;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  updateCoins: (coins: number) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: { // Dejamos un usuario inicial para que el perfil no se vea vacío
    id: '1',
    email: 'sebastian@fulbocards.com',
    coins: 500
  },
  token: null,
  isAuthenticated: true,
  login: (token, user) => set({ token, user, isAuthenticated: true }),
  logout: () => {
    if (typeof window !== 'undefined') localStorage.removeItem('accessToken');
    set({ user: null, token: null, isAuthenticated: false });
  },
  updateCoins: (coins) => set((state) => ({
    user: state.user ? { ...state.user, coins } : null
  })),
}));