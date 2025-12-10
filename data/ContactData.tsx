import Link from "next/link";

export const ContactData = [
  {
    id: 1,
    description: (
      <p className="text-start pt-2 text-sm max-w-30 text-white">
        +231 500 00 00 00{" "}
      </p>
    ),
    icon: "/Icons/contact-phone.svg",
    style: "text-[#77697D]",
  },

  {
    id: 2,
    description: (
      <p className="text-start pt-2 text-sm max-w-30 text-white">
        info@iDigital.com{" "}
      </p>
    ),
    icon: "/Icons/contact-email.svg",
    style: "text-primary",
  },
  {
    id: 3,
    description: (
      <>
        <div className="flex gap-2 text-start pt-2 text-sm max-w-30 text-white">
          {" "}
          <Link href="/" className="hover:scale-105 duration-200">
            Linkedin
          </Link>
          <Link href="/" className="hover:scale-105 duration-200">
            Facebook
          </Link>
        </div>
      </>
    ),
    icon: "/Icons/contact-social.svg",
    style: "text-[#77697D]",
  },
];
