import React from "react";
import { ContactItems } from "../ui/contact-items";
import { ContactFooterData } from "@/data/ContactFooterData";

export const FooterSecondRow = () => {
  return (
    <div className="border-t py-8 border-neutral-300 flex flex-col md:flex-row md:justify-between w-full items-start md:items-center gap-6 md:gap-18 ">
      <ContactItems items={ContactFooterData} />
      <p className="md:text-base text-sm text-right">
        © {new Date().getFullYear()} Anna. All rights reserved.
      </p>
    </div>
  );
};
