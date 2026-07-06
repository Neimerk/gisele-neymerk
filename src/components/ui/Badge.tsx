import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'sage' | 'cream' | 'success' | 'warning' | 'danger' | 'info' | 'dark'
  size?: 'sm' | 'md'
  dot?: boolean
}

const variants = {
  brand:   'bg-brand-100   text-brand-700  border-brand-200',
  sage:    'bg-sage-100    text-sage-700   border-sage-200',
  cream:   'bg-cream-200   text-brand-600  border-cream-300',
  success: 'bg-green-50    text-green-700  border-green-200',
  warning: 'bg-amber-50    text-amber-700  border-amber-200',
  danger:  'bg-red-50      text-red-700    border-red-200',
  info:    'bg-blue-50     text-blue-700   border-blue-200',
  dark:    'bg-brand-900   text-cream-100  border-brand-800',
}

const sizes = {
  sm: 'px-2   py-0.5 text-[10px] rounded-full',
  md: 'px-3   py-1   text-xs     rounded-full',
}

export function Badge({ className, variant = 'brand', size = 'md', dot, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-semibold border',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />}
      {children}
    </span>
  )
}
