import { ImageResponse } from "next/og";
import { formatRupiah, minPrice, site } from "@/config/site";
import { meta } from "@/content/copy";

export const alt = meta.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#faf8f5",
          color: "#1f1f1f",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ fontSize: 40, fontWeight: 700 }}>{site.brandName}</div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              background: "#1f1f1f",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: 999,
            }}
          >
            PRE-ORDER
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>Totebag Kanvas Simpel</div>
          <div style={{ fontSize: 34, color: "#545454" }}>
            {`Dibuat setelah kamu pesan · Estimasi ${site.poEstimate}`}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 32 }}>
          <div>{`Mulai ${formatRupiah(minPrice)} · ${site.city}`}</div>
          <div
            style={{
              background: "#25d366",
              color: "#052e16",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 999,
            }}
          >
            Pesan via WhatsApp
          </div>
        </div>
      </div>
    ),
    size,
  );
}
