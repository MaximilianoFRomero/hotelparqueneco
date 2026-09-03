"use client";

import { useEffect, useState } from "react";

const HERO_IMAGES = [
  { src: "/hotel1.jpg", alt: "Hotel Parque - Exterior" },
  { src: "/hotel2.jpg", alt: "Hotel Parque - Instalaciones" },
  { src: "/hotel3.jpg", alt: "Hotel Parque - Habitación" },
  { src: "/hotel4.jpg", alt: "Hotel Parque - Vistas" },
];

interface HeroCarouselProps {
  interval?: number;
}

export function HeroCarousel({ interval = 5000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {HERO_IMAGES.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}