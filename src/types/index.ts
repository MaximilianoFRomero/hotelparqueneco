export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
  amenities: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  checkIn?: string;
  checkOut?: string;
}
