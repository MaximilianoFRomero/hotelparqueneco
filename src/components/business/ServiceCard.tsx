import { Card, CardContent } from "@/components/ui/Card";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="text-center">
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-lg font-semibold text-text mb-2">{service.name}</h3>
        <p className="text-muted text-sm">{service.description}</p>
      </CardContent>
    </Card>
  );
}
