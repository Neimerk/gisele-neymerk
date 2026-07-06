import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Sparkles, ArrowLeft } from 'lucide-react'
import { useAuthStore, DEMO_USER } from '@/stores/authStore'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, setLoading, isLoading } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    login(DEMO_USER)
    toast.success('Bem-vinda de volta, Ana! 🌿')
    navigate('/dashboard')
  }

  const handleDemo = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    login(DEMO_USER)
    toast.success('Entrando no modo demo... 🌿')
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative"
      style={{ background: 'linear-gradient(160deg, #082F49 0%, #075985 35%, #0369A1 65%, #0EA5E9 100%)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-10 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 60%)' }} />
        <div className="absolute -bottom-20 left-10 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 60%)' }} />
      </div>

      <div className="w-full max-w-md relative">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center gap-2 text-brand-300 hover:text-white mb-8 transition-colors text-sm">
          <ArrowLeft size={16} /> Voltar ao início
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-warm-xl">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-warm"
                style={{ background: 'linear-gradient(135deg, #6366F1, #3730A3)' }}>
                <span className="text-white font-serif font-bold text-2xl">G</span>
              </div>
              <h1 className="font-serif text-2xl font-bold text-brand-900">Bem-vinda de volta</h1>
              <p className="text-brand-500 text-sm mt-2">Continue sua jornada de saúde integral</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <div className="relative">
                <Input
                  label="Senha"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Sua senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 bottom-3 text-brand-400 hover:text-brand-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <div className="flex justify-end">
                <Link to="/recuperar-senha" className="text-xs text-brand-500 hover:text-brand-700 transition-colors">
                  Esqueci minha senha
                </Link>
              </div>

              <Button type="submit" fullWidth size="lg" loading={isLoading}>
                Entrar na plataforma
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-brand-100" />
              </div>
              <div className="relative flex justify-center text-xs text-brand-400 bg-white px-4">ou</div>
            </div>

            <Button
              variant="secondary"
              fullWidth
              size="lg"
              icon={<Sparkles size={16} className="text-brand-600" />}
              onClick={handleDemo}
              loading={isLoading}
            >
              Entrar no modo demo
            </Button>

            <p className="text-center text-sm text-brand-500 mt-6">
              Não tem conta?{' '}
              <Link to="/cadastro" className="text-brand-700 font-semibold hover:text-brand-900 transition-colors">
                Começar grátis
              </Link>
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
