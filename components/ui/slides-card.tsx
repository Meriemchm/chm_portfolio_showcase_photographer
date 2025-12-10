import Image from "next/image";

interface SlidesCardProps {
  item: {
    title: string;
    description: string;
    icon: string;
    image: string;
  };
}

export const SlidesCard = ({ item }: SlidesCardProps) => {
  return (
    <div className="absolute bottom-0 bg-white p-4 md:p-6 max-w-lg">
      <div className="flex items-center gap-2 mb-3">
        <Image
          src={item.icon}
          alt="icon"
          width={22}
          height={22}
          className="w-auto h-auto"
        />
        <h2 className="text-xl font-semibold text-brand">{item.title}</h2>
      </div>

      <p className="text-sm text-grey-35 leading-relaxed">{item.description}</p>
    </div>
  );
};
