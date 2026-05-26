import { create } from 'zustand'
import { Experience } from '@/domain/entities/Experience'

const staticExperiences: Experience[] = [
  {
    id: 1,
    company: 'Corporación Financiera Nacional (CFN)',
    role: 'Pasante de Seguridad Informática',
    modality: 'Presencial',
    period: '3 meses de prácticas preprofesionales',
    project: '',
    technologies: ['SQL', 'Power BI', 'Excel', 'Macros'],
    usage: 'Área de Seguridad Informática realizando verificación y control de usuarios vigentes y no vigentes, monitoreo básico de bases de datos SQL y validación de información. Participación en la generación y análisis de reportes utilizando Power BI y Excel avanzado, mediante tablas dinámicas, filtros, organización de datos y automatización de procesos básicos con macros para optimizar el seguimiento y control de información interna.'
  },
  {
    id: 2,
    company: 'N5 Now',
    role: 'Desarrolladora de Software',
    modality: 'Outsourcing',
    period: '20 Feb 2025 - Actualidad',
    project: 'Sistema de Gestión de Formularios',
    technologies: ['React', 'TypeScript', 'C#', '.NET', 'MongoDB', 'PostgreSQL', 'Elsa Workflows', 'SQL'],
    usage: 'Desarrollo de interfaces y tablas CRUD + creación de controladores, repositorios y migraciones SQL para base de datos + pruebas unitarias e integración. Empresa de software para el sector financiero.'
  },
  {
    id: 3,
    company: 'Aeroméxico',
    role: 'Desarrolladora de Software',
    modality: 'Outsourcing',
    period: '20 Feb 2025 - Actualidad',
    project: 'Sistema de Pagos Móviles Aeroméxico',
    technologies: ['Java 17', 'Spring Boot', 'MongoDB', 'Sabre GDS', 'AWS SQS', 'WebSocket', 'Postman'],
    usage: 'Pruebas funcionales e integración de sistema de pagos móviles + validación de flujos de pago, emisión de tickets y reembolsos + verificación de endpoints REST y notificaciones WebSocket. Aerolínea internacional de transporte de pasajeros y carga.'
  }
]

interface ExperienceState {
  experiences: Experience[]
  loading: boolean
  error: string | null
  fetchExperiences: () => void
}

export const useExperienceStore = create<ExperienceState>(() => ({
  experiences: staticExperiences,
  loading: false,
  error: null,
  fetchExperiences: () => {},
}))
