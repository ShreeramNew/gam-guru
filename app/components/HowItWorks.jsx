"use client";
import React from "react";

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
      className="w-full py-24 border-t border-white/5"
      // Matching the Hero radial gradient for a seamless flow
      style={{
        background:
          "radial-gradient(circle at center, #4a1a05 0%, #0d0c0c 100%)",
      }}
    >
      {/* Background Texture bleeding edge-to-edge */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff5400' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Title block remains centered for readability */}
      <div className="relative z-10 px-6 text-center mb-20">
        <div
          className="inline-flex items-center gap-2 bg-[#ff5400]/10 border border-[#ff5400]/30 text-[#ffb38a] text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-6 cursor-default"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          🗓 The Journey
        </div>
        <h2
          className="text-white mb-4 uppercase font-black"
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: 1,
          }}
        >
          8 Days. Every Moment <span className="text-[#ff5400]">Mapped.</span>
        </h2>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#ff5400] to-transparent mx-auto mt-6" />
      </div>

      {/* ── DESKTOP: Edge-to-Edge Grid ── */}
      <div className="hidden xl:block relative z-10 w-full px-4">
        <div className="relative">
          {/* Edge-to-edge connecting line */}
          <div
            className="absolute left-0 right-0 h-[1px] z-0"
            style={{
              top: "24px",
              background:
                "linear-gradient(to right, transparent, #ff540044 10%, #ff540044 90%, transparent)",
            }}
          />
          <div className="grid grid-cols-8 gap-3">
            {DAYS.map(({ day, type, label, duration, tasks }) => {
              const isLive = type === "live";
              return (
                <div key={day} className="flex flex-col group cursor-pointer">
                  {/* Node - Centered in column */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm z-10 flex-shrink-0 transition-all duration-500 group-hover:scale-110 font-black shadow-2xl ${
                        isLive
                          ? "bg-[#ff5400] text-white shadow-[#ff5400]/40"
                          : "bg-[#2a1104] text-[#ff5400] border border-[#ff5400]/30"
                      }`}
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {day}
                    </div>
                  </div>

                  {/* Card content adapts to grid width */}
                  <div
                    className={`flex-1 rounded-xl p-4 border transition-all duration-500 group-hover:bg-[#ff5400]/5 ${
                      isLive
                        ? "bg-[#ff5400]/10 border-[#ff5400]/40"
                        : "bg-black/20 border-white/5"
                    }`}
                  >
                    <div
                      className="text-[10px] font-black text-[#ffb38a] uppercase tracking-widest mb-1"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Day {day}
                    </div>
                    <div
                      className="text-[12px] font-black text-white uppercase mb-4"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {label}
                    </div>

                    <div className="space-y-2 mb-6 min-h-[80px]">
                      {tasks.map((t) => (
                        <div
                          key={t}
                          className="flex items-start gap-2 text-[11px] font-bold text-zinc-400 leading-tight"
                          style={{ fontFamily: "var(--font-nunito)" }}
                        >
                          <span
                            className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${isLive ? "bg-[#ff5400]" : "bg-zinc-700"}`}
                          />
                          {t}
                        </div>
                      ))}
                    </div>

                    <div
                      className={`text-[10px] font-black text-center py-2 rounded-lg ${isLive ? "bg-[#ff5400] text-white" : "bg-white/5 text-[#ff5400]"}`}
                      style={{ fontFamily: "var(--font-cinzel)" }}
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

      {/* ── MOBILE & SMALL DESKTOP (Grid/Stack) ── */}
      <div className="xl:hidden px-6 max-w-3xl mx-auto relative z-10">
        <div className="relative flex flex-col space-y-6">
          <div
            className="absolute w-[1px] top-6 bottom-6 left-[23px]"
            style={{
              background:
                "linear-gradient(to bottom, #ff5400 0%, #ff540011 100%)",
            }}
          />

          {DAYS.map(
            ({ day, type, mobileTitle, mobileDuration, mobileTasks }) => {
              const isLive = type === "live";
              return (
                <div
                  key={day}
                  className="flex gap-5 items-start group cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm flex-shrink-0 z-10 transition-all font-black ${
                      isLive
                        ? "bg-[#ff5400] text-white shadow-lg shadow-[#ff5400]/20"
                        : "bg-[#2a1104] text-[#ff5400] border border-[#ff5400]/20"
                    }`}
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {day}
                  </div>

                  <div
                    className={`flex-1 rounded-2xl px-5 py-5 border transition-all ${
                      isLive
                        ? "bg-[#ff5400]/10 border-[#ff5400]/40"
                        : "bg-black/30 border-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-sm font-black text-white uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {mobileTitle}
                      </span>
                      <span
                        className={`text-[8px] font-black px-2 py-1 rounded uppercase tracking-tighter ${
                          isLive
                            ? "bg-[#ff5400] text-white"
                            : "bg-white/5 text-[#ff5400]"
                        }`}
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {isLive ? "🔴 Live" : "🎥 Recorded"}
                      </span>
                    </div>
                    <p
                      className="text-[11px] font-bold text-[#ffb38a] mb-3"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {mobileDuration.highlight} {mobileDuration.rest}
                    </p>
                    <div className="space-y-1.5">
                      {mobileTasks.map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-2 text-[12px] font-bold text-zinc-400"
                          style={{ fontFamily: "var(--font-nunito)" }}
                        >
                          <div
                            className={`w-1 h-1 rounded-full ${isLive ? "bg-[#ff5400]" : "bg-zinc-700"}`}
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

      {/* Legend Edge-to-Edge */}
      <div className="relative z-10 flex flex-wrap justify-center gap-x-12 gap-y-4 mt-20 pt-10 border-t border-white/5 px-6">
        {[
          { color: "bg-[#ff5400]", label: "Direct Mentor Support" },
          {
            color: "bg-[#2a1104] border border-[#ff5400]/40",
            label: "Structured Modules",
          },
          { color: "bg-white/20", label: "Daily Sangha Practice" },
        ].map(({ color, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            <span className={`w-3 h-3 rounded-full ${color}`} />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
