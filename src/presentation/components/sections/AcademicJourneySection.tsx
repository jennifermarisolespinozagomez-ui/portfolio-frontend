const AcademicJourneySection = () => {
  const semesters = [
    { 
      number: '1', 
      title: 'Semestre 1', 
      description: 'Algoritmos y Lógica',
      subjects: ['Algoritmos y Lógica de Programación', 'Estructuras Discretas', 'Introducción a Ingeniería de Software']
    },
    { 
      number: '2', 
      title: 'Semestre 2', 
      description: 'POO y Arquitectura',
      subjects: ['Programación Orientada a Objetos', 'Organización y Arquitectura Computacional']
    },
    { 
      number: '3', 
      title: 'Semestre 3', 
      description: 'Estructuras y Procesos',
      subjects: ['Estructura de Datos', 'Proceso de Software', 'Ingeniería de Requerimientos', 'Sistemas Operativos']
    },
    { 
      number: '4', 
      title: 'Semestre 4', 
      description: 'Modelamiento y BD',
      subjects: ['Modelamiento de Software', 'Base de Datos', 'Redes de Computadoras']
    },
    { 
      number: '5', 
      title: 'Semestre 5', 
      description: 'Diseño y Arquitectura',
      subjects: ['Diseño y Arquitectura de Software', 'Programación Orientada a Eventos', 'Interacción Hombre-Máquina']
    },
    { 
      number: '6', 
      title: 'Semestre 6', 
      description: 'Desarrollo Web',
      subjects: ['Construcción de Software', 'Desarrollo de Aplicaciones Web', 'Diseño de Experiencia de Usuario', 'Base de Datos Avanzado']
    },
    { 
      number: '7', 
      title: 'Semestre 7', 
      description: 'Calidad y BI',
      subjects: ['Calidad del Software', 'Desarrollo de Aplicaciones Web Avanzado', 'Inteligencia de Negocios']
    },
    { 
      number: '8', 
      title: 'Semestre 8', 
      description: 'En curso',
      subjects: ['Gestión de Proyectos de Software', 'Arquitecturas Avanzadas']
    },
  ]

  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-light text-gray-800 mb-12 text-center">
          Trayectoria Académica
        </h2>

        {/* Timeline horizontal */}
        <div className="relative mb-12">
          {/* Línea conectora */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 hidden lg:block"></div>
          
          {/* Círculos con números */}
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 relative">
            {semesters.map((semester, index) => (
              <div key={index} className="flex flex-col items-center group relative">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-light mb-3 cursor-pointer transition-all ${
                  index === semesters.length - 1 ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-600 hover:bg-gray-500'
                }`}>
                  {semester.number}
                </div>
                <p className="text-xs text-center font-light text-gray-700">{semester.title}</p>
                <p className="text-xs text-center font-light text-gray-500 mt-1">{semester.description}</p>
                
                {/* Tooltip con materias - aparece en hover */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-200">
                  <h4 className="text-sm font-light text-gray-900 mb-2">{semester.number}. {semester.description}</h4>
                  <ul className="space-y-1">
                    {semester.subjects.map((subject, idx) => (
                      <li key={idx} className="text-xs font-light text-gray-600">
                        • {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-light text-gray-900">7</p>
              <p className="text-xs font-light text-gray-500">Completados</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light text-gray-900">1</p>
              <p className="text-xs font-light text-gray-500">En Curso</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light text-gray-900">25+</p>
              <p className="text-xs font-light text-gray-500">Materias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademicJourneySection
