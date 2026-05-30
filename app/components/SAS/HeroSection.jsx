"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Hero() {
  const ecosystemItems = [
    {
      title: "Kalaripayattu",
      subtitle: "Flow & Agility",
      icon: "⚔️", 
      bgClass: "bg-[#FFF6F0] border-orange-500 text-stone-900 shadow-[0_6px_0_0_#C2410C] lg:shadow-[0_8px_0_0_#C2410C]",
      // Pure CSS absolute placements relative to the center container for desktop
      desktopPosition: "lg:top-[12%] lg:left-[8%]",
      hoverY: -15,
      colorTheme: "#EA580C"
    },
    {
      title: "Vedic Shlokas",
      subtitle: "Power of Sounds",
      icon: "⚡",
      bgClass: "bg-[#FFFBF0] border-amber-500 text-stone-900 shadow-[0_6px_0_0_#B45309] lg:shadow-[0_8px_0_0_#B45309]",
      desktopPosition: "lg:top-[18%] lg:right-[6%]",
      hoverY: 15,
      colorTheme: "#D97706"
    },
    {
      title: "Yoga & Dhyana",
      subtitle: "Joyful Mind",
      icon: "🧘‍♂️",
      bgClass: "bg-[#F4FBF7] border-emerald-500 text-stone-900 shadow-[0_6px_0_0_#047857] lg:shadow-[0_8px_0_0_#047857]",
      desktopPosition: "lg:bottom-[20%] lg:left-[4%]",
      hoverY: -12,
      colorTheme: "#059669"
    },
    {
      title: "Puranic Stories",
      subtitle: "Living History",
      icon: "📖",
      bgClass: "bg-[#FFF5F6] border-rose-500 text-stone-900 shadow-[0_6px_0_0_#BE123C] lg:shadow-[0_8px_0_0_#BE123C]",
      desktopPosition: "lg:bottom-[14%] lg:right-[10%]",
      hoverY: 12,
      colorTheme: "#E11D48"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#FCFAF6] flex flex-col lg:flex-row-reverse items-center px-4 sm:px-6 md:px-16 py-12 md:py-16 overflow-hidden select-none">
      
      {/* Background Ambient Accents */}
      <div className="absolute top-12 right-1/3 text-orange-200/40 text-4xl pointer-events-none hidden md:block">💮</div>
      <div className="absolute bottom-20 right-10 text-emerald-200/30 text-5xl pointer-events-none hidden md:block">🌱</div>

      {/* Content Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center z-20 space-y-6 md:space-y-8 text-left items-start lg:pl-12">
        
        {/* <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-4 py-1.5 rounded-full"
        >
          <span className="text-stone-700 text-xs font-bold tracking-widest uppercase">
            ☀️ Parallel Schooling System
          </span>
        </motion.div> */}

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-stone-900 leading-[1.18] tracking-tight max-w-xl">
            Nurturing the{' '}
            <span className="relative inline-block text-emerald-800 font-bold">
              natural joy
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-emerald-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,7 Q50,2 100,7" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round"/>
              </svg>
            </span>
            {' '}every child is born with.
          </h1>
          
          <p className="text-sm md:text-lg text-stone-600 max-w-xl leading-relaxed font-medium">
            Sanatan After School brings the sweetness and profound freedom of our culture to kids through a contemporary, interactive ecosystem. An unshakeable structural anchor for life's dynamic landscape.
          </p>
        </div>

        {/* <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-semibold px-10 py-4 rounded-full shadow-md cursor-pointer tracking-wide text-center"
          >
            Book a Free Demo
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 245, 244, 0.6)" }}
            className="w-full sm:w-auto bg-transparent border border-stone-200 text-stone-700 font-medium px-8 py-4 rounded-full tracking-wide cursor-pointer transition-colors text-center"
          >
            See Our Tools
          </motion.button>
        </div> */}

        {/* Counter metrics */}
        <div className="pt-8 md:pt-10 border-t border-stone-200 w-full max-w-lg grid grid-cols-3 gap-4 sm:gap-6 text-stone-800">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-stone-900">
              <CountUp start={8} end={12} duration={2.5} enableScrollSpy={true} scrollSpyOnce={false} suffix="+" />
            </p>
            <p className="text-[11px] sm:text-xs text-stone-500 font-medium mt-1">Countries Served</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-stone-900">
              <CountUp start={990} end={1000} duration={2} enableScrollSpy={true} scrollSpyOnce={false} suffix="+" />
            </p>
            <p className="text-[11px] sm:text-xs text-stone-500 font-medium mt-1">Parents Trust Us</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-stone-900">
              <CountUp start={90} end={100} duration={3} enableScrollSpy={true} scrollSpyOnce={false} suffix="%" />
            </p>
            <p className="text-[11px] sm:text-xs text-stone-500 font-medium mt-1">Love from Every Child</p>
          </div>
        </div>

      </div>

      {/* Interactive Visual Canvas Area */}
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 h-auto lg:h-[620px] relative z-10 flex flex-col items-center justify-center gap-6 py-6 lg:py-0">
        
        {/* Ring & 3D Sphere Center Engine */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 shrink-0 flex items-center justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-0">
          {/* Circular Orbit Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[230px] h-[230px] sm:w-[280px] sm:h-[280px] border-2 border-dashed border-orange-400/40 rounded-full flex items-center justify-center pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-[0_0_12px_#f59e0b]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]"></div>
          </motion.div>

          {/* 3D Core Sphere */}
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-orange-600/20 bg-gradient-to-br from-amber-300 via-orange-500 to-amber-950 shadow-[inset_-12px_-12px_40px_rgba(0,0,0,0.65),inset_12px_12px_30px_rgba(255,255,255,0.4),0_20px_40px_rgba(194,65,12,0.25)] flex flex-col items-center justify-center p-4 text-center">
            <span className="text-[9px] font-black uppercase tracking-widest text-amber-100 drop-shadow-sm mb-1">Ecosystem</span>
            <p className="font-serif text-sm sm:text-base text-white font-extrabold leading-tight drop-shadow-md">Sanatan</p>
            <p className="font-serif text-[10px] sm:text-[11px] text-amber-200 leading-tight drop-shadow-sm">After School</p>
            <span className="text-white text-xl mt-1.5 drop-shadow-sm">💮</span>
          </div>
        </div>

        {/* 3D Tactile Floating Blocks Engine */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 sm:px-6 mt-6 lg:mt-0 lg:absolute lg:inset-0 lg:p-0 z-10">
          {ecosystemItems.map((item, idx) => (
            <motion.div
              key={idx}
              drag
              // Dynamic constraints that prevent excessive throwing off the screen
              dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
              dragElastic={0.2}
              
              className={`lg:absolute px-4 py-3 sm:px-5 sm:py-4 ${item.bgClass} ${item.desktopPosition} border-2 rounded-2xl cursor-pointer flex items-center gap-4 w-full lg:w-auto lg:min-w-[215px] select-none touch-none active:cursor-grabbing transition-shadow duration-300`}
              
              whileDrag={{ 
                scale: 1.05, 
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.12)",
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0px 14px 20px rgba(0, 0, 0, 0.08)",
                borderColor: item.colorTheme
              }}
              animate={{ 
                // Fluid suspension loop engine that handles local floating smoothly across any device
                y: [0, item.hoverY * 0.6, 0]
              }}
              transition={{
                y: { 
                  repeat: Infinity, 
                  duration: 4.5 + idx, 
                  ease: [0.445, 0.05, 0.55, 0.95] 
                }
              }}
            >
              {/* Icon Container */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-stone-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] flex items-center justify-center text-xl sm:text-2xl shrink-0">
                {item.icon}
              </div>
              
              <div className="flex flex-col text-left">
                <h4 className="font-serif font-black text-stone-900 text-xs sm:text-sm leading-tight tracking-tight">{item.title}</h4>
                <p className="text-[10px] sm:text-[11px] font-extrabold text-stone-500 mt-0.5 tracking-wide">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}