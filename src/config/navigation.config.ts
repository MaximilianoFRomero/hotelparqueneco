export interface NavItem {
  label: string;
  href: string;
}

export const navigationConfig = {
  main: [
    { label: "Inicio", href: "/" },
    { label: "Habitaciones", href: "/habitaciones" },
    { label: "Servicios", href: "/servicios" },
    { label: "Galería", href: "/galeria" },
    { label: "Contacto", href: "/contacto" },
  ] as NavItem[],
  mobile: [
    { label: "Inicio", href: "/" },
    { label: "Habitaciones", href: "/habitaciones" },
    { label: "Servicios", href: "/servicios" },
    { label: "Galería", href: "/galeria" },
    { label: "Contacto", href: "/contacto" },
  ] as NavItem[],
} as const;
