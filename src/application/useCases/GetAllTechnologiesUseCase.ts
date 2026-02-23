import { ITechnologyRepository } from '@/domain/repositories/ITechnologyRepository'
import { Technology } from '@/domain/entities/Project'

export class GetAllTechnologiesUseCase {
  constructor(private technologyRepository: ITechnologyRepository) {}

  async execute(): Promise<Technology[]> {
    return await this.technologyRepository.getAll()
  }
}
