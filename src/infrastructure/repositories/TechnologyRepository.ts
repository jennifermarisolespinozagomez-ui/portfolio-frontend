import { ITechnologyRepository } from '@/domain/repositories/ITechnologyRepository'
import { Technology } from '@/domain/entities/Project'
import { apiClient } from '../api/apiClient'

export class TechnologyRepository implements ITechnologyRepository {
  async getAll(): Promise<Technology[]> {
    const response = await apiClient.get<Technology[]>('/Technologies')
    return response.data
  }

  async getByCategory(category: string): Promise<Technology[]> {
    const response = await apiClient.get<Technology[]>(`/technologies/category/${category}`)
    return response.data
  }
}
