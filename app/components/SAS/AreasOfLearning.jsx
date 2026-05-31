"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AreasOfLearning() {
  const [activeItem, setActiveItem] = useState(0);

  const tools = [
    { name: "Yoga & Meditation", category: "Mind & Body", icon: "🧘", color: "#EA580C", glow: "from-orange-500/10" },
    { name: "Dinacharya - A Way of Life", category: "Habits", icon: "☀️", color: "#D97706", glow: "from-amber-500/10" },
    { name: "Pooja Vidhan", category: "Ritual Science", icon: "🪔", color: "#CA8A04", glow: "from-yellow-500/10" },
    { name: "Power of Sounds - Shlokas", category: "Vibrations", icon: "🔱", color: "#6366F1", glow: "from-indigo-500/10" },
    { name: "Living a Story - Puranas", category: "Wisdom", icon: "📖", color: "#8B5CF6", glow: "from-purple-500/10" },
    { name: "Kalaripayattu", category: "Defense & Flow", icon: "⚔️", color: "#E11D48", glow: "from-rose-500/10" },
    { name: "Basic Physical Vyayamam", category: "Fitness", icon: "💪", color: "#2563EB", glow: "from-blue-500/10" },
    { name: "Indian Classical Music & Dance", category: "Arts", icon: "🪕", color: "#059669", glow: "from-emerald-500/10" },
    { name: "Crafts of Culture", category: "Creativity", icon: "🎨", color: "#06B6D4", glow: "from-cyan-500/10" },
    { name: "Arts of Bharat", category: "Aesthetics", icon: "🏛️", color: "#EC4899", glow: "from-pink-500/10" }
  ];

  return (
    /* ========================================================================= */
    /* THE SPECTRUM DAWN CANVAS (Premium Seamless Fluid Gradient Layout)         */
    /* ========================================================================= */
    <section className="w-full bg-gradient-to-b from-[#FFFDF9] via-[#FFF2E6] to-[#FAF9F5] py-16 md:py-24 px-4 sm:px-6 md:px-16 border-t border-stone-200/60 relative overflow-hidden select-none">
      
      {/* Background Vector Ray Overlay */}
      <div className="absolute inset-0 opacity-[0.22] pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="learningRayGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EA580C" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <path d="M 1340,0 Q 720,400 100,700 T 1340,1400" stroke="url(#learningRayGrad)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Dynamic Background Halo — Active exclusively on Laptop Viewports */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br ${tools[activeItem].glow} to-transparent rounded-full blur-[110px] pointer-events-none transition-all duration-700 ease-out z-0 hidden lg:block`} />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* ========================================================================= */}
        {/* 1. HEADER MODULE                                                         */}
        {/* ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="text-orange-800 font-bold tracking-widest uppercase text-[10px] bg-white/80 border border-orange-200 px-3.5 py-1 rounded-full shadow-sm">
            Curriculum Core
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-tight leading-tight pt-1">
            Ancient Tools & Techniques
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* ========================================================================= */}
        {/* 2. LAPTOP VIEWPORT INTERFACE (Original Immersive Mandala Orbit)         */}
        {/* ========================================================================= */}
        <div className="w-full hidden lg:grid grid-cols-12 gap-8 items-center min-h-[460px]">
          
          {/* Left Side: Floating Bubble Orbit Mesh */}
          <div className="col-span-7 flex justify-center items-center relative py-6">
            <div className="absolute w-[420px] h-[420px] border-2 border-stone-200/50 rounded-full border-dashed animate-spin-slow pointer-events-none" />

            <div className="flex flex-wrap justify-center gap-3 max-w-xl relative z-10">
              {tools.map((item, idx) => {
                const isSelected = activeItem === idx;
                return (
                  <motion.button
                    key={idx}
                    onClick={() => setActiveItem(idx)}
                    onMouseEnter={() => setActiveItem(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ 
                      borderColor: isSelected ? item.color : "rgba(231, 229, 222, 0.8)",
                      backgroundColor: isSelected ? item.color : "rgba(255, 255, 255, 0.75)"
                    }}
                    className={`px-4 py-3 rounded-full border-2 text-left flex items-center gap-2.5 shadow-sm transition-colors duration-300 cursor-pointer ${
                      isSelected ? "text-white shadow-md font-bold" : "text-stone-700 hover:bg-white"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-serif font-black tracking-tight whitespace-nowrap">
                      {item.name.split(' (')[0]}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Cinema Viewport Plate Panel */}
          <div className="col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white/80 backdrop-blur-md border-2 border-stone-100 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[310px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem}
                  initial={{ opacity: 0, scale: 0.97, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="space-y-6 flex flex-col justify-between h-full text-left"
                >
                  <div className="space-y-4">
                    <span 
                      style={{ backgroundColor: tools[activeItem].color }} 
                      className="text-white px-2.5 py-0.5 rounded-lg text-[9px] uppercase font-mono tracking-widest font-extrabold shadow-sm inline-block"
                    >
                      {tools[activeItem].category}
                    </span>

                    <div className="flex items-center gap-4 pt-1">
                      <span className="text-5xl drop-shadow-sm">{tools[activeItem].icon}</span>
                      <h3 className="font-serif font-black text-stone-950 text-xl tracking-tight leading-tight">
                        {tools[activeItem].name}
                      </h3>
                    </div>

                    <p className="text-stone-600 text-sm font-medium leading-relaxed pt-2 border-t border-stone-200/60">
                      Explore this dimension of our custom holistic architecture built to elevate native intelligence, focus tracking, and development.
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-stone-100 pt-4 mt-4">
                    <div className="flex items-center gap-1">
                      {tools.map((_, dotIdx) => (
                        <div 
                          key={dotIdx}
                          style={{ 
                            backgroundColor: dotIdx === activeItem ? tools[activeItem].color : "rgba(120, 113, 108, 0.15)",
                            width: dotIdx === activeItem ? "12px" : "5px"
                          }}
                          className="h-1.5 rounded-full transition-all duration-300"
                        />
                      ))}
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest font-mono text-stone-400">
                      Module 0{activeItem + 1}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. MOBILE VIEWPORT INTERFACE (Staggered Dynamic River Flow - Redesigned)  */}
        {/* ========================================================================= */}
        {/* No loops, sub-tabs, or screen toggles. Mobile devices see an alternating, 
            playful stream configuration that loads information natively as they scroll down. */}
        <div className="w-full flex flex-col gap-5 lg:hidden px-1">
          {tools.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`w-[92%] sm:w-[85%] p-5 rounded-[2rem] border bg-white/95 backdrop-blur-sm shadow-sm flex flex-col gap-3 text-left relative ${
                idx % 2 === 0 ? "self-start" : "self-end"
              }`}
            >
              {/* Dynamic Bottom Accent Boundary Strip */}
              <div 
                style={{ backgroundColor: item.color }}
                className="absolute bottom-0 inset-x-8 h-[3px] rounded-t-full opacity-60"
              />

              {/* Title Stack Segment */}
              <div className="flex items-center gap-3.5 border-b border-stone-100 pb-2.5">
                {/* Visual Icon Anchor Shield */}
                <div 
                  style={{ backgroundColor: item.color }}
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl text-white shadow-sm shrink-0 animate-bounce-slow"
                >
                  {item.icon}
                </div>
                
                <div className="flex flex-col">
                  <span 
                    style={{ color: item.color }}
                    className="text-[9px] font-black uppercase tracking-widest font-mono"
                  >
                    {item.category} // 0{idx + 1}
                  </span>
                  <h3 className="font-serif font-black text-stone-950 text-base tracking-tight leading-tight mt-0.5">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Descriptive Value Text Line */}
              <p className="text-stone-600 text-xs font-semibold leading-relaxed pb-1">
                A core pillar designed natively to expand focus layers, safeguard biological clarity, and anchor traditional grounding roots.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}