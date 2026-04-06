"use client";
import React from "react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    id: "01",
    icon: "🎙️",
    title: "The Hybrid Model",
    desc: "Live interactive sessions paired with structured daily recordings.",
    tag: "Live + Self-Paced",
  },
  {
    id: "02",
    icon: "🕐",
    title: "Flexible Routine",
    desc: "Just 20 minutes a day. Designed to fit into your busy schedule.",
    tag: "Time-Efficient",
  },
  {
    id: "03",
    icon: "🎯",
    title: "Perfect Pronunciation",
    desc: "Word-by-word breakdowns to master correct Sanskrit sounds.",
    tag: "Authentic Chanting",
  },
  {
    id: "04",
    icon: "🙏",
    title: "Expert Guidance",
    desc: "Personalized feedback on your audio to correct your practice.",
    tag: "Direct Mentorship",
  },
];

export default function Features() {
  const goldPrimary = "rgba(212, 160, 23, 1)";
  const goldBorder = "rgba(212, 160, 23, 0.2)";

  return (
    <section 
      className="w-full py-24 relative overflow-hidden" 
      style={{ 
        background: `linear-gradient(160deg, #1a0a00 0%, #3d1a00 50%, #7B1E1E 100%)`
      }}
    >
      {/* Visible Circle Texture */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='29' stroke='%23d4a017' stroke-width='0.4' fill='none'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          opacity: 0.12
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <p 
            className="text-[10px] font-black uppercase tracking-[0.5em] mb-3 opacity-60" 
            style={{ color: goldPrimary }}
          >
            Sikshana Paddhati
          </p>
          <h2 
            className="font-black uppercase tracking-tight text-white mb-4"
            style={{ 
              fontFamily: "var(--font-cinzel)", 
              fontSize: "clamp(2rem, 5vw, 2.8rem)" 
            }}
          >
            How You Will <span style={{ color: goldPrimary }}>Learn?</span>
          </h2>
          <p className="text-[13px] font-bold text-white/50 max-w-lg mx-auto leading-relaxed">
            A structured 8-day journey blending ancient Guru-Shishya wisdom with modern learning efficiency.
          </p>
          <div className="w-14 h-[2px] mx-auto mt-8" style={{ backgroundColor: goldPrimary }} />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <motion.div 
              key={f.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative p-8 rounded-2xl border flex flex-col overflow-hidden transition-all duration-500"
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.05)", 
                borderColor: goldBorder,
                backdropFilter: "blur(4px)"
              }}
            >
              {/* TOP BORDER PROGRESS ANIMATION */}
              <motion.div 
                className="absolute top-0 left-0 h-[3px] z-20"
                style={{ backgroundColor: goldPrimary }}
                variants={{
                  rest: { width: "0%" },
                  hover: { width: "100%", transition: { duration: 0.4, ease: "easeInOut" } }
                }}
              />

              {/* Icon */}
              <div className="mb-8 relative">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl border"
                  style={{ 
                    backgroundColor: "rgba(0,0,0,0.3)", 
                    borderColor: "rgba(212,160,23,0.15)", 
                    color: goldPrimary 
                  }}
                >
                  {f.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 
                  className="text-lg font-black uppercase mb-3 tracking-wide text-white" 
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {f.title}
                </h3>
                <p className="text-[13px] font-medium leading-relaxed text-white/60">
                  {f.desc}
                </p>
              </div>

              {/* Tag */}
              <div 
                className="mt-8 inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border"
                style={{ borderColor: goldBorder, color: goldPrimary }}
              >
                {f.tag}
              </div>

              {/* ID Subtle Background Watermark */}
              <span className="absolute bottom-4 right-6 text-4xl font-black opacity-[0.03] text-white italic select-none">
                {f.id}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}