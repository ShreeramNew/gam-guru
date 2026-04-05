"use client";
import React from "react";

const NAVBAR_HEIGHT = 108; // Adjust this to match your Navbar's actual height

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden px-6"
      style={{
        height: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
        // Sanatan Vibrant Background: Deep Burnt Orange to Dark Charcoal
        background:
          "radial-gradient(circle at center, #4a1a05 0%, #0d0c0c 100%)",
        fontFamily: "var(--font-cinzel)",
      }}
    >
      {/* Background Textures */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff5400' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Top Glow */}
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-[#ff5400]/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center gap-4 text-center">
        {/* Batch Info Badge */}
        <div className="bg-[#ff5400] text-white text-[10px] tracking-[0.3em] font-black px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(255,84,0,0.4)] animate-pulse uppercase">
          New Batch: 5th April • 11 AM IST
        </div>

        {/* Brand Header */}
        <div className="space-y-1">
          <h1
            className="text-white leading-none font-black uppercase"
            style={{ fontSize: "clamp(42px, 7vw, 90px)" }}
          >
            Shloka<span className="text-[#ff5400]">bhyasa</span>
          </h1>
          <h2 className="text-[#ffb38a] text-sm md:text-xl tracking-[0.4em] font-bold uppercase">
            Learn Sanatan Shlokas Online
          </h2>
        </div>

        {/* Core Philosophy Paragraphs */}
        <div
          className="max-w-3xl space-y-3"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          <p className="text-zinc-100 text-sm md:text-base font-bold leading-relaxed">
            Shlokas are a beautiful means to{" "}
            <span className="text-[#ff5400]">
              express & experience the divinity within
            </span>
            , and powerful tools to connect with the Divine.
          </p>
          <p className="text-zinc-400 text-[12px] md:text-sm leading-relaxed italic">
            An effort to make Shlokas, Ashtakas, Stotras, and Stutis into an
            effortless learning process, designed by Gurus, Yogis & Rishis of
            our Sanatan Dharma.
          </p>
        </div>

        {/* Feature Icons Row - Simplified for 100vh fit */}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {[
            { icon: "🎙️", text: "Hybrid Format" },
            { icon: "🗣️", text: "Word-by-word" },
            { icon: "🕐", text: "Learn Anytime" },
            { icon: "🙏", text: "Sangha Learning" },
            { icon: "✅", text: "Expert Corrections" },
          ].map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
            >
              <span className="text-xs">{f.icon}</span>
              <span className="text-[9px] text-zinc-300 uppercase font-black tracking-widest">
                {f.text}
              </span>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-6 flex flex-col items-center gap-4">
          <button className="bg-[#ff5400] hover:bg-[#ff6a20] text-white text-[13px] tracking-[0.2em] font-black px-12 py-4 rounded-xl shadow-[0_15px_40px_-10px_rgba(255,84,0,0.6)] transition-all uppercase active:scale-95 cursor-pointer">
            Join the Batch 🙏
          </button>

          {/* Schedule Teaser */}
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
            <span>8-Day Journey</span>
            <div className="w-1 h-1 bg-[#ff5400] rounded-full" />
            <span>Live + Recorded</span>
            <div className="w-1 h-1 bg-[#ff5400] rounded-full" />
            <span>Daily Practice</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-4 flex flex-col items-center gap-1 opacity-30">
        <span className="text-[8px] uppercase tracking-widest text-white">
          Explore Schedule
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
