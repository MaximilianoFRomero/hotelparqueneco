import { Metadata } from "next";
import { Card, CardImage } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Galería - Hotel Parque",
  description: "Mirá las fotos de Hotel Parque en Necochea.",
};

const galleryImages = [
  { id: "1", src: "/gallery/img-1.jpg", alt: "Fachada del hotel", category: "Exterior" },
  { id: "2", src: "/gallery/img-2.jpg", alt: "Pileta del hotel", category: "Instalaciones" },
  { id: "3", src: "/gallery/img-3.jpg", alt: "Habitación doble", category: "Habitaciones" },
  { id: "4", src: "/gallery/img-4.jpg", alt: "Desayuno buffet", category: "Gastronomía" },
  { id: "5", src: "/gallery/img-5.jpg", alt: "Jardín del hotel", category: "Exterior" },
  { id: "6", src: "/gallery/img-6.jpg", alt: "Recepción", category: "Interior" },
  { id: "7", src: "/gallery/img-7.jpg", alt: "Suite familiar", category: "Habitaciones" },
  { id: "8", src: "/gallery/img-8.jpg", alt: "Parrilla", category: "Instalaciones" },
  { id: "9", src: "/gallery/img-9.jpg", alt: "Vista del parque", category: "Exterior" },
];

export default function GaleriaPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Galería</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Conocé nuestras instalaciones y espacios
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <CardImage src={image.src} alt={image.alt} />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
