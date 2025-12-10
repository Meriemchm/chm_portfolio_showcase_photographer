interface CornerProps {
  className?: string;
}

export default function Corner({ className }: CornerProps) {
  return (
    <div className={`w-8 h-8 ${className || ""}`}>
      <div className="absolute left-0 bottom-0 w-5 h-0.5 bg-white"></div>
      <div className="absolute left-0 bottom-0 w-0.5 h-5 bg-white"></div>
    </div>
  );
}
