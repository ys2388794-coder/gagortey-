import { useEffect, useRef, useState } from "react";

const EMOJIS = ["🌯", "🧸", "🐈", "🐱", "🍫", "🍬", "❤️", "✨", "🎁", "🎀"];

type OrientationCtor = {
  requestPermission?: () => Promise<"granted" | "denied">;
};

export default function GiftBox() {
  const [open, setOpen] = useState(false);
  const [motion, setMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [items] = useState(() =>
    Array.from({ length: 65 }, (_, i) => ({
      emoji: EMOJIS[i % EMOJIS.length],
      left: Math.random() * 94,
      top: Math.random() * 94,
      speed: Math.random() * 3 + 1,
    })),
  );

  const shift = (x: number, y: number, k: number) => {
    containerRef.current?.querySelectorAll<HTMLElement>(".liquid-emoji").forEach((el) => {
      const speed = parseFloat(el.dataset.speed || "1");
      el.style.transform = `translate(${x * speed * k}px, ${y * speed * k}px)`;
    });
  };

  const explode = () => {
    setOpen(true);
    const Ctor = (typeof DeviceOrientationEvent !== "undefined"
      ? DeviceOrientationEvent
      : undefined) as unknown as OrientationCtor | undefined;
    if (Ctor && typeof Ctor.requestPermission === "function") {
      Ctor.requestPermission()
        .then((s) => setMotion(s === "granted"))
        .catch(() => setMotion(false));
    } else {
      setMotion(true);
    }
  };

  useEffect(() => {
    if (!open) return;

    const onMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      shift(((e.clientX - cx) / cx) * 50, ((e.clientY - cy) / cy) * 50, 1.4);
    };
    const onOrient = (e: DeviceOrientationEvent) => {
      const x = e.gamma || 0;
      const y = Math.max(-90, Math.min(90, e.beta || 0));
      shift(x, y, 1.6);
    };

    window.addEventListener("mousemove", onMouse);
    if (motion) window.addEventListener("deviceorientation", onOrient);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, [open, motion]);

  return (
    <>
      <section className="min-h-[70vh] py-20 px-4 bg-darkbg flex flex-col items-center justify-center relative overflow-hidden">
        <h2 className="text-2xl md:text-4xl text-pink-200 mb-4 font-amiri text-center">
          🎁 هديتك مستنياكي.. اضغطي على الصندوق وهزي التليفون!
        </h2>
        <p className="text-gray-400 text-sm mb-10 text-center">
          (جواها كريب ودباديب وقطط وشوكولاتات كتير على قدي 😂❤️)
        </p>

        <div
          onClick={explode}
          className="cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 animate-bounce"
        >
          <div className="text-[9rem] md:text-[12rem] drop-shadow-[0_0_30px_rgba(255,20,147,0.6)] select-none">🎁</div>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-[200] bg-darkbg/95 items-center justify-center overflow-hidden ${
          open ? "flex" : "hidden"
        }`}
      >
        <div
          ref={containerRef}
          className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden p-4"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 z-50 text-white bg-red-900/90 hover:bg-neonred px-5 py-2.5 rounded-full font-bold shadow-lg transition-all cursor-pointer"
          >
            ✕ إغلاق
          </button>

          {items.map((it, i) => (
            <div
              key={i}
              className="liquid-emoji"
              data-speed={it.speed}
              style={{ left: `${it.left}vw`, top: `${it.top}vh` }}
            >
              {it.emoji}
            </div>
          ))}

          <div className="relative z-30 text-center bg-black/75 p-6 md:p-10 rounded-3xl backdrop-blur-md border-2 border-neonpink max-w-xl w-full shadow-[0_0_40px_rgba(255,20,147,0.4)]">
            <p className="text-pink-300 font-bold text-lg md:text-xl mb-3">دول على قدي يجرجورتي 😂❤️</p>

            <div className="bg-red-950/40 rounded-2xl p-4 my-4 border border-pink-800/40 space-y-2 text-2xl md:text-3xl tracking-widest">
              <div>🌯🌯🌯🌯🌯🌯🌯</div>
              <div>🧸🧸🧸🧸🧸🧸🧸</div>
              <div>🐈🐱🐈🐱🐈🐱🐈</div>
              <div>🍫🍬🍫🍬🍫🍬🍫</div>
              <div>❤️❤️❤️❤️❤️❤️❤️</div>
            </div>

            <p className="font-cairo text-xl md:text-3xl font-extrabold text-white leading-relaxed mt-4">
              اي وفي يوم عيد ميلادك احب اقلك كل سنه وانتي طيبه ❤️🎉
            </p>
            <p className="text-xs text-gray-400 mt-3">
              (هزي الموبايل أو حركي الماوس عشان الهدايا تتحرك معاكي زي السائل!)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
