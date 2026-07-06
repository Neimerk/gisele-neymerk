import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Clock, Flame, Filter, Search, Heart, Star, ChevronRight, BookOpen } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Progress } from '@/components/ui/Progress'
import { PILATES_CATEGORIES } from '@/lib/constants'
import { formatDuration } from '@/lib/utils'

const classes = [
  {
    id: '1', title: 'Pilates Terapêutico para Coluna', instructor: 'Gisele Neymerk',
    duration: 45, calories: 180, level: 'Intermediário', category: 'spine',
    description: 'Sequência especial para aliviar dores lombares e fortalecer a musculatura profunda da coluna.',
    objectives: ['Aliviar dores lombares', 'Fortalecer core', 'Melhorar postura'],
    equipment: ['Tapete', 'Bloco de yoga'],
    rating: 4.9, views: 12500, isFavorite: true, tags: ['coluna', 'terapêutico', 'dor'],
    thumbnail: '🧘', color: '#FAF6F2',
  },
  {
    id: '2', title: 'Pilates Anti-Ansiedade — Respiração e Movimento',
    instructor: 'Gisele Neymerk', duration: 30, calories: 120, level: 'Todos',
    category: 'anxiety',
    description: 'Combinação de técnicas de respiração com movimentos suaves para reduzir ansiedade e promover equilíbrio.',
    objectives: ['Reduzir ansiedade', 'Melhorar respiração', 'Relaxamento'],
    equipment: ['Tapete'],
    rating: 5.0, views: 18200, isFavorite: false, tags: ['ansiedade', 'respiração', 'relaxamento'],
    thumbnail: '🌿', color: '#F4F7F4',
  },
  {
    id: '3', title: 'Pilates Funcional — Fortalecimento Total',
    instructor: 'Gisele Neymerk', duration: 55, calories: 260, level: 'Intermediário',
    category: 'functional',
    description: 'Treino funcional integrado ao pilates para fortalecimento muscular completo e melhora do condicionamento.',
    objectives: ['Fortalecer musculatura', 'Condicionamento', 'Queimar calorias'],
    equipment: ['Tapete', 'Elástico'],
    rating: 4.8, views: 9800, isFavorite: true, tags: ['funcional', 'força', 'condicionamento'],
    thumbnail: '💪', color: '#FFF7ED',
  },
  {
    id: '4', title: 'Pilates para Iniciantes — Fundamentos',
    instructor: 'Gisele Neymerk', duration: 40, calories: 150, level: 'Iniciante',
    category: 'beginner',
    description: 'Perfeita para quem está começando no pilates. Aprenda os fundamentos com segurança e confiança.',
    objectives: ['Aprender base do pilates', 'Consciência corporal', 'Controle do core'],
    equipment: ['Tapete'],
    rating: 4.9, views: 22100, isFavorite: false, tags: ['iniciante', 'básico', 'fundamentos'],
    thumbnail: '🌱', color: '#F0FDF4',
  },
  {
    id: '5', title: 'Pilates para Idosos — Equilíbrio e Força',
    instructor: 'Gisele Neymerk', duration: 35, calories: 130, level: 'Iniciante',
    category: 'elderly',
    description: 'Sequência adaptada para promover equilíbrio, força e prevenção de quedas em adultos 60+.',
    objectives: ['Melhorar equilíbrio', 'Fortalecer pernas', 'Prevenir quedas', 'Longevidade'],
    equipment: ['Tapete', 'Cadeira'],
    rating: 5.0, views: 7600, isFavorite: false, tags: ['idosos', 'equilíbrio', 'longevidade'],
    thumbnail: '🌸', color: '#FFF1F2',
  },
  {
    id: '6', title: 'Pilates Respiratório — Consciência Plena',
    instructor: 'Gisele Neymerk', duration: 25, calories: 90, level: 'Todos',
    category: 'breathing',
    description: 'Técnicas avançadas de respiração integradas ao movimento para consciência corporal e plena.',
    objectives: ['Consciência respiratória', 'Mindfulness corporal', 'Redução do estresse'],
    equipment: ['Tapete'],
    rating: 4.7, views: 5400, isFavorite: true, tags: ['respiração', 'mindfulness', 'consciência'],
    thumbnail: '🫧', color: '#EFF6FF',
  },
]

const levelColors: Record<string, string> = {
  'Iniciante':    'success',
  'Intermediário':'warning',
  'Avançado':     'danger',
  'Todos':        'info',
}

