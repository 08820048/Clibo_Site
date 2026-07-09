import React, { useEffect, useId, useMemo, useState } from "react";

const DEFAULT_FONT_URL = "/fonts/lastoria-bold-regular.otf";

export default function Signature({
  text = "Cerebellum",
  color = "currentColor",
  fontSize = 24,
  duration = 1.4,
  delay = 0,
  className = "",
  fontUrl = DEFAULT_FONT_URL,
}) {
  const reactId = useId();
  const maskId = useMemo(
    () => `signature-reveal-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`,
    [reactId]
  );
  const [signature, setSignature] = useState({
    paths: [],
    width: Math.max(120, text.length * fontSize * 0.58),
    error: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function loadSignature() {
      try {
        const opentype = await import("opentype.js");
        const response = await fetch(fontUrl);

        if (!response.ok) {
          throw new Error(`Font request failed: ${response.status}`);
        }

        const buffer = await response.arrayBuffer();
        const font = opentype.parse(buffer);
        const horizontalPadding = fontSize * 0.14;
        const baseline = fontSize * 1.48;
        let x = horizontalPadding;
        const paths = [];

        for (const char of text) {
          const glyph = font.charToGlyph(char);
          const path = glyph.getPath(x, baseline, fontSize);
          paths.push(path.toPathData(3));
          x += (glyph.advanceWidth || font.unitsPerEm) * (fontSize / font.unitsPerEm);
        }

        if (!cancelled) {
          setSignature({
            paths,
            width: Math.ceil(x + horizontalPadding),
            error: false,
          });
        }
      } catch {
        if (!cancelled) {
          setSignature({
            paths: [],
            width: Math.max(120, text.length * fontSize * 0.58),
            error: true,
          });
        }
      }
    }

    loadSignature();

    return () => {
      cancelled = true;
    };
  }, [fontSize, fontUrl, text]);

  if (signature.error || signature.paths.length === 0) {
    return (
      <span className={`signature-fallback ${className}`} aria-hidden="true">
        {text}
      </span>
    );
  }

  const height = Math.ceil(fontSize * 2.35);

  return (
    <svg
      className={`signature-svg ${className}`}
      width={signature.width}
      height={height}
      viewBox={`0 0 ${signature.width} ${height}`}
      fill="none"
      aria-hidden="true"
      style={{
        "--signature-duration": `${duration}s`,
        "--signature-delay": `${delay}s`,
      }}
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          {signature.paths.map((d, index) => (
            <path
              key={`mask-${index}`}
              className="signature-mask-path"
              d={d}
              pathLength="1"
              stroke="white"
              strokeWidth={fontSize * 0.24}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              style={{ "--signature-index": index }}
            />
          ))}
        </mask>
      </defs>

      {signature.paths.map((d, index) => (
        <path
          key={`stroke-${index}`}
          className="signature-stroke-path"
          d={d}
          pathLength="1"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          style={{ "--signature-index": index }}
        />
      ))}

      <g mask={`url(#${maskId})`}>
        {signature.paths.map((d, index) => (
          <path key={`fill-${index}`} d={d} fill={color} />
        ))}
      </g>
    </svg>
  );
}
