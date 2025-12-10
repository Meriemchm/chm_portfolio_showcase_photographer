"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ContactFormData, contactSchema } from "@/schemas/contactSchema";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/button";
import toast from "react-hot-toast";
import { useGsapFade } from "@/hooks/useGsapFade";
import SelectField from "../ui/select-field";
import { PreferredServiceData } from "@/data/PreferredServiceData";

const ContactForm = () => {
  const fadeleft = useGsapFade("left");

  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  {
    /*on submit */
  }

  const onSubmit = (data: ContactFormData) => {
    setIsSending(true);
    toast.success(
      "Message sent successfully! We will get back to you shortly.",
      {
        duration: 5000,
      }
    );
    reset();
    setIsSending(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-white rounded-2xl space-y-6"
      ref={fadeleft}
    >
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
        <InputField
          name="firstName"
          register={register}
          placeholder="First Name"
          error={errors.firstName}
        />
        <InputField
          name="lastName"
          register={register}
          placeholder="Last Name"
          error={errors.lastName}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          name="email"
          type="email"
          register={register}
          placeholder="Email"
          error={errors.email}
        />

        <InputField
          name="phone"
          type="tel"
          register={register}
          placeholder="Phone"
          error={errors.phone}
        />
      </div>
      <SelectField
        label="Preferred Service"
        name="preferredService"
        options={PreferredServiceData}
        register={register}
        error={errors.preferredService}
      />
      <InputField
        name="subject"
        register={register}
        placeholder="Subject"
        error={errors.subject}
      />
      <InputField
        name="message"
        textarea
        register={register}
        placeholder="Your Message"
        error={errors.message}
      />
      <div className="flex justify-start mt-4">
        <Button type="submit" disabled={isSending}>
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
