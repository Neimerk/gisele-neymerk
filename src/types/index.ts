// ─── User & Auth ───────────────────────────────────────────────────────────────
export type UserRole = 'student' | 'instructor' | 'admin' | 'nutritionist' | 'psychologist'

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: UserRole
  plan: SubscriptionPlan
  createdAt: string
  profile?: UserProfile
}

export interface UserProfile {
  age?: number
  gender?: 'female' | 'male' | 'other'
  goals?: string[]
  healthConditions?: string[]
  fitnessLevel?: FitnessLevel
  weight?: number
  height?: number
  bmi?: number
  streak: number
  totalMinutes: number
  completedClasses: number
  points: number
  badges: Badge[]
}

export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced'

// ─── Subscription ───────────────────────────────────────────────────────────────
export type SubscriptionPlan = 'free' | 'essential' | 'premium' | 'integral' | 'concierge'

export interface Plan {
  id: SubscriptionPlan
  name: string
  price: number
  yearlyPrice?: number
  description: string
  features: string[]
  highlight?: boolean
  badge?: string
  color: string
}

// ─── Classes & Modules ─────────────────────────────────────────────────────────
export type ClassCategory =
  | 'pilates' | 'functional' | 'strength' | 'yoga' | 'meditation'
  | 'breathing' | 'mobility' | 'stretching' | 'cardio' | 'mindfulness'

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'all'

export interface VideoClass {
  id: string
  title: string
  instructor: string
  thumbnail: string
  videoUrl?: string
  duration: number // minutes
  calories?: number
  category: ClassCategory
  level: DifficultyLevel
  description: string
  objectives: string[]
  contraindications?: string[]
  equipment?: string[]
  tags: string[]
  isFavorite?: boolean
  isCompleted?: boolean
  progress?: number
  rating?: number
  views?: number
  createdAt: string
}

export interface PilatesClass extends VideoClass {
  pilatesType: string
  muscleGroups: string[]
  therapeuticBenefits?: string[]
}

// ─── Progress & Gamification ──────────────────────────────────────────────────
export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  earnedAt?: string
  category: 'streak' | 'milestone' | 'challenge' | 'community' | 'wellness'
}

export interface Achievement {
  id: string
  title: string
  description: string
  progress: number
  total: number
  icon: string
  completed: boolean
}

export interface DailyGoal {
  id: string
  label: string
  current: number
  target: number
  unit: string
  icon: string
  color: string
}

// ─── Nutrition ────────────────────────────────────────────────────────────────
export interface Meal {
  id: string
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  time: string
  date: string
}

export interface NutritionDay {
  date: string
  totalCalories: number
  targetCalories: number
  protein: number
  carbs: number
  fat: number
  hydration: number
  meals: Meal[]
}

// ─── Appointment & Teleconsult ────────────────────────────────────────────────
export type AppointmentType = 'pilates' | 'nutrition' | 'psychology' | 'physiotherapy' | 'psychiatry'
export type AppointmentStatus = 'scheduled' | 'completed' | 'cancelled' | 'rescheduled'

export interface Appointment {
  id: string
  type: AppointmentType
  professional: Professional
  date: string
  time: string
  duration: number
  status: AppointmentStatus
  isOnline: boolean
  notes?: string
}

export interface Professional {
  id: string
  name: string
  specialty: string
  avatar?: string
  rating: number
  reviewCount: number
  bio: string
  crn?: string // Professional registration
}

// ─── Community ───────────────────────────────────────────────────────────────
export interface Post {
  id: string
  author: User
  content: string
  images?: string[]
  likes: number
  comments: number
  isLiked?: boolean
  createdAt: string
  tags?: string[]
}

export interface Challenge {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  participants: number
  category: ClassCategory
  reward: string
  isJoined?: boolean
  progress?: number
}

// ─── Analytics (Admin) ───────────────────────────────────────────────────────
export interface AnalyticsMetric {
  label: string
  value: number | string
  change: number
  trend: 'up' | 'down' | 'stable'
  icon: string
  color: string
}

export interface RevenueData {
  month: string
  revenue: number
  subscribers: number
  churn: number
}
