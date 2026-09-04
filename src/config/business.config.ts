export const businessConfig = {
  contact: {
    phone: "+54 2262-535321",
    whatsapp: "+54 9 2262 535321",
    email: "infohotelparque@gmail.com",
    address: "Calle 8 N° 4365, Villa Díaz Vélez, Necochea, Buenos Aires, Argentina",
  },
  rating: {
    score: "9.5/10",
    source: "Booking",
    stars: 2,
  },
  location: {
    beach: "Playa de Los Patos",
    beachDistance: "5 minutos a pie",
    park: "Parque Miguel Lillo",
  },
  checkIn: {
    time: "14:00",
    label: "Check-in desde las 14:00",
  },
  checkOut: {
    time: "10:00",
    label: "Check-out hasta las 10:00",
  },
  wifi: "WiFi gratuito en todas las instalaciones",
  reception: "Recepción 24 horas",
  roomService: "Servicio a la habitación",
  social: {
    instagram: "https://instagram.com/hotelparque",
    facebook: "https://facebook.com/hotelparque",
  },
  booking: {
    url: "https://www.booking.com/hotel/ar/parque-necochea1.html",
    label: "Reservar ahora",
  },
  features: {
    rooms: true,
    reservations: true,
    gallery: true,
    services: true,
    contact: true,
    reviews: true,
    restaurant: false,
    events: false,
    spa: false,
    promotions: false,
    faq: false,
  },
} as const;
