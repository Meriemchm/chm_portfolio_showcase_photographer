import About from "@/components/about/about";
import { Banner } from "@/components/banner/banner";
import CtaFooter from "@/components/cta-footer/cta-footer";
import CtaSection from "@/components/cta-section/cta-section";
import RevealSection from "@/components/reveal-section/reveal-section";

const AboutPage = () => {
  return (
    <div>
      <RevealSection />
      <Banner />
      <About />
      <CtaSection />
      <CtaFooter />
    </div>
  );
};

export default AboutPage;
