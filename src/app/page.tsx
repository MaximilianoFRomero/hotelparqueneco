import { Button } from "@/components/ui/Button";
import { BookingButton } from "@/components/business/BookingButton";
import { BookingWidget } from "@/components/business/BookingWidget";
import { HeroCarousel } from "@/components/business/HeroCarousel";
import { RoomCard } from "@/components/business/RoomCard";
import { ServiceCard } from "@/components/business/ServiceCard";
import { ReviewCard } from "@/components/business/ReviewCard";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { businessConfig } from "@/config/business.config";
import { Room, Service, Review } from "@/types";

const sampleRooms: Room[] = [
  {
    id: "1",
    name: "Habitación Doble",
    description:
      "Habitación cómoda con cama doble, baño privado, televisor y escritorio. Ideal para parejas.",
    price: 34,
    capacity: 2,
    image: "/rooms/room-1.jpg",
    amenities: ["WiFi", "Baño privado", "TV", "Escritorio"],
  },
  {
    id: "2",
    name: "Habitación Familiar",
    description:
      "Espaciosa habitación familiar con baño privado. Perfecta para familias.",
    price: 40,
    capacity: 4,
    image: "/rooms/room-2.jpg",
    amenities: ["WiFi", "Baño privado", "TV", "Escritorio"],
  },
  {
    id: "3",
    name: "Habitación Triple",
    description:
      "Habitación con tres camas individuales, baño privado y televisor.",
    price: 38,
    capacity: 3,
    image: "/rooms/room-3.jpg",
    amenities: ["WiFi", "Baño privado", "TV", "Escritorio"],
  },
];

const sampleServices: Service[] = [
  {
    id: "1",
    name: "WiFi Gratuito",
    description: "Conexión a internet en todas las instalaciones del hotel.",
    icon: "📶",
  },
  {
    id: "2",
    name: "Recepción 24hs",
    description: "Atención disponible las 24 horas todos los días.",
    icon: "🕐",
  },
  {
    id: "3",
    name: "Servicio a la Habitación",
    description: "Atención directa desde la comodidad de tu habitación.",
    icon: "🛎️",
  },
  {
    id: "4",
    name: "Ubicación Excelente",
    description:
      "A 5 minutos a pie de la Playa de Los Patos y cerca del Parque Miguel Lillo.",
    icon: "📍",
  },
];

const sampleReviews: Review[] = [
  {
    id: "1",
    author: "María García",
    content:
      "Un lugar hermoso, muy limpio y con un personal excelente. Volveré sin dudas.",
    rating: 5,
    date: "Agosto 2026",
  },
  {
    id: "2",
    author: "Carlos López",
    content:
      "Perfecto para familias. Los chicos la pasaron genial en la pileta.",
    rating: 5,
    date: "Julio 2026",
  },
];

const galleryImages = [
  { id: "1", src: "/gallery/img-1.jpg", alt: "Fachada del hotel" },
  { id: "2", src: "/gallery/img-2.jpg", alt: "Pileta del hotel" },
  { id: "3", src: "/gallery/img-3.jpg", alt: "Habitación doble" },
  { id: "4", src: "/gallery/img-4.jpg", alt: "Desayuno buffet" },
  { id: "5", src: "/gallery/img-5.jpg", alt: "Jardín del hotel" },
  { id: "6", src: "/gallery/img-6.jpg", alt: "Recepción" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-primary">
        <HeroCarousel />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">
              <div className="mb-4 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-sm bg-secondary px-3 py-1 rounded-full font-medium">
                  ★ {businessConfig.rating.score} en {businessConfig.rating.source}
                </span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full font-medium">
                  {businessConfig.rating.stars} estrellas
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hotel Parque
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto lg:mx-0">
                Tu hogar lejos de casa en Necochea
              </p>
              <p className="text-lg text-gray-200 mb-3 max-w-lg mx-auto lg:mx-0">
                A {businessConfig.location.beachDistance} de la {businessConfig.location.beach} y cerca del Parque Miguel Lillo.
              </p>
              <p className="text-lg text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0">
                {businessConfig.contact.address}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Habitaciones destacadas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text mb-12">
            Nuestras Habitaciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text mb-12">
            Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Galería preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text mb-12">
            Galería
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <CardImage src={image.src} alt={image.alt} />
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">Ver galería completa</Button>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text mb-12">
            Lo que dicen nuestros huéspedes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sampleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text mb-12">
            Ubicación
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Encuéntranos</h3>
              <p className="text-muted mb-4">
                Dirección en Necochea, Buenos Aires, Argentina
              </p>
              <p className="text-muted mb-4">+54 2262 XXX-XXXX</p>
              <p className="text-muted">info@hotelparque.com</p>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <span className="text-muted">Mapa de Google aquí</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para tu estadía?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Reservá ahora y descubrí la experiencia Hotel Parque
          </p>
          <BookingButton size="lg" />
        </div>
      </section>
    </>
  );
}
