import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Clock, Brain, Heart, Wind, Sun, Moon, Star, Smile, Meh, Frown } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CircularProgress } from '@/components/ui/Progress'
import { formatDuration } from '@/lib/utils'

const programs = [
  {
    id: '1', title: 'Gerenciamento da Ansiedade', sessions: 12, duration: 240,
    description: 'Programa completo com técnicas de respiração, mindfulness e psicoeducação para controlar a ansiedade.',
    icon: '🌊', color: '#EFF6FF', progress: 35,
    tags: ['Ansiedade', 'Respiração', 'Mindfulness'],
  },
  {
    id: '2', title: 'Autoestima e Autoconhecimento', sessions: 8, duration: 160,
    description: 'Jornada de autoconhecimento com exercícios de psicologia positiva, valores e autocompaixão.',
    icon: '🌸', color: '#FDF2F8', progress: 0,
    tags: ['Autoestima', 'Psicologia', 'Crescimento'],
  },
  {
    id: '3', title: 'Sono Restaurador', sessions: 7, duration: 105,
    description: 'Técnicas cientificamente validadas para melhorar a qualidade do sono e reduzir insônia.',
    icon: '🌙', color: '#F5F3FF', progress: 71,
    tags: ['Sono', 'Relaxamento', 'Saúde'],
  },
  {
    id: '4', title: 'Mindfulness no Dia a Dia', sessions: 10, duration: 150,
    description: 'Práticas de atenção plena para integrar no cotidiano e viver com mais presença.',
    icon: '🧘', color: '#F0FDF4', progress: 20,
    tags: ['Mindfulness', 'Atenção Plena', 'Foco'],
  },
]

const dailySessions = [
  { title: 'Meditação Matinal', duration: 10, icon: Sun, color: 'text-amber-500 bg-amber-50', desc: 'Comece o dia com clareza' },
  { title: 'Respiração 4-7-8', duration: 5, icon: Wind, color: 'text-blue-500 bg-blue-50', desc: 'Técnica de relaxamento rápido' },
  { title: 'Body Scan Noturno', duration: 15, icon: Moon, color: 'text-purple-500 bg-purple-50', desc: 'Relaxe antes de dormir' },
]

const moods = [
  { icon: '😄', label: 'Ótimo', value: 5 },
  { icon: '😊', label: 'Bem', value: 4 },
  { icon: '😐', label: 'Neutro', value: 3 },
  { icon: '😔', label: 'Triste', value: 2 },
  { icon: '😰', label: 'Ansioso', value: 1 },
]

const weekMoods = [
  { day: 'Seg', mood: 4, emoji: '😊' },
  { day: 'Ter', mood: 3, emoji: '😐' },
  { day: 'Qua', mood: 5, emoji: '😄' },
  { day: 'Qui', mood: 4, emoji: '😊' },
  { day: 'Sex', mood: 5, emoji: '😄' },
  { day: 'Sáb', mood: null, emoji: null },
  { day: 'Dom', mood: null, emoji: null },
]

