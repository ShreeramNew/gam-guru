import React from "react";
import { motion } from "framer-motion";

export default function FirstHero() {
  // Interactive cards scattered in an organic, orbital layout around a central hub
  const kidCards = [
    {
      name: "Aarav, 8",
      trait: "The Thinker",
      emoji: "🧘‍♂️",
      bgClass: "bg-amber-50",
      tapeColor: "bg-orange-300/60",
      rotation: -8,
      // Positioned high-left relative to the visual container
      top: "10%",
      left: "12%",
      thought: "Why do shlokas vibrate? ⚡",
      floatDuration: 5,
    },
    {
      name: "Isha, 7",
      trait: "The Explorer",
      emoji: "🌿",
      bgClass: "bg-emerald-50",
      tapeColor: "bg-emerald-300/60",
      rotation: 12,
      // Positioned deep-right
      top: "18%",
      right: "8%",
      thought: "Nature is alive! ✨",
      floatDuration: 6,
    },
    {
      name: "Kabir, 10",
      trait: "The Warrior-Artist",
      emoji: "🤺",
      bgClass: "bg-orange-50",
      tapeColor: "bg-amber-400/60",
      rotation: -14,
      // Positioned low-left
      bottom: "15%",
      left: "8%",
      thought: "Kalari is pure flow 🌊",
      floatDuration: 5.5,
    },
    {
      name: "Diya, 9",
      trait: "The Storyteller",
      emoji: "🎨",
      bgClass: "bg-rose-50",
      tapeColor: "bg-rose-300/60",
      rotation: 6,
      // Positioned far bottom-right
      bottom: "8%",
      right: "14%",
      thought: "Puranas are so cool! 📖",
      floatDuration: 4.8,
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#FDFBF7] flex flex-col lg:flex-row items-center px-6 md:px-16 py-16 overflow-hidden select-none">
      {/* Decorative Cultural Ambient Patterns */}
      <div className="absolute top-24 left-1/3 text-orange-200/30 text-4xl pointer-events-none hidden md:block select-none">
        ✨
      </div>
      <div className="absolute bottom-12 left-12 text-emerald-200/40 text-4xl pointer-events-none hidden md:block select-none">
        🍃
      </div>

      {/* Left Column: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center z-20 space-y-8 text-left items-start">
        {/* Main Concept Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-orange-50/90 border border-orange-100/80 px-4 py-1.5 rounded-full shadow-sm"
        >
          <span className="text-orange-800 text-xs font-bold tracking-widest uppercase">
            🕉️ A Parallel Schooling System
          </span>
        </motion.div>

        {/* Dynamic Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 leading-[1.15] tracking-tight max-w-xl">
            Children are born{" "}
            <span className="relative inline-block text-orange-600 font-bold">
              joyful.
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-amber-400/70"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,10 100,5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            We keep them that way.
          </h1>

          <p className="text-base md:text-lg text-stone-600 max-w-xl leading-relaxed font-medium">
            Sanatan After School connects modern kids back to the culture of
            Bharath through scientifically proven, living ancient techniques.
            Education that goes beyond memory chips and becomes a grand
            adventure.
          </p>
        </div>

        {/* Action Interaction Stack */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-600/10 transition-colors tracking-wide flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Book a Free Demo</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(245, 245, 244, 0.8)",
            }}
            className="w-full sm:w-auto bg-transparent border border-stone-200 text-stone-700 font-medium px-8 py-4 rounded-full tracking-wide cursor-pointer transition-colors"
          >
            Explore Curriculum
          </motion.button>
        </div>
      </div>

      {/* Right Column: Custom Scattered Constellation Layout */}
      <div className="w-full lg:w-1/2 mt-16 lg:mt-0 h-[580px] relative z-10 flex items-center justify-center">
        {/* Central Core Branding Hub (The anchor the cards orbit around) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 rounded-full border border-dashed border-orange-200 flex items-center justify-center pointer-events-none opacity-40"
        >
          <div className="w-36 h-36 rounded-full border border-dashed border-orange-100 flex items-center justify-center">
            <span className="text-2xl">💮</span>
          </div>
        </motion.div>

        {/* Floating Instruction Note */}
        <div className="absolute top-[46%] left-[42%] -translate-x-1/2 -translate-y-1/2 text-center text-stone-400 font-serif italic text-xs pointer-events-none max-w-[100px] leading-normal hidden sm:block">
          Tap or hover to explore traits
        </div>

        {/* Scattered Dynamic Cards Map */}
        {kidCards.map((card, idx) => (
          <motion.div
            key={idx}
            style={{
              top: card.top || "auto",
              bottom: card.bottom || "auto",
              left: card.left || "auto",
              right: card.right || "auto",
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: card.rotation }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0], // Smooth out-of-the-box float looping
            }}
            transition={{
              opacity: { delay: idx * 0.1, duration: 0.4 },
              scale: { delay: idx * 0.1, duration: 0.4 },
              y: {
                repeat: Infinity,
                duration: card.floatDuration,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.12,
              rotate: 0,
              y: 0,
              zIndex: 50,
              boxShadow: "0px 25px 50px rgba(120, 113, 108, 0.15)",
            }}
            className={`absolute w-40 p-2.5 pb-4 ${card.bgClass} border border-stone-200/80 shadow-md rounded-xl cursor-pointer group transition-shadow`}
          >
            {/* Organic Angled Header Tape Accent */}
            <div
              className={`absolute -top-2.5 left-1/3 w-12 h-5 ${card.tapeColor} backdrop-blur-[0.5px] -rotate-3 rounded-sm`}
            ></div>

            {/* Custom Interactive Floating Thought Bubble */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 min-w-[130px] bg-stone-900 text-white text-[10px] py-1.5 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none text-center shadow-md font-medium z-50">
              {card.thought}
              <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-stone-900 rotate-45"></div>
            </div>

            {/* Polaroid Frame Canvas Screen */}
            <div className="w-full aspect-square bg-white rounded-lg border border-stone-100 flex items-center justify-center text-4xl shadow-inner relative overflow-hidden group-hover:bg-stone-50/50">
              <span className="transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300 select-none">
                {card.emoji}
              </span>
            </div>

            {/* Profile Descriptor Stack */}
            <div className="mt-3 text-center space-y-0.5">
              <p className="font-serif font-bold text-stone-900 text-xs">
                {card.name}
              </p>
              <p className="text-[10px] font-bold tracking-wider uppercase text-orange-700/90">
                {card.trait}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
