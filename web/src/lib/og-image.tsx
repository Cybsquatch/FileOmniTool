import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

// Shared social preview card (Open Graph / Twitter) for every page type
export function renderOgImage({ title, subtitle, badge }: { title: string; subtitle?: string; badge?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #022c22 0%, #064e3b 55%, #047857 100%)",
          color: "#ecfdf5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#10b981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
              color: "#022c22",
            }}
          >
            F
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>FileOmniTool</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {badge && (
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "8px 18px",
                borderRadius: 999,
                background: "rgba(16, 185, 129, 0.2)",
                border: "2px solid #34d399",
                fontSize: 24,
                color: "#a7f3d0",
              }}
            >
              {badge}
            </div>
          )}
          <div style={{ fontSize: title.length > 40 ? 60 : 76, fontWeight: 800, lineHeight: 1.1, color: "#ffffff" }}>
            {title}
          </div>
          {subtitle && <div style={{ fontSize: 30, lineHeight: 1.35, color: "#a7f3d0" }}>{subtitle}</div>}
        </div>

        <div style={{ display: "flex", gap: 28, fontSize: 24, color: "#6ee7b7" }}>
          <span>• 100% in-browser</span>
          <span>• Zero upload</span>
          <span>• Free, no signup</span>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
