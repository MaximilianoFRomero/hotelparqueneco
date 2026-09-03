import { Metadata } from "next";
import { ServiceCard } from "@/components/business/ServiceCard";
import { businessConfig } from "@/config/business.config";
import { Service } from "@/types";

export const metadata: Metadata = {
  title: "Servicios - Hotel Parque",
  description:
    "Descubrí los servicios que ofrece Hotel Parque en Necochea: WiFi gratuito, recepción 24hs, servicio a la habitación y más.",
};

const services: Service[] = [
  {
    id: "1",
    name: "WiFi Gratuito",
    description:
      "Conexión a internet de alta velocidad disponible en todas las instalaciones del hotel, incluyendo habitaciones y áreas comunes.",
    icon: "📶",
  },
  {
    id: "2",
    name: "Recepción 24hs",
    description:
      "Nuestro personal está disponible las 24 horas para asistirte con cualquier necesidad durante tu estadía.",
    icon: "🕐",
  },
  {
    id: "3",
    name: "Servicio a la Habitación",
    description:
      "Solicitá lo que necesites desde la comodidad de tu habitación. Atención en horarios convenientes.",
    icon: "🛎️",
  },
  {
    id: "4",
    name: "Habitaciones Familiares",
    description:
      "Espacios amplios y cómodos pensados para familias, con baño privado, televisor y escritorio.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: "5",
    name: "Ubicación Inmejorable",
    description:
      "A solo 5 minutos a pie de la Playa de Los Patos y cerca del Parque Miguel Lillo.",
    icon: "📍",
  },
  {
    id: "6",
    name: "Baño Privado",
    description:
      "Todas las habitaciones cuentan con baño privado para total comodidad y privacidad.",
    icon: "🚿",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Todo lo que necesitás para una estadía perfecta
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-lg p-6 text-center">
              <h3 className="font-semibold text-text mb-2">Check-in</h3>
              <p className="text-muted">{businessConfig.checkIn.label}</p>
            </div>
            <div className="bg-surface rounded-lg p-6 text-center">
              <h3 className="font-semibold text-text mb-2">Check-out</h3>
              <p className="text-muted">{businessConfig.checkOut.label}</p>
            </div>
            <div className="bg-surface rounded-lg p-6 text-center">
              <h3 className="font-semibold text-text mb-2">Calificación</h3>
              <p className="text-muted">
                ★ {businessConfig.rating.score} en {businessConfig.rating.source}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
