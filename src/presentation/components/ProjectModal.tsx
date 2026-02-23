import { X, Github, Clock } from 'lucide-react'
import { Project } from '@/domain/entities/Project'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg overflow-hidden mb-4">
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                  {project.title.substring(0, 2)}
                </div>
              )}
            </div>

            <div className="flex gap-4 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Semestre {project.semester}
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                {project.type}
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Clock size={16} />
                {project.hoursInvested}h
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tecnologías Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div key={tech.id} className="bg-gray-100 px-4 py-2 rounded-lg">
                  <p className="font-medium text-gray-900">{tech.name}</p>
                  <p className="text-xs text-gray-600">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/jennifermarisolespinozagomez-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors"
            >
              <Github size={20} />
              Ver mi GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
