import { Link, useLocation } from 'react-router-dom'
import { Home, User, Briefcase, Code, Mail, Download, Phone, BarChart3 } from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()

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
      // Si no estamos en la página de inicio, navegar primero
      if (location.pathname !== '/') {
        window.location.href = '/' + path
      } else {
        const element = document.querySelector(path)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-xl">
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
            // Solo marcar como activo si es una ruta exacta, no los hash links
            const isActive = item.path.startsWith('#') 
              ? false  // Los hash links nunca se marcan como activos
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
        <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 py-3 rounded-lg transition-colors mb-4">
          <Download size={18} />
          <span className="text-sm font-medium">Descargar CV</span>
        </button>
        
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
  )
}

export default Sidebar
