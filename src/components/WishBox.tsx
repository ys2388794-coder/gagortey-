import { useRef } from "react";

export default function WishBox() {
  const ref = useRef<HTMLTextAreaElement>(null);

  const grow = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <section className="py-20 px-4 bg-[#160005] flex flex-col items-center">
      <div className="w-full max-w-2xl glowing-box bg-black/60 p-6 md:p-10 rounded-3xl relative">
        <h3 className="text-2xl md:text-3xl font-amiri text-neonpink mb-3 text-center">
          ✨ أمنيتك إيه السنة دي يا جرجورتي؟
        </h3>
        <p className="text-xs md:text-sm text-gray-400 text-center mb-6">
          الصندوق بيكبر معاكي كل ما تكتبي أكتر.. اكتبي كل اللي بتتمنيه وخديها سكرين وابعتيهالي ❤️
        </p>
        <textarea
          ref={ref}
          onInput={grow}
          className="w-full bg-red-950/20 border border-pink-800/50 focus:border-neonpink focus:outline-none text-white rounded-2xl p-5 min-h-[140px] resize-none text-base md:text-lg leading-relaxed transition-colors"
          placeholder="اكتبي الي اتمنتيه هنا وخديها اسكرين وابعتيهالي..."
        />
      </div>
    </section>
  );
}
