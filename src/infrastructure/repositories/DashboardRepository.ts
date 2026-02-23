import { IDashboardRepository } from '@/domain/repositories/IDashboardRepository'
import { DashboardStats } from '@/domain/entities/Dashboard'
import { apiClient } from '../api/apiClient'

export class DashboardRepository implements IDashboardRepository {
  async getStats(): Promise<DashboardStats> {
    const response = await apiClient.get<DashboardStats>('/Dashboard/stats')
    return response.data
  }
}
