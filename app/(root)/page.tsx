import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import CtaSection from "@/components/cta-section/cta-section";
import Hero from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import RevealSection from "@/components/reveal-section/reveal-section";

export default function RootSetup() {
  return (
    <div className="relative overflow-hidden">
      <RevealSection />
      <Hero />
      <About />
      <Projects />
      <CtaSection />
      <Contact />
    </div>
  );
}
