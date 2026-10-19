import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';

export default function App() {
  return (
    <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
