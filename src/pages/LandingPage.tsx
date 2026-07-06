import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import {
  Sparkles, Play, Star, ChevronRight, Heart, Brain, Apple,
  Activity, Users, Shield, ArrowRight, Check,
  Globe, Smartphone, Tv2,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PLANS } from '@/lib/constants'

// ── Animations ─────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  )
}

const stats = [
  { value: '50.000+', label: 'Alunas transformadas' },
  { value: '4.9/5',   label: 'Avaliação média' },
  { value: '500+',    label: 'Aulas disponíveis' },
  { value: '98%',     label: 'Taxa de satisfação' },
]

const features = [
  {
    icon: Activity, title: 'Pilates Completo',
    description: 'Biblioteca com 200+ aulas de pilates para todos os níveis, objetivos e condições físicas.',
    color: 'bg-brand-50', iconColor: 'text-brand-600', badge: '200+ aulas',
  },
  {
    icon: Brain, title: 'Saúde Mental',
    description: 'Meditação, mindfulness, respiração e psicoeducação para equilíbrio emocional completo.',
    color: 'bg-violet-50', iconColor: 'text-violet-600', badge: '12 programas',
  },
  {
    icon: Heart, title: 'Gisele IA',
    description: 'Personal trainer, professora e coach de bem-estar com inteligência artificial personalizada.',
    color: 'bg-rose-50', iconColor: 'text-rose-500', badge: 'IA Exclusiva',
  },
  {
    icon: Apple, title: 'Nutrição Integrada',
    description: 'Diário alimentar, plano nutricional e acompanhamento de hidratação e hábitos.',
    color: 'bg-emerald-50', iconColor: 'text-emerald-600', badge: 'Plano personalizado',
  },
  {
    icon: Users, title: 'Comunidade Viva',
    description: 'Feed social, grupos, desafios coletivos e lives ao vivo com especialistas.',
    color: 'bg-cyan-50', iconColor: 'text-cyan-600', badge: '10.000+ membros',
  },
  {
    icon: Shield, title: 'Saúde Integrada',
    description: 'Teleconsultas com psicólogos, nutricionistas, fisioterapeutas e educadores físicos.',
    color: 'bg-amber-50', iconColor: 'text-amber-600', badge: 'Multidisciplinar',
  },
]

const testimonials = [
  {
    name: 'Maria Fernanda Costa', role: 'Executiva, 42 anos', avatar: 'M',
    text: 'Em 3 meses de plataforma, perdi 8kg, reduzi minha ansiedade e finalmente tenho energia para o trabalho e família. A Gisele mudou minha vida!',
    stars: 5, badge: 'Plano Premium',
  },
  {
    name: 'Ana Luiza Santos', role: 'Professora, 55 anos', avatar: 'A',
    text: 'Comecei com medo de não conseguir. A abordagem acolhedora da Gisele me fez continuar. Hoje faço pilates todos os dias e minha coluna agradece!',
    stars: 5, badge: 'Plano Essencial',
  },
  {
    name: 'Roberta Oliveira', role: 'Mãe e empreendedora, 38 anos', avatar: 'R',
    text: 'A plataforma é incrível. A IA da Gisele me entende, adapta os treinos e ainda me motiva quando estou cansada. Vale cada centavo.',
    stars: 5, badge: 'Plano Integral',
  },
]

const modules = [
  { icon: '🧘', title: 'Pilates', count: '200+ aulas',    color: '#EFF6FF' },
  { icon: '💪', title: 'Funcional', count: '150+ treinos', color: '#F0FDFA' },
  { icon: '🧠', title: 'Saúde Mental', count: '80+ sessões', color: '#F5F3FF' },
  { icon: '🥗', title: 'Nutrição', count: 'Diário + Planos', color: '#F0FDF4' },
  { icon: '🤝', title: 'Consultas', count: 'Teleconsulta',  color: '#FFFBEB' },
  { icon: '✨', title: 'Gisele IA', count: '24/7 disponível', color: '#FFF1F2' },
]

