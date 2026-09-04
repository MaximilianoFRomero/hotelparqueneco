import { Metadata } from "next";
import { RoomCard } from "@/components/business/RoomCard";
import { rooms } from "@/config/rooms.config";
export const metadata: Metadata = {
  title: "Habitaciones - Hotel Parque",
  description: "Descubrí nuestras habitaciones en Hotel Parque, Necochea.",
};

export default function HabitacionesPage() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestras Habitaciones</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Encontrá la habitación perfecta para tu estadía en Necochea
          </p>

        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
