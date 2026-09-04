import Link from "next/link";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { Room } from "@/types";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Card>
      <CardImage src={room.image} alt={room.name} />
      <CardContent>
        <h3 className="text-xl font-semibold text-text mb-2">{room.name}</h3>
        <p className="text-muted mb-4 line-clamp-2">
          {room.shortDescription}
        </p>
        <div className="flex items-center gap-4 mb-4 text-sm text-muted">
          <span>
            Hasta {room.capacity} {room.capacity === 1 ? "huésped" : "huéspedes"}
          </span>
          <span aria-hidden="true">·</span>
          <span>{room.bedType}</span>
        </div>
        <Link
          href={`/habitaciones/${room.id}`}
          className="inline-block rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        >
          Ver detalles
        </Link>
      </CardContent>
    </Card>
  );
}
