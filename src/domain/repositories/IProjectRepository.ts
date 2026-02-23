import { Project } from '../entities/Project'

export interface IProjectRepository {
  getAll(): Promise<Project[]>
  getById(id: number): Promise<Project>
  getBySemester(semester: number): Promise<Project[]>
  getByType(type: string): Promise<Project[]>
}
