import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Compass, Activity, Dumbbell, Brain, Apple, Calendar,
  Users, Sparkles, TrendingUp, User, ChevronLeft, Settings,
  Bell, LogOut, Shield,
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { useAppStore } from '@/stores/appStore'
import { Avatar } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import { PLAN_NAMES, PLAN_COLORS } from '@/lib/utils'

const iconMap: Record<string, React.ReactNode> = {
  home:        <Home size={18} />,
  compass:     <Compass size={18} />,
  activity:    <Activity size={18} />,
  dumbbell:    <Dumbbell size={18} />,
  brain:       <Brain size={18} />,
  apple:       <Apple size={18} />,
  calendar:    <Calendar size={18} />,
  users:       <Users size={18} />,
  sparkles:    <Sparkles size={18} />,
  'trending-up': <TrendingUp size={18} />,
  user:        <User size={18} />,
}

const NAV = [
  { label: 'Início',         href: '/dashboard',               icon: 'home' },
  { label: 'Minha Jornada',  href: '/dashboard/journey',       icon: 'compass' },
  { label: 'Pilates',        href: '/dashboard/pilates',        icon: 'activity' },
  { label: 'Treinamento',    href: '/dashboard/training',       icon: 'dumbbell' },
  { label: 'Saúde Mental',   href: '/dashboard/mental',         icon: 'brain' },
  { label: 'Nutrição',       href: '/dashboard/nutrition',      icon: 'apple' },
  { label: 'Consultas',      href: '/dashboard/appointments',   icon: 'calendar' },
  { label: 'Comunidade',     href: '/dashboard/community',      icon: 'users' },
  { label: 'Gisele IA',      href: '/dashboard/ai',             icon: 'sparkles' },
  { label: 'Progresso',      href: '/dashboard/progress',       icon: 'trending-up' },
  { label: 'Perfil',         href: '/dashboard/profile',        icon: 'user' },
]

export function Sidebar() {
  const { user, logout } = useAuthStore()
  const { sidebarOpen, toggleSidebar } = useAppStore()
  const location = useLocation()

  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarOpen ? 256 : 72 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="fixed left-0 top-0 bottom-0 z-30 flex flex-col bg-white border-r border-brand-100 shadow-warm overflow-hidden"
    >
      {/* Logo */}
      <div className="h-[72px] flex items-center px-4 border-b border-brand-100 flex-shrink-0">
        <Link to="/dashboard" className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-warm"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }}>
            <span className="text-white font-serif font-bold text-lg">G</span>
          </div>
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.15 }}
                className="min-w-0"
              >
                <div className="font-serif font-bold text-brand-900 text-base leading-none truncate">Gisele Neymerk</div>
                <div className="text-[10px] text-brand-500 font-medium tracking-widest uppercase mt-0.5">Saúde Integral</div>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>

        <button
          onClick={toggleSidebar}
          className={cn(
            'ml-auto p-1.5 rounded-lg hover:bg-brand-100 text-brand-500 hover:text-brand-700 transition-colors flex-shrink-0',
            !sidebarOpen && 'rotate-180',
          )}
        >
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-hide space-y-0.5">
        {NAV.map((item) => {
          const isActive = location.pathname === item.href ||
            (item.href !== '/dashboard' && location.pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              to={item.href}
              title={!sidebarOpen ? item.label : undefined}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-brand-700 text-white shadow-warm'
                  : 'text-brand-600 hover:bg-brand-50 hover:text-brand-900',
                !sidebarOpen && 'justify-center px-2',
              )}
            >
              <span className="flex-shrink-0">{iconMap[item.icon]}</span>
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="truncate"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          )
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-cream-200 p-3 flex-shrink-0">
        {/* Quick actions */}
        <div className={cn('flex gap-1 mb-2', !sidebarOpen && 'flex-col items-center')}>
          <Link to="/dashboard/settings" className="p-2 rounded-xl hover:bg-brand-50 text-brand-500 hover:text-brand-700 transition-colors">
            <Settings size={16} />
          </Link>
          <button className="p-2 rounded-xl hover:bg-brand-50 text-brand-500 hover:text-brand-700 transition-colors">
            <Bell size={16} />
          </button>
          {user?.role === 'admin' && (
            <Link to="/admin" className="p-2 rounded-xl hover:bg-brand-50 text-brand-500 hover:text-brand-700 transition-colors">
              <Shield size={16} />
            </Link>
          )}
          <button
            onClick={logout}
            className="ml-auto p-2 rounded-xl hover:bg-red-50 text-brand-500 hover:text-red-600 transition-colors"
          >
            <LogOut size={16} />
          </button>
        </div>

        {/* User card */}
        <div className={cn('flex items-center gap-3 p-2 rounded-xl bg-cream-100', !sidebarOpen && 'justify-center p-2')}>
          <Avatar name={user?.name} size="sm" online />
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-w-0 flex-1"
              >
                <div className="text-sm font-semibold text-brand-900 truncate">{user?.name || 'Usuária'}</div>
                <Badge
                  variant="brand"
                  size="sm"
                  style={{ backgroundColor: `${PLAN_COLORS[user?.plan || 'free']}20`, color: PLAN_COLORS[user?.plan || 'free'] }}
                >
                  {PLAN_NAMES[user?.plan || 'free']}
                </Badge>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  )
}
