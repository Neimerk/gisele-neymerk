import { Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sidebar } from './Sidebar'
import { useAppStore } from '@/stores/appStore'
import { AIChat } from '@/components/ai/AIChat'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export function DashboardLayout() {
  const { sidebarOpen, aiChatOpen, toggleAIChat } = useAppStore()

  return (
    <div className="min-h-screen bg-cream-50 flex">
      <Sidebar />

      <main
        className={cn(
          'flex-1 transition-all duration-250 ease-in-out min-h-screen',
          sidebarOpen ? 'ml-64' : 'ml-[72px]',
        )}
      >
        <div className="p-6 md:p-8 max-w-7xl">
          <Outlet />
        </div>
      </main>

      {/* Floating AI button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleAIChat}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-warm-xl hover:shadow-glow flex items-center justify-center transition-shadow"
      >
        <Sparkles size={22} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
      </motion.button>

      {/* AI Chat drawer */}
      <AnimatePresence>
        {aiChatOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-[420px] bg-cream-50 border-l border-cream-200 shadow-warm-xl"
          >
            <AIChat onClose={() => toggleAIChat()} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
