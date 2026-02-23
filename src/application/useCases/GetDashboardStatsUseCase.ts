import { IDashboardRepository } from '@/domain/repositories/IDashboardRepository'
import { DashboardStats } from '@/domain/entities/Dashboard'

export class GetDashboardStatsUseCase {
  constructor(private dashboardRepository: IDashboardRepository) {}

  async execute(): Promise<DashboardStats> {
    return await this.dashboardRepository.getStats()
  }
}
