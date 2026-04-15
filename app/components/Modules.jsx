"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MODULES = [
  {
    title: "GURU ASHTAKAM",
    image: "/GuruPaduka.png",
    description: "Honoring the spiritual guide through the sacred Guru Paduka.",
    price: { original: 1100, current: 777 },
    status: "active",
  },
  {
    title: "NAGA STUTI",
    image: "/NagaIdeol.png",
    description: "Adoration to the serpent deities for strength and healing.",
    price: { original: 500, current: 333 },
    status: "coming_soon",
    // Naga Stuti price is visible as requested
  },
  {
    title: "KALA BHAIRAVA ASHTAKAM",
    image: "/KalaBhairava.png",
    description: "Connect with the divine guardian of time and protection.",
    price: { original: 1200, current: 888 }, // Placeholder for blur
    status: "coming_soon",
  },
  {
    title: "LAKSHMI ASHTAKAM",
    image: "/lakshmi.png",
    description: "Invoking the grace of the Goddess of wealth and prosperity.",
    price: { original: 1500, current: 999 }, // Placeholder for blur
    status: "coming_soon",
  },
  
];

export default function ModuleShowcase() {
  const orange = "#E8720C";
  const brownDeep = "#5C3A1E";
  const goldAccent = "#D4A017";
  const creamBg = "#FDF6E3";

  return (
    <section
      className="w-full lg:h-auto lg:min-h-[700px] flex flex-col justify-center items-center px-6 md:px-20 py-16 overflow-hidden"
      style={{ backgroundColor: creamBg }}
    >
      <div className="max-w-7xl w-full flex flex-col h-full py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 flex-shrink-0">
          <p
            className="text-[11px] font-black uppercase tracking-[0.5em] mb-4 opacity-70"
            style={{ color: orange }}
          >
            Explore Wisdom
          </p>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight"
            style={{ color: brownDeep, fontFamily: "var(--font-cinzel)" }}
          >
            Sacred <span style={{ color: orange }}>Modules</span>
          </h2>
          <div
            className="w-16 h-[2.5px] mx-auto mt-6"
            style={{ backgroundColor: orange }}
          />
        </div>

        {/* Updated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow items-start pb-10">
          {MODULES.map((module, idx) => {
            const isComingSoon = module.status === "coming_soon";
            const isNagaOrGuru =
              module.title === "NAGA STUTI" || module.title === "GURU ASHTAKAM";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-[#5C3A1E]/10 lg:hover:-translate-y-2 relative"
                style={{ border: "1px solid rgba(92, 58, 30, 0.05)" }}
              >
                {/* Image Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[2rem]">
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={`object-cover transition-transform duration-1000 group-hover:scale-110 ${isComingSoon ? "grayscale-[20%]" : ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

                  {isComingSoon && (
                    <div className="absolute top-6 -right-12 bg-[#E8720C] text-white font-black text-[9px] uppercase tracking-[0.3em] py-2 px-16 rotate-[35deg] shadow-lg z-10 select-none">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Text Area */}
                <div className="p-6 md:p-7 flex flex-col items-center text-center flex-grow">
                  <div className="space-y-3 min-h-[90px] flex flex-col justify-center">
                    <h3
                      className="text-[16px] md:text-[17px] font-black uppercase tracking-widest leading-tight transition-colors group-hover:text-[#E8720C]"
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        color: brownDeep,
                      }}
                    >
                      {module.title}
                    </h3>
                    <p
                      className="text-[11px] md:text-[12px] font-bold leading-relaxed opacity-60"
                      style={{ color: brownDeep }}
                    >
                      {module.description}
                    </p>
                  </div>

                  {/* Pricing Section - Conditional Blur */}
                  <div
                    className={`mt-5 min-h-[40px] flex items-center justify-center gap-3 transition-all duration-500 ${!isNagaOrGuru ? "blur-[5px] opacity-30 select-none scale-95" : "opacity-100"}`}
                  >
                    <span className="text-sm font-bold text-black/40 line-through">
                      ₹{module.price.original}
                    </span>
                    <span
                      className="text-2xl font-black"
                      style={{ color: brownDeep }}
                    >
                      ₹{module.price.current}
                    </span>
                  </div>

                  {/* Button - Always Enabled */}
                  <button
                    className="w-full mt-6 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer shadow-lg active:scale-95 bg-[#E8720C] text-white hover:brightness-110"
                    style={{
                      boxShadow: `0 8px 20px ${orange}30`,
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Signature */}
        <div className="hidden md:block flex-shrink-0 w-32 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent opacity-60 mt-12" />
      </div>
    </section>
  );
}
