"use client";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "../ui/section-title";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <div className="py-18 min-h-screen">
      {/*Contact container */}
      <Container>
        <SectionTitle
          title={"Let's Connect"}
          subtitle="We're excited to connect with you and learn more about you.. Use the form below to get in touch with iDigital."
          rowPosition={true}
          keyword="Connect"
        />

        <div className="grid md:grid-cols-2 grid-cols-1 md:py-14 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
