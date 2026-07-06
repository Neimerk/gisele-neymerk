import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

const variants = {
  primary:   'bg-brand-600 text-white hover:bg-brand-700 shadow-warm hover:shadow-warm-lg active:scale-[0.98] focus-visible:ring-brand-400',
  secondary: 'bg-brand-50 text-brand-700 border border-brand-200 hover:bg-brand-100 hover:shadow-warm active:scale-[0.98] focus-visible:ring-brand-300',
  ghost:     'text-brand-700 hover:bg-brand-50 active:scale-[0.98] focus-visible:ring-brand-300',
  danger:    'bg-red-500 text-white hover:bg-red-600 shadow-sm hover:shadow-md active:scale-[0.98] focus-visible:ring-red-400',
  outline:   'border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white active:scale-[0.98] focus-visible:ring-brand-400',
}

const sizes = {
  sm:  'px-3.5 py-2   text-xs  rounded-xl  gap-1.5',
  md:  'px-5   py-2.5 text-sm  rounded-xl  gap-2',
  lg:  'px-6   py-3   text-base rounded-2xl gap-2',
  xl:  'px-8   py-4   text-base rounded-2xl gap-2.5 font-semibold',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, icon, iconPosition = 'left', fullWidth, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="animate-spin" size={14} />}
      {!loading && icon && iconPosition === 'left' && icon}
      {children}
      {!loading && icon && iconPosition === 'right' && icon}
    </button>
  )
)
Button.displayName = 'Button'
export { Button }
