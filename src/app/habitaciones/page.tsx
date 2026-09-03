import { Metadata } from "next";
import { RoomCard } from "@/components/business/RoomCard";
import { Room } from "@/types";

export const metadata: Metadata = {
  title: "Habitaciones - Hotel Parque",
  description: "Descubrí nuestras habitaciones en Hotel Parque, Necochea.",
};

const rooms: Room[] = [
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
      "Espaciosa habitación familiar con baño privado, televisor y escritorio. Perfecta para familias.",
    price: 40,
    capacity: 4,
    image: "/rooms/room-2.jpg",
    amenities: ["WiFi", "Baño privado", "TV", "Escritorio"],
  },
  {
    id: "3",
    name: "Habitación Triple",
    description:
      "Habitación con tres camas individuales, baño privado y televisor. Ideal para grupos de amigos.",
    price: 38,
    capacity: 3,
    image: "/rooms/room-3.jpg",
    amenities: ["WiFi", "Baño privado", "TV", "Escritorio"],
  },
  {
    id: "4",
    name: "Habitación Twin",
    description:
      "Habitación con dos camas individuales, baño privado y escritorio. Comodidad y tranquilidad.",
    price: 34,
    capacity: 2,
    image: "/rooms/room-4.jpg",
    amenities: ["WiFi", "Baño privado", "TV", "Escritorio"],
  },
];

export default function HabitacionesPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestras Habitaciones</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Encontrá la habitación perfecta para tu estadía en Necochea
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
