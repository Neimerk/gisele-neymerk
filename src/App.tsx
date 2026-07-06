import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'

// Pages
import LandingPage from '@/pages/LandingPage'
import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import DashboardHome from '@/pages/dashboard/DashboardHome'
import PilatesPage from '@/pages/dashboard/PilatesPage'
import MentalHealthPage from '@/pages/dashboard/MentalHealthPage'
import NutritionPage from '@/pages/dashboard/NutritionPage'
import CommunityPage from '@/pages/dashboard/CommunityPage'
import ProgressPage from '@/pages/dashboard/ProgressPage'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <>{children}</>
}

// Placeholder for pages not yet built
function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="text-6xl mb-4">🚀</div>
      <h1 className="font-serif text-2xl font-bold text-brand-900 mb-2">{title}</h1>
      <p className="text-brand-500 text-sm">Esta página está em desenvolvimento. Em breve!</p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/pilates" element={<LandingPage />} />
      <Route path="/training" element={<LandingPage />} />
      <Route path="/mental" element={<LandingPage />} />
      <Route path="/nutrition" element={<LandingPage />} />
      <Route path="/community" element={<LandingPage />} />
      <Route path="/ai" element={<LandingPage />} />

      {/* Auth */}
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/cadastro" element={<PublicRoute><RegisterPage /></PublicRoute>} />

      {/* Dashboard (protected) */}
      <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route index element={<DashboardHome />} />
        <Route path="journey"      element={<ComingSoon title="Minha Jornada" />} />
        <Route path="pilates"      element={<PilatesPage />} />
        <Route path="training"     element={<ComingSoon title="Treinamento" />} />
        <Route path="mental"       element={<MentalHealthPage />} />
        <Route path="nutrition"    element={<NutritionPage />} />
        <Route path="appointments" element={<ComingSoon title="Consultas & Agendamentos" />} />
        <Route path="community"    element={<CommunityPage />} />
        <Route path="ai"           element={<ComingSoon title="Gisele IA — Chat Completo" />} />
        <Route path="progress"     element={<ProgressPage />} />
        <Route path="profile"      element={<ComingSoon title="Meu Perfil" />} />
        <Route path="settings"     element={<ComingSoon title="Configurações" />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
