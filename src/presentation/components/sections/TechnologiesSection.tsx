import { useEffect } from 'react'
import { useTechnologyStore } from '@/application/store/useTechnologyStore'

const TechnologiesSection = () => {
  const { technologies, loading, error, fetchTechnologies } = useTechnologyStore()

  useEffect(() => {
    fetchTechnologies()
  }, [fetchTechnologies])

  if (loading) {
    return (
      <section id="tecnologias" className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600">Cargando tecnologías...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="tecnologias" className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="tecnologias" className="py-16 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-light text-gray-800 mb-12 text-center">
          Tecnologías
        </h2>

        {/* Grid de tecnologías con movimiento */}
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => {
            const delay = index * 0.2
            const duration = 3 + (index % 3)
            
            return (
              <div
                key={tech.id}
                className="px-5 py-2.5 bg-transparent border-2 border-gray-800 rounded-full text-sm font-light text-gray-800 hover:border-gray-900 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-300 cursor-default"
                style={{
                  animation: `fadeInFloat 0.5s ease-out ${index * 0.05}s forwards, float ${duration}s ease-in-out ${delay}s infinite`,
                  opacity: 0
                }}
              >
                {tech.name}
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInFloat {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}

export default TechnologiesSection