const stagger = { visible: { transition: { staggerChildren: 0.08 } } }
const fadeUp  = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function MentalHealthPage() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [moodSaved, setMoodSaved] = useState(false)

  const saveMood = () => {
    if (selectedMood) setMoodSaved(true)
  }

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
      {/* Header */}
      <motion.div variants={fadeUp}>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-brand-900">Saúde Mental</h1>
        <p className="text-brand-500 mt-1 text-sm">Equilíbrio emocional · Mindfulness · Psicoeducação</p>
      </motion.div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Programs & Sessions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Mood check-in */}
          <motion.div variants={fadeUp}>
            <Card>
              <h2 className="font-semibold text-brand-900 mb-1">Como você está agora?</h2>
              <p className="text-brand-500 text-xs mb-5">Registrar seu humor ajuda a acompanhar seu bem-estar ao longo do tempo.</p>
              {moodSaved ? (
                <div className="text-center py-4">
                  <div className="text-3xl mb-2">{moods.find(m => m.value === selectedMood)?.icon}</div>
                  <div className="text-sm font-semibold text-brand-900">Humor registrado!</div>
                  <div className="text-xs text-brand-500 mt-1">Continue monitorando seu bem-estar</div>
                </div>
              ) : (
                <>
                  <div className="flex justify-center gap-4 mb-5">
                    {moods.map(mood => (
                      <button
                        key={mood.value}
                        onClick={() => setSelectedMood(mood.value)}
                        className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${
                          selectedMood === mood.value
                            ? 'bg-brand-100 ring-2 ring-brand-500 scale-110'
                            : 'hover:bg-cream-100'
                        }`}
                      >
                        <span className="text-2xl">{mood.icon}</span>
                        <span className="text-xs text-brand-600">{mood.label}</span>
                      </button>
                    ))}
                  </div>
                  {selectedMood && (
                    <Button size="sm" fullWidth onClick={saveMood}>
                      Salvar humor
                    </Button>
                  )}
                </>
              )}
            </Card>
          </motion.div>

          {/* Daily sessions */}
          <motion.div variants={fadeUp}>
            <Card>
              <h2 className="font-semibold text-brand-900 mb-4">Sessões rápidas de hoje</h2>
              <div className="grid md:grid-cols-3 gap-3">
                {dailySessions.map(s => (
                  <div key={s.title} className="p-4 rounded-2xl border border-cream-200 hover:shadow-warm transition-all cursor-pointer group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${s.color} group-hover:scale-110 transition-transform`}>
                      <s.icon size={18} />
                    </div>
                    <div className="text-sm font-semibold text-brand-900 mb-1">{s.title}</div>
                    <div className="text-xs text-brand-500 mb-3">{s.desc}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-400 flex items-center gap-1"><Clock size={11} /> {s.duration} min</span>
                      <button className="w-7 h-7 rounded-full bg-brand-700 flex items-center justify-center text-white">
                        <Play size={10} fill="white" className="ml-0.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Programs */}
          <motion.div variants={fadeUp}>
            <h2 className="font-semibold text-brand-900 mb-4">Programas de saúde mental</h2>
            <div className="space-y-4">
              {programs.map(prog => (
                <Card key={prog.id} hover>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style={{ backgroundColor: prog.color }}>
                      {prog.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-brand-900 text-sm">{prog.title}</h3>
                        {prog.progress > 0 && (
                          <Badge variant="brand" size="sm">{prog.progress}% concluído</Badge>
                        )}
                      </div>
                      <p className="text-brand-500 text-xs leading-relaxed mb-3">{prog.description}</p>
                      <div className="flex gap-1.5 flex-wrap mb-3">
                        {prog.tags.map(t => <Badge key={t} variant="cream" size="sm">{t}</Badge>)}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-brand-500">
                        <span>{prog.sessions} sessões</span>
                        <span>{formatDuration(prog.duration)}</span>
                      </div>
                      {prog.progress > 0 && (
                        <div className="mt-3 h-1.5 bg-cream-200 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-600 rounded-full transition-all" style={{ width: `${prog.progress}%` }} />
                        </div>
                      )}
                    </div>
                    <Button variant="secondary" size="sm" icon={prog.progress > 0 ? <Play size={12} /> : undefined}>
                      {prog.progress > 0 ? 'Continuar' : 'Iniciar'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Mood history & wellness score */}
        <motion.div variants={fadeUp} className="space-y-6">
          {/* Wellness score */}
          <Card className="text-center">
            <h2 className="font-semibold text-brand-900 mb-5">Score de bem-estar</h2>
            <div className="flex justify-center mb-4">
              <CircularProgress
                value={78}
                size={120}
                strokeWidth={10}
                color="#52845A"
                bg="#E4EDE4"
                label={
                  <div className="text-center">
                    <div className="text-2xl font-bold font-serif text-sage-700">78</div>
                    <div className="text-xs text-sage-600">de 100</div>
                  </div>
                }
              />
            </div>
            <Badge variant="sage" className="mb-3">Muito bem! ✨</Badge>
            <p className="text-xs text-brand-500">Seu bem-estar mental está acima da média. Continue com as práticas de mindfulness!</p>
          </Card>

          {/* Mood history */}
          <Card>
            <h2 className="font-semibold text-brand-900 mb-4">Humor da semana</h2>
            <div className="flex justify-between">
              {weekMoods.map(d => (
                <div key={d.day} className="flex flex-col items-center gap-2">
                  <span className="text-lg">{d.emoji || '○'}</span>
                  <div className={`w-1.5 h-8 rounded-full ${d.mood ? 'bg-sage-400' : 'bg-cream-200'}`}
                    style={d.mood ? { opacity: d.mood / 5 } : {}} />
                  <span className="text-[10px] text-brand-500">{d.day}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Mindfulness streak */}
          <Card className="bg-gradient-to-br from-purple-50 to-cream-50">
            <div className="text-center">
              <div className="text-4xl mb-2">🧘</div>
              <div className="text-2xl font-serif font-bold text-purple-800">5 dias</div>
              <div className="text-sm text-purple-600 font-medium">Meditação seguida</div>
              <p className="text-xs text-brand-500 mt-2">Pratique hoje para manter a sequência</p>
              <Button size="sm" fullWidth className="mt-4 bg-purple-600 hover:bg-purple-700" icon={<Play size={13} />}>
                Meditar agora
              </Button>
            </div>
          </Card>

          {/* Quote */}
          <Card className="bg-brand-800">
            <div className="text-3xl mb-3">💫</div>
            <p className="text-brand-300 text-sm italic leading-relaxed mb-3">
              "O equilíbrio não é algo que você encontra; é algo que você cria."
            </p>
            <div className="text-brand-500 text-xs">— Gisele Neymerk</div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
