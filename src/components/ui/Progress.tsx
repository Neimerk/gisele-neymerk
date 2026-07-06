import { cn } from '@/lib/utils'

interface ProgressProps {
  value: number
  max?: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'brand' | 'sage' | 'blue' | 'purple' | 'rose'
  className?: string
  animated?: boolean
  label?: string
  showValue?: boolean
}

const heights = { xs: 'h-1', sm: 'h-2', md: 'h-3', lg: 'h-4' }
const colors  = {
  brand:  'bg-brand-600',
  sage:   'bg-sage-500',
  blue:   'bg-blue-500',
  purple: 'bg-purple-500',
  rose:   'bg-rose-500',
}

export function Progress({
  value, max = 100, size = 'md', color = 'brand', className, animated, label, showValue,
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={className}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-xs font-medium text-brand-600">{label}</span>}
          {showValue && <span className="text-xs font-bold text-brand-700">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-cream-200 rounded-full overflow-hidden', heights[size])}>
        <div
          className={cn(
            'h-full rounded-full transition-all duration-700 ease-out',
            colors[color],
            animated && 'animate-shimmer',
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

interface CircularProgressProps {
  value: number
  size?: number
  strokeWidth?: number
  color?: string
  bg?: string
  label?: React.ReactNode
  className?: string
}

export function CircularProgress({
  value, size = 80, strokeWidth = 8, color = '#6B4E3D', bg = '#E5D5C3', label, className,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (Math.min(100, value) / 100) * circumference

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={bg} strokeWidth={strokeWidth} />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      {label && <div className="absolute inset-0 flex items-center justify-center">{label}</div>}
    </div>
  )
}
