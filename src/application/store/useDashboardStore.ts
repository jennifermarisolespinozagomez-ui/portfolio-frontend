import { create } from 'zustand'
import { DashboardStats } from '@/domain/entities/Dashboard'
import { DashboardRepository } from '@/infrastructure/repositories/DashboardRepository'
import { GetDashboardStatsUseCase } from '../useCases/GetDashboardStatsUseCase'

interface DashboardState {
  stats: DashboardStats | null
  loading: boolean
  error: string | null
  fetchStats: () => Promise<void>
}

const dashboardRepository = new DashboardRepository()
const getDashboardStatsUseCase = new GetDashboardStatsUseCase(dashboardRepository)

export const useDashboardStore = create<DashboardState>((set) => ({
  stats: null,
  loading: false,
  error: null,

  fetchStats: async () => {
    set({ loading: true, error: null })
    try {
      const stats = await getDashboardStatsUseCase.execute()
      set({ stats, loading: false })
    } catch (error) {
      set({ error: 'Error al cargar estadísticas', loading: false })
    }
  },
}))
