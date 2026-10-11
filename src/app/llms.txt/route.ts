import { formatDateId, formatRupiah, maxPrice, minPrice, site, waLink } from "@/config/site";
import { aboutSection } from "@/content/copy";
import { faq } from "@/content/faq";

// Disajikan di /llms.txt. Dibuat dari site.ts, jadi faktanya selalu sama dengan halaman.
export function GET() {
  const products = site.products
    .map(
      (p) =>
        `- ${p.name}: ${formatRupiah(p.price)}. Ukuran ${p.size}. Bahan ${p.material}. Warna: ${p.colors.map((c) => c.name).join(", ")}.`,
    )
    .join("\n");

  const body = `# ${site.brandName}

> ${aboutSection.text}

## Fakta singkat
- Produk: totebag kanvas
- Sistem penjualan: pre-order (barang dibuat setelah dipesan, bukan stok jadi)
- Estimasi produksi: ${site.poEstimate}${site.poDeadline ? `\n- PO batch ini tutup: ${site.poDeadline}` : ""}
- Kisaran harga: ${formatRupiah(minPrice)} – ${formatRupiah(maxPrice)}
- Cara pesan: chat WhatsApp ${waLink()}
- Lokasi: ${site.city}, Indonesia
- Area kirim: ${site.shippingArea}
- Terakhir diperbarui: ${formatDateId(site.lastUpdated)}

## Model
${products}

## FAQ
${faq.map((f) => `- ${f.q} ${f.a}`).join("\n")}

## Link
- Website: ${site.domain}
- WhatsApp: ${waLink()}
- Instagram: ${site.instagram}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
