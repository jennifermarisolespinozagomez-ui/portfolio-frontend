# Portfolio Personal

Portafolio web desarrollado con React, TypeScript y Clean Architecture.

## Tecnologías

- React 18 + TypeScript
- Vite
- TailwindCSS
- Zustand (state management)
- Axios
- React Router

## Backend

Este frontend consume la API del backend:
https://github.com/jennifermarisolespinozagomez-ui/portfolio-backend-api

## Instalación

```bash
npm install
```

## Configuración

Crea un archivo `.env` basado en `.env.example`:

```
VITE_API_URL=http://localhost:5003/api
```

## Ejecución

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Estructura

```
src/
├── domain/           # Entidades e interfaces
├── application/      # Casos de uso y estado
├── infrastructure/   # Implementaciones (API, repos)
└── presentation/     # Componentes React
```


