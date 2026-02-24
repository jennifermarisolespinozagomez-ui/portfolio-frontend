# Portfolio Personal - Jenniffer Espinoza

Portafolio web profesional desarrollado con React, TypeScript y Clean Architecture.

## Demo en Vivo

- Frontend: https://portfolio-frontend-weld-beta.vercel.app/
- Backend API: https://portfolio-backend-api-giwq.onrender.com/api

## Tecnologías

- Frontend: React 18 + TypeScript + Vite
- Estilos: TailwindCSS
- Estado: Zustand
- HTTP Client: Axios
- Routing: React Router
- Iconos: Lucide React
- Gráficos: Recharts

## Instalación

```bash
npm install
```

## Configuración

Crea un archivo `.env.local` para desarrollo:

```env
VITE_API_URL=http://localhost:5003/api
```

Para producción, la variable se configura en Vercel.

## Ejecución

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## Estructura del Proyecto

```
src/
├── domain/              # Entidades e interfaces de dominio
│   ├── entities/        # Modelos de datos
│   └── repositories/    # Interfaces de repositorios
├── application/         # Lógica de aplicación
│   ├── store/          # Estado global (Zustand)
│   └── useCases/       # Casos de uso
├── infrastructure/      # Implementaciones técnicas
│   ├── api/            # Cliente HTTP
│   └── repositories/   # Implementación de repositorios
└── presentation/        # Capa de presentación
    ├── components/     # Componentes React
    ├── layouts/        # Layouts de página
    └── pages/          # Páginas principales
```

## Características

- Diseño responsive optimizado para móvil y desktop
- Arquitectura limpia y escalable
- Integración con API backend
- Dashboard con estadísticas
- Secciones: Sobre mí, Experiencia, Proyectos, Tecnologías, Contacto

## Mantener el Backend Activo

El backend está desplegado en Render 
1. Usa un servicio de monitoreo como UptimeRobot (https://uptimerobot.com)

## Repositorio Backend

El backend de este proyecto está en:
https://github.com/jennifermarisolespinozagomez-ui/portfolio-backend-api

## Licencia

Este proyecto es de uso personal.

## Autora

Jenniffer Marisol Espinoza Gómez
- Email: jennifermarisolespinozagomez@gmail.com
- LinkedIn: [Ver perfil](https://www.linkedin.com/in/jenniffer-marisol-espinoza-gomez-ab4b932b1)
