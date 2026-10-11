import { faq } from "@/content/faq";

// Pakai <details>/<summary> bawaan browser: tanpa JavaScript, teks jawaban tetap ada di HTML.
export function Faq() {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {faq.map((item) => (
        <details key={item.q} className="group px-5">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
            <h3>{item.q}</h3>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 shrink-0 transition-transform group-open:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="pb-5 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
