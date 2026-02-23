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
      <section id="experiencia" className="py-12 px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">Cargando experiencias...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="experiencia" className="py-12 px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="experiencia" className="py-12 px-8 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-light text-gray-800 mb-4 text-center">Experiencia Profesional</h2>
        
        <p className="text-center text-sm font-light text-gray-600 mb-8">
          <span className="font-normal">Descripción del rol: </span>
          Participación en proyectos de desarrollo y nuevos requerimientos de software para sistemas corporativos, 
          apoyando en tareas frontEND, backEND y bases de datos, bajo supervisión técnica.
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4">
              {/* Icono de verificación verde con badge */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  <CheckCircle className="text-white" size={20} strokeWidth={3} />
                </div>
              </div>
              
              {/* Contenido de la experiencia */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-gray-900">{exp.role}</h3>
                    <p className="text-base text-gray-900 font-normal">{exp.company}</p>
                    {exp.project && (
                      <p className="text-sm text-gray-800 font-normal mt-1">Proyecto: {exp.project}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs font-light text-gray-500">{exp.technologies.join(', ')}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-light text-gray-500 whitespace-nowrap">{exp.period}</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-light">
                      {exp.modality}
                    </span>
                  </div>
                </div>
                {exp.usage && (
                  <div className="mt-1">
                    <span className="text-sm font-light text-gray-700">Descripción del rol: </span>
                    <span className="text-sm font-light text-gray-600">{exp.usage}</span>
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
