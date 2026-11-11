import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Counter from "./components/Counter";
import LdrMap from "./components/LdrMap";
import ChatGrid from "./components/ChatSection";
import Stats from "./components/Stats";
import Cake from "./components/Cake";
import WishBox from "./components/WishBox";
import GiftBox from "./components/GiftBox";
import FinalHeart from "./components/FinalHeart";
import { realFightSituations, realSweetMemories } from "./data";

export default function App() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = entered ? "auto" : "hidden";
  }, [entered]);

  return (
    <div className="font-cairo text-gray-100 selection:bg-neonred selection:text-white">
      {!entered && <Intro onEnter={() => setEntered(true)} />}

      <main className={`transition-opacity duration-1000 ease-in-out ${entered ? "opacity-100" : "opacity-0"}`}>
        <Counter />
        <LdrMap />

        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-darkbg">
          <span className="text-neonred font-bold text-sm tracking-widest mb-2">من شاتنا الحقيقي • 15 موقف منفصل</span>
          <h2 className="text-3xl md:text-5xl font-amiri text-white mb-4 text-center drop-shadow-md">
            خناقاتنا وقمصنا وغيرتي عليكي 😠❤️
          </h2>
          <p className="text-gray-400 text-center mb-12 text-sm md:text-base">
            كل موقف حصل بينا في الشات بتوقيته وتاريخه في كارت لوحده
          </p>
          <ChatGrid cards={realFightSituations} accentBorder="border-red-900/50" />
          <div className="mt-14 p-6 px-10 rounded-full bg-gradient-to-r from-red-950/60 via-pink-950/60 to-red-950/60 border border-pink-500/40 shadow-[0_0_25px_rgba(255,20,147,0.3)]">
            <p className="text-2xl md:text-4xl font-amiri text-pink-200 text-center">" ورغم كل ده لسه بنحب بعض ❤️ "</p>
          </div>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-[#140005]">
          <span className="text-neonpink font-bold text-sm tracking-widest mb-2">من شاتنا الحقيقي • 25 ذكرى منفصلة</span>
          <h2 className="text-3xl md:text-5xl font-amiri text-white mb-4 text-center drop-shadow-md">
            ضحكنا ودلعنا وتفاصيلنا الحلوة ✨🥰
          </h2>
          <p className="text-gray-400 text-center mb-12 text-sm md:text-base">
            25 موقف حقيقي من شاتنا، كل موقف لوحده بيفكرنا بأحلى لحظاتنا
          </p>
          <ChatGrid cards={realSweetMemories} accentBorder="border-pink-900/50" />
        </section>

        <Stats />
        <Cake />
        <WishBox />
        <GiftBox />
        <FinalHeart />

        <footer className="bg-black py-8 text-center border-t border-red-950/60 relative z-10">
          <p className="text-xs md:text-sm text-pink-500 font-amiri font-bold tracking-wider">
            صنع بحب من كتكوتك أوفص ❤️
          </p>
        </footer>
      </main>
    </div>
  );
}
