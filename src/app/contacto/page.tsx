import { Metadata } from "next";
import { ContactForm } from "@/components/business/ContactForm";
import { businessConfig } from "@/config/business.config";

export const metadata: Metadata = {
  title: "Contacto - Hotel Parque",
  description:
    "Contactá a Hotel Parque en Necochea. Calle 8 N° 4365, a 5 minutos de la Playa de Los Patos.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            ¿Tenés alguna consulta? Escribinos
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Envianos un mensaje</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              <div className="space-y-6">
                <div className="bg-surface rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Teléfono</h3>
                  <p className="text-muted">{businessConfig.contact.phone}</p>
                </div>
                <div className="bg-surface rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted">{businessConfig.contact.email}</p>
                </div>
                <div className="bg-surface rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Dirección</h3>
                  <p className="text-muted">{businessConfig.contact.address}</p>
                  <p className="text-muted mt-2">
                    A {businessConfig.location.beachDistance} de la{" "}
                    {businessConfig.location.beach}
                  </p>
                </div>
                <div className="bg-surface rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Horarios de estadía</h3>
                  <p className="text-muted">{businessConfig.checkIn.label}</p>
                  <p className="text-muted mt-2">{businessConfig.checkOut.label}</p>
                </div>
                <div className="bg-surface rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Calificación</h3>
                  <p className="text-muted">
                    ★ {businessConfig.rating.score} en{" "}
                    {businessConfig.rating.source}
                  </p>
                </div>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-muted">Mapa de Google aquí</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
