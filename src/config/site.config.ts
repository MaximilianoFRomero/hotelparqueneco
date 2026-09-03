export const siteConfig = {
  name: "Hotel Parque",
  description:
    "Hotel 2 estrellas en Necochea a 5 minutos a pie de la Playa de Los Patos. WiFi gratuito, recepción 24hs y habitaciones familiares.",
  url: "https://hotelparque.com",
  location: {
    street: "Calle 8 N° 4365",
    neighborhood: "Villa Díaz Vélez",
    city: "Necochea",
    province: "Buenos Aires",
    country: "Argentina",
  },
  og: {
    image: "/og-image.jpg",
    type: "website",
  },
  locales: {
    default: "es",
    available: ["es", "en"],
  },
} as const;
