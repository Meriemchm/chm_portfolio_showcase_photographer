import { Banner } from "@/components/banner/banner";
import CtaFooter from "@/components/cta-footer/cta-footer";
import { Projects } from "@/components/projects/projects";
import RevealSection from "@/components/reveal-section/reveal-section";

const ProjectsPage = () => {
  return (
    <div className="overflow-hidden">
      <RevealSection />
      <Banner />
      <Projects />
      <CtaFooter />
    </div>
  );
};

export default ProjectsPage;
