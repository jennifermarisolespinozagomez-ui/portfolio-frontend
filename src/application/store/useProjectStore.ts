import { create } from 'zustand'
import { Project } from '@/domain/entities/Project'
import { ProjectRepository } from '@/infrastructure/repositories/ProjectRepository'
import { GetAllProjectsUseCase } from '../useCases/GetAllProjectsUseCase'

interface ProjectState {
  projects: Project[]
  loading: boolean
  error: string | null
  fetchProjects: () => Promise<void>
  filterBySemester: (semester: number) => Project[]
  filterByType: (type: string) => Project[]
}

const projectRepository = new ProjectRepository()
const getAllProjectsUseCase = new GetAllProjectsUseCase(projectRepository)

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  loading: false,
  error: null,

  fetchProjects: async () => {
    set({ loading: true, error: null })
    try {
      const projects = await getAllProjectsUseCase.execute()
      set({ projects, loading: false })
    } catch (error) {
      set({ error: 'Error al cargar proyectos', loading: false })
    }
  },

  filterBySemester: (semester: number) => {
    return get().projects.filter(p => p.semester === semester)
  },

  filterByType: (type: string) => {
    return get().projects.filter(p => p.type === type)
  },
}))
