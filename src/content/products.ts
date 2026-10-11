// Data produk. Ganti nama, harga, warna, ukuran, bahan, dan gambar sesuai produk asli.
// Gambar ada di public/images/. Ganti filenya dengan foto asli (nama file boleh tetap sama).

export type ProductColor = {
  name: string; // nama warna, dipakai di tombol & pesan WhatsApp
  hex: string; // warna bulatan kecil di kartu produk
};

export type Product = {
  slug: string;
  name: string;
  price: number; // dalam Rupiah, tanpa titik
  colors: ProductColor[];
  size: string; // ukuran dalam cm
  material: string;
  capacity: string;
  strap: string;
  closure: string;
  description: string; // 1 kalimat, dipakai di kartu & JSON-LD
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    slug: "kanvas-polos",
    name: "Totebag Kanvas Polos",
    price: 29000,
    colors: [
      { name: "Hitam", hex: "#1f1f1f" },
      { name: "Krem", hex: "#e8dcc4" },
      { name: "Navy", hex: "#1e2a44" },
    ],
    size: "38 × 42 cm",
    material: "Kanvas 12 oz",
    capacity: "Muat laptop 14 inci, buku, dan botol minum",
    strap: "Tali bahu kanvas, panjang 60 cm",
    closure: "Tanpa penutup (terbuka)",
    description: "Totebag kanvas polos ukuran sedang untuk dipakai tiap hari.",
    image: "/images/3.webp",
    imageAlt: "Totebag kanvas polos warna hitam, tampak depan",
  },
  {
    slug: "kanvas-resleting",
    name: "Totebag Kanvas Resleting",
    price: 39000,
    colors: [
      { name: "Hitam", hex: "#1f1f1f" },
      { name: "Krem", hex: "#e8dcc4" },
    ],
    size: "40 × 35 × 10 cm",
    material: "Kanvas 12 oz, resleting, kantong dalam",
    capacity: "Muat laptop 14 inci, dompet, dan barang kecil di kantong dalam",
    strap: "Tali bahu kanvas, panjang 60 cm",
    closure: "Resleting",
    description: "Totebag kanvas dengan resleting dan kantong dalam, barang lebih aman.",
    image: "/images/1.webp",
    imageAlt: "Totebag kanvas warna krem dengan resleting di bagian atas",
  },
  {
    slug: "ukuran-besar",
    name: "Totebag Ukuran Besar",
    price: 49000,
    colors: [
      { name: "Hitam", hex: "#1f1f1f" },
      { name: "Abu-abu", hex: "#8a8a86" },
    ],
    size: "45 × 40 × 15 cm",
    material: "Kanvas 16 oz",
    capacity: "Muat laptop 15 inci, baju ganti, dan perlengkapan harian",
    strap: "Tali bahu kanvas, panjang 65 cm",
    closure: "Kancing magnet",
    description: "Totebag kanvas tebal ukuran besar, pas buat bawa banyak barang.",
    image: "/images/4.webp",
    imageAlt: "Totebag kanvas ukuran besar warna abu-abu, tampak samping",
  },
];
