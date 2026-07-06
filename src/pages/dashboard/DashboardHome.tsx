import { motion } from 'framer-motion'
import { Flame, Clock, TrendingUp, Award, Play, Calendar, ArrowRight, Sparkles, Heart, Activity, Brain, Apple } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Progress, CircularProgress } from '@/components/ui/Progress'
import { Avatar } from '@/components/ui/Avatar'
import { Link } from 'react-router-dom'
import { formatDuration } from '@/lib/utils'

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const metrics = [
  { label: 'Sequência',     value: '12 dias', icon: Flame,      color: 'text-amber-500', bg: 'bg-amber-50' },
  { label: 'Tempo total',   value: '54h 20m', icon: Clock,      color: 'text-blue-500',  bg: 'bg-blue-50' },
  { label: 'Aulas feitas',  value: '87',      icon: Activity,   color: 'text-brand-600', bg: 'bg-brand-50' },
  { label: 'Pontos',        value: '4.350',   icon: Award,      color: 'text-amber-600', bg: 'bg-amber-50' },
]

const todayClasses = [
  { title: 'Pilates Terapêutico para Coluna',    time: '09:00', duration: 45, level: 'Intermediário', icon: '🧘', done: true },
  { title: 'Meditação — Alívio da Ansiedade',    time: '10:00', duration: 15, level: 'Todos',         icon: '🧠', done: false },
  { title: 'Pilates Funcional — Fortalecimento', time: '18:00', duration: 50, level: 'Intermediário', icon: '💪', done: false },
]

const goals: { label: string; current: number; target: number; unit: string; icon: string; color: 'brand' | 'sage' | 'blue' | 'purple' }[] = [
  { label: 'Movimento',  current: 45, target: 60,  unit: 'min',  icon: '💪', color: 'brand' },
  { label: 'Hidratação', current: 6,  target: 8,   unit: 'copos',icon: '💧', color: 'blue' },
  { label: 'Meditação',  current: 10, target: 20,  unit: 'min',  icon: '🧘', color: 'sage' },
  { label: 'Sono',       current: 7,  target: 8,   unit: 'h',    icon: '🌙', color: 'purple' },
]

const weekProgress = [
  { day: 'Seg', done: true,  minutes: 55 },
  { day: 'Ter', done: true,  minutes: 45 },
  { day: 'Qua', done: true,  minutes: 60 },
  { day: 'Qui', done: false, minutes: 0 },
  { day: 'Sex', done: false, minutes: 0 },
  { day: 'Sáb', done: false, minutes: 0 },
  { day: 'Dom', done: false, minutes: 0 },
]

const quickAccess = [
  { label: 'Pilates',      href: '/dashboard/pilates',   icon: Activity, color: 'bg-brand-50  text-brand-700' },
  { label: 'Saúde Mental', href: '/dashboard/mental',    icon: Brain,    color: 'bg-purple-50 text-purple-700' },
  { label: 'Nutrição',     href: '/dashboard/nutrition', icon: Apple,    color: 'bg-sage-50   text-sage-700' },
  { label: 'Gisele IA',    href: '/dashboard/ai',        icon: Sparkles, color: 'bg-rose-50   text-rose-600' },
]

