# Landing Page Totebag Pre-Order

Satu halaman (Next.js + Tailwind) untuk jualan totebag pre-order. Semua tombol mengarah ke WhatsApp.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # cek sebelum deploy
npm run start    # jalankan hasil build
```

## Mengganti data

| Mau ganti apa | File |
|---|---|
| Nama brand, domain, nomor WhatsApp, kota, Instagram, estimasi PO, tanggal tutup PO, area kirim, tanggal "Terakhir diperbarui" | `src/config/site.ts` |
| Produk (nama, harga, warna, ukuran, bahan, gambar) | `src/content/products.ts` |
| FAQ | `src/content/faq.ts` |
| Semua teks lain di halaman, pesan WhatsApp tiap tombol, judul & deskripsi SEO | `src/content/copy.ts` |

- **Nomor WhatsApp**: format internasional tanpa `+` dan tanpa `0` di depan. Contoh `0812-3456-7890` → `6281234567890`.
- **Tanggal tutup PO**: isi `poDeadline` (misal `"31 Oktober 2026"`). Kalau kosong, tidak ditampilkan.
- **Terakhir diperbarui**: ganti `lastUpdated` (format `YYYY-MM-DD`) tiap kali isi halaman berubah. Tanggal ini juga dipakai di JSON-LD, sitemap, dan tahun copyright.
- Kalau judul atau deskripsi jadi kepanjangan setelah nama brand/kota diganti, `npm run build` akan menampilkan peringatan `[SEO]`.

Halaman, JSON-LD (data untuk Google), dan `/llms.txt` (ringkasan untuk AI search) semuanya membaca dari file di atas, jadi faktanya selalu sama. Cukup ganti di satu tempat.

## Mengganti gambar

Taruh foto asli di `public/images/` dengan nama yang sama, atau ganti path-nya di `copy.ts` / `products.ts`:

- `hero-1.jpg` … `hero-4.jpg`: slide atas, ukuran sekitar 1600 × 900 px. Objek utama sebaiknya di tengah, karena di HP gambar dipotong jadi tegak.
- `produk-*.jpg`: foto produk, persegi (misal 800 × 800 px).
- `logo.png`: logo untuk JSON-LD (persegi).
- Ikon: `src/app/icon.svg`, `src/app/apple-icon.png` (180 × 180), dan `public/icons/` (192 & 512 px).

Jangan lupa ganti teks `alt` (deskripsi gambar) di `copy.ts` / `products.ts` sesuai foto baru.

Gambar untuk share di WhatsApp/Instagram/Facebook dibuat otomatis dari `src/app/opengraph-image.tsx`.

## Tracking

Setiap klik tombol WhatsApp mengirim `{ event: "whatsapp_click", location: "..." }` ke `window.dataLayer`. Pasang Google Tag Manager, lalu hubungkan event ini ke GA4 / Meta Pixel.

## Aturan copy

- Ini **pre-order**. Jangan pernah tulis kata-kata yang mengesankan stok siap atau bisa langsung dikirim.
- Pakai "kamu", kalimat pendek, kata sehari-hari.
- Jangan tambah testimoni, jumlah order, atau review palsu. Tempat testimoni ditandai `TODO` di `src/app/page.tsx`.
