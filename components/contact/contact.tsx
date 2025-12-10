"use client";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "../ui/section-title";
import ContactForm from "./contact-form";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="relative py-36 min-h-screen">
      {/* Images en arrière-plan */}
      <Image
        src="/images/left.webp"
        alt="left small"
        width={250}   
        height={250}
        className="absolute bottom-6 left-6 z-10"
      />
      <Image
        src="/images/right.webp"
        alt="right big"
        width={350}  
        height={350}
        className="absolute top-6 right-6 z-10"
      />

      {/* Contact container */}
      <Container className="relative z-20 flex flex-col items-center">
        <SectionTitle
          title={"Let’s work together"}
          subtitle=""
          keyword="Let’s work together"
        />

        {/* Formulaire centré */}
        <div className="w-full max-w-xl mt-10">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
