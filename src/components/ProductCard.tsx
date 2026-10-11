import Image from "next/image";
import { formatRupiah, waLink } from "@/config/site";
import { productsSection } from "@/content/copy";
import type { Product } from "@/content/products";
import { WhatsAppIcon } from "./WhatsAppButton";

export function ProductCard({ product }: { product: Product }) {
  const headingId = `produk-${product.slug}`;
  return (
    <article aria-labelledby={headingId} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
      <div className="relative aspect-square bg-sand">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-ink px-3 py-1 text-sm font-bold tracking-wide text-white uppercase">
          {productsSection.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 id={headingId} className="text-lg font-bold">
          {product.name}
        </h3>
        <p className="mt-1 text-xl font-bold">Mulai dari {formatRupiah(product.price)}</p>
        <p className="mt-2 text-sm text-muted">{product.description}</p>
        <dl className="mt-4 text-sm grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
          <dt className="text-muted">Warna</dt>
          <dd className="flex flex-wrap items-center gap-3">
            {product.colors.map((c) => (
              <span key={c.name} className="inline-flex items-center gap-1">
                <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full ring-1 ring-black/20" style={{ backgroundColor: c.hex }} />
                {c.name}
              </span>
            ))}
          </dd>
          <dt className="text-muted">Ukuran</dt>
          <dd>{product.size}</dd>
          <dt className="text-muted">Bahan</dt>
          <dd>{product.material}</dd>
        </dl>
      </div>
    </article>
  );
}
