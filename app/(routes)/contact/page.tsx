import { Banner } from "@/components/banner/banner";
import Contact from "@/components/contact/contact";
import RevealSection from "@/components/reveal-section/reveal-section";
import React from "react";

const ContactPage = () => {
  return (
  <div className="overflow-hidden">
      <RevealSection />
      <Banner />
      <Contact />
    </div>
  );
};

export default ContactPage;
