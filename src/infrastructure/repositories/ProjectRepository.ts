import { IProjectRepository } from '@/domain/repositories/IProjectRepository'
import { Project } from '@/domain/entities/Project'
import { apiClient } from '../api/apiClient'

export class ProjectRepository implements IProjectRepository {
  async getAll(): Promise<Project[]> {
    const response = await apiClient.get<Project[]>('/Projects')
    return response.data
  }

  async getById(id: number): Promise<Project> {
    const response = await apiClient.get<Project>(`/Projects/${id}`)
    return response.data
  }

  async getBySemester(semester: number): Promise<Project[]> {
    const response = await apiClient.get<Project[]>(`/projects/semester/${semester}`)
    return response.data
  }

  async getByType(type: string): Promise<Project[]> {
    const response = await apiClient.get<Project[]>(`/projects/type/${type}`)
    return response.data
  }
}
