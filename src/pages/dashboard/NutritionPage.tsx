import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Droplets, Apple, Target, TrendingUp, ChevronRight, Coffee, Utensils, Moon } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Progress, CircularProgress } from '@/components/ui/Progress'

const macros = [
  { label: 'Proteínas', current: 98, target: 130, unit: 'g', color: '#6B4E3D' as const, bg: 'bg-brand-50', icon: '🥩' },
  { label: 'Carboidratos', current: 182, target: 250, unit: 'g', color: '#52845A' as const, bg: 'bg-sage-50', icon: '🌾' },
  { label: 'Gorduras', current: 52, target: 70, unit: 'g', color: '#5B8DB8' as const, bg: 'bg-blue-50', icon: '🥑' },
]

const meals = [
  {
    id: '1', name: 'Café da manhã', time: '07:30', icon: Coffee,
    foods: [
      { name: 'Iogurte grego com granola', calories: 280, protein: 20, carbs: 32, fat: 8 },
      { name: 'Banana', calories: 89, protein: 1, carbs: 23, fat: 0 },
    ],
    totalCalories: 369,
  },
  {
    id: '2', name: 'Almoço', time: '12:30', icon: Utensils,
    foods: [
      { name: 'Frango grelhado', calories: 220, protein: 38, carbs: 0, fat: 6 },
      { name: 'Arroz integral', calories: 130, protein: 3, carbs: 28, fat: 1 },
      { name: 'Salada verde', calories: 35, protein: 2, carbs: 6, fat: 0 },
    ],
    totalCalories: 385,
  },
  {
    id: '3', name: 'Lanche', time: '16:00', icon: Apple,
    foods: [
      { name: 'Maçã', calories: 95, protein: 0, carbs: 25, fat: 0 },
      { name: 'Oleaginosas (30g)', calories: 180, protein: 5, carbs: 8, fat: 16 },
    ],
    totalCalories: 275,
  },
  {
    id: '4', name: 'Jantar', time: '19:30', icon: Moon,
    foods: [],
    totalCalories: 0,
    planned: true,
  },
]

const weekCalories = [
  { day: 'Seg', cal: 1820, target: 1800 },
  { day: 'Ter', cal: 1750, target: 1800 },
  { day: 'Qua', cal: 1900, target: 1800 },
  { day: 'Qui', cal: 1680, target: 1800 },
  { day: 'Sex', cal: 1029, target: 1800 },
  { day: 'Sáb', cal: 0, target: 1800 },
  { day: 'Dom', cal: 0, target: 1800 },
]

const recipes = [
  { title: 'Bowl de quinoa com frango', calories: 420, time: '25min', difficulty: 'Fácil', emoji: '🥗', tag: 'Alta proteína' },
  { title: 'Smoothie anti-inflamatório', calories: 180, time: '5min', difficulty: 'Fácil', emoji: '🥤', tag: 'Pós-treino' },
  { title: 'Omelete de legumes', calories: 290, time: '15min', difficulty: 'Fácil', emoji: '🍳', tag: 'Café da manhã' },
]

const stagger = { visible: { transition: { staggerChildren: 0.07 } } }
const fadeUp  = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

const totalConsumed = 1029
const targetCalories = 1800

