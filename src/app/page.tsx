import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Contact from '@/components/Contact/Contact';
import Pricing from '@/components/Pricing/Pricing';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Pricing />
      <Contact />
    </main>
  );
}
