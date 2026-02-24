import { CheckCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useExperienceStore } from '@/application/store/useExperienceStore'

const ExperienceSection = () => {
  const { experiences, loading, error, fetchExperiences } = useExperienceStore()

  useEffect(() => {
    fetchExperiences()
  }, [fetchExperiences])

  if (loading) {
    return (
      <section id="experiencia" className="py-12 md:py-16 px-4 md:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
            <p className="text-gray-600 font-light">Cargando experiencias...</p>
            <p className="text-xs text-gray-500 font-light">El servidor está iniciando, esto puede tomar unos segundos</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="experiencia" className="py-12 md:py-16 px-4 md:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 font-light mb-2">No se pudieron cargar las experiencias</p>
          <p className="text-xs text-gray-500 font-light">Por favor, recarga la página en unos segundos</p>
        </div>
      </section>
    )
  }

  return (
    <section id="experiencia" className="py-12 md:py-16 px-4 md:px-8 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-3 md:mb-4 text-center">Experiencia Profesional</h2>
        
        <p className="text-center text-xs md:text-sm font-light text-gray-600 mb-6 md:mb-8 px-2">
          <span className="font-normal">Descripción del rol: </span>
          Participación en proyectos de desarrollo y nuevos requerimientos de software para sistemas corporativos, 
          apoyando en tareas frontEND, backEND y bases de datos, bajo supervisión técnica.
        </p>

        <div className="space-y-4 md:space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-3 md:gap-4">
              {/* Icono de verificación verde con badge */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  <CheckCircle className="text-white" size={16} strokeWidth={3} />
                </div>
              </div>
              
              {/* Contenido de la experiencia */}
              <div className="flex-1 flex flex-col gap-1 md:gap-2 min-w-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-light text-gray-900">{exp.role}</h3>
                    <p className="text-sm md:text-base text-gray-900 font-normal">{exp.company}</p>
                    {exp.project && (
                      <p className="text-xs md:text-sm text-gray-800 font-normal mt-1">Proyecto: {exp.project}</p>
                    )}
                    <div className="flex flex-wrap gap-1 md:gap-2 mt-1 md:mt-2">
                      <span className="text-[10px] md:text-xs font-light text-gray-500">{exp.technologies.join(', ')}</span>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col items-start md:items-end gap-2 md:gap-1">
                    <span className="text-[10px] md:text-xs font-light text-gray-500 whitespace-nowrap">{exp.period}</span>
                    <span className="text-[10px] md:text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-light whitespace-nowrap">
                      {exp.modality}
                    </span>
                  </div>
                </div>
                {exp.usage && (
                  <div className="mt-1">
                    <span className="text-xs md:text-sm font-light text-gray-700">Descripción del rol: </span>
                    <span className="text-xs md:text-sm font-light text-gray-600">{exp.usage}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
