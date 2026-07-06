import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
})

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string
          avatar_url: string | null
          plan: 'free' | 'essential' | 'premium' | 'integral' | 'concierge'
          streak: number
          completed_classes: number
          points: number
          weight: number | null
          height: number | null
          goal: string | null
          bio: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      classes: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          level: 'beginner' | 'intermediate' | 'advanced' | 'all'
          duration_minutes: number
          thumbnail_url: string | null
          video_url: string | null
          instructor: string
          tags: string[]
          rating: number
          total_ratings: number
          views: number
          is_premium: boolean
          created_at: string
        }
      }
      user_classes: {
        Row: {
          id: string
          user_id: string
          class_id: string
          completed: boolean
          progress_seconds: number
          completed_at: string | null
          created_at: string
        }
      }
      daily_goals: {
        Row: {
          id: string
          user_id: string
          date: string
          movement_minutes: number
          movement_target: number
          water_glasses: number
          water_target: number
          meditation_minutes: number
          meditation_target: number
          sleep_hours: number
          sleep_target: number
        }
      }
      appointments: {
        Row: {
          id: string
          user_id: string
          professional_name: string
          professional_role: string
          scheduled_at: string
          duration_minutes: number
          type: 'video' | 'phone' | 'chat'
          status: 'scheduled' | 'completed' | 'cancelled'
          notes: string | null
          created_at: string
        }
      }
      posts: {
        Row: {
          id: string
          user_id: string
          content: string
          image_url: string | null
          likes: number
          comments: number
          created_at: string
        }
      }
      challenges: {
        Row: {
          id: string
          title: string
          description: string
          duration_days: number
          participants: number
          category: string
          starts_at: string
          ends_at: string
          created_at: string
        }
      }
    }
  }
}
