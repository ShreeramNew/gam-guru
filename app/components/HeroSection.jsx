"use client";
import React from "react";

const NAVBAR_HEIGHT = 60;

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 md:px-6"
      style={{
        height: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
        background:
          "radial-gradient(circle at center, #6b2d0f 0%, #4a1a05 35%, #2b0f04 70%, #1a0a05 100%)",
        fontFamily: "var(--font-cinzel)",
      }}
    >
      {/* BACKGROUND ORNAMENTATION */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center animate-[spin_200s_linear_infinite]">
          {[450, 700, 1000, 1350, 1800, 2400].map((size, i) => (
            <div
              key={i}
              className="border border-[#D4A017]/5 rounded-full absolute"
              style={{
                width: `clamp(${size/2}px, 90vw, ${size}px)`,
                height: `clamp(${size/2}px, 90vw, ${size}px)`,
                borderWidth: "0.5px",
              }}
            />
          ))}
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center px-4">
        <div className="text-[#D4A017] text-4xl md:text-5xl mb-4 md:mb-6 drop-shadow-[0_0_20px_rgba(212,160,23,0.5)]">
          🕉
        </div>
        
        <p className="text-[#D4A017] text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.8em] font-bold uppercase mb-4 opacity-90">
          Introducing
        </p>

        <div className="mb-6 w-full flex flex-col items-center">
          <h1
            className="text-white leading-[1.1] md:leading-[0.9] font-black uppercase mb- drop-shadow-md"
            style={{ fontSize: "clamp(48px, 12vw, 96px)" }}
          >
            {/* On mobile, this will stack. On desktop (md:), it stays together. */}
            <span className="block md:inline">Shloka</span>
            <span className="block md:inline text-[#D4A017]">bhyasa</span>
          </h1>
        </div>

        <p
          className="text-white/90 text-sm md:text-xl italic tracking-wide capitalize max-w-[280px] md:max-w-2xl mb-10 md:mb-8 drop-shadow-md"
          style={{ fontFamily: "serif" }}
        >
          Learn Shlokas From Anywhere at anytime
        </p>

        <p
          className="text-white/90 text-sm md:text-2xl  tracking-wide uppercase max-w-[280px] md:max-w-2xl mb-10 md:mb-12 drop-shadow-md"
          style={{ fontFamily: "serif" }}
        >
          Ashtakas | Stotrams | Stutis
        </p>


        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto px-6 md:px-0">
          <a href="#modules" className="w-full md:w-auto bg-[#E8720C] hover:bg-[#ff8c2b] text-white text-[13px] md:text-[14px] tracking-[0.15em] md:tracking-[0.2em] font-bold px-10 md:px-14 py-4 rounded-full transition-all uppercase active:scale-95 shadow-[0_0_30px_rgba(232,114,12,0.6)] text-center">
            Enroll Now
          </a>
          <a
            href="#learnmore"
            className="w-full md:w-auto border border-[#D4A017]/40 hover:bg-[#D4A017]/10 text-[#D4A017] text-[11px] md:text-[12px] tracking-[0.15em] md:tracking-[0.2em] font-bold px-10 md:px-12 py-4 rounded-sm transition-all uppercase backdrop-blur-sm text-center"
          >
            Learn More
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}