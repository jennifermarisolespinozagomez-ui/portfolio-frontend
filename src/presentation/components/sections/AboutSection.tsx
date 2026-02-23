const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-6 md:mb-8 text-center">
          Sobre Mí
        </h2>
        
        <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light text-center px-2">
          Me considero una persona responsable, dinámica, con capacidad para trabajar en equipo y fácil adaptación. 
          Soy Estudiante 8º Semestre de Ingeniería en Software y deseo contribuir con mi formación y experiencia 
          profesional, proponiendo nuevas ideas con el fin de resolver problemas de una manera eficiente y lograr 
          las metas y objetivos trazados por la empresa. Tengo experiencia en aplicaciones tanto del FrontEnd como 
          del BackEnd.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-light text-gray-900 mb-1">7</p>
            <p className="text-xs text-gray-600 font-light">Semestres</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-light text-gray-900 mb-1">2</p>
            <p className="text-xs text-gray-600 font-light">Empresas</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-light text-gray-900 mb-1">12+</p>
            <p className="text-xs text-gray-600 font-light">Tecnologías</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
