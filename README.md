# Portafolio Jenniffer Espinoza

Portafolio profesional Full Stack desarrollado con React, TypeScript, Clean Architecture y diseño neón moderno.

## 🚀 Características

- ✅ Arquitectura limpia (Clean Architecture)
- ✅ TypeScript para type safety
- ✅ React 18 con Vite
- ✅ Zustand para gestión de estado
- ✅ TailwindCSS para estilos
- ✅ Axios para consumo de API REST
- ✅ React Router para navegación
- ✅ Dashboard interactivo con gráficos dinámicos
- ✅ Diseño neón con colores vibrantes (cyan, magenta, púrpura)
- ✅ Efecto glass en tarjetas
- ✅ Animaciones suaves y transiciones
- ✅ Principios SOLID aplicados

## 📁 Estructura del Proyecto

```
src/
├── domain/              # Entidades y contratos (interfaces)
│   ├── entities/        # Modelos de dominio
│   └── repositories/    # Interfaces de repositorios
├── application/         # Casos de uso y lógica de aplicación
│   ├── useCases/        # Casos de uso
│   └── store/           # Estado global (Zustand)
├── infrastructure/      # Implementaciones concretas
│   ├── api/             # Cliente HTTP
│   └── repositories/    # Implementación de repositorios
└── presentation/        # Capa de presentación
    ├── components/      # Componentes React
    ├── pages/           # Páginas
    └── layouts/         # Layouts
```

## 🛠️ Instalación

1. Clonar el repositorio
```bash
git clone <repository-url>
cd portfolio
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
```bash
cp .env.example .env
```

4. Editar `.env` con la URL de tu API backend
```
VITE_API_URL=http://localhost:5003/api
```

## 🏃 Ejecución

### Modo desarrollo
```bash
npm run dev
```

### Build para producción
```bash
npm run build
```

### Preview de producción
```bash
npm run preview
```

## 📊 Secciones del Portafolio

1. **Hero Section** - Presentación principal con imagen de perfil
2. **Sobre Mí** - Perfil profesional
3. **Experiencia Técnica** - Timeline de experiencias profesionales
4. **Proyectos Destacados** - Lista dinámica de proyectos con modal de detalles
5. **Tecnologías** - Clasificadas por categoría (Frontend, Backend, Database)
6. **Dashboard** - Métricas y gráficos dinámicos con diseño neón
   - Progreso de carrera (círculo animado)
   - Timeline de experiencias profesionales
   - Stack tecnológico por categoría
   - Contador de proyectos
7. **Trayectoria Académica** - Timeline de semestres
8. **Contacto** - Información de contacto

## 🎨 Tecnologías Utilizadas

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- Lucide React (iconos)

### Estado y Datos
- Zustand (state management)
- Axios (HTTP client)

### Routing
- React Router DOM

## 🔌 Integración con Backend

El frontend consume los siguientes endpoints:

- `GET /api/Projects` - Obtener todos los proyectos
- `GET /api/Technologies` - Obtener todas las tecnologías
- `GET /api/Experience` - Obtener experiencias profesionales
- `GET /api/Dashboard/stats` - Obtener estadísticas del dashboard

## 🎨 Diseño

El portafolio utiliza un diseño moderno con:
- Fondo blanco limpio
- Tarjetas con efecto glass (transparentes con blur)
- Colores neón vibrantes:
  - Cyan (#06b6d4)
  - Magenta (#ec4899)
  - Púrpura (#a855f7)
  - Azul (#3b82f6)
- Gradientes en gráficos y elementos visuales
- Animaciones suaves al hover
- Transiciones fluidas

## 📝 Principios SOLID Aplicados

- **Single Responsibility**: Cada clase/componente tiene una única responsabilidad
- **Open/Closed**: Extensible mediante interfaces sin modificar código existente
- **Liskov Substitution**: Las implementaciones pueden sustituirse por sus interfaces
- **Interface Segregation**: Interfaces específicas por funcionalidad
- **Dependency Inversion**: Dependencias hacia abstracciones, no implementaciones

## 👩‍💻 Autora

**Jenniffer Marisol Espinoza Gómez**
- Estudiante de Ingeniería en Software - 7mo Semestre
- Email: jennifermarisolespinozagomez@gmail.com
- Teléfono: 0962743806
- Ubicación: Ecuador

## 📄 Licencia

Este proyecto es de uso personal y educativo.

