const DAYS = [
  {
    day: 1,
    type: "live",
    label: "Live Session",
    duration: "🕐 1 hr + 20 min",
    mobileDuration: { highlight: "1 hr", rest: "live + 20 min module" },
    mobileTitle: "Day 1 — Kickoff",
    tasks: ["Group intro", "1st Stanza", "Pronunciation"],
    mobileTasks: [
      "Group intro & orientation",
      "1st Stanza deep-dive",
      "Word-by-word pronunciation",
    ],
  },
  {
    day: 2,
    type: "regular",
    label: "Recorded",
    duration: "🕐 20 min",
    mobileDuration: { highlight: "20 min", rest: "" },
    mobileTitle: "Day 2",
    tasks: ["2nd Stanza", "Send audio"],
    mobileTasks: ["2nd Stanza", "Record & send audio"],
  },
  {
    day: 3,
    type: "regular",
    label: "Recorded",
    duration: "🕐 20 min",
    mobileDuration: { highlight: "20 min", rest: "" },
    mobileTitle: "Day 3",
    tasks: ["3rd Stanza", "Send audio"],
    mobileTasks: ["3rd Stanza", "Record & send audio"],
  },
  {
    day: 4,
    type: "regular",
    label: "Recorded",
    duration: "🕐 20 min",
    mobileDuration: { highlight: "20 min", rest: "" },
    mobileTitle: "Day 4",
    tasks: ["4th Stanza", "Send audio"],
    mobileTasks: ["4th Stanza", "Record & send audio"],
  },
  {
    day: 5,
    type: "regular",
    label: "Recorded",
    duration: "🕐 20 min",
    mobileDuration: { highlight: "20 min", rest: "" },
    mobileTitle: "Day 5",
    tasks: ["5th Stanza", "Send audio"],
    mobileTasks: ["5th Stanza", "Record & send audio"],
  },
  {
    day: 6,
    type: "regular",
    label: "Recorded",
    duration: "🕐 20 min",
    mobileDuration: { highlight: "20 min", rest: "" },
    mobileTitle: "Day 6",
    tasks: ["6th Stanza", "Send audio"],
    mobileTasks: ["6th Stanza", "Record & send audio"],
  },
  {
    day: 7,
    type: "regular",
    label: "Recorded",
    duration: "🕐 20 min",
    mobileDuration: { highlight: "20 min", rest: "" },
    mobileTitle: "Day 7",
    tasks: ["7th Stanza", "Send audio"],
    mobileTasks: ["7th Stanza", "Record & send audio"],
  },
  {
    day: 8,
    type: "live",
    label: "Live Session",
    duration: "🕐 1 hr",
    mobileDuration: { highlight: "1 hr", rest: "live session" },
    mobileTitle: "Day 8 — Conclusion",
    tasks: ["Full recitation", "Final corrections", "Celebration 🎉"],
    mobileTasks: [
      "Full Guru Ashtakam recitation",
      "Final corrections & guidance",
      "Sangha celebration 🎉",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section
      className="max-w-5xl mx-auto px-6 py-20"
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-orange-500/8 border border-orange-500/22 text-orange-400 text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-widest mb-4">
          🗓 The Plan
        </div>
        <h2
          className="text-white mb-2.5"
          style={{
            fontFamily: "var(--font-yatra)",
            fontSize: "clamp(28px, 4.5vw, 46px)",
            lineHeight: 1.1,
          }}
        >
          8 Days. Every Moment <span className="text-[#ff5400]">Mapped.</span>
        </h2>
        <p className="text-sm text-zinc-500 font-semibold max-w-sm mx-auto leading-relaxed">
          From the first Guru Vandana to the final Ashtakam — every step is
          Seva.
        </p>
      </div>

      {/* ── DESKTOP: horizontal track ── */}
      <div className="hidden sm:block">
        <div className="relative pt-4 pb-8">
          {/* Connecting line */}
          <div
            className="absolute left-0 right-0 h-px z-0"
            style={{
              top: "38px",
              background:
                "linear-gradient(to right, transparent, #2a2828 8%, #2a2828 92%, transparent)",
            }}
          />
          <div className="grid grid-cols-8 relative z-10">
            {DAYS.map(({ day, type, label, duration, tasks }) => {
              const isLive = type === "live";
              return (
                <div key={day} className="flex flex-col items-center">
                  {/* Node — mt-1.5 prevents shadow clip */}
                  <div
                    className={`w-11 h-11 mt-1.5 rounded-full flex items-center justify-center text-sm z-10 flex-shrink-0 transition-transform hover:scale-110 ${
                      isLive
                        ? "bg-[#ff5400] text-white shadow-[0_0_0_5px_rgba(255,84,0,0.15),0_0_18px_rgba(255,84,0,0.22)]"
                        : "bg-[#141212] text-[#ff5400] border border-orange-500/20"
                    }`}
                    style={{ fontFamily: "var(--font-yatra)" }}
                  >
                    {day}
                  </div>

                  {/* Connector */}
                  <div
                    className={`w-px ${isLive ? "h-6 bg-orange-500/30" : "h-3 bg-[#252323]"}`}
                  />

                  {/* Card */}
                  <div
                    className={`w-[calc(100%-8px)] rounded-xl p-2.5 border transition-all hover:-translate-y-1 hover:border-orange-500/20 ${
                      isLive
                        ? "bg-orange-500/5 border-orange-500/25"
                        : "bg-[#111010] border-[#1e1c1c]"
                    }`}
                  >
                    <div
                      className={`text-[9px] font-bold uppercase tracking-[1.5px] mb-0.5 ${isLive ? "text-[#ff5400]" : "text-zinc-700"}`}
                    >
                      Day {day}
                    </div>
                    <div
                      className={`text-[10px] font-extrabold mb-1.5 ${isLive ? "text-orange-300" : "text-zinc-500"}`}
                    >
                      {label}
                    </div>
                    <div
                      className={`h-px mb-1.5 ${isLive ? "bg-orange-500/15" : "bg-[#1e1c1c]"}`}
                    />
                    <div className="flex flex-col gap-1 mb-2">
                      {tasks.map((t) => (
                        <div
                          key={t}
                          className="flex items-start gap-1 text-[9.5px] font-semibold text-zinc-600 leading-tight"
                        >
                          <span
                            className={`w-1 h-1 rounded-full flex-shrink-0 mt-1 ${isLive ? "bg-orange-500/50" : "bg-[#2e2c2c]"}`}
                          />
                          {t}
                        </div>
                      ))}
                    </div>
                    <div
                      className={`text-[9.5px] font-bold text-center py-1 rounded-md ${isLive ? "bg-orange-500/8 border border-orange-500/20 text-[#ff5400]" : "bg-[#0d0c0c] border border-[#252323] text-[#ff5400]"}`}
                    >
                      {duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MOBILE: vertical stepper ── */}
      <div className="sm:hidden">
        <div
          className="relative flex flex-col"
          style={{
            "--line":
              "linear-gradient(to bottom, #ff5400 0%, rgba(255,84,0,0.15) 60%, transparent 100%)",
          }}
        >
          {/* Vertical line */}
          <div
            className="absolute w-px top-5 bottom-5 left-[21px]"
            style={{
              background:
                "linear-gradient(to bottom, #ff5400 0%, rgba(255,84,0,0.15) 70%, transparent 100%)",
            }}
          />

          {DAYS.map(
            ({ day, type, mobileTitle, mobileDuration, mobileTasks }, i) => {
              const isLive = type === "live";
              const isLast = i === DAYS.length - 1;
              return (
                <div
                  key={day}
                  className={`flex gap-4 items-start relative ${!isLast ? "pb-4" : ""}`}
                >
                  {/* Node */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-sm flex-shrink-0 z-10 ${
                      isLive
                        ? "bg-[#ff5400] text-white shadow-[0_0_0_4px_rgba(255,84,0,0.15)]"
                        : "bg-[#141212] text-[#ff5400] border border-orange-500/20"
                    }`}
                    style={{ fontFamily: "var(--font-yatra)" }}
                  >
                    {day}
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-2xl px-4 py-3.5 border ${
                      isLive
                        ? "bg-orange-500/4 border-orange-500/28"
                        : "bg-[#111010] border-[#1e1c1c]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-extrabold text-white">
                        {mobileTitle}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${
                          isLive
                            ? "bg-orange-500/15 text-[#ff5400] border border-orange-500/30"
                            : "bg-[#181616] text-zinc-500 border border-[#252323]"
                        }`}
                      >
                        {isLive ? "🔴 Live" : "🎥 Recorded"}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-zinc-600 mb-2">
                      <span className="text-orange-400">
                        {mobileDuration.highlight}
                      </span>
                      {mobileDuration.rest && ` ${mobileDuration.rest}`}
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {mobileTasks.map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-1.5 text-[11.5px] font-semibold text-zinc-500"
                        >
                          <span
                            className={`w-1 h-1 rounded-full flex-shrink-0 ${isLive ? "bg-orange-500/50" : "bg-[#2e2c2c]"}`}
                          />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-8">
        {[
          { cls: "bg-[#ff5400]", label: "Live Session" },
          {
            cls: "bg-[#1e1c1c] border border-[#3a3838]",
            label: "Recorded Module",
          },
        ].map(({ cls, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 text-xs font-semibold text-zinc-600"
          >
            <span className={`w-2.5 h-2.5 rounded-full ${cls}`} />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
