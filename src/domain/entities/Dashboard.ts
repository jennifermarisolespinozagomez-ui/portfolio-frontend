export interface DashboardStats {
  totalProjects: number
  totalHours: number
  totalTechnologies: number
  completedSemesters: number
  projectsBySemester: ProjectBySemester[]
  topTechnologies: TechnologyUsage[]
  hoursBySemester: HoursBySemester[]
  projectsByType: ProjectByType[]
}

export interface ProjectBySemester {
  semester: number
  count: number
}

export interface TechnologyUsage {
  name: string
  count: number
  percentage: number
}

export interface HoursBySemester {
  semester: number
  hours: number
}

export interface ProjectByType {
  type: string
  count: number
  percentage: number
}
