"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    checkIn: "",
    checkOut: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    console.log("Form submitted:", formData);
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Nombre"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        label="Teléfono"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Check-in"
          type="date"
          value={formData.checkIn}
          onChange={(e) =>
            setFormData({ ...formData, checkIn: e.target.value })
          }
        />
        <Input
          label="Check-out"
          type="date"
          value={formData.checkOut}
          onChange={(e) =>
            setFormData({ ...formData, checkOut: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-text">Mensaje</label>
        <textarea
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
      </div>
      {status === "success" && (
        <p className="text-success font-medium">
          ¡Gracias por tu mensaje! Te responderemos a la brevedad.
        </p>
      )}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}
