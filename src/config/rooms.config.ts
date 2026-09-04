import { Room } from "@/types";

export const rooms: Room[] = [
  {
    id: "habitacion-doble",
    name: "Habitación Doble",
    shortDescription:
      "Habitación cómoda con cama doble, baño privado, televisor y escritorio.",
    description:
      "Habitación acogedora equipada con una cama queen, baño privado con ducha, televisor LED, escritorio de trabajo y WiFi gratuito. Ideal para parejas que buscan comodidad a pasos de la playa.",
    capacity: 2,
    bedType: "1 Queen",
    size: 18,
    floor: "1°",
    image: "/hab1.jpg",
    gallery: ["/hab1.jpg", "/hab3.jpg", "/hab5.jpg"],
    amenities: [
      "WiFi gratuito",
      "Baño privado",
      "Televisor LED",
      "Escritorio",
      "Roperito",
    ],
    features: [
      "Aire acondicionado",
      "Ropa de cama incluida",
      "Toallas incluidas",
      "Limpieza diaria",
    ],
  },
  {
    id: "habitacion-doble-2-camas",
    name: "Habitación Doble - 2 Camas",
    shortDescription:
      "Habitación con dos camas individuales, baño privado y televisor.",
    description:
      "Habitación práctica con dos camas individuales, baño privado con ducha, televisor LED y WiFi gratuita. Perfecta para amigos o compañeros de viaje que prefieren dormir por separado.",
    capacity: 2,
    bedType: "2 individuales",
    size: 20,
    floor: "1°",
    image: "/hab2.jpg",
    gallery: ["/hab2.jpg", "/hab4.jpg", "/hab6.jpg"],
    amenities: [
      "WiFi gratuito",
      "Baño privado",
      "Televisor LED",
      "Escritorio",
      "Roperito",
    ],
    features: [
      "Aire acondicionado",
      "Ropa de cama incluida",
      "Toallas incluidas",
      "Limpieza diaria",
    ],
  },
  {
    id: "habitacion-triple-estandar",
    name: "Habitación Triple Estándar",
    shortDescription:
      "Espaciosa habitación con cama individual y 1 cama doble. Baño privado, televisor y escritorio.",
    description:
      "Amplia habitación con una cama queen y una cama individual, baño privado con ducha, televisor LED, escritorio y WiFi gratuita. Ideal para familias pequeñas o grupos que necesitan espacio extra.",
    capacity: 3,
    bedType: "1 Queen + 1 individual",
    size: 22,
    floor: "2°",
    image: "/hab3.jpg",
    gallery: ["/hab3.jpg", "/hab1.jpg", "/hab5.jpg"],
    amenities: [
      "WiFi gratuito",
      "Baño privado",
      "Televisor LED",
      "Escritorio",
      "Roperito",
    ],
    features: [
      "Aire acondicionado",
      "Ropa de cama incluida",
      "Toallas incluidas",
      "Limpieza diaria",
    ],
  },
  {
    id: "habitacion-triple-basica",
    name: "Habitación Triple Básica",
    shortDescription:
      "Habitación con tres camas individuales, baño privado y televisor.",
    description:
      "Habitación funcional con tres camas individuales, baño privado con ducha, televisor LED y WiFi gratuita. Ideal para grupos de amigos o viajeros que buscan una opción económica y práctica.",
    capacity: 3,
    bedType: "3 individuales",
    size: 20,
    floor: "1°",
    image: "/hab4.jpg",
    gallery: ["/hab4.jpg", "/hab2.jpg", "/hab6.jpg"],
    amenities: [
      "WiFi gratuito",
      "Baño privado",
      "Televisor LED",
      "Escritorio",
      "Roperito",
    ],
    features: [
      "Aire acondicionado",
      "Ropa de cama incluida",
      "Toallas incluidas",
      "Limpieza diaria",
    ],
  },
  {
    id: "habitacion-cuadruple-estandar",
    name: "Habitación Cuádruple Estándar",
    shortDescription:
      "Habitación con 1 cama doble y 1 litera, baño privado y televisor.",
    description:
      "Habitación espaciosa con una cama queen y una litera (2 plazas), baño privado con ducha, televisor LED, escritorio y WiFi gratuita. Perfecta para familias o grupos de hasta 4 personas.",
    capacity: 4,
    bedType: "1 Queen + 1 litera",
    size: 24,
    floor: "2°",
    image: "/hab5.jpg",
    gallery: ["/hab5.jpg", "/hab3.jpg", "/hab1.jpg"],
    amenities: [
      "WiFi gratuito",
      "Baño privado",
      "Televisor LED",
      "Escritorio",
      "Roperito",
    ],
    features: [
      "Aire acondicionado",
      "Ropa de cama incluida",
      "Toallas incluidas",
      "Limpieza diaria",
    ],
  },
  {
    id: "habitacion-individual",
    name: "Habitación Individual",
    shortDescription:
      "Habitación con cama individual, baño privado y televisor.",
    description:
      "Habitación compacta y funcional con cama individual, baño privado con ducha, televisor LED y WiFi gratuita. La opción ideal para viajeros solos que buscan comodidad a un precio accesible.",
    capacity: 1,
    bedType: "1 individual",
    size: 14,
    floor: "1°",
    image: "/hab6.jpg",
    gallery: ["/hab6.jpg", "/hab4.jpg", "/hab2.jpg"],
    amenities: [
      "WiFi gratuito",
      "Baño privado",
      "Televisor LED",
      "Escritorio",
      "Roperito",
    ],
    features: [
      "Aire acondicionado",
      "Ropa de cama incluida",
      "Toallas incluidas",
      "Limpieza diaria",
    ],
  },
];
