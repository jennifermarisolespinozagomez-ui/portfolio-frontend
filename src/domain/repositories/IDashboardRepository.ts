import { DashboardStats } from '../entities/Dashboard'

export interface IDashboardRepository {
  getStats(): Promise<DashboardStats>
}
