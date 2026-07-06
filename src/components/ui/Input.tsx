import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  suffix?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, icon, iconPosition = 'left', suffix, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-brand-700 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full px-4 py-3 rounded-xl border bg-brand-50 text-brand-900',
              'placeholder-brand-400 text-sm transition-all duration-200 outline-none',
              'focus:border-brand-500 focus:ring-2 focus:ring-brand-200',
              'hover:border-brand-300',
              error
                ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                : 'border-cream-300',
              icon && iconPosition === 'left'  && 'pl-10',
              icon && iconPosition === 'right' && 'pr-10',
              suffix && 'pr-12',
              className,
            )}
            {...props}
          />
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none">
              {icon}
            </div>
          )}
          {suffix && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-500 text-sm font-medium">
              {suffix}
            </div>
          )}
        </div>
        {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-xs text-brand-500">{hint}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'
export { Input }

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-brand-700 mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-brand-50 text-brand-900',
            'placeholder-brand-400 text-sm transition-all duration-200 outline-none resize-none',
            'focus:border-brand-500 focus:ring-2 focus:ring-brand-200 hover:border-brand-300',
            error ? 'border-red-400' : 'border-cream-300',
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-xs text-brand-500">{hint}</p>}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
