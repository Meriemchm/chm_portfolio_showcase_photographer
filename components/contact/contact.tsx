"use client";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "../ui/section-title";
import ContactForm from "./contact-form";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative py-20 md:py-36 min-h-screen">
      {/* Image left */}
      <div className="absolute bottom-4 md:bottom-6 right-0 md:right-auto md:left-6 z-10 overflow-hidden w-40 sm:w-56 h-40 sm:h-56">
        <motion.div
          initial={{ height: "100%" }}
          whileInView={{ height: 0 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          className="absolute inset-0 bg-white z-20"
        />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          className="w-full h-full relative z-10"
          viewport={{ once: true }}
        >
          <Image
            src="/images/left.webp"
            alt="left small"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Image right */}
      <div className="absolute top-4 md:top-6 left-0 md:left-auto md:right-6 z-10 overflow-hidden w-56 sm:w-72 h-56 sm:h-72">
        <motion.div
          initial={{ width: "100%" }}
          whileInView={{ width: 0 }}
          transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
          className="absolute bg-white inset-0 z-20"
        />

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
          className="w-full h-full relative z-10"
          viewport={{ once: true }}
        >
          <Image
            src="/images/right.webp"
            alt="right big"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Contact container */}
      <Container className="relative z-20 py-32 md:py-0 flex flex-col items-center px-4 sm:px-6">
        <SectionTitle
          title={"Let’s work together"}
          subtitle=""
          keyword="Let’s work together"
        />

        <div className="w-full max-w-full sm:max-w-lg mt-10">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
