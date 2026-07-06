import { motion } from 'framer-motion'
import { TrendingUp, Award, Flame, Clock, Activity, Target, Calendar, ChevronRight } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { CircularProgress, Progress } from '@/components/ui/Progress'
import { useAuthStore } from '@/stores/authStore'

const weeklyActivity = [
  { week: 'Sem 1', minutes: 180, classes: 4 },
  { week: 'Sem 2', minutes: 225, classes: 5 },
  { week: 'Sem 3', minutes: 195, classes: 4 },
  { week: 'Sem 4', minutes: 270, classes: 6 },
  { week: 'Sem 5', minutes: 315, classes: 7 },
  { week: 'Sem 6', minutes: 285, classes: 6 },
  { week: 'Sem 7', minutes: 180, classes: 4 },
]

const weightHistory = [
  { date: '1 Nov', weight: 72 },
  { date: '15 Nov', weight: 71.2 },
  { date: '1 Dez', weight: 70.5 },
  { date: '15 Dez', weight: 69.8 },
  { date: '1 Jan', weight: 69.1 },
  { date: '15 Jan', weight: 68.3 },
]

const wellnessRadar = [
  { subject: 'Movimento', A: 85 },
  { subject: 'Nutrição', A: 70 },
  { subject: 'Sono', A: 75 },
  { subject: 'Mental', A: 78 },
  { subject: 'Hidratação', A: 65 },
  { subject: 'Social', A: 80 },
]

const achievements = [
  { icon: '🔥', title: 'Semana Perfeita', desc: '7 dias consecutivos', date: '01/02', category: 'Sequência' },
  { icon: '✨', title: 'Mestre do Pilates', desc: '100 aulas concluídas', date: '15/01', category: 'Milestone' },
  { icon: '🧘', title: 'Mente em Paz', desc: '30 meditações', date: '10/01', category: 'Mental' },
  { icon: '💪', title: 'Força Total', desc: '50h de treino', date: '05/01', category: 'Fitness' },
  { icon: '🌱', title: 'Primeiros Passos', desc: 'Primeira aula', date: '15/11', category: 'Milestone' },
  { icon: '💧', title: 'Hidratada', desc: 'Meta de água por 7 dias', date: '22/11', category: 'Nutrição' },
]

