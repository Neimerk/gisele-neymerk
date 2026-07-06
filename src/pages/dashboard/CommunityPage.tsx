import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Plus, Trophy, Users, Video, Flame, Search } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { Input } from '@/components/ui/Input'
import { formatRelativeTime } from '@/lib/utils'

const posts = [
  {
    id: '1',
    author: { name: 'Maria Fernanda Costa', avatar: undefined },
    content: 'Completei meu desafio de 30 dias de pilates! 🎉 Foram 30 dias de dedicação, e os resultados foram incríveis. Perdi 4cm na cintura, minha postura melhorou muito e a ansiedade reduziu significativamente. Obrigada Gisele por toda a orientação! 🙏',
    likes: 142, comments: 28, isLiked: true,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    tags: ['Pilates', 'Desafio30Dias', 'Transformação'],
    badge: '🏆 Desafio Concluído',
  },
  {
    id: '2',
    author: { name: 'Ana Luiza Santos', avatar: undefined },
    content: 'Acabei de fazer minha primeira aula de pilates terapêutico para a coluna e já sinto diferença! A Gisele tem um jeito incrível de explicar cada movimento. Quem mais está começando agora? 💪',
    likes: 89, comments: 45, isLiked: false,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    tags: ['PilatesTerapêutico', 'Iniciante', 'Coluna'],
    badge: null,
  },
  {
    id: '3',
    author: { name: 'Roberta Oliveira', avatar: undefined },
    content: 'Dica da semana: combinar a aula de pilates respiratório com a meditação matinal mudou minha rotina! Acordo mais descansada e levo muito mais calma para o trabalho. Recomendo demais! ✨',
    likes: 207, comments: 63, isLiked: true,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    tags: ['DicaDaSemana', 'Mindfulness', 'Rotina'],
    badge: null,
  },
]

const challenges = [
  {
    id: '1', title: 'Desafio 30 Dias — Postura', participants: 2847, daysLeft: 12,
    emoji: '🧘', color: 'bg-brand-50 border-brand-200', progress: 60,
    isJoined: true, reward: 'Medalha de Postura',
  },
  {
    id: '2', title: 'Semana Anti-Ansiedade', participants: 1523, daysLeft: 5,
    emoji: '🌊', color: 'bg-blue-50 border-blue-200', progress: 71,
    isJoined: false, reward: 'Badge Equilíbrio Mental',
  },
  {
    id: '3', title: 'Hidratação de 30 Dias', participants: 4201, daysLeft: 18,
    emoji: '💧', color: 'bg-cyan-50 border-cyan-200', progress: 40,
    isJoined: false, reward: 'Medalha Hidratação',
  },
]

const liveEvents = [
  { title: 'Pilates ao Vivo — Força e Postura', time: 'Hoje · 19h00', instructor: 'Gisele Neymerk', viewers: 340 },
  { title: 'Meditação Coletiva Semanal', time: 'Terça · 07h30', instructor: 'Gisele Neymerk', viewers: 0 },
  { title: 'Q&A com Gisele — Saúde Mental', time: 'Quinta · 20h00', instructor: 'Gisele Neymerk', viewers: 0 },
]

