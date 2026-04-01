// components/Features.jsx

const PARAMPARA_POINTS = [
  { icon: "🧘", text: "Shaped by Yogis who live these Shlokas daily" },
  { icon: "📿", text: "Verified by Rishis rooted in Vedic tradition" },
  { icon: "🪔", text: "Guided by Gurus of the Sanatan Parampara" },
  { icon: "🕉", text: "Every word, every Swara — intentional" },
];

const FEATURES = [
  {
    id: "01",
    icon: "🎙",
    span: "col-span-1 sm:col-span-2",
    accent: true,
    title: "Live + Recorded — The Hybrid Format",
    desc: "Begin with a live Guru-led session, deepen with structured recorded modules every day. The best of Gurukul tradition — at your own pace, in your own space.",
    tag: "🔴 Live  +  🎥 Recorded",
  },
  {
    id: "02",
    icon: "🕐",
    span: "col-span-1",
    title: "Learn at Your Convenient Time",
    desc: "Just 20 minutes a day. Fit your Shloka practice into morning Puja, an afternoon break, or a quiet evening.",
    tag: "⏱ 20 min / day",
  },
  {
    id: "03",
    icon: "🗣",
    span: "col-span-1",
    title: "Word-by-Word Pronunciation",
    desc: "Every Shloka broken down word by word — chant with correct Swara and Uccharan, not just memory.",
    tag: "🎯 Precision first",
  },
  {
    id: "04",
    icon: "✅",
    span: "col-span-1",
    title: "Expert Practice Corrections",
    desc: "Send your audio. Get personalised corrections from an expert — just like the Guru–Shishya tradition.",
    tag: "🙏 Guru feedback",
  },
  {
    id: "05",
    icon: "🪷",
    span: "col-span-1",
    title: "Learn in a Sangha",
    desc: "Learn alongside fellow seekers — share the energy of collective chanting and mutual encouragement.",
    tag: "🤝 Community",
  },
];

export default function Features() {
  return (
    <section
      className="max-w-5xl mx-auto px-6 py-20"
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-orange-500/8 border border-orange-500/22 text-orange-400 text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-widest mb-4">
          ✨ Why Shlokabhyasa
        </div>
        <h2
          className="text-white mb-2.5"
          style={{
            fontFamily: "var(--font-yatra)",
            fontSize: "clamp(28px, 4.5vw, 46px)",
            lineHeight: 1.1,
          }}
        >
          Not Just Learning.
          <br />
          <span className="text-[#ff5400]">A Living Practice.</span>
        </h2>
        <p className="text-sm text-zinc-500 font-semibold max-w-sm mx-auto leading-relaxed">
          Every feature is designed to honour the tradition — and make it
          effortless for you.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-[#1a1818]"
        style={{ background: "#1a1818" }}
      >
        {/* Cards 1–5 */}
        {FEATURES.map(({ id, icon, span, accent, title, desc, tag }) => (
          <div
            key={id}
            className={`relative flex flex-col gap-3.5 p-7 overflow-hidden transition-colors cursor-default ${span}
              ${accent ? "bg-orange-500/5 hover:bg-orange-500/8" : "bg-[#0d0c0c] hover:bg-[#111010]"}`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center text-[19px] flex-shrink-0 border ${accent ? "bg-orange-500/10 border-orange-500/25" : "bg-[#141212] border-[#252323]"}`}
            >
              {icon}
            </div>
            <h3 className="text-[15px] font-extrabold text-white leading-snug">
              {title}
            </h3>
            <p
              className={`text-sm font-semibold leading-relaxed ${accent ? "text-zinc-400" : "text-zinc-600"}`}
            >
              {desc}
            </p>
            <div
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold w-fit border ${accent ? "bg-orange-500/8 border-orange-500/20 text-orange-400" : "bg-[#141212] border-[#252323] text-zinc-600"}`}
            >
              {tag}
            </div>
            <span
              className="absolute right-[-8px] bottom-[-14px] text-[88px] leading-none pointer-events-none select-none"
              style={{
                fontFamily: "var(--font-yatra)",
                color: accent
                  ? "rgba(255,84,0,0.07)"
                  : "rgba(255,255,255,0.025)",
              }}
            >
              {id}
            </span>
          </div>
        ))}

        {/* Card 6 — full width with inner two-col layout */}
        <div className="relative col-span-1 sm:col-span-3 flex flex-col sm:flex-row gap-7 p-7 overflow-hidden transition-colors cursor-default bg-orange-500/5 hover:bg-orange-500/8">
          {/* Left */}
          <div className="flex flex-col gap-3.5 flex-1">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[19px] bg-orange-500/10 border border-orange-500/25">
              📜
            </div>
            <h3 className="text-[15px] font-extrabold text-white leading-snug">
              Designed by Gurus, Yogis & Rishis of Our Sanatan Dharma
            </h3>
            <p className="text-sm font-semibold leading-relaxed text-zinc-400">
              This is not a casual course. The learning path is rooted in
              Parampara — crafted by those who have walked the path themselves,
              ensuring every learner experiences the true depth of Sanatan
              Shlokas.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold w-fit border bg-orange-500/8 border-orange-500/20 text-orange-400">
              🕉 Rooted in Parampara
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 bg-[#0a0909] border border-orange-500/15 rounded-xl p-5 flex flex-col gap-3">
            {PARAMPARA_POINTS.map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-start gap-3 text-[12.5px] font-semibold text-zinc-400 leading-snug"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-sm flex-shrink-0">
                  {icon}
                </div>
                {text}
              </div>
            ))}
          </div>

          <span
            className="absolute right-[-8px] bottom-[-14px] text-[88px] leading-none pointer-events-none select-none"
            style={{
              fontFamily: "var(--font-yatra)",
              color: "rgba(255,84,0,0.07)",
            }}
          >
            06
          </span>
        </div>
      </div>
    </section>
  );
}