export default function LandingPage() {
  const navigate = useNavigate()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FBFF' }}>
      <Navbar />

      {/* ─── Hero: Azul Celeste / Rio de Janeiro ──────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #082F49 0%, #075985 30%, #0369A1 60%, #0EA5E9 85%, #38BDF8 100%)' }}>

        {/* Decorative orbs — sun & ocean */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Sun glow top-right */}
          <div className="absolute -top-20 right-10 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.22) 0%, rgba(14,165,233,0.10) 50%, transparent 70%)' }} />
          {/* Ocean depth glow bottom-left */}
          <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.20) 0%, transparent 60%)' }} />
          {/* Light shimmer top-left */}
          <div className="absolute top-40 left-40 w-48 h-48 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
          />

          {/* Wave lines — ocean feel */}
          <svg className="absolute bottom-0 left-0 right-0 w-full opacity-10" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,200 L0,200 Z" fill="white" />
            <path d="M0,120 C360,160 720,80 1080,120 C1260,140 1350,100 1440,120 L1440,200 L0,200 Z" fill="white" opacity="0.5"/>
          </svg>

          {/* Decorative circles */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-white/10 animate-spin-slow" />
          <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full border border-white/08" />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Badge className="mb-6 border-brand-400/40 text-brand-300"
                  style={{ background: 'rgba(14,165,233,0.18)', backdropFilter: 'blur(8px)' }}>
                  <Sparkles size={12} /> Plataforma Premium de Saúde Integral
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              >
                Transforme sua vida através do{' '}
                <span className="italic" style={{ background: 'linear-gradient(135deg, #BAE6FD, #FFFFFF, #A5F3FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  movimento
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
                className="text-brand-300 text-lg leading-relaxed mb-10 max-w-lg"
              >
                Pilates, saúde mental, nutrição e acompanhamento humano integrados em uma plataforma premium. Com a Gisele Neymerk, cuide do seu corpo, mente e bem-estar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Button
                  size="xl"
                  icon={<Sparkles size={18} />}
                  onClick={() => navigate('/cadastro')}
                  className="bg-white text-brand-700 hover:bg-brand-50 shadow-warm-xl text-base font-bold"
                >
                  Começar Grátis Agora
                </Button>
                <Button
                  size="xl"
                  variant="ghost"
                  icon={<Play size={18} />}
                  className="text-white hover:text-white hover:bg-white/10 border border-white/25 text-base backdrop-blur-sm"
                >
                  Ver como funciona
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-5 text-brand-300 text-sm"
              >
                {['Sem cartão de crédito', 'Cancele quando quiser', '7 dias grátis'].map(item => (
                  <div key={item} className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-400" />{item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero visual — dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Glow behind card */}
              <div className="absolute inset-0 rounded-4xl blur-2xl opacity-30"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #14B8A6)' }} />

              <div className="relative rounded-4xl overflow-hidden border border-white/20 shadow-warm-xl"
                style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)' }}>
                <div className="p-6">
                  {/* Topbar */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }}>
                      <span className="text-white font-serif font-bold text-sm">G</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-brand-900">Bom dia, Ana! 🌅</div>
                      <div className="text-[10px] text-brand-500">Sua jornada hoje</div>
                    </div>
                    <div className="ml-auto">
                      <Badge variant="info" size="sm">🔥 12 dias</Badge>
                    </div>
                  </div>

                  {/* Progress ring */}
                  <div className="rounded-3xl p-5 mb-4" style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' }}>
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <svg viewBox="0 0 80 80" className="-rotate-90 w-20 h-20">
                          <circle cx="40" cy="40" r="32" fill="none" stroke="#BFDBFE" strokeWidth="8" />
                          <circle cx="40" cy="40" r="32" fill="none" stroke="#3B82F6" strokeWidth="8"
                            strokeDasharray="201" strokeDashoffset="50" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-bold text-brand-700">75%</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-brand-900">Meta diária</div>
                        <div className="text-xs text-brand-500 mt-0.5">45/60 minutos</div>
                        <div className="mt-2 flex gap-2">
                          <Badge variant="info" size="sm">🧘 3 aulas</Badge>
                          <Badge variant="success" size="sm">✨ 850 pts</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Classes */}
                  <div className="text-xs font-semibold text-brand-600 mb-3">Próximas aulas</div>
                  {[
                    { title: 'Pilates Terapêutico', time: '09:00', duration: '45min', icon: '🧘' },
                    { title: 'Meditação Matinal',   time: '10:00', duration: '15min', icon: '🧠' },
                    { title: 'Pilates Funcional',   time: '18:00', duration: '50min', icon: '💪' },
                  ].map(cls => (
                    <div key={cls.title} className="flex items-center gap-3 p-3 rounded-xl mb-2 border"
                      style={{ background: '#F8FAFF', borderColor: '#DBEAFE' }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
                        style={{ background: '#EFF6FF' }}>{cls.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-brand-900 truncate">{cls.title}</div>
                        <div className="text-[10px] text-brand-500">{cls.time} · {cls.duration}</div>
                      </div>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: '#3B82F6' }}>
                        <Play size={8} fill="white" className="text-white ml-0.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge — rating */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-1/4 bg-white rounded-2xl px-4 py-3 shadow-warm-xl border border-brand-100"
              >
                <div className="flex items-center gap-2">
                  <div className="text-xl">⭐</div>
                  <div>
                    <div className="text-xs font-bold text-brand-900">4.9/5</div>
                    <div className="text-[10px] text-brand-500">50k+ alunas</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — IA */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-4 bottom-1/4 rounded-2xl px-4 py-3 shadow-warm-xl"
                style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)' }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-brand-300" />
                  <div>
                    <div className="text-xs font-bold text-white">Gisele IA</div>
                    <div className="text-[10px] text-brand-300">Online agora</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom wave — cream/white */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0,60 C360,100 720,20 1440,80 L1440,100 L0,100 Z" fill="#F8FBFF" />
          </svg>
        </div>
      </section>

      {/* ─── Stats ──────────────────────────────────────────────────────────── */}
      <section className="py-12" style={{ backgroundColor: '#F8FAFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(stat => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-brand-700">{stat.value}</div>
                <div className="text-sm text-brand-500 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </FadeSection>
        </div>
      </section>

      {/* ─── About Gisele ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <motion.div variants={fadeUp} className="relative">
                <div className="relative rounded-4xl overflow-hidden aspect-[4/5]"
                  style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ background: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)' }}>
                        <span className="text-5xl font-serif font-bold text-brand-700">G</span>
                      </div>
                      <div className="text-brand-500 text-sm font-medium">Foto da Gisele</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-warm-xl border border-brand-100">
                  <div className="text-xs font-semibold text-brand-700 mb-1">Formação</div>
                  <div className="text-xs text-brand-500">Educação Física • UFRJ</div>
                  <div className="text-xs text-brand-500">Pós-graduada em Psicanálise</div>
                </div>
                <div className="absolute -top-4 -left-4 rounded-2xl p-4 shadow-warm-xl"
                  style={{ background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)' }}>
                  <div className="text-xs font-semibold text-brand-100 mb-1">Especialidades</div>
                  <div className="text-xs text-brand-300">Pilates · Bem-estar Mental</div>
                  <div className="text-xs text-brand-300">Movimento Terapêutico</div>
                </div>
              </motion.div>
            </FadeSection>

            <FadeSection>
              <motion.div variants={fadeUp}>
                <Badge variant="info" className="mb-6">Sobre a Fundadora</Badge>
                <h2 className="section-title mb-6">
                  Especialista em corpo, mente e{' '}
                  <span className="italic text-brand-600">qualidade de vida</span>
                </h2>
                <p className="text-brand-600 leading-relaxed mb-6">
                  Graduada em Educação Física pela UFRJ e pós-graduada em Psicanálise, Gisele Neymerk une ciência, movimento e cuidado humano em uma abordagem única que transforma vidas.
                </p>
                <p className="text-brand-600 leading-relaxed mb-8">
                  Com anos de experiência e uma capacidade única de acolhimento, Gisele criou uma plataforma que vai além do exercício: é um ecossistema completo de saúde integral.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: '🎓', title: 'Educação Física', sub: 'UFRJ — Graduação' },
                    { icon: '🧠', title: 'Psicanálise', sub: 'Pós-graduação' },
                    { icon: '🧘', title: 'Pilates', sub: 'Especialista certificada' },
                    { icon: '❤️', title: 'Wellness', sub: '+10 anos de experiência' },
                  ].map(item => (
                    <div key={item.title} className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: '#EFF6FF' }}>
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-brand-900">{item.title}</div>
                        <div className="text-xs text-brand-500">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button size="lg" icon={<ArrowRight size={16} />} iconPosition="right" onClick={() => navigate('/cadastro')}>
                  Começar com Gisele
                </Button>
              </motion.div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── Features ───────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <Badge variant="info" className="mb-4">Plataforma Completa</Badge>
              <h2 className="section-title mb-4">Tudo que você precisa para</h2>
              <h2 className="section-title text-brand-600 italic mb-6">uma vida em equilíbrio</h2>
              <p className="section-subtitle mx-auto">Seis módulos integrados que cobrem cada aspecto da sua saúde integral.</p>
            </motion.div>
          </FadeSection>
          <FadeSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(feature => (
              <motion.div key={feature.title} variants={fadeUp}>
                <Card hover className="h-full group bg-white border-brand-100">
                  <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <feature.icon size={22} className={feature.iconColor} />
                  </div>
                  <Badge variant="info" size="sm" className="mb-3">{feature.badge}</Badge>
                  <h3 className="text-lg font-semibold text-brand-900 mb-3">{feature.title}</h3>
                  <p className="text-brand-500 text-sm leading-relaxed">{feature.description}</p>
                  <div className="mt-5 flex items-center gap-2 text-brand-600 text-sm font-medium group-hover:gap-3 transition-all">
                    Explorar <ChevronRight size={14} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </FadeSection>
        </div>
      </section>

      {/* ─── Modules ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <h2 className="section-title mb-4"><span className="italic text-brand-600">500+</span> conteúdos premium</h2>
              <p className="section-subtitle mx-auto">Biblioteca em constante crescimento para cada fase da sua jornada.</p>
            </motion.div>
          </FadeSection>
          <FadeSection className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {modules.map(mod => (
              <motion.div key={mod.title} variants={fadeUp}
                whileHover={{ scale: 1.04, y: -4 }}
                className="rounded-2xl p-5 text-center cursor-pointer border border-brand-100 hover:shadow-warm-lg transition-all"
                style={{ backgroundColor: mod.color }}>
                <div className="text-3xl mb-3">{mod.icon}</div>
                <div className="text-sm font-semibold text-brand-900">{mod.title}</div>
                <div className="text-xs text-brand-500 mt-1">{mod.count}</div>
              </motion.div>
            ))}
          </FadeSection>
        </div>
      </section>

      {/* ─── Gisele IA ──────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0C1A3D 0%, #0F2A6B 35%, #1E3A8A 65%, #1D4ED8 85%, #3B82F6 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 60%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <motion.div variants={fadeUp}>
                <Badge className="mb-6 border-brand-400/40 text-brand-200"
                  style={{ background: 'rgba(168,85,247,0.18)', backdropFilter: 'blur(8px)' }}>
                  <Sparkles size={12} /> IA Exclusiva
                </Badge>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Conheça a{' '}
                  <span className="italic" style={{ background: 'linear-gradient(135deg, #DBEAFE, #FFFFFF, #93C5FD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Gisele IA
                  </span>
                </h2>
                <p className="text-brand-200 text-lg leading-relaxed mb-8">
                  Sua personal trainer, professora de pilates, coach comportamental e assistente nutricional em um só lugar. Disponível 24/7, personalizada para você.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: '💪', title: 'Personal Trainer', desc: 'Treinos adaptados' },
                    { icon: '🧘', title: 'Prof. de Pilates', desc: 'Correção postural' },
                    { icon: '🧠', title: 'Coach Mental', desc: 'Suporte emocional' },
                    { icon: '🥗', title: 'Nutrição', desc: 'Orientação alimentar' },
                  ].map(item => (
                    <div key={item.title} className="flex items-start gap-3 p-4 rounded-2xl"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-brand-100">{item.title}</div>
                        <div className="text-xs text-brand-300">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button size="lg" icon={<Sparkles size={16} />} onClick={() => navigate('/cadastro')}
                  className="bg-white text-brand-700 hover:bg-brand-50 font-bold">
                  Experimentar Gisele IA
                </Button>
              </motion.div>
            </FadeSection>

            {/* AI Chat mockup */}
            <FadeSection>
              <motion.div variants={fadeUp}>
                <div className="rounded-4xl p-6 shadow-warm-xl"
                  style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)' }}>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-100">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-warm"
                      style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }}>
                      <Sparkles size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-900 text-sm">Gisele IA</div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs text-brand-500">Online agora</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }}>
                        <Sparkles size={12} className="text-white" />
                      </div>
                      <div className="px-4 py-3 max-w-[80%] rounded-2xl rounded-tl-none text-sm text-brand-800"
                        style={{ background: '#EFF6FF' }}>
                        Olá, Ana! Percebi que você não fez pilates ontem. Como você está se sentindo hoje? 🌊
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="px-4 py-3 max-w-[80%] rounded-2xl rounded-tr-none text-sm text-white"
                        style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)' }}>
                        Estou com a coluna doendo um pouco depois de um dia longo no trabalho
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }}>
                        <Sparkles size={12} className="text-white" />
                      </div>
                      <div className="px-4 py-3 max-w-[80%] rounded-2xl rounded-tl-none text-sm text-brand-800"
                        style={{ background: '#EFF6FF' }}>
                        Preparei uma sequência especial de pilates terapêutico para coluna — 20 minutos suaves que vão te aliviar. Quer começar? 💙
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <input type="text" placeholder="Fale com a Gisele IA..." readOnly
                      className="flex-1 px-4 py-3 rounded-2xl border border-brand-200 text-sm text-brand-700 outline-none"
                      style={{ background: '#EFF6FF' }} />
                    <button className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-warm"
                      style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }}>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ───────────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <Badge variant="info" className="mb-4">Depoimentos</Badge>
              <h2 className="section-title mb-4">Vidas transformadas pela</h2>
              <h2 className="section-title italic text-brand-600 mb-6">plataforma Gisele Neymerk</h2>
            </motion.div>
          </FadeSection>
          <FadeSection className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <motion.div key={t.name} variants={fadeUp}>
                <Card className="h-full bg-white border-brand-100">
                  <div className="flex items-center gap-1 mb-4">
                    {Array(t.stars).fill(0).map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-brand-700 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }}>
                      {t.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-brand-900">{t.name}</div>
                      <div className="text-xs text-brand-500">{t.role}</div>
                    </div>
                    <Badge variant="info" size="sm">{t.badge}</Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </FadeSection>
        </div>
      </section>

      {/* ─── Platforms ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <motion.div variants={fadeUp} className="text-brand-600 font-semibold text-sm">
              Disponível em todas as plataformas
            </motion.div>
            {[
              { icon: Globe, label: 'Web App' },
              { icon: Smartphone, label: 'iOS & Android' },
              { icon: Tv2, label: 'Smart TV' },
            ].map(({ icon: Icon, label }) => (
              <motion.div key={label} variants={fadeUp} className="flex items-center gap-2 text-brand-600">
                <Icon size={20} />
                <span className="text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </FadeSection>
        </div>
      </section>

      {/* ─── Pricing ────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <Badge variant="info" className="mb-4">Planos</Badge>
              <h2 className="section-title mb-4">Invista na sua saúde</h2>
              <p className="section-subtitle mx-auto">Planos flexíveis para cada fase da sua jornada. Comece grátis, evolua quando quiser.</p>
            </motion.div>
          </FadeSection>

          <FadeSection className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-start">
            {PLANS.map(plan => (
              <motion.div key={plan.id} variants={fadeUp}>
                <div className={`relative rounded-3xl border p-6 h-full flex flex-col ${
                  plan.highlight
                    ? 'border-brand-400 text-white shadow-warm-xl scale-105'
                    : 'bg-white border-brand-100 shadow-warm'
                }`}
                  style={plan.highlight ? { background: 'linear-gradient(160deg, #172554, #1E40AF, #2563EB)' } : {}}>
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className={plan.highlight ? 'bg-white text-brand-700 border-0' : 'bg-brand-600 text-white border-0'} size="sm">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <div className="mb-4">
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${plan.highlight ? 'text-brand-300' : 'text-brand-500'}`}>
                      {plan.name}
                    </div>
                    <div className="flex items-end gap-1 mb-1">
                      {plan.price === 0 ? (
                        <span className={`text-3xl font-bold font-serif ${plan.highlight ? 'text-white' : 'text-brand-900'}`}>Grátis</span>
                      ) : (
                        <>
                          <span className={`text-sm ${plan.highlight ? 'text-brand-300' : 'text-brand-500'}`}>R$</span>
                          <span className={`text-3xl font-bold font-serif ${plan.highlight ? 'text-white' : 'text-brand-900'}`}>
                            {plan.price.toFixed(2).replace('.', ',')}
                          </span>
                          <span className={`text-sm mb-1 ${plan.highlight ? 'text-brand-300' : 'text-brand-500'}`}>/mês</span>
                        </>
                      )}
                    </div>
                    <p className={`text-xs mt-1 ${plan.highlight ? 'text-brand-300' : 'text-brand-500'}`}>{plan.description}</p>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs">
                        <Check size={13} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-500'}`} />
                        <span className={plan.highlight ? 'text-brand-300' : 'text-brand-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlight ? 'primary' : 'secondary'} fullWidth size="md"
                    onClick={() => navigate('/cadastro')}
                    className={plan.highlight ? 'bg-white text-brand-700 hover:bg-brand-50 font-bold' : ''}
                  >
                    {plan.price === 0 ? 'Começar grátis' : 'Assinar agora'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </FadeSection>

          <FadeSection className="text-center mt-8">
            <motion.p variants={fadeUp} className="text-brand-500 text-sm">
              Todos os planos incluem 7 dias gratuitos. Sem cartão de crédito para começar.
            </motion.p>
          </FadeSection>
        </div>
      </section>

      {/* ─── CTA Final ──────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #082F49 0%, #0369A1 50%, #38BDF8 100%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 60%)' }} />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <FadeSection>
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Sua transformação começa{' '}
                <span className="italic" style={{ background: 'linear-gradient(135deg, #BAE6FD, #FFFFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  hoje
                </span>
              </h2>
              <p className="text-brand-300 text-lg leading-relaxed mb-10">
                Junte-se a mais de 50.000 mulheres que já transformaram sua saúde, postura e bem-estar com a plataforma Gisele Neymerk.
              </p>
              <Button size="xl" icon={<Sparkles size={18} />} onClick={() => navigate('/cadastro')}
                className="bg-white text-brand-700 hover:bg-brand-50 shadow-warm-xl text-base font-bold">
                Começar Minha Jornada
              </Button>
              <div className="flex items-center justify-center gap-6 mt-8 text-brand-300 text-sm">
                {['7 dias grátis', 'Sem cartão', 'Cancele quando quiser'].map(item => (
                  <div key={item} className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-400" />{item}
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
