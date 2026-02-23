import { IExperienceRepository } from '@/domain/repositories/IExperienceRepository'
import { Experience } from '@/domain/entities/Experience'
import { apiClient } from '../api/apiClient'

export class ExperienceRepository implements IExperienceRepository {
  async getAll(): Promise<Experience[]> {
    const response = await apiClient.get<Experience[]>('/Experience')
    return response.data
  }

  async getById(id: number): Promise<Experience> {
    const response = await apiClient.get<Experience>(`/Experience/${id}`)
    return response.data
  }
}
