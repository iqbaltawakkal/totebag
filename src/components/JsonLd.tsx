import { site, waLink } from "@/config/site";
import { meta } from "@/content/copy";
import { faq } from "@/content/faq";

const url = (path = "/") => new URL(path, site.domain).toString();
const orgId = url("/#organization");
const siteId = url("/#website");

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.brandName,
        url: url(),
        logo: url("/images/logo.png"),
        description: `${site.brandName} menjual totebag kanvas dengan sistem pre-order dari ${site.city}.`,
        sameAs: [site.instagram],
        address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "ID" },
        areaServed: { "@type": "Country", name: "Indonesia" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: `+${site.whatsappNumber}`,
          url: waLink(),
          availableLanguage: ["id"],
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        name: site.brandName,
        url: url(),
        inLanguage: "id-ID",
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": url("/#webpage"),
        url: url(),
        name: meta.title,
        description: meta.description,
        inLanguage: "id-ID",
        isPartOf: { "@id": siteId },
        about: { "@id": orgId },
        dateModified: site.lastUpdated,
        breadcrumb: { "@id": url("/#breadcrumb") },
      },
      {
        "@type": "BreadcrumbList",
        "@id": url("/#breadcrumb"),
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Beranda", item: url() }],
      },
      ...site.products.map((p) => ({
        "@type": "Product",
        "@id": url(`/#produk-${p.slug}`),
        name: p.name,
        description: `${p.description} Sistem pre-order, estimasi produksi ${site.poEstimate}.`,
        image: url(p.image),
        sku: p.slug,
        brand: { "@type": "Brand", name: site.brandName },
        material: p.material,
        color: p.colors.map((c) => c.name).join(", "),
        size: p.size,
        offers: {
          "@type": "Offer",
          url: url("/#pilihan-model"),
          price: p.price,
          priceCurrency: "IDR",
          availability: "https://schema.org/PreOrder",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@id": orgId },
        },
      })),
      {
        "@type": "FAQPage",
        "@id": url("/#faq"),
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c") }}
    />
  );
}
