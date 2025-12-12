import About from "@/components/about/about";
import { Banner } from "@/components/banner/banner";
import CtaSection from "@/components/cta-section/cta-section";

const AboutPage = () => {
  return (
    <div>
      <Banner />
      <About />
      <CtaSection />
    </div>
  );
};

export default AboutPage;
