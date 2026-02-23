import { IExperienceRepository } from '@/domain/repositories/IExperienceRepository'
import { Experience } from '@/domain/entities/Experience'

export class GetAllExperiencesUseCase {
  constructor(private experienceRepository: IExperienceRepository) {}

  async execute(): Promise<Experience[]> {
    return await this.experienceRepository.getAll()
  }
}
