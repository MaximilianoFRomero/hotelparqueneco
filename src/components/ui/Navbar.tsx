"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationConfig } from "@/config/navigation.config";
import { businessConfig } from "@/config/business.config";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo1.jpg"
              alt="Hotel Parque"
              className="h-10 w-10 object-contain rounded"
            />
            <span className="text-2xl font-bold text-primary">
              Hotel Parque
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigationConfig.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="sm">
              Reservar
            </Button>
          </div>

          <button
            className="md:hidden text-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col gap-4 mt-4">
              {navigationConfig.mobile.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="primary" size="sm" className="w-full">
                Reservar
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
