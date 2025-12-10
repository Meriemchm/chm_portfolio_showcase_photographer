import { Container } from "@/components/ui/container";
import { FooterFirstRow } from "./footer-first-row";
import { FooterSecondRow } from "./footer-second-row";

export const Footer = () => {
  return (
    <div className=" bg-black text-white ">
      {/*Footer container */}
      <Container className="py-8">
        <div className="flex flex-col  items-center justify-center">
          <FooterFirstRow />
          <FooterSecondRow />
        </div>
      </Container>
    </div>
  );
};