const stagger = { visible: { transition: { staggerChildren: 0.07 } } }
const fadeUp  = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function PilatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [view, setView] = useState<'grid' | 'list'>('grid')

  const filtered = classes.filter(c => {
    const matchesSearch = !search || c.title.toLowerCase().includes(search.toLowerCase())
    const matchesCat    = !selectedCategory || c.category === selectedCategory
    return matchesSearch && matchesCat
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-brand-900">Pilates</h1>
          <p className="text-brand-500 mt-1 text-sm">200+ aulas com Gisele Neymerk · Todos os níveis</p>
        </div>
        <Badge variant="brand" size="md"><BookOpen size={12} /> 87 aulas concluídas</Badge>
      </div>

      {/* My progress */}
      <Card className="bg-gradient-to-r from-brand-800 to-brand-900">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="text-xs text-brand-400 font-medium uppercase tracking-wider mb-2">Meu progresso</div>
            <div className="text-2xl font-serif font-bold text-white mb-1">Programa 30 Dias — Postura e Força</div>
            <div className="text-brand-400 text-sm mb-4">Semana 2 de 4 · Aula 8 de 16</div>
            <Progress value={50} size="sm" color="brand" animated />
            <div className="flex gap-3 mt-4">
              <Button size="sm" className="bg-cream-50 text-brand-800 hover:bg-white" icon={<Play size={14} />}>
                Continuar aula
              </Button>
              <Button size="sm" variant="ghost" className="text-brand-300 hover:text-white hover:bg-brand-700">
                Ver programa completo
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Aulas restantes', value: '8' },
              { label: 'Tempo total',     value: '6h 20m' },
              { label: 'Conclusão est.', value: '18 Jan' },
            ].map(m => (
              <div key={m.label} className="flex items-center justify-between py-2 border-b border-brand-700/50 last:border-0">
                <span className="text-brand-400 text-xs">{m.label}</span>
                <span className="text-cream-200 text-sm font-semibold">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Categories */}
      <div className="overflow-x-auto scrollbar-hide -mx-2 px-2">
        <div className="flex gap-2 pb-2" style={{ minWidth: 'max-content' }}>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              !selectedCategory ? 'bg-brand-700 text-white' : 'bg-white border border-cream-200 text-brand-600 hover:bg-brand-50'
            }`}
          >
            Todas as aulas
          </button>
          {PILATES_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'text-white shadow-warm'
                  : 'bg-white border border-cream-200 text-brand-600 hover:bg-brand-50'
              }`}
              style={selectedCategory === cat.id ? { backgroundColor: cat.color } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-3">
        <Input
          placeholder="Buscar aulas..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          icon={<Search size={16} />}
          className="max-w-sm"
        />
        <Button variant="secondary" size="md" icon={<Filter size={16} />}>
          Filtros
        </Button>
      </div>

      {/* Classes grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {filtered.map((cls) => (
          <motion.div key={cls.id} variants={fadeUp}>
            <Card hover className="group cursor-pointer overflow-hidden p-0">
              {/* Thumbnail */}
              <div
                className="h-40 flex items-center justify-center text-6xl relative"
                style={{ backgroundColor: cls.color }}
              >
                {cls.thumbnail}
                <button
                  className="absolute top-3 right-3 p-2 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <Heart
                    size={14}
                    className={cls.isFavorite ? 'text-rose-500 fill-rose-500' : 'text-brand-400'}
                  />
                </button>
                <div className="absolute bottom-3 left-3">
                  <Badge variant={levelColors[cls.level] as 'success' | 'warning' | 'danger' | 'info'} size="sm">
                    {cls.level}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-brand-900 text-sm mb-2 leading-snug">{cls.title}</h3>
                <p className="text-brand-500 text-xs leading-relaxed mb-4 line-clamp-2">{cls.description}</p>

                <div className="flex items-center gap-4 text-xs text-brand-500 mb-4">
                  <div className="flex items-center gap-1"><Clock size={12} /> {formatDuration(cls.duration)}</div>
                  <div className="flex items-center gap-1"><Flame size={12} /> {cls.calories} kcal</div>
                  <div className="flex items-center gap-1"><Star size={12} className="text-amber-400 fill-amber-400" /> {cls.rating}</div>
                </div>

                {cls.equipment && cls.equipment.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap mb-4">
                    {cls.equipment.map(e => (
                      <span key={e} className="text-[10px] px-2 py-0.5 rounded-full bg-cream-100 text-brand-600 border border-cream-200">
                        {e}
                      </span>
                    ))}
                  </div>
                )}

                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  icon={<Play size={13} />}
                  className="group-hover:shadow-warm"
                >
                  Iniciar aula
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="font-semibold text-brand-900 mb-2">Nenhuma aula encontrada</h3>
          <p className="text-brand-500 text-sm">Tente ajustar os filtros ou buscar por outro termo.</p>
        </div>
      )}
    </div>
  )
}
