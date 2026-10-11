import { formatRupiah, minPrice, site } from "@/config/site";

// Semua teks halaman (Bahasa Indonesia) ada di sini.
// Aturan: pakai "kamu", kalimat pendek, dan ini PRE-ORDER (jangan tulis kata-kata stok siap).

export const meta = {
  title: `Totebag Kanvas Pre-Order ${site.city} | ${site.brandName}`,
  description: `Totebag kanvas pre-order dari ${site.city}. Dibuat setelah kamu pesan, estimasi ${site.poEstimate}. Mulai ${formatRupiah(minPrice)}. Pesan lewat WhatsApp.`,
  ogAlt: `Totebag kanvas pre-order ${site.brandName}`,
};

export const heroSlides = [
  {
    image: "/images/9.jpg",
    alt: "Totebag kanvas hitam dibawa di bahu saat jalan santai",
    title: "Totebag Kanvas Simpel untuk Dipakai Tiap Hari",
    text: `Sistem pre-order. Barang dibuat setelah kamu pesan, estimasi ${site.poEstimate}.`,
    cta: "Pesan sekarang via WhatsApp",
    message: "Halo, saya mau pre-order totebag. Boleh info model dan harganya?",
  },
  {
    image: "/images/14.webp",
    alt: "Isi totebag: laptop, buku, dan botol minum di atas meja",
    title: "Muat Laptop, Buku, dan Botol Minum",
    text: "Ukurannya pas buat kuliah, kerja, atau jalan santai.",
    cta: "Tanya ukuran via WhatsApp",
    message: "Halo, saya mau tanya ukuran totebag-nya. Muat laptop berapa inci?",
  },
  {
    image: "/images/15.webp",
    alt: "Proses menjahit totebag kanvas di meja kerja",
    title: "Barang Baru, Dibuat Setelah Kamu Pesan",
    text: "Totebag dijahit setelah pesanan masuk, jadi yang kamu terima masih baru.",
    cta: "Chat via WhatsApp",
    message: "Halo, saya mau tanya soal pre-order totebag.",
  },
];

export const poStrip = {
  label: "Pre-Order",
  made: "Dibuat setelah kamu pesan",
  estimate: `Estimasi produksi ${site.poEstimate}`,
  deadline: site.poDeadline ? `PO batch ini tutup ${site.poDeadline}` : "",
};

export const productsSection = {
  title: "Pilihan Model",
  intro: "Semua model dibuat setelah kamu pesan. Pilih yang kamu suka, lalu chat kami di WhatsApp.",
  badge: "Pre-Order",
  colorPrompt: "Pilih warna, langsung chat:",
  message: (name: string, color: string) =>
    `Halo, saya mau pre-order ${name} warna ${color}. Boleh info detailnya?`,
};

export const whySection = {
  title: "Kenapa beli disini?",
  points: [
    { title: "Kanvas tebal", text: "Bahan kanvas 12–16 oz. Kuat buat bawa barang tiap hari." },
    { title: "Ukuran sesuai keinginanmu", text: "Ukuran bisa 12 - 16 inch sesuai kebutuhan kamu" },
    { title: "Cocok buat siapa aja", text: "Desain polos, warna netral. Bisa buat kuliah, kerja, atau jalan santai." },
    { title: "Barangnya baru", text: "Dibuat setelah kamu pesan, bukan barang lama yang numpuk di gudang." },
  ],
  cta: "Tanya dulu via WhatsApp",
  message: "Halo, saya mau tanya dulu soal totebag-nya.",
};

export const stepsSection = {
  title: "Cara Pesan (Pre-Order)",
  steps: [
    { title: "Pilih model dan warna", text: "Lihat pilihan model di halaman ini." },
    { title: "Chat kami via WhatsApp", text: "Sebutkan model, warna, dan jumlahnya." },
    { title: "Bayar DP atau lunas", text: "Detail pembayaran kami kirim lewat chat." },
    { title: "Tunggu produksi", text: `Sekitar ${site.poEstimate}. Kami kabari kalau sudah selesai.` },
    { title: "Barang dikirim", text: "Nomor resi kami kirim lewat WhatsApp." },
  ],
  cta: "Pesan sekarang via WhatsApp",
  message: "Halo, saya mau pesan totebag. Caranya gimana?",
};

export const detailSection = {
  title: "Detail Produk",
  intro: "Ukuran dan bahan tiap model. Semua ukuran dalam sentimeter (cm).",
  rows: { size: "Ukuran", material: "Bahan", capacity: "Kapasitas", strap: "Tali", closure: "Penutup", price: "Harga" },
  careTitle: "Cara merawat",
  care: [
    "Cuci pakai tangan dengan air dingin.",
    "Jangan pakai pemutih.",
    "Jemur di tempat teduh, jangan langsung kena matahari terik.",
    "Jangan disetrika terlalu panas.",
  ],
  cta: "Tanya detail via WhatsApp",
  message: "Halo, saya mau tanya detail ukuran dan bahan totebag-nya.",
};

export const aboutSection = {
  title: `Tentang ${site.brandName}`,
  text: `${site.brandName} adalah usaha totebag kanvas dari ${site.city}. Kami menjual totebag dengan sistem pre-order: setiap totebag dibuat setelah ada pesanan, dengan estimasi produksi ${site.poEstimate}. Harga mulai ${formatRupiah(minPrice)}. Pemesanan lewat WhatsApp, dan barang bisa dikirim ke ${site.shippingArea}.`,
  updatedLabel: "Terakhir diperbarui",
};

export const faqSection = {
  title: "Pertanyaan yang Sering Ditanya",
  cta: "Tanya lainnya via WhatsApp",
  message: "Halo, saya punya pertanyaan soal pre-order totebag.",
};

export const closingSection = {
  title: "Masih Ada yang Mau Ditanya?",
  text: "Chat aja dulu, nggak harus langsung pesan.",
  cta: "Konsultasi Gratis via Whatsapp",
  message: "Halo, saya masih mau tanya-tanya soal totebag-nya.",
};

export const footer = {
  tagline: `Totebag kanvas pre-order dari ${site.city}.`,
};

export const floatingLabel = "Chat via WhatsApp";
