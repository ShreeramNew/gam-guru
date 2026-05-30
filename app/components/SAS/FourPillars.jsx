"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FourPillars() {
  const [index, setIndex] = useState(0);

  const pillars = [
    { 
      title: "A Flexible & Agile Body", 
      icon: "🧘‍♂️", 
      label: "Body",
      desc: "Building physical strength, posture, and agility through custom ancient disciplines.",
      details: "Our physical culture layers traditional Vyayamam exercises with the base flows of Kalaripayattu. It isn't structured to tire children out, but to optimize core muscular flexibility, enhance lung capacity, correct structural posture, and ground their dynamic physical energy safely.",
      color: "#EA580C",
      bgTheme: "bg-[#FFF6F0]",
      borderTheme: "border-orange-400",
      shadowTheme: "shadow-[0_8px_0_0_#C2410C]",
      // Pure CSS translate styling transitions replacing Framer Motion animations to stop laptop lag
      desktopPosition: "lg:top-[40px] lg:left-[0px]"
    },
    { 
      title: "A Sharp, Clear & Joyful Mind", 
      icon: "🧠", 
      label: "Mind",
      desc: "Radically sharpening cognitive focus, memory metrics, and internal mental clarity.",
      details: "Through precise mindfulness modules, guided meditation loops, and simple breath synchronization practices, we clean out everyday sensory clutter. This naturally maximizes long-term memory metrics, logical processing speed, and cognitive retention capacities.",
      color: "#D97706",
      bgTheme: "bg-[#FFFBF0]",
      borderTheme: "border-amber-400",
      shadowTheme: "shadow-[0_8px_0_0_#B45309]",
      desktopPosition: "lg:top-[160px] lg:left-[26%]"
    },
    { 
      title: "Stable & Loving Emotions", 
      icon: "❤️", 
      label: "Emotions",
      desc: "Cultivating unshakeable internal resilience, self-compassion, and deep maturity.",
      details: "By building a true Sangha of like-minded peers and sharing the deep historical lore of the Puranas, kids build an authentic emotional safety net. They naturally learn to step away from modern peer comparison matrices, anchoring their minds in empathy, gratitude, and deep resilience.",
      color: "#E11D48",
      bgTheme: "bg-[#FFF5F6]",
      borderTheme: "border-rose-400",
      shadowTheme: "shadow-[0_8px_0_0_#BE123C]",
      desktopPosition: "lg:top-[40px] lg:left-[52%]"
    },
    { 
      title: "Vibrant Energy Systems", 
      icon: "⚡", 
      label: "Energy",
      desc: "Activating latent vitality across neural frameworks using sound and frequency science.",
      details: "Utilizing the deep acoustic math found inside Vedic sound patterns and Shlokas, we naturally stimulate cognitive centers. This targeted frequency practice aligns behavioral patterns, cleanses internal stress nodes, and establishes a high-vibrational foundation.",
      color: "#059669",
      bgTheme: "bg-[#F4FBF7]",
      borderTheme: "border-emerald-400",
      shadowTheme: "shadow-[0_8px_0_0_#047857]",
      desktopPosition: "lg:top-[160px] lg:left-[78%]"
    }
  ];

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % pillars.length);
  };

  return (
    <section className="w-full bg-[#F4F1EA] py-16 md:py-24 px-4 sm:px-6 md:px-16 border-t border-stone-300/50 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* ========================================================================= */}
        {/* 1. HEADER MODULE                                                         */}
        {/* ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20 space-y-3">
          <p className="text-stone-600 font-bold tracking-wider text-xs sm:text-sm uppercase px-2">
            "Our kids' Real Growth is not in accumulating information."
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
            The real growth is...
          </h2>
          <div className="w-12 h-1 bg-orange-600 mx-auto mt-2 rounded-full" />
        </div>

        {/* ========================================================================= */}
        {/* 2. LAPTOP VIEW LAYOUT (Highly-Optimized Hardware-Accelerated Layout)     */}
        {/* ========================================================================= */}
        {/* Removed less opacity titles. Ditched Framer motion hover triggers for native tailwind transforms to ensure 0% rendering lag */}
        <div className="hidden lg:block relative w-full h-[520px] max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`absolute w-[23.5%] p-6 rounded-[2rem] border-2 bg-white flex flex-col justify-between h-[340px] transition-all duration-300 ease-out transform will-change-transform hover:-translate-y-2 hover:scale-[1.02] hover:z-40 hover:shadow-xl ${pillar.desktopPosition} ${pillar.bgTheme} ${pillar.borderTheme} ${pillar.shadowTheme}`}
            >
              {/* Core Content Grid */}
              <div className="space-y-3 z-10">
                <div className="flex items-center gap-2.5">
                  <div 
                    style={{ backgroundColor: pillar.color }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg text-white shadow-sm"
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif font-black text-stone-950 text-base leading-tight tracking-tight">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-stone-900 font-bold text-xs italic leading-normal pt-1">
                  "{pillar.desc}"
                </p>

                <p className="text-stone-600 text-xs font-medium leading-relaxed overflow-hidden line-clamp-6">
                  {pillar.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3. MOBILE VIEW LAYOUT (The Perfect Swappable 3D Deck of Cards Vibe)     */}
        {/* ========================================================================= */}
        {/* Retained 100% of the exact structural components and watermark layers you liked for small devices */}
        <div className="lg:hidden relative w-full max-w-lg h-[460px] sm:h-[420px] md:h-[380px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {pillars.map((pillar, idx) => {
              if (idx !== index) return null;
              
              const nextIndex = (index + 1) % pillars.length;
              const nextPillar = pillars[nextIndex];

              return (
                <React.Fragment key={idx}>
                  {/* VISUAL CUE BACK CARD LAYER */}
                  <div 
                    className={`absolute inset-0 top-3 left-3 translate-y-2 scale-[0.97] rounded-[2rem] border-2 opacity-40 blur-[0.5px] pointer-events-none ${nextPillar.bgTheme} ${nextPillar.borderTheme} ${nextPillar.shadowTheme}`}
                  />

                  {/* ACTIVE FRONT CARD MODULE */}
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 100 }}
                    dragElastic={{ left: 0.1, right: 0.6 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x > 80) nextCard();
                    }}
                    initial={{ scale: 0.92, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ x: 260, opacity: 0, scale: 0.95, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    whileTap={{ cursor: "grabbing" }}
                    className={`absolute inset-0 px-6 py-6 sm:p-8 rounded-[2rem] border-2 bg-white flex flex-col justify-between cursor-grab touch-none select-none z-10 ${pillar.bgTheme} ${pillar.borderTheme} ${pillar.shadowTheme}`}
                  >
                    {/* Retained Watermark label exclusively on mobile context rendering profiles */}
                    <span 
                      style={{ color: `${pillar.color}09` }}
                      className="absolute right-6 top-2 text-7xl sm:text-8xl font-black uppercase tracking-tighter select-none font-sans pointer-events-none z-0"
                    >
                      {pillar.label}
                    </span>

                    <div className="space-y-4 z-10">
                      <div className="flex items-center gap-3">
                        <div 
                          style={{ backgroundColor: pillar.color }}
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white shadow-sm"
                        >
                          {pillar.icon}
                        </div>
                        <h3 className="font-serif font-black text-stone-950 text-xl tracking-tight leading-none">
                          {pillar.title}
                        </h3>
                      </div>

                      <p className="text-stone-900 font-bold text-xs sm:text-sm italic leading-relaxed pt-1">
                        "{pillar.desc}"
                      </p>

                      <p className="text-stone-600 text-xs sm:text-sm font-medium leading-relaxed">
                        {pillar.details}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-stone-900/5 z-10">
                      <div className="flex items-center gap-1.5">
                        {pillars.map((_, dotIdx) => (
                          <div 
                            key={dotIdx}
                            style={{ backgroundColor: dotIdx === index ? pillar.color : "rgba(120, 113, 108, 0.2)" }}
                            className="w-2 h-2 rounded-full transition-colors duration-300"
                          />
                        ))}
                      </div>

                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextCard();
                        }}
                        style={{ color: pillar.color }}
                        className="text-xs font-bold tracking-widest uppercase flex items-center gap-1 cursor-pointer select-none active:opacity-70 transition-opacity"
                      >
                        Next Area <span>→</span>
                      </button>
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe Hint */}
        {/* <div className="lg:hidden text-center mt-6 text-stone-400 font-medium text-xs tracking-wide animate-pulse">
          👉 Swipe right or tap "Next Area" to cycle fields
        </div> */}

        {/* ========================================================================= */}
        {/* 4. FOOTER CONCLUSION SECTION SUMMARY                                      */}
        {/* ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-14 lg:mt-20 text-center max-w-xl px-4"
        >
          <p className="font-serif text-base sm:text-lg md:text-xl text-stone-800 leading-relaxed italic">
            "Nurturing all these aspects is the core of Sanatan After School."
          </p>
        </motion.div>

      </div>
    </section>
  );
}