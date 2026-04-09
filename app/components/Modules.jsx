"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MODULES = [
  {
    title: "GURU ASHTAKAM",
    image: "/GuruPaduka.png",
    description: "Honoring the spiritual guide through the sacred Guru Paduka.",
  },
  {
    title: "KALA BHAIRAVA ASHTAKAM",
    image: "/KalaBhairava.png",
    description: "Connect with the divine guardian of time and protection.",
  },
  {
    title: "LAKSHMI ASHTAKAM",
    image: "/lakshmi.png",
    description: "Invoking the grace of the Goddess of wealth and prosperity.",
  },
  {
    title: "NAGA STUTI",
    image: "/NagaIdeol.png",
    description: "Adoration to the serpent deities for strength and healing.",
  },
];

export default function ModuleShowcase() {
  const orange = "#E8720C";
  const brownDeep = "#5C3A1E";
  const goldAccent = "#D4A017";
  const creamBg = "#FDF6E3"; // From your reference screenshot

  return (
    <section 
      className="w-full lg:h-auto lg:min-h-[700px] flex flex-col justify-center items-center px-6 md:px-20 py-16 overflow-hidden"
      style={{ backgroundColor: creamBg }}
    >
      <div className="max-w-7xl w-full flex flex-col h-full py-12 md:py-16">
        
        {/* Header Section - Spaced for "at a glance" visibility */}
        <div className="text-center mb-12 md:mb-16 flex-shrink-0">
          <p className="text-[11px] font-black uppercase tracking-[0.5em] mb-4 opacity-70" style={{ color: orange }}>
            Explore Wisdom
          </p>
          <h2 
            className="text-4xl md:text-5xl font-black uppercase tracking-tight"
            style={{ color: brownDeep, fontFamily: "var(--font-cinzel)" }}
          >
            Sacred <span style={{ color: orange }}>Modules</span>
          </h2>
          <div className="w-16 h-[2.5px] mx-auto mt-6" style={{ backgroundColor: orange }} />
        </div>

        {/* Updated Grid - Tighter gaps for Vh efficiency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow items-start pb-10">
          {MODULES.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-[#5C3A1E]/10 lg:hover:-translate-y-2"
              style={{ border: "1px solid rgba(92, 58, 30, 0.05)" }}
            >
              {/* Image Area - Aspect Ratio maintains visibility on mobile and saves space on laptop */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[2rem]">
                <Image
                  src={module.image}
                  alt={module.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
              </div>

              {/* Text Area */}
              <div className="p-6 md:p-7 flex flex-col items-center text-center">
                <div className="space-y-3 min-h-[90px] flex flex-col justify-center">
                  <h3
                    className="text-[16px] md:text-[17px] font-black uppercase tracking-widest leading-tight transition-colors group-hover:text-[#E8720C]"
                    style={{ fontFamily: "var(--font-cinzel)", color: brownDeep }}
                  >
                    {module.title}
                  </h3>
                  <p className="text-[11px] md:text-[12px] font-bold leading-relaxed opacity-60" style={{ color: brownDeep }}>
                    {module.description}
                  </p>
                </div>
                
                {/* Button - Matches Hero Style */}
                <button 
                  className="w-full mt-6 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer shadow-lg active:scale-95 bg-[#E8720C] text-white hover:brightness-110"
                  style={{ 
                    boxShadow: `0 8px 20px ${orange}30`
                  }}
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Signature */}
        <div className="hidden md:block flex-shrink-0 w-32 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent opacity-60 mt-12" />
      </div>
    </section>
  );
}