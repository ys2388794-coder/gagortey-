import type { ChatSituation } from "../data";

interface Props {
  cards: ChatSituation[];
  accentBorder: string;
}

function ChatCard({ situation, accentBorder }: { situation: ChatSituation; accentBorder: string }) {
  return (
    <div
      className={`bg-[#0b141a] rounded-3xl overflow-hidden border ${accentBorder} shadow-[0_0_25px_rgba(255,0,51,0.12)] flex flex-col`}
    >
      <div className="bg-chatgray px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-neonred to-neonpink flex items-center justify-center font-bold text-white text-sm shadow shrink-0">
            G❤️
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-xs md:text-sm">{situation.title}</span>
            <span className="text-[11px] text-pink-400">Gargourti • شاتنا الحقيقي</span>
          </div>
        </div>
        <span className="text-[11px] bg-black/40 text-gray-300 px-2.5 py-1 rounded-full shrink-0">
          {situation.date}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1 bg-[#0b141a] relative">
        {situation.messages.map((m, i) => {
          const isMe = m.sender === "me";
          return (
            <div
              key={i}
              className={`relative w-fit max-w-[88%] rounded-xl p-2.5 px-3.5 shadow-md ${
                isMe
                  ? "bg-chatgreen rounded-tr-none self-start chat-bubble-right"
                  : "bg-chatgray rounded-tl-none self-end chat-bubble-left"
              }`}
            >
              <span className={`block text-[10px] font-bold mb-0.5 ${isMe ? "text-emerald-200" : "text-pink-400"}`}>
                {isMe ? "أوفص" : "جرجورتي ❤️"}
              </span>
              <p className="text-sm text-white leading-relaxed">{m.text}</p>
              <span className="text-[10px] text-gray-300/80 block text-left mt-1" dir="ltr">
                {m.time} {isMe ? "✓✓" : ""}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ChatGrid({ cards, accentBorder }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {cards.map((c) => (
        <ChatCard key={c.title} situation={c} accentBorder={accentBorder} />
      ))}
    </div>
  );
}
