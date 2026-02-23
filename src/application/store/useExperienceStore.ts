import { create } from 'zustand'
import { Experience } from '@/domain/entities/Experience'
import { GetAllExperiencesUseCase } from '../useCases/GetAllExperiencesUseCase'
import { ExperienceRepository } from '@/infrastructure/repositories/ExperienceRepository'

interface ExperienceState {
  experiences: Experience[]
  loading: boolean
  error: string | null
  fetchExperiences: () => Promise<void>
}

const experienceRepository = new ExperienceRepository()
const getAllExperiencesUseCase = new GetAllExperiencesUseCase(experienceRepository)

export const useExperienceStore = create<ExperienceState>((set) => ({
  experiences: [],
  loading: false,
  error: null,
  fetchExperiences: async () => {
    set({ loading: true, error: null })
    try {
      const experiences = await getAllExperiencesUseCase.execute()
      set({ experiences, loading: false })
    } catch (error) {
      set({ error: 'Error al cargar las experiencias', loading: false })
    }
  },
}))
