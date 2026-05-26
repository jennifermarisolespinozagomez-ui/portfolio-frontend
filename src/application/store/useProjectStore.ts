import { create } from 'zustand'
import { Project, TechnologyCategory } from '@/domain/entities/Project'

const staticProjects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Gestión de Recursos',
    description: 'Aplicación web para la gestión de recursos humanos y materiales desarrollada durante las pasantías en CNEL EP. Incluye módulos de inventario, asignación de recursos y reportes.',
    semester: 7,
    type: 'Profesional',
    imageUrl: '/images/proyecto-gestion-recursos.png',
    technologies: [
      { id: 1, name: 'React', category: TechnologyCategory.Frontend, yearsOfExperience: 1 },
      { id: 2, name: 'TypeScript', category: TechnologyCategory.Frontend, yearsOfExperience: 1 },
      { id: 3, name: 'C#', category: TechnologyCategory.Backend, yearsOfExperience: 1 },
      { id: 4, name: '.NET', category: TechnologyCategory.Backend, yearsOfExperience: 1 },
      { id: 5, name: 'SQL Server', category: TechnologyCategory.Database, yearsOfExperience: 1 },
    ],
    hoursInvested: 480,
    githubUrl: '',
    createdAt: '2024-02-01'
  }
]

interface ProjectState {
  projects: Project[]
  loading: boolean
  error: string | null
  fetchProjects: () => void
  filterBySemester: (semester: number) => Project[]
  filterByType: (type: string) => Project[]
}

export const useProjectStore = create<ProjectState>((get) => ({
  projects: staticProjects,
  loading: false,
  error: null,
  fetchProjects: () => {},
  filterBySemester: (semester: number) => staticProjects.filter(p => p.semester === semester),
  filterByType: (type: string) => staticProjects.filter(p => p.type === type),
}))
