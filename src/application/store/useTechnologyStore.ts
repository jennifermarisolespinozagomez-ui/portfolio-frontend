import { create } from 'zustand'
import { Technology } from '@/domain/entities/Project'
import { TechnologyRepository } from '@/infrastructure/repositories/TechnologyRepository'
import { GetAllTechnologiesUseCase } from '../useCases/GetAllTechnologiesUseCase'

interface TechnologyState {
  technologies: Technology[]
  loading: boolean
  error: string | null
  fetchTechnologies: () => Promise<void>
  getByCategory: (category: string) => Technology[]
}

const technologyRepository = new TechnologyRepository()
const getAllTechnologiesUseCase = new GetAllTechnologiesUseCase(technologyRepository)

export const useTechnologyStore = create<TechnologyState>((set, get) => ({
  technologies: [],
  loading: false,
  error: null,

  fetchTechnologies: async () => {
    set({ loading: true, error: null })
    try {
      const technologies = await getAllTechnologiesUseCase.execute()
      set({ technologies, loading: false })
    } catch (error) {
      set({ error: 'Error al cargar tecnologías', loading: false })
    }
  },

  getByCategory: (category: string) => {
    return get().technologies.filter(t => t.category === category)
  },
}))
