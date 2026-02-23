import { ArrowRight, Linkedin, Mail, Github } from 'lucide-react'

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="flex items-start justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-8 pt-8 pb-0 relative overflow-hidden h-[420px]">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      
      {/* Código flotante - Frontend (arriba izquierda de la imagen) */}
      <div className="absolute left-[48%] top-[20%] bg-slate-800/95 text-cyan-400 px-3 py-2 rounded-lg shadow-xl font-mono text-[11px] z-20 animate-float hidden lg:block">
        <div><span className="text-blue-400">const</span> greeting = <span className="text-yellow-300">"¡Hola!"</span>;</div>
        <div>console.<span className="text-purple-400">log</span>(greeting);</div>
      </div>

      {/* Código flotante - Backend (arriba derecha de la imagen) */}
      <div className="absolute right-[10%] top-[25%] bg-slate-800/95 text-green-400 px-3 py-2 rounded-lg shadow-xl font-mono text-[11px] z-20 animate-float-delayed hidden lg:block">
        <div>Console.<span className="text-purple-400">WriteLine</span>(<span className="text-yellow-300">"Hello!"</span>);</div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[auto_1fr] gap-12 items-center relative z-10">
        {/* Texto */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Jenniffer Espinoza
          </h1>
          <p className="text-xl text-gray-600 font-light mb-10">
            Ingeniería en Software · 8vo Semestre
          </p>

          <div className="flex gap-6 justify-center md:justify-start mb-8">
            <button 
              onClick={() => scrollToSection('#proyectos')}
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-light hover:shadow-lg transition-all flex items-center gap-2"
            >
              Ver Proyectos
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('#contacto')}
              className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-light hover:border-slate-400 hover:shadow-md transition-all"
            >
              Contacto
            </button>
          </div>

          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/jenniffer-marisol-espinoza-gomez-ab4b932b1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-slate-800 transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-slate-800 transition-colors transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jennifermarisolespinozagomez@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-slate-800 transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center md:justify-center relative ml-32 items-end h-full overflow-hidden">
          <img 
            src="/images/home-hero.png" 
            alt="Hero" 
            className="relative w-[50%] h-[120%] object-cover object-top"
            style={{ 
              marginTop: '-20%',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 65%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 65%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskComposite: 'source-in'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
