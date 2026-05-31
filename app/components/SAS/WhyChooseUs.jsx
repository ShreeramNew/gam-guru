"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const ecosystemPillars = [
    {
      title: "A Joint Family Atmosphere",
      icon: "🏡",
      desc: "Values are caught naturally, not taught mechanically.",
      points: [
        "Multi-generational warmth and grounding comfort",
        "Learning through daily household bonds and responsibility",
        "Character built organically via shared elder wisdom"
      ],
      color: "#EA580C",
      badgeText: "The Household Fabric",
      bgClass: "bg-white/95 border-orange-500/20 shadow-[0_8px_30px_rgb(234,88,12,0.04)]"
    },
    {
      title: "Mother Teachers Connect",
      icon: "👩‍🏫",
      desc: "Pedagogical structural precision meets maternal empathy.",
      points: [
        "Singular personal attention for every child",
        "Tuning intuitively into the child's emotional baseline",
        "Eliminating cold, clinical mass-classroom dynamics"
      ],
      color: "#059669",
      badgeText: "Pedagogical Care",
      bgClass: "bg-white/95 border-emerald-500/20 shadow-[0_8px_30px_rgb(5,150,105,0.04)]"
    },
    {
      title: "A Sangha of Like-Minded Kids",
      icon: "🤝",
      desc: "A pure peer ecosystem that honors innocence.",
      points: [
        "Joyful, hyper-supportive companion layers",
        "Safe shield away from modern peer comparison matrices",
        "Celebrating everyday integrity and cultural arts natively"
      ],
      color: "#D97706",
      badgeText: "The Peer Circle",
      bgClass: "bg-white/95 border-amber-500/20 shadow-[0_8px_30px_rgb(217,119,6,0.04)]"
    },
    {
      title: "Nature Connect",
      icon: "🌿",
      desc: "Conscious alignment with earth, seasons, and natural cycles.",
      points: [
        "Regular physical interaction with earth soils and flora",
        "Breaking away from sealed concrete and blue pixel screens",
        "Restoring internal biological rhythm and nervous system harmony"
      ],
      color: "#E11D48",
      badgeText: "Ecological Harmony",
      bgClass: "bg-white/95 border-rose-500/20 shadow-[0_8px_30px_rgb(225,29,72,0.04)]"
    },
    {
      title: "Divine as a Living Presence",
      icon: "✨",
      desc: "Experiencing divinity alive in everything around us.",
      points: [
        "Ditching abstract dogma and rigid courtroom fear",
        "Fostering natural reverence for forests, rivers, and elders",
        "Recognizing the sacred intelligence within oneself"
      ],
      color: "#6366F1",
      badgeText: "Living Awareness",
      bgClass: "bg-white/95 border-indigo-500/20 shadow-[0_8px_30px_rgb(99,102,241,0.04)]"
    },
    {
      title: "Gratitude as an Attitude",
      icon: "🙏",
      desc: "An internal default state of baseline appreciation.",
      points: [
        "Shielding minds from toxic consumer craving loops",
        "Conscious rituals acknowledging food, parents, and community",
        "Anchoring an unshakeable inner orientation of contentment"
      ],
      color: "#06B6D4",
      badgeText: "Internal Alignment",
      bgClass: "bg-white/95 border-cyan-500/20 shadow-[0_8px_30px_rgb(6,182,212,0.04)]"
    },
    {
      title: "Enacting & Connecting with Deities",
      icon: "🎭",
      desc: "Bringing Puranic grand histories completely alive.",
      points: [
        "Immersive physical theatre, dress up, and vocal expression",
        "Bypassing passive, boring rote-reading textbooks",
        "Embodying timeless heroic archetypes natively"
      ],
      color: "#8B5CF6",
      badgeText: "Living Historiography",
      bgClass: "bg-white/95 border-purple-500/20 shadow-[0_8px_30px_rgb(139,92,246,0.04)]"
    }
  ];

  return (
    /* ========================================================================= */
    /* NEW BACKGROUND: FLUID SPECTRUM DAWN MESH CANVAS                           */
    /* ========================================================================= */
    /* Only this surrounding shell changes. Seamlessly transitions across smooth */
    /* light fields while carrying an inline geometric ray pattern overlay.     */
    <section className="w-full bg-gradient-to-b from-[#FFFDF9] via-[#FFF2E6] to-[#FAF9F5] py-16 md:py-24 px-4 sm:px-6 md:px-16 border-t border-stone-200 relative overflow-hidden select-none">
      
      {/* Dynamic Inline Wave Ray Vectors */}
      <div className="absolute inset-0 opacity-[0.22] pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rayGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EA580C" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#D97706" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <path d="M 100,0 Q 720,400 1340,700 T 100,1400" stroke="url(#rayGradient)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 1340,0 Q 720,300 100,800 T 1340,1400" stroke="url(#rayGradient)" strokeWidth="1" strokeDasharray="4 8" strokeLinecap="round" />
        </svg>
      </div>

      {/* Underlying Soft Ambient Depth Blur Filters */}
      <div className="absolute top-[15%] right-[-5%] w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-5%] w-[450px] h-[450px] bg-amber-200/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. HEADER MODULE (UNTOUCHED)                                              */}
        {/* ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-3">
          <span className="text-orange-800 font-bold tracking-widest uppercase text-[10px] bg-white/80 border border-orange-200 px-3.5 py-1 rounded-full shadow-sm">
            The Ecosystem
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight leading-tight pt-1">
            Why Choose Sanatan After School?
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mt-2 rounded-full" />
        </div>

        {/* ========================================================================= */}
        {/* 2. THE LIVING VIGNETTE STREAM (UNTOUCHED DESIGN & LAYOUT)                  */}
        {/* ========================================================================= */}
        <div className="w-full max-w-4xl relative space-y-12 lg:space-y-16 pl-4 sm:pl-8 lg:pl-0">
          
          {/* Central Connecting Spine Vector Base */}
          <div className="absolute top-0 bottom-0 left-0 lg:left-1/2 w-0.5 bg-gradient-to-b from-orange-400/30 via-amber-400/20 to-indigo-400/30 transform lg:-translate-x-1/2 z-0" />

          {ecosystemPillars.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx}
                className={`w-full flex flex-col lg:flex-row items-start relative z-10 ${
                  isEven ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Timeline Intersection Node Dot Marker */}
                <div 
                  style={{ backgroundColor: item.color }}
                  className="absolute left-[-21px] sm:left-[-37px] lg:left-1/2 top-5 lg:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md z-30 hidden sm:block" 
                />

                {/* Individual Stream Plate Card Container */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`w-full lg:w-[46%] rounded-[2.2rem] p-6 border-2 bg-white/90 backdrop-blur-md transition-all duration-300 lg:hover:scale-[1.015] lg:hover:shadow-xl ${item.bgClass}`}
                >
                  
                  {/* Internal Card Title Stack Header */}
                  <div className="flex items-center gap-4 border-b border-stone-900/5 pb-3.5">
                    <div 
                      style={{ backgroundColor: item.color }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white shadow-md shrink-0"
                    >
                      {item.icon}
                    </div>
                    
                    <div className="flex flex-col text-left">
                      <span 
                        style={{ color: item.color }}
                        className="text-[9px] font-black uppercase tracking-widest font-mono"
                      >
                        {item.badgeText} // 0{idx + 1}
                      </span>
                      <h3 className="font-serif font-black text-stone-950 text-base sm:text-lg tracking-tight leading-tight mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skimmable Text Content Section */}
                  <div className="space-y-4 pt-3.5 text-left">
                    <p className="text-stone-900 font-bold text-xs sm:text-sm italic leading-relaxed">
                      "{item.desc}"
                    </p>
                    
                    <ul className="space-y-2 pl-0.5">
                      {item.points.map((point, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-2.5 text-stone-600 text-xs font-medium leading-relaxed">
                          <span style={{ color: item.color }} className="text-[10px] mt-0.5 shrink-0 opacity-80">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}