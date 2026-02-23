import { IProjectRepository } from '@/domain/repositories/IProjectRepository'
import { Project } from '@/domain/entities/Project'

export class GetAllProjectsUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(): Promise<Project[]> {
    return await this.projectRepository.getAll()
  }
}
