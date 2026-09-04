import { Metadata } from "next";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

export const metadata: Metadata = {
  title: "Galería - Hotel Parque",
  description: "Mirá las fotos de Hotel Parque en Necochea.",
};

const galleryImages = [
  { src: "/gal1.jpg", alt: "Fachada del hotel" },
  { src: "/gal2.jpg", alt: "Pileta del hotel" },
  { src: "/gal3.jpg", alt: "Habitación doble" },
  { src: "/gal4.jpg", alt: "Desayuno buffet" },
  { src: "/gal5.jpg", alt: "Jardín del hotel" },
  { src: "/gal6.jpg", alt: "Recepción" },
];

export default function GaleriaPage() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Galería</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Conocé nuestras instalaciones y espacios
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageLightbox images={galleryImages} />
        </div>
      </section>
    </>
  );
}
