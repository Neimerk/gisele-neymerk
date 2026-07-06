import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glass?: boolean
  noPadding?: boolean
}

export function Card({ className, hover, glass, noPadding, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border transition-all duration-200',
        glass
          ? 'bg-white/70 backdrop-blur-xl border-white/30 shadow-glass'
          : 'bg-white border-brand-100 shadow-warm',
        !noPadding && 'p-6',
        hover && 'hover:shadow-warm-lg hover:-translate-y-0.5 cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center justify-between mb-4', className)} {...props}>{children}</div>
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-lg font-semibold text-brand-900', className)} {...props}>{children}</h3>
}

export function CardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-brand-500 mt-1', className)} {...props}>{children}</p>
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('', className)} {...props}>{children}</div>
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-6 pt-4 border-t border-cream-100 flex items-center', className)} {...props}>{children}</div>
}