export default function DashboardHome() {
  const { user } = useAuthStore()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite'
  const emoji = hour < 12 ? '🌅' : hour < 18 ? '☀️' : '🌙'

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
      {/* Header */}
      <motion.div variants={fadeUp} className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-brand-900">
            {greeting}, {user?.name?.split(' ')[0]}! {emoji}
          </h1>
          <p className="text-brand-500 mt-1 text-sm">
            Você está há <strong className="text-brand-700">{user?.profile?.streak} dias</strong> em sequência. Continue assim!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="sage" dot>Plano Premium</Badge>
          <Avatar name={user?.name} size="md" online />
        </div>
      </motion.div>

      {/* Metrics */}
      <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <Card key={m.label} className="flex items-center gap-4 p-5">
            <div className={`w-11 h-11 rounded-2xl ${m.bg} flex items-center justify-center flex-shrink-0`}>
              <m.icon size={20} className={m.color} />
            </div>
            <div>
              <div className="text-lg font-bold text-brand-900">{m.value}</div>
              <div className="text-xs text-brand-500">{m.label}</div>
            </div>
          </Card>
        ))}
      </motion.div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Today plan */}
        <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
          {/* Today classes */}
          <Card>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-semibold text-brand-900">Plano de hoje</h2>
                <p className="text-xs text-brand-500 mt-0.5">Domingo, {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })}</p>
              </div>
              <Link to="/dashboard/pilates">
                <Button variant="ghost" size="sm" icon={<ArrowRight size={14} />} iconPosition="right">
                  Ver tudo
                </Button>
              </Link>
            </div>
            <div className="space-y-3">
              {todayClasses.map((cls) => (
                <div
                  key={cls.title}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    cls.done ? 'bg-sage-50 border-sage-200' : 'bg-brand-50 border-brand-100 hover:shadow-warm'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-warm-sm flex-shrink-0">
                    {cls.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-brand-900 truncate">{cls.title}</div>
                    <div className="text-xs text-brand-500 mt-0.5">
                      {cls.time} · {formatDuration(cls.duration)} · {cls.level}
                    </div>
                  </div>
                  {cls.done ? (
                    <Badge variant="success" size="sm">Concluída ✓</Badge>
                  ) : (
                    <button className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white hover:bg-brand-800 transition-colors shadow-warm">
                      <Play size={12} fill="white" className="ml-0.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Weekly progress */}
          <Card>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-brand-900">Progresso semanal</h2>
              <Badge variant="brand" size="sm">Semana 3</Badge>
            </div>
            <div className="flex gap-2">
              {weekProgress.map((day) => (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs text-brand-500 font-medium">{day.day}</div>
                  <div className="relative w-full">
                    <div className="w-full bg-cream-200 rounded-full" style={{ height: '60px' }}>
                      <div
                        className={`w-full rounded-full transition-all duration-500 ${day.done ? 'bg-brand-600' : 'bg-cream-200'}`}
                        style={{
                          height: day.done ? `${(day.minutes / 70) * 60}px` : '0',
                          position: 'absolute',
                          bottom: 0,
                        }}
                      />
                    </div>
                  </div>
                  <div className={`text-[10px] font-medium ${day.done ? 'text-brand-600' : 'text-brand-300'}`}>
                    {day.done ? `${day.minutes}m` : '--'}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick access */}
          <motion.div variants={fadeUp} className="grid grid-cols-4 gap-3">
            {quickAccess.map((item) => (
              <Link key={item.label} to={item.href}>
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-brand-100 hover:shadow-warm transition-all cursor-pointer text-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                    <item.icon size={18} />
                  </div>
                  <span className="text-xs font-medium text-brand-700">{item.label}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Goals & AI nudge */}
        <motion.div variants={fadeUp} className="space-y-6">
          {/* Daily goals */}
          <Card>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-brand-900">Metas de hoje</h2>
              <CircularProgress
                value={62}
                size={44}
                strokeWidth={5}
                label={<span className="text-[10px] font-bold text-brand-700">62%</span>}
              />
            </div>
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{goal.icon}</span>
                      <span className="text-xs font-medium text-brand-700">{goal.label}</span>
                    </div>
                    <span className="text-xs text-brand-500">{goal.current}/{goal.target} {goal.unit}</span>
                  </div>
                  <Progress value={goal.current} max={goal.target} size="sm" color={goal.color} />
                </div>
              ))}
            </div>
          </Card>

          {/* AI suggestion */}
          <Card className="bg-gradient-to-br from-brand-800 to-brand-900 border-brand-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-700 flex items-center justify-center">
                <Sparkles size={16} className="text-cream-200" />
              </div>
              <div>
                <div className="text-sm font-semibold text-cream-100">Gisele IA</div>
                <div className="text-xs text-brand-400">Sugestão para hoje</div>
              </div>
            </div>
            <p className="text-brand-300 text-sm leading-relaxed mb-4">
              Você fez 3 aulas seguidas! Para recuperação muscular ideal, sugiro uma aula de pilates respiratório hoje. Duração: 20 minutos. 🌿
            </p>
            <Link to="/dashboard/ai">
              <Button
                variant="ghost"
                size="sm"
                fullWidth
                icon={<ArrowRight size={14} />}
                iconPosition="right"
                className="text-cream-200 hover:bg-brand-700 hover:text-white justify-center"
              >
                Conversar com IA
              </Button>
            </Link>
          </Card>

          {/* Next appointment */}
          <Card>
            <h2 className="font-semibold text-brand-900 mb-4">Próxima consulta</h2>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center text-2xl flex-shrink-0">🩺</div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-brand-900">Avaliação de Progresso</div>
                <div className="text-xs text-brand-500 mt-0.5">com Gisele Neymerk</div>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar size={12} className="text-brand-400" />
                  <span className="text-xs text-brand-500">Terça, 15 Jan · 14h00</span>
                </div>
              </div>
            </div>
            <Link to="/dashboard/appointments">
              <Button variant="secondary" size="sm" fullWidth className="mt-4">
                Ver agenda completa
              </Button>
            </Link>
          </Card>

          {/* Streak badge */}
          <Card className="text-center py-8 bg-gradient-to-br from-amber-50 to-cream-100">
            <div className="text-5xl mb-3">🔥</div>
            <div className="text-3xl font-serif font-bold text-amber-700">12 dias</div>
            <div className="text-sm text-amber-600 font-medium mt-1">Sequência atual</div>
            <div className="text-xs text-brand-500 mt-2">Seu recorde: 21 dias</div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
