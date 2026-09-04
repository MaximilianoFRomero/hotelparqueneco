"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { businessConfig } from "@/config/business.config";

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const url = new URL(businessConfig.booking.url);

    if (checkIn) {
      const ci = new Date(checkIn);
      url.searchParams.set("checkin_year", ci.getFullYear().toString());
      url.searchParams.set("checkin_month", (ci.getMonth() + 1).toString());
      url.searchParams.set("checkin_monthday", ci.getDate().toString());
    }

    if (checkOut) {
      const co = new Date(checkOut);
      url.searchParams.set("checkout_year", co.getFullYear().toString());
      url.searchParams.set("checkout_month", (co.getMonth() + 1).toString());
      url.searchParams.set("checkout_monthday", co.getDate().toString());
    }

    url.searchParams.set("group_adults", adults.toString());
    url.searchParams.set("group_children", children.toString());
    url.searchParams.set("no_rooms", rooms.toString());
    url.searchParams.set("req_adults", adults.toString());
    url.searchParams.set("req_children", children.toString());

    window.open(url.toString(), "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-xl p-6 space-y-5 w-full max-w-sm"
    >
      <h2 className="text-xl font-bold text-text">Reservá tu estadía</h2>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Llegada"
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
        />
        <Input
          label="Salida"
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-text">Adultos</label>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-text">Niños</label>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-text">
            Habitaciones
          </label>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
          >
            {[1, 2, 3].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Ver disponibilidad
      </Button>
      <p className="text-xs text-center text-muted">
        Reserva gestionada a través de Booking.com
      </p>
    </form>
  );
}
