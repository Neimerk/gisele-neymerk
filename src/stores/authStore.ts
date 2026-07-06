import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (user: User) => void
  logout: () => void
  updateUser: (data: Partial<User>) => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: (user) => set({ user, isAuthenticated: true, isLoading: false }),

      logout: () => set({ user: null, isAuthenticated: false }),

      updateUser: (data) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        })),

      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: 'gn-auth',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
)

// Demo user for development
export const DEMO_USER: User = {
  id: 'demo-001',
  email: 'ana.silva@email.com',
  name: 'Ana Silva',
  role: 'student',
  plan: 'premium',
  createdAt: '2024-01-15',
  profile: {
    age: 38,
    gender: 'female',
    goals: ['emagrecimento', 'postura', 'ansiedade'],
    fitnessLevel: 'intermediate',
    weight: 68,
    height: 165,
    bmi: 24.9,
    streak: 12,
    totalMinutes: 3240,
    completedClasses: 87,
    points: 4350,
    badges: [
      { id: '1', name: 'Primeiros Passos', description: 'Completou a primeira aula', icon: '🌱', earnedAt: '2024-01-16', category: 'milestone' },
      { id: '2', name: 'Semana Perfeita', description: '7 dias consecutivos', icon: '🔥', earnedAt: '2024-02-01', category: 'streak' },
      { id: '3', name: 'Bem-Estar', description: '30 aulas completadas', icon: '✨', earnedAt: '2024-03-10', category: 'milestone' },
    ],
  },
}
