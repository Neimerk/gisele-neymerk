import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? `${h}h ${m}min` : `${h}h`
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatRelativeTime(date: string | Date): string {
  const d = new Date(date)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return 'agora'
  if (minutes < 60) return `${minutes}min`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d`
  return formatDate(date)
}

export function calculateBMI(weight: number, height: number): number {
  const heightM = height / 100
  return +(weight / (heightM * heightM)).toFixed(1)
}

export function getBMICategory(bmi: number): { label: string; color: string } {
  if (bmi < 18.5) return { label: 'Abaixo do peso', color: '#F59E0B' }
  if (bmi < 25)   return { label: 'Peso normal', color: '#52845A' }
  if (bmi < 30)   return { label: 'Sobrepeso', color: '#F59E0B' }
  return { label: 'Obesidade', color: '#EF4444' }
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + '…' : str
}

export function generateId(): string {
  return Math.random().toString(36).slice(2, 9)
}

export const PLAN_COLORS: Record<string, string> = {
  free:      '#9CA3AF',
  essential: '#52845A',
  premium:   '#A8744E',
  integral:  '#6B4E3D',
  concierge: '#1A0F0A',
}

export const PLAN_NAMES: Record<string, string> = {
  free:      'Gratuito',
  essential: 'Essencial',
  premium:   'Premium',
  integral:  'Integral',
  concierge: 'Concierge',
}
