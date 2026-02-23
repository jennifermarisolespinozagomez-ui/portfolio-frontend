import { useEffect } from 'react'
import { useDashboardStore } from '@/application/store/useDashboardStore'
import { useExperienceStore } from '@/application/store/useExperienceStore'
import { useProjectStore } from '@/application/store/useProjectStore'
import { useTechnologyStore } from '@/application/store/useTechnologyStore'
import { TrendingUp, Code, Clock, Award, Briefcase } from 'lucide-react'

const DashboardPage = () => {
  const { stats, loading, fetchStats } = useDashboardStore()
  const { experiences, loading: expLoading, fetchExperiences } = useExperienceStore()
  const { projects, loading: projLoading, fetchProjects } = useProjectStore()
  const { technologies, loading: techLoading, fetchTechnologies } = useTechnologyStore()

  useEffect(() => {
    fetchStats()
    fetchExperiences()
    fetchProjects()
    fetchTechnologies()
  }, [fetchStats, fetchExperiences, fetchProjects, fetchTechnologies])

  if (loading || expLoading || projLoading || techLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-slate-900 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Cargando estadísticas...</p>
        </div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <p className="text-gray-600 text-lg">No hay datos disponibles</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <style>{`
        .glass-card {
          background: rgba(248, 250, 252, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(203, 213, 225, 0.3);
          box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
        }
        .neon-cyan {
          color: #06b6d4;
        }
        .neon-magenta {
          color: #ec4899;
        }
        .neon-purple {
          color: #a855f7;
        }
        .neon-blue {
          color: #3b82f6;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-2">
            Dashboard Académico
          </h1>
          <p className="font-light text-gray-600">Visualización de progreso académico y desarrollo profesional</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <Code className="neon-cyan" size={32} strokeWidth={1.5} />
              <span className="text-5xl font-light text-gray-900">{stats.totalProjects}</span>
            </div>
            <p className="font-light text-gray-900 text-base">Proyectos</p>
            <p className="text-xs font-light text-gray-600 mt-1">Completados</p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <TrendingUp className="neon-magenta" size={32} strokeWidth={1.5} />
              <span className="text-5xl font-light text-gray-900">{stats.totalTechnologies}</span>
            </div>
            <p className="font-light text-gray-900 text-base">Tecnologías</p>
            <p className="text-xs font-light text-gray-600 mt-1">Dominadas</p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <Clock className="neon-purple" size={32} strokeWidth={1.5} />
              <span className="text-5xl font-light text-gray-900">{stats.totalHours}</span>
            </div>
            <p className="font-light text-gray-900 text-base">Horas</p>
            <p className="text-xs font-light text-gray-600 mt-1">Invertidas</p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <Award className="neon-blue" size={32} strokeWidth={1.5} />
              <span className="text-5xl font-light text-gray-900">{stats.completedSemesters}</span>
            </div>
            <p className="font-light text-gray-900 text-base">Semestres</p>
            <p className="text-xs font-light text-gray-600 mt-1">Completados</p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <Briefcase className="neon-magenta" size={32} strokeWidth={1.5} />
              <span className="text-5xl font-light text-gray-900">{experiences.length}</span>
            </div>
            <p className="font-light text-gray-900 text-base">Experiencias</p>
            <p className="text-xs font-light text-gray-600 mt-1">Profesionales</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Progreso de Carrera */}
          <div className="glass-card rounded-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-gray-900 mb-2">Progreso de Carrera</h2>
              <p className="text-sm font-light text-gray-600">Ingeniería en Software</p>
            </div>
            <div className="flex flex-col items-center justify-center h-[400px]">
              <div className="relative w-56 h-56">
                <svg className="transform -rotate-90 w-56 h-56">
                  <circle cx="112" cy="112" r="100" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                  <circle
                    cx="112" cy="112" r="100"
                    stroke="url(#gradient-cyan)"
                    strokeWidth="12" fill="none"
                    strokeDasharray={`${(stats.completedSemesters / 10) * 628} 628`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-6xl font-light text-gray-900">{stats.completedSemesters}</span>
                  <span className="text-base font-light text-gray-500 mt-2">de 10</span>
                </div>
              </div>
              <p className="text-lg font-light text-gray-600 mt-6">
                {((stats.completedSemesters / 10) * 100).toFixed(0)}% completado
              </p>
            </div>
          </div>

          {/* Timeline de Experiencias */}
          <div className="glass-card rounded-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-gray-900 mb-2">Experiencia Profesional</h2>
              <p className="text-sm font-light text-gray-600">{experiences.length} empresas</p>
            </div>
            <div className="h-[400px] flex flex-col justify-center">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                      {index < experiences.length - 1 && (
                        <div className="w-0.5 h-20 bg-gradient-to-b from-pink-200 to-purple-200 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-light text-gray-900">{exp.company}</p>
                      <p className="text-sm font-light text-gray-600 mt-1">{exp.period}</p>
                      <p className="text-xs font-light text-gray-500 mt-2">{exp.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tecnologías por Categoría */}
          <div className="glass-card rounded-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-gray-900 mb-2">Stack Tecnológico</h2>
              <p className="text-sm font-light text-gray-600">Por categoría</p>
            </div>
            <div className="space-y-8 h-[400px] flex flex-col justify-center">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-light text-gray-900">Frontend</span>
                  <span className="text-xs font-light neon-cyan">
                    {technologies.filter(t => t.category === 'Frontend').length}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500 bg-gradient-to-r from-cyan-500 to-blue-500" 
                    style={{ width: `${(technologies.filter(t => t.category === 'Frontend').length / technologies.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-light text-gray-900">Backend</span>
                  <span className="text-xs font-light neon-magenta">
                    {technologies.filter(t => t.category === 'Backend').length}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500 bg-gradient-to-r from-pink-500 to-purple-500" 
                    style={{ width: `${(technologies.filter(t => t.category === 'Backend').length / technologies.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-light text-gray-900">Database</span>
                  <span className="text-xs font-light neon-purple">
                    {technologies.filter(t => t.category === 'Database').length}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500 bg-gradient-to-r from-purple-500 to-indigo-500" 
                    style={{ width: `${(technologies.filter(t => t.category === 'Database').length / technologies.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Proyectos */}
          <div className="glass-card rounded-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-gray-900 mb-2">Proyectos</h2>
              <p className="text-sm font-light text-gray-600">En el portafolio</p>
            </div>
            <div className="flex items-center justify-center h-[400px]">
              <div className="text-center">
                <div className="text-6xl font-light bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">{projects.length}</div>
                <p className="text-sm font-light text-gray-600">Completados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
