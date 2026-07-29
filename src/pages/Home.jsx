import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyMe from '../components/sections/WhyMe';
import Portfolio from '../components/sections/Portfolio';
import Skills from '../components/sections/Skills';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Seo from '../components/ui/Seo';
import { site } from '../config/site';

export default function Home() {
  return (
    <>
      <Seo
        title={`${site.name} | ${site.tagline}`}
        description={`${site.description} MikroTik, ISP infrastructure, hotspot systems, servers, security and automation in ${site.location}.`}
      />
      <Hero />
      <About />
      <Services />
      <WhyMe />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}
