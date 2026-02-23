import { useEffect, useState } from 'react'
import { useProjectStore } from '@/application/store/useProjectStore'
import ProjectModal from '../ProjectModal'
import { Project } from '@/domain/entities/Project'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ProjectsSection = () => {
  const { projects, loading, fetchProjects } = useProjectStore()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const featuredProjects = projects.slice(0, 1) // Solo mostrar el primer proyecto

  const handleImageClick = (projectId: number) => {
    // Map project IDs to their full-size images array
    const fullImagesMap: { [key: number]: string[] } = {
      1: [
        '/images/proyecto-gestion-recursos-full.png',
        '/images/proyecto-gestion-recursos-full-2.png'
      ],
      // Add more projects here as needed
    }
    setSelectedImages(fullImagesMap[projectId] || [])
    setCurrentImageIndex(0)
    setImageModalOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length)
  }

  return (
    <section id="proyectos" className="py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-light text-gray-800 mb-8 md:mb-12 text-center">Proyecto Académico Destacado</h2>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400 mx-auto"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group">
                <div 
                  className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden mb-4 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => project.imageUrl && handleImageClick(project.id)}
                >
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-contain p-4" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-3xl font-light">
                      {project.title.substring(0, 2)}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-gray-700 text-xs font-light shadow-sm">
                    Semestre {project.semester}
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm font-light text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech.id} className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {tech.name}
                    </span>
                  ))}
                </div>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors underline"
                  >
                    Ver en GitHub
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors underline"
                  >
                    Ver más
                  </button>
                )}
              </div>
            ))}

            {/* Placeholder para futuros proyectos */}
            <div className="group">
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden mb-4 rounded-lg border-2 border-dashed border-gray-300">
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                  <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="text-sm font-light">Próximamente</p>
                </div>
              </div>
              
              <h3 className="text-xl font-light text-gray-400 mb-2">Más proyectos en desarrollo</h3>
              <p className="text-sm font-light text-gray-400 mb-4">Nuevos proyectos académicos serán agregados próximamente</p>
            </div>
          </div>
        )}

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {imageModalOpen && selectedImages.length > 0 && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 md:p-4"
            onClick={() => setImageModalOpen(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={() => setImageModalOpen(false)}
                className="absolute top-2 md:top-4 right-2 md:right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Flecha izquierda */}
              {selectedImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-2 md:left-8 bg-white hover:bg-gray-100 text-gray-800 p-2 md:p-4 rounded-full transition-colors shadow-lg z-10"
                >
                  <ChevronLeft size={24} className="md:w-8 md:h-8" />
                </button>
              )}

              {/* Contenedor de imagen */}
              <div className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center px-12 md:px-16">
                <img 
                  src={selectedImages[currentImageIndex]} 
                  alt={`Proyecto imagen ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Flecha derecha */}
              {selectedImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-2 md:right-8 bg-white hover:bg-gray-100 text-gray-800 p-2 md:p-4 rounded-full transition-colors shadow-lg z-10"
                >
                  <ChevronRight size={24} className="md:w-8 md:h-8" />
                </button>
              )}

              {/* Indicador de página */}
              {selectedImages.length > 1 && (
                <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-white text-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                  {currentImageIndex + 1} / {selectedImages.length}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection
