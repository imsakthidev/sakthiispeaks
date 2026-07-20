export const dynamic = 'force-dynamic';

import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import Pricing from '@/components/Pricing/Pricing';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/FAQ';
import SocialLinks from '@/components/SocialLinks/SocialLinks';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Pricing />
      <FAQ />
      <SocialLinks />
      <Contact />
    </main>
  );
}
