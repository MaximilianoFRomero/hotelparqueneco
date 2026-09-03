import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
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
        <p className="text-muted mb-4 line-clamp-2">{room.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted">
            Hasta {room.capacity} huéspedes
          </span>
        </div>
        <div className="flex items-center justify-between">
          {/* <span className="text-2xl font-bold text-secondary">
            USD ${room.price}
            <span className="text-sm font-normal text-muted">/noche</span>
          </span> */}
          <Button variant="primary" size="sm">
            Ver detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
