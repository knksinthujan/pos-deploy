import type { CSSProperties } from "react";
import type { ProductId } from "@/data/company";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m20 3 17 17-17 17L3 20 20 3Z"
        stroke="currentColor"
        strokeWidth="5"
      />
      <path
        d="M13 26V14h5l9 12V14"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductIcon({
  type,
  size = 24,
  style,
}: {
  type: ProductId;
  size?: number;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {type === "care" && (
        <>
          <path d="M6 3v6a4 4 0 0 0 8 0V3M4 3h4M12 3h4M10 13v3a5 5 0 0 0 10 0v-2" />
          <circle cx="20" cy="11" r="3" />
        </>
      )}
      {type === "pos" && (
        <>
          <rect x="3" y="3" width="18" height="12" rx="2" />
          <path d="M12 15v5M8 21h8M7 8h3M14 8h3M7 11h10" />
        </>
      )}
      {type === "booking" && (
        <>
          <rect x="3" y="5" width="18" height="16" rx="3" />
          <path d="M7 3v4M17 3v4M3 10h18m-13 5 3 3 5-5" />
        </>
      )}
      {type === "erp" && (
        <>
          <rect x="8" y="3" width="8" height="6" rx="1.5" />
          <rect x="2" y="16" width="7" height="5" rx="1.5" />
          <rect x="15" y="16" width="7" height="5" rx="1.5" />
          <path d="M12 9v4M5.5 16v-3h13v3" />
        </>
      )}
    </svg>
  );
}
