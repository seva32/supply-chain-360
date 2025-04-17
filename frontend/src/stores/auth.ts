import { create } from 'zustand'

interface AuthState {
  user: { id: string; email: string; role: string } | null
  accessToken: string | null
  setAuth: (user: AuthState['user'], token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  setAuth: (user, token) => set({ user, accessToken: token }),
  logout: () => set({ user: null, accessToken: null }),
}))
