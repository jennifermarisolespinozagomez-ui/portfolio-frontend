import { Experience } from '../entities/Experience'

export interface IExperienceRepository {
  getAll(): Promise<Experience[]>
  getById(id: number): Promise<Experience>
}
