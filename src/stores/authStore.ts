import { create } from 'zustand'
import { supabase } from '@/lib/supabase'
import type { User } from '@/types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ error: string | null }>
  register: (email: string, password: string, name: string) => Promise<{ error: string | null }>
  logout: () => Promise<void>
  loadSession: () => Promise<void>
  setLoading: (loading: boolean) => void
  updateUser: (data: Partial<User>) => void
}

function mapProfile(profile: Record<string, unknown>): User {
  return {
    id:        profile.id as string,
    email:     profile.email as string,
    name:      profile.name as string,
    avatar:    profile.avatar_url as string | undefined,
    role:      (profile.role as User['role']) ?? 'student',
    plan:      (profile.plan as User['plan']) ?? 'free',
    createdAt: profile.created_at as string,
    profile: {
      streak:           (profile.streak as number) ?? 0,
      completedClasses: (profile.completed_classes as number) ?? 0,
      points:           (profile.points as number) ?? 0,
      totalMinutes:     0,
      badges:           [],
      weight:           profile.weight as number | undefined,
      height:           profile.height as number | undefined,
    },
  }
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  setLoading: (isLoading) => set({ isLoading }),

  updateUser: (data) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    })),

  loadSession: async () => {
    set({ isLoading: true })
    const { data: { session } } = await supabase.auth.getSession()
    if (session?.user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()
      if (profile) {
        set({ user: mapProfile(profile as Record<string, unknown>), isAuthenticated: true })
      }
    }
    set({ isLoading: false })

    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()
        if (profile) {
          set({ user: mapProfile(profile as Record<string, unknown>), isAuthenticated: true, isLoading: false })
        }
      } else if (event === 'SIGNED_OUT') {
        set({ user: null, isAuthenticated: false, isLoading: false })
      }
    })
  },

  login: async (email, password) => {
    set({ isLoading: true })
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    set({ isLoading: false })
    return { error: error?.message ?? null }
  },

  register: async (email, password, name) => {
    set({ isLoading: true })
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    })
    set({ isLoading: false })
    return { error: error?.message ?? null }
  },

  logout: async () => {
    await supabase.auth.signOut()
    set({ user: null, isAuthenticated: false })
  },
}))
