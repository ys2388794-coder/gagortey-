import { useEffect, useState } from "react";
import WordHeart from "./WordHeart";
import { loveWordsList } from "../data";

export default function Intro({ onEnter }: { onEnter: () => void }) {
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // safety net: always show the button eventually
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 9000);
    return () => clearTimeout(t);
  }, []);

  const enter = () => {
    setLeaving(true);
    setTimeout(onEnter, 900);
  };

  return (
    <div
      className="fixed inset-0 bg-darkbg z-[100] flex flex-col items-center justify-center p-4 overflow-hidden transition-opacity duration-1000 ease-in-out"
      style={{ opacity: leaving ? 0 : 1 }}
    >
      <div className="relative w-[94vw] h-[94vw] max-w-[600px] max-h-[600px] flex items-center justify-center">
        <WordHeart
          words={loveWordsList}
          active
          totalMs={4200}
          onDone={() => setReady(true)}
          className="w-full h-full heart-zoom-out"
        />
      </div>

      <p
        className={`text-pink-300/90 text-sm md:text-lg mt-2 font-amiri text-center transition-opacity duration-1000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        كل كلمة "بحبك" بلغات العالم لفت حوالين بعضها عشان ترسم قلبي ليكي ❤️
      </p>

      <button
        onClick={enter}
        disabled={!ready}
        className={`mt-5 transition-all duration-700 bg-gradient-to-r from-neonred via-neonpink to-red-700 text-white font-bold text-lg md:text-xl px-10 py-3.5 rounded-full shadow-[0_0_25px_rgba(255,20,147,0.7)] hover:scale-105 active:scale-95 cursor-pointer ${
          ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        خشي يجرجورتي ❤️
      </button>
    </div>
  );
}
