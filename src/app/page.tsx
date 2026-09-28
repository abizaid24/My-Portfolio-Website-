import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import Services from '@/components/Services';
import About from '@/components/About';
import AIAssistedEngineering from '@/components/AIAssistedEngineering';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <AIAssistedEngineering />
      <TechStack />
      <Experience />
      <ContactCTA />
    </>
  );
}
