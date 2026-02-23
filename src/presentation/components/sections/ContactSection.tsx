import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contacto" className="py-12 md:py-16 px-4 md:px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-8 md:mb-12 text-center">
          Contacto
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Columna Izquierda */}
          <div className="space-y-6">
            <div className="flex items-start gap-3 md:gap-4">
              <Mail size={20} className="text-gray-600 flex-shrink-0 mt-1" />
              <div className="min-w-0">
                <p className="text-xs font-light text-gray-500 mb-1">Email Personal</p>
                <p className="font-light text-gray-900 text-xs md:text-sm break-all">jennifermarisolespinozagomez@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <Phone size={20} className="text-gray-600 flex-shrink-0" />
              <div>
                <p className="text-xs font-light text-gray-500 mb-1">Teléfono</p>
                <p className="font-light text-gray-900 text-sm md:text-base">0962743806</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 md:gap-4">
              <MapPin size={20} className="text-gray-600 flex-shrink-0" />
              <div>
                <p className="text-xs font-light text-gray-500 mb-1">Ubicación</p>
                <p className="font-light text-gray-900 text-sm md:text-base">Ecuador</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <Linkedin size={20} className="text-gray-600 flex-shrink-0" />
              <div>
                <p className="text-xs font-light text-gray-500 mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/jenniffer-marisol-espinoza-gomez-ab4b932b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light text-gray-900 hover:text-gray-700 transition-colors text-xs md:text-sm underline"
                >
                  Ver perfil
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
