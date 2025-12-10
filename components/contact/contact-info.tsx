"use client";
import { useGsapFade } from "@/hooks/useGsapFade";
import Image from "next/image";
import { ContactData } from "@/data/ContactData";
import { ColumnsItems } from "../ui/columns-items";

const ContactInfo = () => {
  const faderight = useGsapFade("right");
  return (
    <div
      ref={faderight}
      className="w-full relative bg-primary rounded-xl text-lg md:text-xl"
    >
      {/*Background */}
      <Image fill priority alt="waves-image" src="/Icons/waves-2.svg"  />
      <div className="w-full flex flex-col items-center justify-center p-4">
        <ColumnsItems data={ContactData} className="grid grid-cols-1" />
      </div>
    </div>
  );
};

export default ContactInfo;
