import { site } from "@/config/site";

// Dipakai untuk FAQ di halaman DAN JSON-LD FAQPage, jadi isinya selalu sama.
// Jawaban selalu dimulai dengan jawaban langsung di kalimat pertama.
// TODO: cek ulang kebijakan DP, cacat produksi, dan area kirim sesuai aturan toko kamu.
export const faq: { q: string; a: string }[] = [
  {
    q: "Totebag ini sudah jadi atau pre-order?",
    a: "Semua totebag kami pre-order. Barang dibuat setelah kamu pesan, lalu dikirim setelah produksi selesai.",
  },
  {
    q: "Berapa lama proses PO?",
    a: `Estimasi produksi ${site.poEstimate} sejak pembayaran kami terima. Lama pengiriman tergantung ekspedisi dan alamat kamu.`,
  },
  {
    q: "Bisa bayar DP?",
    a: "Bisa. DP 50% saat pesan, sisanya dilunasi sebelum barang dikirim.",
  },
  {
    q: "Kirim ke mana saja?",
    a: `Kami kirim ke ${site.shippingArea} dari ${site.city}. Ongkir dihitung sesuai alamat dan ekspedisi yang kamu pilih.`,
  },
  {
    q: "Bisa pilih warna?",
    a: "Bisa. Pilih warna yang tersedia di tiap model, lalu sebutkan di chat WhatsApp.",
  },
  {
    q: "Kalau ada cacat produksi gimana?",
    a: "Kami bantu tukar atau perbaiki. Chat kami maksimal 2 hari setelah barang sampai, dan sertakan video unboxing.",
  },
  {
    q: "Bisa pesan banyak buat acara atau kantor?",
    a: "Bisa. Chat kami dengan jumlah dan tanggal butuhnya, nanti kami bantu hitung harga dan waktunya.",
  },
  {
    q: "Gimana cara pesannya?",
    a: "Klik tombol WhatsApp di halaman ini, lalu sebutkan model, warna, dan jumlah yang kamu mau.",
  },
];
