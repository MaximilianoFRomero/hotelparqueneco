import Link from "next/link";
import { navigationConfig } from "@/config/navigation.config";
import { businessConfig } from "@/config/business.config";

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hotel Parque</h3>
            <p className="text-gray-300">
              Tu hogar lejos de casa en Necochea.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {navigationConfig.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{businessConfig.contact.phone}</li>
              <li>{businessConfig.contact.email}</li>
              <li>{businessConfig.contact.address}</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href={businessConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={businessConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Hotel Parque. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
