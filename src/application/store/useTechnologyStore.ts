import { create } from 'zustand'
import { Technology, TechnologyCategory } from '@/domain/entities/Project'

const staticTechnologies: Technology[] = [
  { id: 1, name: 'React', category: TechnologyCategory.Frontend, yearsOfExperience: 2 },
  { id: 2, name: 'TypeScript', category: TechnologyCategory.Frontend, yearsOfExperience: 2 },
  { id: 3, name: 'JavaScript', category: TechnologyCategory.Frontend, yearsOfExperience: 3 },
  { id: 4, name: 'HTML', category: TechnologyCategory.Frontend, yearsOfExperience: 3 },
  { id: 5, name: 'CSS', category: TechnologyCategory.Frontend, yearsOfExperience: 3 },
  { id: 6, name: 'Tailwind CSS', category: TechnologyCategory.Frontend, yearsOfExperience: 1 },
  { id: 7, name: 'C#', category: TechnologyCategory.Backend, yearsOfExperience: 2 },
  { id: 8, name: '.NET', category: TechnologyCategory.Backend, yearsOfExperience: 2 },
  { id: 9, name: 'Java', category: TechnologyCategory.Backend, yearsOfExperience: 2 },
  { id: 10, name: 'Python', category: TechnologyCategory.Backend, yearsOfExperience: 1 },
  { id: 11, name: 'SQL Server', category: TechnologyCategory.Database, yearsOfExperience: 2 },
  { id: 12, name: 'MySQL', category: TechnologyCategory.Database, yearsOfExperience: 2 },
  { id: 13, name: 'Git', category: TechnologyCategory.DevOps, yearsOfExperience: 2 },
]

interface TechnologyState {
  technologies: Technology[]
  loading: boolean
  error: string | null
  fetchTechnologies: () => void
  getByCategory: (category: string) => Technology[]
}

export const useTechnologyStore = create<TechnologyState>(() => ({
  technologies: staticTechnologies,
  loading: false,
  error: null,
  fetchTechnologies: () => {},
  getByCategory: (category: string) => staticTechnologies.filter(t => t.category === category),
}))
