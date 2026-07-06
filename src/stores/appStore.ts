import { create } from 'zustand'

interface AppState {
  sidebarOpen: boolean
  aiChatOpen: boolean
  theme: 'light' | 'dark'
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  toggleAIChat: () => void
  setAIChatOpen: (open: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  aiChatOpen: false,
  theme: 'light',

  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleAIChat: () => set((s) => ({ aiChatOpen: !s.aiChatOpen })),
  setAIChatOpen: (open) => set({ aiChatOpen: open }),
}))
