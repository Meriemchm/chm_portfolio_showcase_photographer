interface ContactItemsProps {
  items: { title: string; icon: React.ComponentType<any>; description: string; }[];
  size?: number;
}

export const ContactItems: React.FC<ContactItemsProps> = ({
  items,
  size = 20, 
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-start justify-start gap-6">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="flex items-start gap-3">
            <Icon size={size} />
            <div className="flex flex-col">
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
