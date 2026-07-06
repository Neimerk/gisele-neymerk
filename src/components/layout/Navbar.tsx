import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-warm border-b border-brand-100'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: '72px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-warm group-hover:shadow-warm-lg transition-shadow"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }}>
              <span className="text-white font-serif font-bold text-lg">G</span>
            </div>
            <div>
              <div className={cn('font-serif font-bold text-lg leading-none', scrolled ? 'text-brand-900' : 'text-white')}>Gisele Neymerk</div>
              <div className={cn('text-[10px] font-medium tracking-widest uppercase', scrolled ? 'text-brand-500' : 'text-brand-200')}>Saúde Integral</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} to={item.href}
                className={cn('text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200',
                  scrolled
                    ? 'text-brand-700 hover:text-brand-900 hover:bg-brand-50'
                    : 'text-white/85 hover:text-white hover:bg-white/10')}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="md" onClick={() => navigate('/login')}
              className={!scrolled ? 'text-white hover:text-white hover:bg-white/10' : ''}>
              Entrar
            </Button>
            <Button
              variant="primary"
              size="md"
              icon={<Sparkles size={14} />}
              onClick={() => navigate('/cadastro')}
            >
              Começar Grátis
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn('lg:hidden p-2 rounded-xl transition-colors', scrolled ? 'hover:bg-brand-50 text-brand-700' : 'text-white hover:bg-white/10')}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white/95 backdrop-blur-xl border-b border-brand-100 shadow-warm-xl px-6 py-6 lg:hidden"
          >
            <nav className="flex flex-col gap-2 mb-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-brand-700 font-medium py-3 px-4 rounded-xl hover:bg-brand-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Button variant="secondary" fullWidth onClick={() => { navigate('/login'); setMobileOpen(false) }}>
                Entrar
              </Button>
              <Button variant="primary" fullWidth icon={<Sparkles size={14} />} onClick={() => { navigate('/cadastro'); setMobileOpen(false) }}>
                Começar Grátis
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
