import { Technology } from '../entities/Project'

export interface ITechnologyRepository {
  getAll(): Promise<Technology[]>
  getByCategory(category: string): Promise<Technology[]>
}
