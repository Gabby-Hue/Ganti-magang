import { Navbar } from '@/components/Navbar';
import { Effects } from '@/components/Effects';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage(){
  return (
    <main>
      <Effects/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <EventsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}
