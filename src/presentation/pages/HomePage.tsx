import HeroSection from '../components/sections/HeroSection.tsx'
import AboutSection from '../components/sections/AboutSection.tsx'
import ExperienceSection from '../components/sections/ExperienceSection.tsx'
import ProjectsSection from '../components/sections/ProjectsSection.tsx'
import TechnologiesSection from '../components/sections/TechnologiesSection.tsx'
import AcademicJourneySection from '../components/sections/AcademicJourneySection.tsx'
import ContactSection from '../components/sections/ContactSection.tsx'

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechnologiesSection />
      <AcademicJourneySection />
      <ContactSection />
    </div>
  )
}

export default HomePage
