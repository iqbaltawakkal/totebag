import { formatDateId, formatRupiah, site } from "@/config/site";
import {
  aboutSection,
  closingSection,
  detailSection,
  faqSection,
  footer,
  poStrip,
  productsSection,
  stepsSection,
  whySection,
} from "@/content/copy";
import { Faq } from "@/components/Faq";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { HeroCarousel } from "@/components/HeroCarousel";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { Steps } from "@/components/Steps";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";
import { waLink } from "@/config/site";
import { InstagramIcon } from "@/components/InstagramIcon";

function Section({
  id,
  title,
  intro,
  className = "",
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-judul`} className={`scroll-mt-4 px-4 py-14 sm:px-6 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <h2 id={`${id}-judul`} className="text-2xl font-bold sm:text-3xl">
          {title}
        </h2>
        {intro && <p className="mt-2 max-w-2xl text-muted">{intro}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  const year = site.lastUpdated.slice(0, 4);
  return (
    <>
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Langsung ke konten
      </a>
      {/* Navbar transparan di atas hero. Gradasi gelap tipis menjaga teks putih tetap terbaca di foto terang. */}
      <header className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/60 via-black/25 to-transparent px-4 pb-6 text-white sm:px-6">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3">
          <a href="#" className="nav-link min-w-0 truncate text-lg font-bold">
            {site.brandName}
          </a>
          <nav aria-label="Menu utama" className="shrink-0">
            <ul className="flex text-[15px] font-medium whitespace-nowrap sm:gap-4">
              <li>
                <a href="#pilihan-model" className="inline-flex min-h-11 items-center px-2 nav-link">
                  Model
                </a>
              </li>
              <li>
                <a href="#cara-pesan" className="inline-flex min-h-11 items-center px-2 nav-link">
                  Cara Pesan
                </a>
              </li>
              <li>
                <a href="#faq" className="inline-flex min-h-11 items-center px-2 nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="konten">
        <HeroCarousel />

        {/* Info PO strip */}
        <aside aria-label="Info pre-order" className="bg-sand px-4 py-4 sm:px-6">
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center">
            <li>
              <span className="rounded-full bg-ink px-3 py-1 text-sm font-bold tracking-wide text-white uppercase">
                {poStrip.label}
              </span>
            </li>
            <li>{poStrip.made}</li>
            <li className="font-semibold">{poStrip.estimate}</li>
            {poStrip.deadline && <li className="font-semibold">{poStrip.deadline}</li>}
          </ul>
        </aside>

        <Section id="pilihan-model" title={productsSection.title} intro={productsSection.intro}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Section>

        <Section id="kenapa" title={whySection.title} className="bg-white">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whySection.points.map((pt) => (
              <li key={pt.title} className="rounded-2xl bg-cream p-5">
                <h3 className="font-bold">{pt.title}</h3>
                <p className="mt-1 text-muted">{pt.text}</p>
              </li>
            ))}
          </ul>
          <WhatsAppButton message={whySection.message} location="kenapa" className="mt-8">
            {whySection.cta}
          </WhatsAppButton>
        </Section>

        <Section id="cara-pesan" title={stepsSection.title}>
          <Steps />
          <WhatsAppButton message={stepsSection.message} location="cara-pesan" className="mt-8">
            {stepsSection.cta}
          </WhatsAppButton>
        </Section>

        <Section id="detail-produk" title={detailSection.title} intro={detailSection.intro} className="bg-white">
          <div
            className="overflow-x-auto rounded-2xl border border-line"
            tabIndex={0}
            role="region"
            aria-label="Tabel detail produk, bisa digeser ke samping"
          >
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Ukuran, bahan, kapasitas, dan harga tiap model totebag</caption>
              <thead className="bg-sand">
                <tr>
                  <th scope="col" className="p-3 font-semibold">
                    <span className="sr-only">Detail</span>
                  </th>
                  {site.products.map((p) => (
                    <th key={p.slug} scope="col" className="p-3 font-semibold">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(Object.keys(detailSection.rows) as (keyof typeof detailSection.rows)[]).map((key) => (
                  <tr key={key} className="border-t border-line align-top">
                    <th scope="row" className="p-3 font-semibold whitespace-nowrap">
                      {detailSection.rows[key]}
                    </th>
                    {site.products.map((p) => (
                      <td key={p.slug} className="p-3">
                        {key === "price" ? formatRupiah(p.price) : p[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-10 text-xl font-bold">{detailSection.careTitle}</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {detailSection.care.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <WhatsAppButton message={detailSection.message} location="detail-produk" variant="outline" className="mt-8">
            {detailSection.cta}
          </WhatsAppButton>
        </Section>

        {/* TODO: isi dengan testimoni asli. Jangan pakai testimoni, jumlah order, atau review palsu. */}



        <Section id="faq" title={faqSection.title} >
          <Faq />
          <WhatsAppButton message={faqSection.message} location="faq" variant="outline" className="mt-8">
            {faqSection.cta}
          </WhatsAppButton>
        </Section>

        <section aria-labelledby="penutup-judul" className="bg-ink px-4 py-16 text-center text-white sm:px-6">
          <h2 id="penutup-judul" className="text-2xl font-bold sm:text-3xl">
            {closingSection.title}
          </h2>
          <p className="mt-2 text-white/85">{closingSection.text}</p>
          <WhatsAppButton message={closingSection.message} location="penutup" className="mt-6 focus-visible:outline-white">
            {closingSection.cta}
          </WhatsAppButton>
        </section>
      </main>

      <footer className="px-4 pt-10 pb-24 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold">{site.brandName}</p>
            <p className="text-muted">{footer.tagline}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 gap-1.5 items-center underline">
                <InstagramIcon className="h-4 w-4"  />
                Instagram
              </a>
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-location="footer"
                className="inline-flex min-h-11 items-center gap-1.5 underline"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-sm text-muted">
          © {year} {site.brandName}
        </p>
      </footer>

      <FloatingWhatsApp />
      <JsonLd />
    </>
  );
}
