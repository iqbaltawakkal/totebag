import { products } from "@/content/products";

// Semua data bisnis ada di sini. Halaman, JSON-LD, dan llms.txt membaca dari file ini.
export const site = {
  brandName: "Totebag KR",
  domain: "https://example.com", // tanpa garis miring di akhir
  whatsappNumber: "62881037029943", // format internasional, tanpa + dan tanpa 0 di depan
  whatsappDefaultMessage: "Halo, saya mau tanya soal pre-order totebag.",
  city: "Kota Bandung",
  shippingArea: "seluruh Indonesia",
  instagram: "https://www.instagram.com/raafliahmad",
  poEstimate: "3-5 hari kerja", // estimasi produksi
  poDeadline: "", // opsional, tanggal tutup PO batch ini, contoh: "31 Oktober 2026"
  lastUpdated: "2026-10-10", // format YYYY-MM-DD, ganti tiap kali isi halaman diubah
  themeColor: "#1f1f1f",
  products,
};

export const formatRupiah = (n: number) =>
  "Rp" + n.toLocaleString("id-ID", { maximumFractionDigits: 0 });

export const minPrice = Math.min(...site.products.map((p) => p.price));
export const maxPrice = Math.max(...site.products.map((p) => p.price));

export const formatDateId = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const waLink = (message: string = site.whatsappDefaultMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
