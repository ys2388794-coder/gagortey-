import { useCallback, useEffect, useRef, useState } from "react";
import { relationshipStory } from "../data";

const TOTAL = 19;
const CANDLE_POSITIONS = [20, 50, 80, 35, 65];

export default function Cake() {
  const [blown, setBlown] = useState<boolean[]>(() => Array(TOTAL).fill(false));
  const [showPromise, setShowPromise] = useState(false);
  const promiseRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const count = blown.filter(Boolean).length;
  const allBlown = count === TOTAL;

  const blow = useCallback((i: number) => {
    setBlown((prev) => {
      if (prev[i]) return prev;
      const next = [...prev];
      next[i] = true;
      return next;
    });
  }, []);

  const blowAll = () => {
    for (let i = 0; i < TOTAL; i++) {
      timers.current.push(window.setTimeout(() => blow(i), i * 90));
    }
  };

  useEffect(() => {
    if (!allBlown) return;
    const t = window.setTimeout(() => {
      setShowPromise(true);
      promiseRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 400);
    return () => clearTimeout(t);
  }, [allBlown]);

  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-24 px-2 md:px-4 bg-gradient-to-b from-darkbg via-[#1a0006] to-[#120004]">
      <span className="bg-pink-950/80 border border-pink-600/50 text-pink-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-3">
        🎂 تورتة عيد ميلادك الـ 19
      </span>
      <h2 className="text-3xl md:text-5xl font-amiri font-bold text-neonpink mb-3 text-center animate-pulse">
        دي على قدي يها 😂❤️
      </h2>
      <p className="text-gray-300 text-center max-w-xl mb-4 text-sm md:text-base px-4">
        التورتة دي 19 دور.. <span className="text-neonred font-bold">دوسي على كل شمعة عشان تطفيها</span>، وأول ما تطفي
        أي شمعة هيظهرلك الكلام اللي كاتبهولك جوه الطبقة بتاعتها!
      </p>
      <div className="text-pink-300 font-bold text-sm md:text-base mb-12 bg-black/50 px-6 py-2 rounded-full border border-pink-800/50">
        طفيتي <span className="text-neonred font-extrabold">{count}</span> من <span className="text-white">19</span> شمعة 🕯️
      </div>

      <div className="flex flex-col items-center justify-end mb-12 w-full max-w-4xl relative pt-10">
        {Array.from({ length: TOTAL }, (_, i) => {
          const off = blown[i];
          return (
            <div
              key={i}
              className={`cake-tier my-[3px] md:my-[4px] ${off ? "tier-lit" : ""}`}
              style={{
                width: `${48 + Math.round((i / (TOTAL - 1)) * 48)}%`,
                minWidth: `min(${250 + i * 24}px, 95vw)`,
                minHeight: 76,
                padding: "12px 16px",
                cursor: "pointer",
              }}
              onClick={() => blow(i)}
            >
              <span className={`tier-text font-cairo text-xs sm:text-sm md:text-base ${off ? "revealed" : ""}`}>
                {relationshipStory[i]}
              </span>

              <div
                className="candle-wrapper"
                style={{ left: `${CANDLE_POSITIONS[i % CANDLE_POSITIONS.length]}%` }}
                title="اضغطي على الشمعة عشان تطفيها وتقرأي طبقة التورتة!"
                onClick={(e) => {
                  e.stopPropagation();
                  blow(i);
                }}
              >
                <div className="candle-stick">
                  <div
                    className={`flame ${off ? "blown" : ""}`}
                    style={{ animationDelay: `${(i * 0.13).toFixed(2)}s` }}
                  />
                  <div className={`smoke ${off ? "puff" : ""}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={blowAll}
        className={`text-white font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-[0_0_25px_rgba(255,0,51,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer ${
          allBlown
            ? "bg-pink-700 pointer-events-none"
            : "bg-gradient-to-r from-neonred via-pink-600 to-red-800"
        }`}
      >
        {allBlown ? "🎉 كل سنة وإنتي طيبة يا جرجورتي! ❤️" : "🌬️ اطفي كل الشموع يجرجورتي"}
      </button>

      <div
        ref={promiseRef}
        className="max-w-3xl w-full px-4 text-center overflow-hidden transition-all duration-1000"
        style={{ maxHeight: showPromise ? 1400 : 0, opacity: showPromise ? 1 : 0 }}
      >
        <div className="mt-12 p-8 md:p-12 bg-gradient-to-br from-pink-950/60 via-red-950/50 to-black/80 rounded-3xl border-2 border-neonpink shadow-[0_0_40px_rgba(255,20,147,0.4)] backdrop-blur-md relative">
          <div className="text-4xl md:text-5xl mb-4">🎉👑❤️</div>
          <h3 className="text-2xl md:text-3xl font-amiri font-bold text-neonpink mb-6">كل سنة وإنتي طيبة يا كتكوتي!</h3>
          <p className="font-amiri text-xl md:text-2xl leading-loose text-white">
            ( النهارده اول عيد ميلاد ليكي و احنا مع بعض و انشاء الله مش الاخير النهارده انتي هتحتفلي بعيد ميلادك في
            بيتكو و الله اعلم يمكن السنه الجيه نحتفل بيه في بيتنا بس الي عايز اقولهولك اني بجد بحبك اوب و مش هسيبك و
            كل سنه و انتي طيبه يكتوكتي و كل سنه و انتي بنوتي و صحبتي و اختي و انشاء الله مراتي و امي و سندي و ضهري
            بجد بحبك اوي اوي اوي )
          </p>
        </div>
      </div>
    </section>
  );
}
