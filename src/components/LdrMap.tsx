const SPARKLES: [number, number, number][] = [
  [130, 200, 2], [165, 240, 1.5], [140, 360, 2.2], [260, 210, 2], [310, 190, 1.5],
  [350, 230, 2.5], [390, 205, 1.8], [280, 270, 2.2], [330, 285, 1.5], [255, 340, 2],
  [290, 390, 2.5], [275, 430, 1.8], [200, 290, 2], [220, 410, 1.5], [380, 290, 2],
];

const STAR_PATHS = [
  "M350,180 L352,185 L357,187 L352,189 L350,194 L348,189 L343,187 L348,185 Z",
  "M210,240 L212,245 L217,247 L212,249 L210,254 L208,249 L203,247 L208,245 Z",
  "M160,390 L162,395 L167,397 L162,399 L160,404 L158,399 L153,397 L158,395 Z",
  "M320,360 L322,365 L327,367 L322,369 L320,374 L318,369 L313,367 L318,365 Z",
];

const KNOT_TL = [
  "M 180,112 Q 192,108 198,118",
  "M 183,118 Q 195,114 200,124",
  "M 186,124 Q 194,122 197,128",
  "M 192,122 C 182,110 175,125 190,125",
  "M 192,122 C 204,112 208,126 193,125",
];

const KNOT_BR = [
  "M 318,486 Q 328,482 335,492",
  "M 322,492 Q 332,488 338,498",
  "M 325,498 Q 335,495 340,504",
  "M 326,494 C 314,484 310,498 325,497",
  "M 326,494 C 338,484 342,498 327,497",
];

export default function LdrMap() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-[#140004] relative">
      <h2 className="text-3xl md:text-5xl font-amiri text-white mb-4 text-center drop-shadow-[0_0_15px_rgba(255,20,147,0.6)]">
        رغم المسافات إنتي الأقرب لقلبي ❤️
      </h2>
      <p className="text-pink-300/80 text-center mb-10 text-sm md:text-lg">
        خيط القدر الأحمر المربوط بين إيدينا من شبرا الخيمة لحد ديروط
      </p>

      <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-[0_0_45px_rgba(255,0,51,0.25)] border-4 border-ldrpink/30 bg-ldrpink text-black">
        <svg viewBox="0 0 500 620" className="w-full h-auto block" style={{ direction: "ltr" }}>
          <rect width="500" height="620" fill="#e8c5c8" />

          {/* continents */}
          <g fill="#8c7a78" opacity="0.88">
            <path d="M40,220 C55,180 100,150 155,140 C180,135 205,145 190,175 C175,205 140,220 120,250 C105,270 95,295 115,310 C140,315 170,325 185,355 C195,380 170,425 145,455 C130,475 115,495 108,480 C102,460 110,420 98,390 C85,360 75,345 95,320 C75,310 55,295 45,270 Z" />
            <path d="M225,175 C255,150 310,140 375,155 C425,165 465,195 475,240 C480,275 450,310 420,335 C395,355 370,340 345,325 C325,315 310,330 320,360 C330,390 315,435 290,460 C270,475 255,445 245,410 C235,375 205,355 200,320 C195,285 220,260 245,255 C235,235 210,200 225,175 Z" />
            <path d="M195,535 C245,515 310,515 355,535 C330,550 240,555 195,535 Z" />
            <path d="M435,380 C455,375 470,395 460,420 C445,435 430,405 435,380 Z" />
          </g>

          {/* sparkles */}
          <g fill="#ffffff" opacity="0.85">
            {SPARKLES.map(([cx, cy, r], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} />
            ))}
            {STAR_PATHS.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>

          {/* top-left hand */}
          <path
            fill="#1c1919"
            d="M 45,0 L 115,0 C 125,30 145,55 170,80 C 190,100 205,125 202,132 C 197,138 182,120 165,100 C 178,128 192,162 185,170 C 178,175 162,145 148,115 C 158,148 168,182 158,188 C 148,192 138,158 128,125 C 132,155 138,185 128,190 C 118,192 110,160 105,130 C 98,148 92,168 83,168 C 75,168 78,140 82,112 C 78,90 70,65 45,0 Z"
          />

          {/* bottom-right hand */}
          <path
            fill="#1c1919"
            d="M 490,620 L 420,620 C 405,585 385,565 355,540 C 330,520 310,492 316,484 C 322,478 342,498 360,518 C 342,488 325,452 334,444 C 342,438 362,470 378,500 C 364,465 352,430 362,424 C 372,420 385,455 398,488 C 392,455 385,425 396,420 C 406,418 415,452 422,482 C 430,462 436,442 446,442 C 455,442 452,472 446,502 C 452,530 468,560 490,620 Z"
          />

          {/* red thread of fate */}
          <line x1="192" y1="122" x2="326" y2="494" stroke="#ff0033" strokeWidth="5" opacity="0.35" style={{ filter: "blur(3px)" }} />
          <line x1="192" y1="122" x2="326" y2="494" stroke="#c92a2a" strokeWidth="3" />
          <line x1="192" y1="122" x2="326" y2="494" stroke="#ff2a4b" strokeWidth="1.5" className="red-thread-line" />

          <g stroke="#c92a2a" strokeWidth="2.5" fill="none">
            {KNOT_TL.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
          <g stroke="#c92a2a" strokeWidth="2.5" fill="none">
            {KNOT_BR.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>

          <text
            x="250"
            y="315"
            textAnchor="middle"
            fill="#111111"
            fontFamily="Cairo, sans-serif"
            fontWeight={900}
            fontSize="28"
            letterSpacing="2"
          >
            LDR RELATIONSHIP
          </text>

          <g transform="translate(15, 195)">
            <rect x="0" y="0" width="195" height="36" rx="18" fill="#1a0005" opacity="0.92" stroke="#ff0033" strokeWidth="1.5" />
            <text x="97" y="23" textAnchor="middle" fill="#ffffff" fontFamily="Cairo, sans-serif" fontWeight={700} fontSize="12" style={{ direction: "rtl" }}>
              📍 أوفص: شبرا الخيمة - القليوبية
            </text>
          </g>

          <g transform="translate(115, 565)">
            <rect x="0" y="0" width="195" height="36" rx="18" fill="#1a0005" opacity="0.92" stroke="#ff1493" strokeWidth="1.5" />
            <text x="97" y="23" textAnchor="middle" fill="#ffffff" fontFamily="Cairo, sans-serif" fontWeight={700} fontSize="12" style={{ direction: "rtl" }}>
              📍 جرجورتي: ديروط - أسيوط
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
