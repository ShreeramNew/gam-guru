"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  // All 7 pillars with concise, highly skimmable text content configurations
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
      bgClass: "bg-[#FFF6F0]",
      borderClass: "border-orange-500/20"
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
      bgClass: "bg-[#F4FBF7]",
      borderClass: "border-emerald-500/20"
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
      bgClass: "bg-[#FFFBF0]",
      borderClass: "border-amber-500/20"
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
      bgClass: "bg-[#FFF5F6]",
      borderClass: "border-rose-500/20"
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
      bgClass: "bg-[#F5F5FF]",
      borderClass: "border-indigo-500/20"
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
      bgClass: "bg-[#F0FDFA]",
      borderClass: "border-cyan-500/20"
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
      bgClass: "bg-[#FAF5FF]",
      borderClass: "border-purple-500/20"
    }
  ];

  return (
    <section className="w-full bg-[#F4F1EA] py-16 md:py-24 px-4 sm:px-6 md:px-16 border-t border-stone-300/50 relative overflow-hidden select-none">
      
      {/* Background Ambient Aesthetics */}
      <div className="absolute top-1/4 left-10 text-stone-300/40 text-7xl font-serif pointer-events-none hidden lg:block">ॐ</div>
      <div className="absolute bottom-1/4 right-12 text-stone-300/40 text-6xl font-serif pointer-events-none hidden lg:block">🌱</div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* ========================================================================= */}
        {/* 1. HEADER MODULE                                                         */}
        {/* ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="text-orange-700 font-bold tracking-wider uppercase text-xs">The Ecosystem</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
            Why Choose Sanatan After School?
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mt-2 rounded-full" />
        </div>

        {/* ========================================================================= */}
        {/* 2. THE LIVING VIGNETTE STREAM (Unified, Flowing Skimmable Timeline)       */}
        {/* ========================================================================= */}
        <div className="w-full relative space-y-12 lg:space-y-16 pl-4 sm:pl-8 lg:pl-0">
          
          {/* Central Timeline Connecting Spine Path */}
          <div className="absolute top-0 bottom-0 left-0 lg:left-1/2 w-0.5 bg-gradient-to-b from-orange-300 via-amber-300 to-emerald-300 transform lg:-translate-x-1/2 z-0 opacity-60" />

          {ecosystemPillars.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx}
                className={`w-full flex flex-col lg:flex-row items-start relative z-10 ${
                  isEven ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Intersecting Node Anchor Dots */}
                <div 
                  style={{ backgroundColor: item.color }}
                  className="absolute left-[-21px] sm:left-[-37px] lg:left-1/2 top-4 lg:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#F4F1EA] shadow-sm z-30 hidden sm:block" 
                />

                {/* Individual Stream Plate Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`w-full lg:w-[46%] rounded-3xl p-5 border-2 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md ${item.bgClass} ${item.borderClass}`}
                >
                  
                  {/* Internal Card Title Stack Header */}
                  <div className="flex items-center gap-3.5 border-b border-stone-900/5 pb-3">
                    {/* Floating Tactical Icon Box */}
                    <div 
                      style={{ backgroundColor: item.color }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white shadow-sm shrink-0"
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

                  {/* Redesigned Skimmable Text Content Section */}
                  <div className="space-y-3 pt-3 text-left">
                    {/* Core Quick-Grasp Hook Description Line */}
                    <p className="text-stone-900 font-bold text-xs sm:text-sm italic leading-relaxed">
                      "{item.desc}"
                    </p>
                    
                    {/* Minimal High-Impact Bullet Array */}
                    <ul className="space-y-1.5 pl-1">
                      {item.points.map((point, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-2 text-stone-600 text-xs font-medium leading-relaxed">
                          <span style={{ color: item.color }} className="text-[10px] mt-0.5 shrink-0">✦</span>
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