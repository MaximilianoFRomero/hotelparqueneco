"use client";

import { useState } from "react";

export function DemoPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Aviso de página demostrativa"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <h2 className="mb-4 text-center text-xl font-bold text-[#3B3B3B]">
          Página demostrativa para Hotel Parque Necochea
        </h2>
        <p className="mb-2 text-center text-[#3B3B3B]">
          El siguiente sitio es a modo demostrativo, los datos e imágenes
          utilizados pueden no ser fieles a la realidad.
        </p>
        <p className="mb-6 text-center text-[#3B3B3B]">
          El sitio expira en 14 días.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="mx-auto block rounded-lg bg-[#97262A] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7a1e22] focus:outline-none focus:ring-2 focus:ring-[#97262A] focus:ring-offset-2"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
