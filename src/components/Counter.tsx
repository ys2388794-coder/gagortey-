import { useEffect, useState } from "react";

const START = new Date("2025-09-24T00:00:00").getTime();

function calc() {
  const diff = Math.abs(Date.now() - START);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Counter() {
  const [t, setT] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { v: t.days, label: "Days / يوم", hot: false },
    { v: t.hours, label: "Hours / ساعة", hot: false },
    { v: t.minutes, label: "Minutes / دقيقة", hot: false },
    { v: t.seconds, label: "Seconds / ثانية", hot: true },
  ];

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-darkbg via-[#160006] to-[#1a0005] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,51,0.12),transparent_70%)]" />

      <span className="text-neonred text-sm md:text-base font-bold tracking-widest mb-2 z-10">
        24 / 09 ❤️ بداية حكايتنا
      </span>
      <h2 className="text-3xl md:text-5xl font-amiri text-white mb-12 text-center drop-shadow-[0_0_12px_rgba(255,20,147,0.6)] z-10">
        من يوم ما عرفتك وحياتي كلها نورت
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 z-10 w-full max-w-3xl" dir="ltr">
        {boxes.map((b) => (
          <div
            key={b.label}
            className="flex flex-col items-center p-5 bg-red-950/40 rounded-3xl border border-red-800/50 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,51,0.15)]"
          >
            <span
              className={`text-4xl md:text-6xl font-extrabold mb-1 ${
                b.hot ? "text-neonred animate-pulse" : "text-white"
              }`}
            >
              {b.v}
            </span>
            <span className="text-xs md:text-sm text-pink-300 uppercase tracking-wider">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
