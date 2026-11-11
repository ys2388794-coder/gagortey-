import { useEffect, useState } from "react";
import WordHeart from "./WordHeart";
import { birthdayWordsList } from "../data";
import { useInView } from "../hooks/useInView";

export default function FinalHeart() {
  const [ref, seen] = useInView<HTMLElement>(0.25);
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let inner: number | undefined;
    const id = window.setInterval(() => {
      setVisible(false);
      inner = window.setTimeout(() => {
        setIdx((i) => (i + 1) % birthdayWordsList.length);
        setVisible(true);
      }, 450);
    }, 2400);
    return () => {
      clearInterval(id);
      clearTimeout(inner);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-4 bg-black flex flex-col items-center justify-center overflow-hidden relative"
    >
      <div className="text-center relative z-10 px-4 mb-4">
        <h1 className="text-3xl md:text-6xl font-bold font-amiri text-white animate-happy-birthday">
          كل سنة وإنتي طيبة يا جرجورتي ❤️
        </h1>
        <p className="text-pink-400 mt-3 text-sm md:text-lg">
          بكل لغات العالم الكلمات بتلف حوالين بعضها عشان ترسم قلب عيد ميلادك
        </p>
      </div>

      <div className="relative w-[94vw] h-[94vw] max-w-[600px] max-h-[600px] flex items-center justify-center z-10">
        <WordHeart words={birthdayWordsList} active={seen} totalMs={3800} className="w-full h-full" />
      </div>

      <div
        className="mt-4 text-2xl md:text-4xl font-cairo font-bold text-neonpink h-12 transition-opacity duration-500 z-10 text-center"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {birthdayWordsList[idx]} ❤️
      </div>
    </section>
  );
}