export default function NutritionPage() {
  const [water, setWater] = useState(6)

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={fadeUp}>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-brand-900">Nutrição</h1>
        <p className="text-brand-500 mt-1 text-sm">Diário alimentar · Acompanhamento de metas · Plano personalizado</p>
      </motion.div>

      {/* Summary row */}
      <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="text-center p-5">
          <CircularProgress
            value={(totalConsumed / targetCalories) * 100}
            size={70}
            strokeWidth={7}
            color="#6B4E3D"
            bg="#E5D5C3"
            label={<span className="text-xs font-bold text-brand-800">{Math.round((totalConsumed / targetCalories) * 100)}%</span>}
          />
          <div className="mt-3 text-sm font-semibold text-brand-900">{totalConsumed} kcal</div>
          <div className="text-xs text-brand-500">de {targetCalories} kcal</div>
        </Card>
        {macros.map(m => (
          <Card key={m.label} className="p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-brand-600">{m.icon} {m.label}</span>
              <span className="text-xs text-brand-500">{m.current}/{m.target}g</span>
            </div>
            <Progress value={m.current} max={m.target} size="sm" color={m.label === 'Proteínas' ? 'brand' : m.label === 'Carboidratos' ? 'sage' : 'blue'} />
            <div className="text-xs text-brand-400 mt-1.5">{Math.round((m.current / m.target) * 100)}% da meta</div>
          </Card>
        ))}
      </motion.div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Meals diary */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-brand-900">Diário alimentar — Hoje</h2>
              <Button size="sm" icon={<Plus size={14} />}>Adicionar refeição</Button>
            </div>
            <div className="space-y-3">
              {meals.map(meal => (
                <Card key={meal.id} className={meal.planned ? 'border-dashed border-cream-300 bg-cream-50/50' : ''}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center flex-shrink-0">
                      <meal.icon size={18} className="text-brand-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-sm font-semibold text-brand-900">{meal.name}</span>
                          <span className="text-xs text-brand-400 ml-2">{meal.time}</span>
                        </div>
                        <div className="text-sm font-bold text-brand-700">{meal.totalCalories} kcal</div>
                      </div>
                      {meal.foods.length > 0 ? (
                        <div className="space-y-1">
                          {meal.foods.map((f, i) => (
                            <div key={i} className="flex items-center justify-between text-xs">
                              <span className="text-brand-600">{f.name}</span>
                              <span className="text-brand-400">{f.calories} kcal</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" icon={<Plus size={12} />}>
                            Adicionar alimentos
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Recipes */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-brand-900">Receitas recomendadas</h2>
              <Button variant="ghost" size="sm" icon={<ChevronRight size={14} />} iconPosition="right">Ver todas</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {recipes.map(r => (
                <Card key={r.title} hover className="p-5">
                  <div className="text-4xl mb-3">{r.emoji}</div>
                  <Badge variant="brand" size="sm" className="mb-2">{r.tag}</Badge>
                  <div className="text-sm font-semibold text-brand-900 mb-2">{r.title}</div>
                  <div className="flex gap-3 text-xs text-brand-500">
                    <span>⏱ {r.time}</span>
                    <span>🔥 {r.calories} kcal</span>
                  </div>
                  <div className="text-xs text-sage-600 mt-1">{r.difficulty}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Water & calorie history */}
        <motion.div variants={fadeUp} className="space-y-6">
          {/* Water tracker */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-brand-900">Hidratação</h2>
              <Badge variant="info" size="sm">{water}/8 copos</Badge>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {Array(8).fill(0).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setWater(i < water ? i : i + 1)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all ${
                    i < water ? 'bg-blue-500 shadow-sm' : 'bg-cream-100 hover:bg-blue-100'
                  }`}
                >
                  {i < water ? '💧' : '○'}
                </button>
              ))}
            </div>
            <Progress value={water} max={8} size="sm" color="blue" />
            <p className="text-xs text-brand-500 mt-2 text-center">{8 - water} copos restantes para a meta</p>
          </Card>

          {/* Weekly calories */}
          <Card>
            <h2 className="font-semibold text-brand-900 mb-4">Calorias — Semana</h2>
            <div className="space-y-2">
              {weekCalories.slice(0, 5).map(d => (
                <div key={d.day}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-brand-600">{d.day}</span>
                    <span className="text-brand-500">{d.cal > 0 ? `${d.cal} kcal` : '—'}</span>
                  </div>
                  <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${d.cal > d.target ? 'bg-amber-400' : 'bg-sage-500'}`}
                      style={{ width: `${Math.min(100, (d.cal / d.target) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Nutritionist card */}
          <Card className="bg-sage-800 text-white">
            <div className="text-3xl mb-3">🥗</div>
            <div className="text-sm font-semibold text-cream-100 mb-1">Plano alimentar personalizado</div>
            <p className="text-sage-300 text-xs mb-4">Desenvolvido por nutricionista para seus objetivos específicos.</p>
            <Button size="sm" fullWidth className="bg-cream-50 text-sage-800 hover:bg-white">
              Ver meu plano
            </Button>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
