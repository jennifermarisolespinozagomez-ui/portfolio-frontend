export interface Project {
  id: number
  title: string
  description: string
  semester: number
  type: string
  imageUrl: string
  technologies: Technology[]
  hoursInvested: number
  githubUrl?: string
  liveUrl?: string
  createdAt: string
}

export interface Technology {
  id: number
  name: string
  category: TechnologyCategory
  yearsOfExperience: number
  iconUrl?: string
}

export enum TechnologyCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Database = 'Database',
  DevOps = 'DevOps'
}
