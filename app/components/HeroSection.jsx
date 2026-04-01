const NAVBAR_HEIGHT = 108;

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden px-6 pb-10"
      style={{
        height: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
        fontFamily: "var(--font-nunito)",
      }}
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,84,0,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Top glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,84,0,0.11) 0%, transparent 68%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center gap-3.5">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/28 text-orange-400 text-xs font-bold px-3.5 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 bg-[#ff5400] rounded-full animate-pulse" />
          New Batch · 5th April · 11 AM IST
        </div>

        {/* Title */}
        <h1
          className="text-white leading-tight"
          style={{
            fontFamily: "var(--font-yatra)",
            fontSize: "clamp(32px, 5.5vw, 58px)",
          }}
        >
          Learn Sanatan <span className="text-[#ff5400]">Shlokas</span>{" "}
          <span className="text-orange-300">Online</span>
        </h1>

        {/* Description */}
        <p
          className="max-w-[560px] text-zinc-400 font-semibold leading-relaxed"
          style={{ fontSize: "clamp(12px, 1.4vw, 14px)" }}
        >
          Shlokas are a beautiful means to{" "}
          <strong className="text-zinc-200 font-bold">
            express & experience the divinity within
          </strong>
          . An effortless learning journey — designed by Gurus, Yogis & Rishis
          of our Sanatan Dharma.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {[
            "🎥 Live + Recorded Sessions",
            "🗣️ Word-by-word Pronunciation",
            "🕐 Learn at Your Own Pace",
            "🙏 Learn in a Sangha",
            "✅ Expert Practice Corrections",
          ].map((label) => (
            <div
              key={label}
              className="bg-[#141313] border border-[#252323] rounded-full px-3 py-1 text-[11.5px] font-semibold text-zinc-300"
            >
              {label}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="cursor-pointer bg-[#ff5400] text-white text-sm font-extrabold px-6 py-2.5 rounded-xl border-none shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-0.5 transition-all active:scale-95">
            Join the New Batch 🙏
          </button>
          <button className="cursor-pointer flex items-center gap-2 bg-transparent text-zinc-200 text-sm font-bold px-5 py-2.5 rounded-xl border border-white/12 hover:border-white/25 hover:bg-white/4 transition-all">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon
                points="10 8 16 12 10 16 10 8"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            Watch a Sample
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-5 justify-center mt-4">
          {[
            { num: "8", label: "Day Journey" },
            { num: "2", label: "Live Sessions" },
            { num: "20min", label: "Daily Practice" },
            { num: "∞", label: "Blessings" },
          ].map(({ num, label }, i, arr) => (
            <div key={label} className="flex items-center gap-5">
              <div className="text-center">
                <div
                  className="text-[#ff5400] leading-none"
                  style={{ fontFamily: "var(--font-yatra)", fontSize: "22px" }}
                >
                  {num}
                </div>
                <div className="text-[9px] text-zinc-600 font-semibold uppercase tracking-widest mt-1">
                  {label}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div className="w-px h-8 bg-white/7 self-center" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-[9px] text-zinc-700 font-semibold uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-3 h-3 border-r-2 border-b-2 border-zinc-700 rotate-45" />
      </div>
    </section>
  );
}
