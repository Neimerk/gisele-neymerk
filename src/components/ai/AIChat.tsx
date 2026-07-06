import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Sparkles, Mic, Image, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useAuthStore } from '@/stores/authStore'
import { Avatar } from '@/components/ui/Avatar'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const suggestions = [
  'Me sugira uma aula de hoje',
  'Como está meu progresso?',
  'Tenho sentido ansiedade',
  'Dica de nutrição rápida',
]

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Olá! Sou a Gisele IA, sua assistente de saúde integral. Posso te ajudar com treinos, nutrição, saúde mental, motivação e muito mais. Como você está hoje? 🌿',
    timestamp: new Date(),
  },
]

const DEMO_RESPONSES: Record<string, string> = {
  default: 'Entendo! Baseado no seu perfil e histórico, vou te ajudar da melhor forma possível. Pode me contar mais detalhes? 💙',
  ansiedade: 'Sinto muito que você está passando por isso. A ansiedade é muito comum, e o movimento pode ser um grande aliado. Tenho uma sequência especial de pilates respiratório que pode te ajudar — são apenas 15 minutos e os resultados são incríveis. Quer que eu prepare isso para você? 🌿',
  pilates: 'Perfeito! Baseado no seu nível intermediário e objetivos de postura, sugiro hoje a aula "Pilates Terapêutico para Coluna" (45 min). Você já fez 3 aulas essa semana — está indo muito bem! 🧘 Quer que eu adicione ao seu plano de hoje?',
  progresso: 'Seus dados mostram uma evolução incrível! ✨\n\n📊 Esta semana:\n• 3 aulas de pilates concluídas\n• 135 minutos de movimento\n• Sequência de 12 dias!\n\nSua consistência está melhorando a cada semana. Continue assim! 💪',
  nutrição: 'Ótima pergunta! 🥗 Para o seu objetivo de emagrecimento e energia:\n\n• Hidrate-se bem (8 copos/dia) — você está em 6 hoje\n• Inclua proteínas em cada refeição\n• Evite longos períodos em jejum\n\nQuer que eu monte um plano alimentar personalizado para você?',
}

function getResponse(message: string): string {
  const lower = message.toLowerCase()
  if (lower.includes('ansiedad') || lower.includes('estress') || lower.includes('nervos')) return DEMO_RESPONSES.ansiedade
  if (lower.includes('pilates') || lower.includes('aula') || lower.includes('treino')) return DEMO_RESPONSES.pilates
  if (lower.includes('progress') || lower.includes('evolução') || lower.includes('resultado')) return DEMO_RESPONSES.progresso
  if (lower.includes('nutriç') || lower.includes('aliment') || lower.includes('comer') || lower.includes('dieta')) return DEMO_RESPONSES.nutrição
  return DEMO_RESPONSES.default
}

interface AIChatProps {
  onClose: () => void
}

export function AIChat({ onClose }: AIChatProps) {
  const { user } = useAuthStore()
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const sendMessage = async (text: string = input.trim()) => {
    if (!text) return
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text, timestamp: new Date() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)
    await new Promise(r => setTimeout(r, 1200 + Math.random() * 800))
    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: getResponse(text),
      timestamp: new Date(),
    }
    setIsTyping(false)
    setMessages(prev => [...prev, aiMsg])
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-5 border-b border-brand-100 flex-shrink-0">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-warm">
          <Sparkles size={16} className="text-cream-50" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-brand-900">Gisele IA</div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs text-brand-500">Personal trainer · Coach · Nutricionista</span>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-xl hover:bg-brand-50 text-brand-400 hover:text-brand-700 transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={cn('flex gap-3', msg.role === 'user' && 'justify-end')}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-brand-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles size={12} className="text-cream-50" />
                </div>
              )}
              <div
                className={cn(
                  'max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed',
                  msg.role === 'assistant'
                    ? 'bg-brand-50 text-brand-800 rounded-tl-none'
                    : 'bg-brand-700 text-cream-50 rounded-tr-none',
                )}
              >
                {msg.content.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < msg.content.split('\n').length - 1 && <br />}</span>
                ))}
              </div>
              {msg.role === 'user' && (
                <Avatar name={user?.name} size="sm" className="mt-1 flex-shrink-0" />
              )}
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-brand-700 flex items-center justify-center flex-shrink-0">
                <Sparkles size={12} className="text-cream-50" />
              </div>
              <div className="bg-brand-50 rounded-2xl rounded-tl-none px-4 py-3">
                <div className="flex gap-1.5 items-center h-5">
                  {[0, 1, 2].map(i => (
                    <motion.span
                      key={i}
                      className="w-2 h-2 rounded-full bg-brand-400"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
          {suggestions.map(s => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs text-brand-700 whitespace-nowrap hover:bg-brand-50 hover:border-brand-200 transition-colors flex-shrink-0"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-brand-100 flex-shrink-0">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
              placeholder="Fale com a Gisele IA..."
              className="w-full px-4 py-3 pr-10 rounded-2xl border border-cream-300 bg-brand-50 text-sm text-brand-900 placeholder-brand-400 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 hover:text-brand-600 transition-colors">
              <Mic size={15} />
            </button>
          </div>
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || isTyping}
            className="w-10 h-10 rounded-2xl bg-brand-700 flex items-center justify-center text-white hover:bg-brand-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-warm"
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
