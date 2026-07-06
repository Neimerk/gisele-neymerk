import { cn } from '@/lib/utils'

interface AvatarProps {
  src?: string
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
  online?: boolean
}

const sizes = {
  xs:  'w-6  h-6  text-[10px]',
  sm:  'w-8  h-8  text-xs',
  md:  'w-10 h-10 text-sm',
  lg:  'w-12 h-12 text-base',
  xl:  'w-16 h-16 text-xl',
  '2xl': 'w-24 h-24 text-3xl',
}

const dotSizes = {
  xs:  'w-1.5 h-1.5',
  sm:  'w-2   h-2',
  md:  'w-2.5 h-2.5',
  lg:  'w-3   h-3',
  xl:  'w-3.5 h-3.5',
  '2xl': 'w-4 h-4',
}

function getInitials(name?: string): string {
  if (!name) return '?'
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
}

function getColor(name?: string): string {
  const colors = ['bg-brand-600', 'bg-sage-600', 'bg-blue-600', 'bg-purple-600', 'bg-rose-500']
  if (!name) return colors[0]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

export function Avatar({ src, name, size = 'md', className, online }: AvatarProps) {
  return (
    <div className={cn('relative inline-flex flex-shrink-0', className)}>
      {src ? (
        <img
          src={src}
          alt={name}
          className={cn('rounded-full object-cover ring-2 ring-cream-200', sizes[size])}
        />
      ) : (
        <div
          className={cn(
            'rounded-full flex items-center justify-center font-semibold text-white ring-2 ring-cream-200',
            getColor(name),
            sizes[size],
          )}
        >
          {getInitials(name)}
        </div>
      )}
      {online && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full bg-green-500 ring-2 ring-white',
            dotSizes[size],
          )}
        />
      )}
    </div>
  )
}
