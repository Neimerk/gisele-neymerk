import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react'
import { useAuthStore, DEMO_USER } from '@/stores/authStore'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { PLANS } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'
import toast from 'react-hot-toast'

const goals = [
  { id: 'emagrecimento', label: '⚖️ Emagrecer', desc: 'Perda de peso saudável' },
  { id: 'postura', label: '🧍 Postura', desc: 'Correção postural' },
  { id: 'ansiedade', label: '🌊 Ansiedade', desc: 'Reduzir ansiedade' },
  { id: 'forca', label: '💪 Força', desc: 'Fortalecer o corpo' },
  { id: 'flexibilidade', label: '🧘 Flexibilidade', desc: 'Ganhar mobilidade' },
  { id: 'sono', label: '🌙 Sono', desc: 'Melhorar o sono' },
  { id: 'estresse', label: '😮‍💨 Estresse', desc: 'Reduzir o estresse' },
  { id: 'longevidade', label: '🌱 Longevidade', desc: 'Saúde a longo prazo' },
]

const steps = ['Dados', 'Objetivos', 'Plano', 'Concluído']

export default function RegisterPage() {
  const navigate = useNavigate()
  const { login, setLoading, isLoading } = useAuthStore()
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [selectedPlan, setSelectedPlan] = useState<string>('premium')

  const toggleGoal = (id: string) => {
    setSelectedGoals(prev =>
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    )
  }

  const nextStep = () => setStep(s => Math.min(s + 1, 3))
  const prevStep = () => setStep(s => Math.max(s - 1, 0))

  const complete = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    login({ ...DEMO_USER, name, email: email || DEMO_USER.email })
    toast.success('Conta criada! Bem-vinda à família Gisele Neymerk 🌿')
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sage-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-lg relative">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-300 hover:text-white mb-8 transition-colors text-sm">
          <ArrowLeft size={16} /> Voltar
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="shadow-warm-xl">
            {/* Logo */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center mx-auto mb-3">
                <span className="text-cream-50 font-serif font-bold text-xl">G</span>
              </div>
              <h1 className="font-serif text-xl font-bold text-brand-900">Criar minha conta</h1>
              <p className="text-brand-500 text-xs mt-1">7 dias grátis · Sem cartão de crédito</p>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 transition-all ${
                    i < step ? 'bg-sage-500 text-white' : i === step ? 'bg-brand-700 text-white' : 'bg-cream-200 text-brand-400'
                  }`}>
                    {i < step ? <Check size={12} /> : i + 1}
                  </div>
                  <div className={`text-xs hidden sm:block ${i === step ? 'text-brand-700 font-medium' : 'text-brand-400'}`}>{s}</div>
                  {i < steps.length - 1 && <div className={`flex-1 h-0.5 ml-1 ${i < step ? 'bg-sage-400' : 'bg-cream-200'}`} />}
                </div>
              ))}
            </div>

            {/* Step content */}
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <Input label="Seu nome completo" placeholder="Como posso te chamar?" value={name} onChange={e => setName(e.target.value)} />
                  <Input label="E-mail" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                  <Input label="Senha" type="password" placeholder="Mínimo 8 caracteres" value={password} onChange={e => setPassword(e.target.value)} />
                  <Button fullWidth size="lg" icon={<ArrowRight size={16} />} iconPosition="right" onClick={nextStep} disabled={!name || !email}>
                    Continuar
                  </Button>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-semibold text-brand-900 mb-2">Quais são seus objetivos?</h2>
                  <p className="text-brand-500 text-xs mb-5">Selecione todos que se aplicam para personalizar sua experiência.</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {goals.map(g => (
                      <button
                        key={g.id}
                        onClick={() => toggleGoal(g.id)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          selectedGoals.includes(g.id)
                            ? 'bg-brand-50 border-brand-400 ring-1 ring-brand-300'
                            : 'bg-cream-50 border-cream-200 hover:bg-cream-100'
                        }`}
                      >
                        <div className="text-sm font-medium text-brand-900">{g.label}</div>
                        <div className="text-[10px] text-brand-500 mt-0.5">{g.desc}</div>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="secondary" onClick={prevStep}>Voltar</Button>
                    <Button fullWidth icon={<ArrowRight size={16} />} iconPosition="right" onClick={nextStep} disabled={selectedGoals.length === 0}>
                      Continuar
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-semibold text-brand-900 mb-1">Escolha seu plano</h2>
                  <p className="text-brand-500 text-xs mb-5">7 dias grátis em qualquer plano pago.</p>
                  <div className="space-y-3 mb-6">
                    {PLANS.filter(p => p.id !== 'concierge').map(plan => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`w-full p-4 rounded-2xl border text-left transition-all ${
                          selectedPlan === plan.id
                            ? 'bg-brand-50 border-brand-400 ring-1 ring-brand-300'
                            : 'bg-cream-50 border-cream-200 hover:bg-cream-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-brand-900">{plan.name}</span>
                            {plan.highlight && <Badge variant="brand" size="sm">Popular</Badge>}
                            {plan.id === 'free' && <Badge variant="sage" size="sm">Grátis</Badge>}
                          </div>
                          <span className="text-sm font-bold text-brand-700">
                            {plan.price === 0 ? 'Grátis' : `R$ ${plan.price.toFixed(2).replace('.', ',')}/mês`}
                          </span>
                        </div>
                        <p className="text-xs text-brand-500 mt-1">{plan.description}</p>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="secondary" onClick={prevStep}>Voltar</Button>
                    <Button fullWidth icon={<Sparkles size={16} />} onClick={nextStep}>
                      Continuar
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4">
                  <div className="text-6xl mb-4">🎉</div>
                  <h2 className="font-serif text-2xl font-bold text-brand-900 mb-2">Tudo pronto, {name.split(' ')[0]}!</h2>
                  <p className="text-brand-500 text-sm mb-6">
                    Sua jornada de saúde integral começa agora. Estamos muito felizes em ter você aqui!
                  </p>
                  <div className="bg-cream-50 rounded-2xl p-4 mb-6 border border-cream-200 text-left space-y-2">
                    <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-sage-600" /> 7 dias grátis ativados</div>
                    <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-sage-600" /> Plano {PLANS.find(p => p.id === selectedPlan)?.name} selecionado</div>
                    <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-sage-600" /> Perfil personalizado criado</div>
                    <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-sage-600" /> Gisele IA disponível 24/7</div>
                  </div>
                  <Button fullWidth size="lg" icon={<Sparkles size={16} />} onClick={complete} loading={isLoading}>
                    Iniciar minha jornada 🌿
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {step < 3 && (
              <p className="text-center text-xs text-brand-400 mt-6">
                Já tem conta?{' '}
                <Link to="/login" className="text-brand-600 font-medium hover:text-brand-800">Entrar</Link>
              </p>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
