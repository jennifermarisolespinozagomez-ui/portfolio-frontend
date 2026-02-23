import { Link, useLocation } from 'react-router-dom'
import { Home, User, Briefcase, Code, Mail, Download, Phone, BarChart3, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Sidebar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: 'Inicio', path: '/' },
    { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'Sobre Mí', path: '#sobre-mi' },
    { icon: Briefcase, label: 'Experiencia Técnica', path: '#experiencia' },
    { icon: Briefcase, label: 'Proyectos Destacados', path: '#proyectos' },
    { icon: Code, label: 'Tecnologías', path: '#tecnologias' },
    { icon: Mail, label: 'Contacto', path: '#contacto' },
  ]

  const handleScroll = (path: string) => {
    if (path.startsWith('#')) {
      setIsOpen(false) // Cerrar menú en móvil
      if (location.pathname !== '/') {
        window.location.href = '/' + path
      } else {
        const element = document.querySelector(path)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Botón hamburguesa - siempre visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para cerrar el menú */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-xl z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <img 
                src="/images/profile.jpg" 
                alt="Jenniffer Espinoza" 
                className="w-full h-full object-cover"
                style={{ imageRendering: 'auto' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = '<span class="text-white text-xl font-light">JE</span>'
                  }
                }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-base truncate">Jenniffer Espinoza</h2>
              <p className="text-xs text-gray-400 truncate">jennifermarisolespinozagomez@gmail.com</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = item.path.startsWith('#') 
                ? false
                : location.pathname === item.path
              
              return item.path.startsWith('#') ? (
                <button
                  key={item.path}
                  onClick={() => handleScroll(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-white text-slate-900' 
                      : 'text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm">{item.label}</span>
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-white text-slate-900' 
                      : 'text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700">
          <a 
            href="/JennifferEspinoza.pdf" 
            download="JennifferEspinoza_CV.pdf"
            className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 py-3 rounded-lg transition-colors mb-4"
          >
            <Download size={18} />
            <span className="text-sm font-medium">Descargar CV</span>
          </a>
          
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={16} className="flex-shrink-0" />
              <span className="truncate">0962743806</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="flex-shrink-0" />
              <span className="text-xs truncate break-all">jennifermarisolespinozagomez@gmail.com</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
