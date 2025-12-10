import Image from "next/image";
interface ContactItemsProps {
  items: { title: string; icon: string; description: string }[];
  size?: number;
}

export const ContactItems: React.FC<ContactItemsProps> = ({
  items,
  size = 16,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-start justify-start gap-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <Image
            src={item.icon}
            alt={item.title}
            height={size}
            width={size}
            className="w-auto h-auto"
          />
          <div className="flex flex-col">
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
