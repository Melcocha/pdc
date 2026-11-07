import React, { useMemo, useRef } from 'react';
import QRCode from 'qrcode';
import { Download } from 'lucide-react';

const CELL = 10;
const QUIET = 2;

// Pescadito del logo oficial del PDC (contorno blanco, sin las letras) en una caja de 100 x 60.
function FishSilhouette({ x, y, scale }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g fill="none" stroke="#ffffff" strokeWidth="5.5" strokeLinejoin="round">
        <path d="M3 30 C22 3, 62 5, 80 30 L99 53" />
        <path d="M3 30 C22 57, 62 55, 80 30 L99 7" />
      </g>
      <circle cx="21" cy="27" r="4.4" fill="#ffffff" />
    </g>
  );
}

// Código QR todo en verde con la silueta del pescado al centro.
export default function GreenQR({ value, size = 240 }) {
  const svgRef = useRef(null);

  const { n, modules } = useMemo(() => {
    const qr = QRCode.create(value || 'https://pdc.local', { errorCorrectionLevel: 'H' });
    const count = qr.modules.size;
    const list = [];
    const mid = count / 2;
    const clearRadius = count * 0.135;
    const isFinder = (r, c) =>
      (r < 7 && c < 7) || (r < 7 && c >= count - 7) || (r >= count - 7 && c < 7);
    for (let r = 0; r < count; r++) {
      for (let c = 0; c < count; c++) {
        if (!qr.modules.get(r, c) || isFinder(r, c)) continue;
        const dx = c + 0.5 - mid;
        const dy = r + 0.5 - mid;
        if (Math.hypot(dx, dy) < clearRadius) continue;
        list.push([r, c]);
      }
    }
    return { n: count, modules: list };
  }, [value]);

  const total = (n + QUIET * 2) * CELL;
  const off = QUIET * CELL;
  const finders = [
    [0, 0],
    [0, n - 7],
    [n - 7, 0],
  ];
  const center = total / 2;
  const badgeR = n * 0.135 * CELL + CELL * 0.4;
  const fishScale = (badgeR * 1.55) / 100;

  const download = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const xml = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 1024;
      canvas.getContext('2d').drawImage(img, 0, 0, 1024, 1024);
      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = 'qr-pdc-la-union.png';
      a.click();
    };
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(xml)}`;
  };

  return (
    <div className="qr-block">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${total} ${total}`}
        width={size}
        height={size}
        role="img"
        aria-label="Código QR de la página del PDC La Unión"
        className="qr-svg"
      >
        <defs>
          <linearGradient id="qrGreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#008744" />
            <stop offset="1" stopColor="#00391c" />
          </linearGradient>
        </defs>
        <rect width={total} height={total} fill="#ffffff" />

        {modules.map(([r, c]) => (
          <rect
            key={`${r}-${c}`}
            x={off + c * CELL + 0.6}
            y={off + r * CELL + 0.6}
            width={CELL - 1.2}
            height={CELL - 1.2}
            rx={3.2}
            fill="url(#qrGreen)"
          />
        ))}

        {finders.map(([r, c]) => (
          <g key={`f-${r}-${c}`}>
            <rect
              x={off + c * CELL + CELL / 2}
              y={off + r * CELL + CELL / 2}
              width={CELL * 6}
              height={CELL * 6}
              rx={CELL * 1.7}
              fill="none"
              stroke="url(#qrGreen)"
              strokeWidth={CELL}
            />
            <rect
              x={off + (c + 2) * CELL}
              y={off + (r + 2) * CELL}
              width={CELL * 3}
              height={CELL * 3}
              rx={CELL * 0.9}
              fill="url(#qrGreen)"
            />
          </g>
        ))}

        <circle cx={center} cy={center} r={badgeR} fill="#ffffff" />
        <circle cx={center} cy={center} r={badgeR - 3} fill="#00562b" />
        <FishSilhouette x={center - 50 * fishScale} y={center - 30 * fishScale} scale={fishScale} />
      </svg>

      <button type="button" className="qr-download" onClick={download}>
        <Download size={15} />
        Descargar QR
      </button>
    </div>
  );
}
