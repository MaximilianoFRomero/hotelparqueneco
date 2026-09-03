"use client";

import { Button } from "@/components/ui/Button";
import { businessConfig } from "@/config/business.config";

interface BookingButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function BookingButton({
  variant = "primary",
  size = "md",
}: BookingButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => window.open(businessConfig.booking.url, "_blank")}
    >
      {businessConfig.booking.label}
    </Button>
  );
}
