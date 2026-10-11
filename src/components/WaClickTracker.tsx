"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Satu listener untuk semua link WhatsApp, supaya tombolnya tetap server component.
// Hubungkan GA4 / Meta Pixel ke event "whatsapp_click" lewat Google Tag Manager.
export function WaClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[data-wa-location]");
      if (!link) return;
      window.dataLayer?.push({ event: "whatsapp_click", location: link.dataset.waLocation });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
