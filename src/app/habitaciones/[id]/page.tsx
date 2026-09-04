import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { rooms } from "@/config/rooms.config";
import { businessConfig } from "@/config/business.config";
import { notFound } from "next/navigation";

interface RoomDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return rooms.map((room) => ({ id: room.id }));
}

export async function generateMetadata({
  params,
}: RoomDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id);
  if (!room) return {};

  return {
    title: `${room.name} - Hotel Parque Necochea`,
    description: room.shortDescription,
    openGraph: {
      title: `${room.name} - Hotel Parque Necochea`,
      description: room.shortDescription,
      images: [{ url: room.image, width: 1200, height: 630 }],
    },
  };
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id);

  if (!room) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] bg-primary">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <nav aria-label="Breadcrumb">
              <ol className="mb-3 flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/habitaciones"
                    className="hover:text-white transition-colors"
                  >
                    Habitaciones
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white font-medium">
                  {room.name}
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {room.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Detalle */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contenido principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Descripción */}
              <div>
                <h2 className="text-2xl font-bold text-text mb-4">
                  Sobre esta habitación
                </h2>
                <p className="text-muted leading-relaxed">
                  {room.description}
                </p>
              </div>

              {/* Datos de la habitación */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-surface rounded-lg p-4 text-center">
                  <span className="block text-2xl mb-1" aria-hidden="true">
                    👥
                  </span>
                  <span className="block text-sm font-medium text-text">
                    {room.capacity} {room.capacity === 1 ? "huésped" : "huéspedes"}
                  </span>
                </div>
                <div className="bg-surface rounded-lg p-4 text-center">
                  <span className="block text-2xl mb-1" aria-hidden="true">
                    🛏️
                  </span>
                  <span className="block text-sm font-medium text-text">
                    {room.bedType}
                  </span>
                </div>
                <div className="bg-surface rounded-lg p-4 text-center">
                  <span className="block text-2xl mb-1" aria-hidden="true">
                    📐
                  </span>
                  <span className="block text-sm font-medium text-text">
                    {room.size} m²
                  </span>
                </div>
                <div className="bg-surface rounded-lg p-4 text-center">
                  <span className="block text-2xl mb-1" aria-hidden="true">
                    🏢
                  </span>
                  <span className="block text-sm font-medium text-text">
                    Piso {room.floor}
                  </span>
                </div>
              </div>

              {/* Galería */}
              <div>
                <h2 className="text-2xl font-bold text-text mb-4">Galería</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {room.gallery.map((src, index) => (
                    <div
                      key={src}
                      className="relative aspect-video rounded-lg overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt={`${room.name} - Foto ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold text-text mb-4">
                  Servicios de la habitación
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-3">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary text-xs"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span className="text-muted">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Características */}
              <div>
                <h2 className="text-2xl font-bold text-text mb-4">
                  Lo que incluye
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary text-xs"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar de reserva */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-surface rounded-2xl p-6 shadow-md space-y-6">
                <div className="space-y-2 text-sm text-muted">
                  <p>{businessConfig.checkIn.label}</p>
                  <p>{businessConfig.checkOut.label}</p>
                  <p>{businessConfig.wifi}</p>
                </div>

                <a
                  href={businessConfig.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-secondary text-center py-3 font-semibold text-white transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  Reservar en Booking
                </a>

                <p className="text-xs text-muted text-center">
                  Reserva gestionada a través de Booking.com
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
