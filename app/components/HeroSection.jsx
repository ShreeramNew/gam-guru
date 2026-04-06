"use client";
import React from "react";

const NAVBAR_HEIGHT = 60;

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden px-6"
      style={{
        height: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
        /* REMOVED BLACK EDGES: 
            Started with a bright copper (#6b2d0f) and ensured the darkest point 
            is a deep mahogany (#1a0a05) rather than pure black.
        */
        background:
          "radial-gradient(circle at center, #6b2d0f 0%, #4a1a05 35%, #2b0f04 70%, #1a0a05 100%)",
        fontFamily: "var(--font-cinzel)",
      }}
    >
      {/* BACKGROUND ORNAMENTATION */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center animate-[spin_200s_linear_infinite]">
          {/* Extremely thin, gold-tinted concentric rings */}
          {[450, 700, 1000, 1350, 1800, 2400].map((size, i) => (
            <div
              key={i}
              className="border border-[#D4A017]/5 rounded-full absolute"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                borderWidth: "0.5px",
              }}
            />
          ))}

          {/* Perspective Rays - Very faint to keep the background 'clean' */}
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <div
              key={angle}
              className="w-[0.5px] h-[250vh] bg-gradient-to-b from-transparent via-[#D4A017]/10 to-transparent absolute"
              style={{ transform: `rotate(${angle}deg)` }}
            />
          ))}
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Branding Icon */}
        <div className="text-[#D4A017] text-5xl mb-6 drop-shadow-[0_0_20px_rgba(212,160,23,0.5)]">
          🕉
        </div>

        <p className="text-[#D4A017] text-[10px] tracking-[0.8em] font-bold uppercase mb-4 opacity-90">
          Introducing
        </p>

        {/* Brand Header: Sanatan Boot Camp style */}
        <div className="mb-6 flex flex-col items-center">
          <h1
            className="text-white leading-[0.9] font-black uppercase mb-2 shadow-black/20 drop-shadow-sm"
            style={{ fontSize: "clamp(52px, 10vw, 96px)" }}
          >
            Shloka <span className="text-[#D4A017]">bhyasa</span>
          </h1>
        </div>

        <p
          className="text-white/90 text-sm md:text-xl italic tracking-wide max-w-2xl mb-12 drop-shadow-md"
          style={{ fontFamily: "serif" }}
        >
          Learn Sanatan Shlokas Online
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <button className="bg-[#E8720C] hover:bg-[#ff8c2b] text-white text-[14px] tracking-[0.2em] font-bold px-14 py-4 rounded-full transition-all uppercase active:scale-95 shadow-[0_0_30px_rgba(232,114,12,0.6)] cursor-pointer flex items-center gap-3">
            Enroll Now
          </button>

          <button className="border border-[#D4A017]/40 hover:bg-[#D4A017]/10 text-[#D4A017] text-[12px] tracking-[0.2em] font-bold px-12 py-4 rounded-sm transition-all uppercase cursor-pointer backdrop-blur-sm">
            Login
          </button>
        </div>

        {/* Signature Accent Line */}
        <div className="mt-14 w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A017]/70 to-transparent" />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[#D4A017] text-[9px] uppercase tracking-[0.4em] font-bold">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4A017] to-transparent" />
      </div>

      {/* Global CSS for the Rotation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
