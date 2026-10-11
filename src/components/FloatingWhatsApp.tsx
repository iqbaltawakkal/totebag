import { waLink } from "@/config/site";
import { floatingLabel } from "@/content/copy";
import { WhatsAppIcon } from "./WhatsAppButton";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={floatingLabel}
      data-wa-location="floating"
      className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-wa text-wa-ink shadow-lg ring-1 ring-black/10 transition-colors hover:bg-wa-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
