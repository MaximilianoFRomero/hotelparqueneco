export const businessConfig = {
  contact: {
    phone: "+54 2262 XXX-XXXX",
    email: "info@hotelparque.com",
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
  price: {
    currency: "USD",
    min: 34,
    max: 40,
    rangeLabel: "Desde $34-$40 USD por noche",
  },
  social: {
    instagram: "https://instagram.com/hotelparque",
    facebook: "https://facebook.com/hotelparque",
  },
  booking: {
    url: "https://www.booking.com/hotel/ar/parque-necochea1.es.html?aid=2405612&label=brave_nonbrand_hotel_ar_1db8938b-7fc3-41da-9621-ad358b086448_3f7231&sid=967353f4e3ec32b4037770c3520a267c&dest_id=-1005197&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1788446937&srpvid=af3e682ceaf7026f&type=total&ucfs=1&",
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
