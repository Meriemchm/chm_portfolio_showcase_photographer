import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionWrapper({
  children,
  className,
  style,
}: SectionWrapperProps) {
  return (
    <div className={cn("min-h-screen py-18", className)} style={style}>
      <Container className="">{children}</Container>
    </div>
  );
}