const stagger = { visible: { transition: { staggerChildren: 0.07 } } }
const fadeUp  = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function CommunityPage() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set(['1', '3']))

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const next = new Set(prev)
      next.has(postId) ? next.delete(postId) : next.add(postId)
      return next
    })
  }

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={fadeUp} className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-brand-900">Comunidade</h1>
          <p className="text-brand-500 mt-1 text-sm">Conecte-se com 10.000+ membros · Desafios · Lives</p>
        </div>
        <Button icon={<Plus size={14} />}>Publicar</Button>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Feed */}
        <div className="lg:col-span-2 space-y-5">
          {/* New post */}
          <motion.div variants={fadeUp}>
            <Card>
              <div className="flex gap-3">
                <Avatar name="Ana Silva" size="md" />
                <button className="flex-1 text-left px-4 py-3 rounded-2xl bg-cream-100 border border-cream-200 text-sm text-brand-400 hover:bg-cream-200 transition-colors">
                  Compartilhe sua conquista ou dica de bem-estar... 🌿
                </button>
              </div>
            </Card>
          </motion.div>

          {/* Posts */}
          {posts.map(post => (
            <motion.div key={post.id} variants={fadeUp}>
              <Card>
                <div className="flex items-start gap-3 mb-4">
                  <Avatar name={post.author.name} size="md" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-brand-900">{post.author.name}</span>
                      {post.badge && <Badge variant="brand" size="sm">{post.badge}</Badge>}
                    </div>
                    <div className="text-xs text-brand-400">{formatRelativeTime(post.createdAt)}</div>
                  </div>
                </div>

                <p className="text-brand-700 text-sm leading-relaxed mb-4">{post.content}</p>

                {post.tags.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap mb-4">
                    {post.tags.map(t => (
                      <span key={t} className="text-xs text-brand-500 hover:text-brand-700 cursor-pointer">#{t}</span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 pt-3 border-t border-cream-100">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 text-sm transition-colors ${
                      likedPosts.has(post.id) ? 'text-rose-500' : 'text-brand-400 hover:text-rose-500'
                    }`}
                  >
                    <Heart size={16} className={likedPosts.has(post.id) ? 'fill-rose-500' : ''} />
                    <span>{post.likes + (likedPosts.has(post.id) && !post.isLiked ? 1 : !likedPosts.has(post.id) && post.isLiked ? -1 : 0)}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-brand-400 hover:text-brand-700 transition-colors">
                    <MessageCircle size={16} />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-brand-400 hover:text-brand-700 transition-colors ml-auto">
                    <Share2 size={16} />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Right: Lives, Challenges */}
        <motion.div variants={fadeUp} className="space-y-6">
          {/* Live events */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <h2 className="font-semibold text-brand-900">Aulas Ao Vivo</h2>
            </div>
            <div className="space-y-3">
              {liveEvents.map((ev, i) => (
                <div key={ev.title} className={`p-3 rounded-2xl ${i === 0 ? 'bg-red-50 border border-red-200' : 'bg-cream-50 border border-cream-200'}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-brand-900">{ev.title}</div>
                      <div className="text-xs text-brand-500 mt-0.5">{ev.time}</div>
                    </div>
                    {i === 0 ? (
                      <Badge variant="danger" size="sm">AO VIVO</Badge>
                    ) : (
                      <Video size={14} className="text-brand-400" />
                    )}
                  </div>
                  {i === 0 && (
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-red-600">{ev.viewers} assistindo</span>
                      <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-lg" icon={<Video size={11} />}>
                        Entrar
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Challenges */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={16} className="text-amber-500" />
              <h2 className="font-semibold text-brand-900">Desafios ativos</h2>
            </div>
            <div className="space-y-3">
              {challenges.map(ch => (
                <div key={ch.id} className={`p-3 rounded-2xl border ${ch.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{ch.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-brand-900">{ch.title}</div>
                      <div className="flex items-center gap-2 text-xs text-brand-500 mt-0.5">
                        <Users size={11} /> {ch.participants.toLocaleString('pt-BR')}
                        <Flame size={11} className="text-amber-400" /> {ch.daysLeft} dias restantes
                      </div>
                      {ch.isJoined && (
                        <div className="mt-2 h-1.5 bg-white rounded-full overflow-hidden">
                          <div className="h-full bg-brand-600 rounded-full" style={{ width: `${ch.progress}%` }} />
                        </div>
                      )}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant={ch.isJoined ? 'secondary' : 'primary'}
                    fullWidth
                    className="mt-3"
                  >
                    {ch.isJoined ? 'Continuar desafio' : 'Participar'}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Ranking */}
          <Card className="bg-gradient-to-br from-amber-50 to-cream-50">
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={16} className="text-amber-500" />
              <h2 className="font-semibold text-brand-900">Ranking semanal</h2>
            </div>
            {[
              { pos: 1, name: 'Maria F.', pts: 2840, me: false },
              { pos: 2, name: 'Roberta O.', pts: 2650, me: false },
              { pos: 3, name: 'Ana L.', pts: 2310, me: false },
              { pos: 8, name: 'Você', pts: 1920, me: true },
            ].map((u) => (
              <div key={u.pos} className={`flex items-center gap-3 py-2 border-b border-cream-200/50 last:border-0 ${u.me ? 'bg-brand-50 rounded-xl px-2' : ''}`}>
                <span className="text-sm font-bold text-brand-500 w-5">#{u.pos}</span>
                <span className="text-sm font-medium text-brand-800 flex-1">{u.name}</span>
                <span className="text-xs font-semibold text-amber-600">{u.pts.toLocaleString('pt-BR')} pts</span>
              </div>
            ))}
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
