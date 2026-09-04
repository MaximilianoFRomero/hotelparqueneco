export interface Room {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  capacity: number;
  bedType: string;
  size: number;
  floor: string;
  image: string;
  gallery: string[];
  amenities: string[];
  features: string[];
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