const stagger = { visible: { transition: { staggerChildren: 0.07 } } }
const fadeUp  = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function ProgressPage() {
  const { user } = useAuthStore()
  const profile = user?.profile

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={fadeUp}>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-brand-900">Meu Progresso</h1>
        <p className="text-brand-500 mt-1 text-sm">Acompanhe sua evolução · Conquistas · Analytics</p>
      </motion.div>

      {/* Overview */}
      <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Sequência atual', value: `${profile?.streak || 0} dias`, icon: Flame, color: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'Total de aulas', value: `${profile?.completedClasses || 0}`, icon: Activity, color: 'text-brand-600', bg: 'bg-brand-50' },
          { label: 'Tempo de treino', value: '54h 20m', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Pontos totais', value: `${(profile?.points || 0).toLocaleString('pt-BR')}`, icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map(m => (
          <Card key={m.label} className="p-5 flex items-center gap-4">
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

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div variants={fadeUp}>
          <Card>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-brand-900">Atividade semanal</h2>
              <Badge variant="brand" size="sm">Últimas 7 semanas</Badge>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyActivity} barSize={20}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F2EBE1" />
                <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#8C7B6B' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#8C7B6B' }} axisLine={false} tickLine={false} unit="min" />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E5D5C3', background: '#FDFAF6', fontSize: '12px' }}
                  formatter={(v) => [`${v} min`, 'Movimento']}
                />
                <Bar dataKey="minutes" fill="#6B4E3D" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-brand-900">Evolução do peso</h2>
              <Badge variant="sage" size="sm">-3.7 kg</Badge>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={weightHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F2EBE1" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#8C7B6B' }} axisLine={false} tickLine={false} />
                <YAxis domain={[67, 73]} tick={{ fontSize: 11, fill: '#8C7B6B' }} axisLine={false} tickLine={false} unit="kg" />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E5D5C3', background: '#FDFAF6', fontSize: '12px' }}
                  formatter={(v) => [`${v} kg`, 'Peso']}
                />
                <Line type="monotone" dataKey="weight" stroke="#52845A" strokeWidth={2.5} dot={{ fill: '#52845A', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Wellness & Achievements */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Wellness radar */}
        <motion.div variants={fadeUp}>
          <Card className="text-center">
            <h2 className="font-semibold text-brand-900 mb-5">Score de saúde integral</h2>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={wellnessRadar} margin={{ top: 0, right: 20, bottom: 0, left: 20 }}>
                <PolarGrid stroke="#E5D5C3" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#8C7B6B' }} />
                <Radar dataKey="A" stroke="#6B4E3D" fill="#6B4E3D" fillOpacity={0.15} />
              </RadarChart>
            </ResponsiveContainer>
            <Badge variant="brand" className="mt-3">Score: 75/100</Badge>
          </Card>
        </motion.div>

        {/* Body metrics */}
        <motion.div variants={fadeUp}>
          <Card>
            <h2 className="font-semibold text-brand-900 mb-5">Medidas corporais</h2>
            <div className="space-y-4">
              {[
                { label: 'Cintura', before: 82, after: 78, unit: 'cm', color: 'brand' as const },
                { label: 'Quadril', before: 98, after: 95, unit: 'cm', color: 'sage' as const },
                { label: 'Braço', before: 31, after: 29, unit: 'cm', color: 'blue' as const },
                { label: 'Coxa', before: 58, after: 55, unit: 'cm', color: 'purple' as const },
              ].map(m => (
                <div key={m.label}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-medium text-brand-700">{m.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-400 line-through">{m.before}{m.unit}</span>
                      <span className="text-sage-600 font-semibold">{m.after}{m.unit}</span>
                      <span className="text-sage-600">(-{m.before - m.after}{m.unit})</span>
                    </div>
                  </div>
                  <Progress value={m.after} max={m.before} size="xs" color={m.color} />
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-cream-100">
              <div className="text-xs text-brand-500 text-center">Última medição: 15 Jan 2025</div>
            </div>
          </Card>
        </motion.div>

        {/* Goals */}
        <motion.div variants={fadeUp}>
          <Card>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-brand-900">Metas em curso</h2>
              <Target size={16} className="text-brand-500" />
            </div>
            <div className="space-y-4">
              {[
                { goal: 'Perder 5kg', progress: 74, icon: '⚖️', deadline: '31 Mar' },
                { goal: '100 aulas', progress: 87, icon: '🧘', deadline: '15 Fev' },
                { goal: 'Sequência 30 dias', progress: 40, icon: '🔥', deadline: '05 Fev' },
              ].map(g => (
                <div key={g.goal} className="p-3 rounded-2xl bg-cream-50 border border-cream-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{g.icon}</span>
                    <span className="text-sm font-medium text-brand-900 flex-1">{g.goal}</span>
                    <span className="text-xs text-brand-500">{g.deadline}</span>
                  </div>
                  <Progress value={g.progress} size="xs" color="brand" showValue label="" />
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div variants={fadeUp}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-brand-900">Conquistas</h2>
          <Badge variant="brand">{achievements.length} desbloqueadas</Badge>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map(a => (
            <Card key={a.title} className="text-center p-4 hover:shadow-warm-lg hover:-translate-y-0.5 cursor-pointer">
              <div className="text-3xl mb-2">{a.icon}</div>
              <div className="text-xs font-semibold text-brand-900 mb-0.5">{a.title}</div>
              <div className="text-[10px] text-brand-500 mb-2">{a.desc}</div>
              <Badge variant="cream" size="sm">{a.date}</Badge>
            </Card>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
