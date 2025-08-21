import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  features: string[];
}

export default function ServiceCard({
  title,
  description,
  price,
  icon: Icon,
  features,
}: ServiceCardProps) {
  return (
    <div className="glass-effect rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <Icon className="h-10 w-10 text-primary-600" />
        <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
          {price}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-600 mr-2">•</span>
            <span className="text-sm text-neutral-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
