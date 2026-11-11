import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

function CountUp({ target, run, className }: { target: number; run: boolean; className?: string }) {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1700;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);

  return <span className={className}>{v}</span>;
}

export default function Stats() {
  const [ref, seen] = useInView<HTMLElement>(0.35);

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-gradient-to-b from-[#140005] to-darkbg flex flex-col items-center border-t border-red-900/30"
    >
      <span className="text-pink-400 text-sm font-bold mb-2">تحليل 24,604 رسالة بيننا 💬</span>
      <h2 className="text-3xl md:text-5xl font-amiri text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        إحصائيات حبنا الحقيقية في الشات 📊❤️
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        <div className="bg-black/60 border border-red-900/50 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(255,0,51,0.15)]">
          <div className="absolute -top-6 -right-6 text-8xl opacity-10">❤️</div>
          <h3 className="text-xl md:text-2xl text-pink-200 mb-8 font-bold">مين قال "بحبك" أكتر في الشات؟</h3>

          <div className="flex w-full items-end justify-around gap-6 h-48 pt-6">
            <div className="flex flex-col items-center w-1/3 h-full justify-end">
              <CountUp
                target={180}
                run={seen}
                className="text-3xl md:text-4xl font-extrabold text-neonred mb-2 drop-shadow-[0_0_8px_rgba(255,0,51,0.8)]"
              />
              <div
                className="w-full bg-gradient-to-t from-red-900 to-neonred rounded-t-xl transition-all duration-1000 ease-out"
                style={{ height: seen ? "85%" : "0%" }}
              />
              <span className="mt-3 text-base font-bold text-white">أوفص 👑</span>
            </div>

            <div className="flex flex-col items-center w-1/3 h-full justify-end">
              <CountUp target={135} run={seen} className="text-2xl md:text-3xl font-bold text-pink-400 mb-2" />
              <div
                className="w-full bg-gradient-to-t from-pink-950 to-pink-500 rounded-t-xl transition-all duration-1000 ease-out"
                style={{ height: seen ? "64%" : "0%" }}
              />
              <span className="mt-3 text-base font-bold text-pink-200">جرجورتي ❤️</span>
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-400 mt-6">بالأرقام والإثباتات من الـ 640 صفحة: أنا بحبك أكتر 😉❤️</p>
        </div>

        <div className="bg-black/60 border border-pink-900/50 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(255,20,147,0.15)]">
          <div className="absolute -bottom-5 -left-5 text-8xl opacity-10">🥺</div>
          <h3 className="text-xl md:text-2xl text-pink-200 mb-4 font-bold text-center">كم مرة وحشنا بعض في الشات؟</h3>
          <div className="flex flex-col items-center justify-center h-44">
            <CountUp
              target={420}
              run={seen}
              className="text-6xl md:text-7xl font-extrabold text-neonpink drop-shadow-[0_0_15px_rgba(255,20,147,0.7)]"
            />
            <p className="text-xs md:text-sm text-gray-300 mt-3">(منهم 261 مرة وحشتيني و 159 مرة وحشتك)</p>
            <p className="text-pink-300/90 mt-2 font-semibold text-sm">ومع ذلك بتوحشيني كل ثانية أكتر بكتير ❤️</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl mt-16 relative">
        <div className="glowing-box bg-gradient-to-br from-black/80 via-[#1f0008]/90 to-black/80 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center relative">
          <span className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-5xl drop-shadow-lg">💌</span>
          <h4 className="text-neonpink font-bold text-lg md:text-xl mb-4 mt-2">رسالة ووعد من قلبي ليكي</h4>
          <p className="font-amiri text-xl md:text-2xl leading-loose text-pink-100">
            ( هاجر عارف اني بوحشك كتير و بتاخر عليكي في الرد كتير بس بجد غصب عني انا اسف و بجد بحبك اوي يمامي و نفسي
            افضل في حضنك كده مقمش بس عشان اوصل لكده قدامي مشوار طويل لازما نخوضه سوا و انشاء الله اوصله في اقرب
            وقتممكن و هشتغلعلي نفسي و اظبط جسمي و هعمل عضلات و بصي هنحقق كل امانينا سوا و ده وعد خدته عل نفسي قبلما
            اقوله ليكي و بجد بحبك اوي و كل سنه و انتي طيبه يا محور الكون و محور حياتي )
          </p>
        </div>
      </div>
    </section>
  );
}
