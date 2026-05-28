"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Hero() {
  // 3D-styled interactive cultural nodes with deep, realistic tactical color themes
  const ecosystemItems = [
    {
      title: "Kalaripayattu",
      subtitle: "Flow & Agility",
      icon: "🤺",
      // Distinct 3D look with clean borders and deep colored base-shadows
      bgClass: "bg-[#FFF6F0] border-orange-500 text-stone-900 shadow-[0_8px_0_0_#C2410C]",
      initialX: -150,
      initialY: -150,
      hoverY: -15,
      colorTheme: "#EA580C"
    },
    {
      title: "Vedic Shlokas",
      subtitle: "Power of Sounds",
      icon: "⚡",
      bgClass: "bg-[#FFFBF0] border-amber-500 text-stone-900 shadow-[0_8px_0_0_#B45309]",
      initialX: 160,
      initialY: -110,
      hoverY: 15,
      colorTheme: "#D97706"
    },
    {
      title: "Yoga & Dhyana",
      subtitle: "Joyful Mind",
      icon: "🧘‍♂️",
      bgClass: "bg-[#F4FBF7] border-emerald-500 text-stone-900 shadow-[0_8px_0_0_#047857]",
      initialX: -180,
      initialY: 90,
      hoverY: -12,
      colorTheme: "#059669"
    },
    {
      title: "Puranic Stories",
      subtitle: "Living History",
      icon: "📖",
      bgClass: "bg-[#FFF5F6] border-rose-500 text-stone-900 shadow-[0_8px_0_0_#BE123C]",
      initialX: 130,
      initialY: 150,
      hoverY: 12,
      colorTheme: "#E11D48"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#FCFAF6] flex flex-col lg:flex-row-reverse items-center px-6 md:px-16 py-16 overflow-hidden select-none">
      
      {/* Background Ambient Accents */}
      <div className="absolute top-12 right-1/3 text-orange-200/40 text-4xl pointer-events-none hidden md:block">💮</div>
      <div className="absolute bottom-20 right-10 text-emerald-200/30 text-5xl pointer-events-none hidden md:block">🌱</div>

      {/* Right Column: Content & Dynamic Counter Metrics */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center z-20 space-y-8 text-left items-start lg:pl-12">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-4 py-1.5 rounded-full"
        >
          <span className="text-stone-700 text-xs font-bold tracking-widest uppercase">
            ☀️ Parallel Schooling System
          </span>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 leading-[1.18] tracking-tight max-w-xl">
            Nurturing the{' '}
            <span className="relative inline-block text-emerald-800 font-bold">
              natural joy
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-emerald-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,7 Q50,2 100,7" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round"/>
              </svg>
            </span>
            {' '}every child is born with.
          </h1>
          
          <p className="text-base md:text-lg text-stone-600 max-w-xl leading-relaxed font-medium">
            Sanatan After School brings the sweetness and profound freedom of our culture to kids through a contemporary, interactive ecosystem. An unshakeable structural anchor for life's dynamic landscape.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
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
        </div>

        {/* Counter items resetting every time they come into view */}
        <div className="pt-10 border-t border-stone-200 w-full max-w-lg grid grid-cols-3 gap-6 text-stone-800">
          <div>
            <p className="text-2xl md:text-3xl font-serif font-bold text-stone-900">
              <CountUp start={8} end={12} duration={2.5} enableScrollSpy={true} scrollSpyOnce={false} suffix="+" />
            </p>
            <p className="text-xs text-stone-500 font-medium mt-1">Countries Served</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-serif font-bold text-stone-900">
              <CountUp start={990} end={1000} duration={2} enableScrollSpy={true} scrollSpyOnce={false} suffix="+" />
            </p>
            <p className="text-xs text-stone-500 font-medium mt-1">Parents Trust Us</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-serif font-bold text-stone-900">
              <CountUp start={90} end={100} duration={3} enableScrollSpy={true} scrollSpyOnce={false} suffix="%" />
            </p>
            <p className="text-xs text-stone-500 font-medium mt-1">Love from Every Child</p>
          </div>
        </div>

      </div>

      {/* Left Column: Fully Realized 3D Sphere & Floating Cosmic System */}
      <div className="w-full lg:w-1/2 mt-16 lg:mt-0 h-[600px] relative z-10 flex items-center justify-center">
        
        {/* Outer Circular Ring Ring Orbiting Around the Center Sphere */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[280px] h-[280px] border-2 border-dashed border-orange-400/50 rounded-full flex items-center justify-center pointer-events-none"
        >
          {/* Glowing Planetary Orbit Node moving along the path */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-[0_0_12px_#f59e0b]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]"></div>
        </motion.div>

        {/* Central Core Highly Visually 3D Shaded Sphere (Saffron & Amber theme) */}
        <div className="absolute w-52 h-52 rounded-full border border-orange-600/20 bg-gradient-to-br from-amber-300 via-orange-500 to-amber-950 shadow-[inset_-12px_-12px_40px_rgba(0,0,0,0.65),inset_12px_12px_30px_rgba(255,255,255,0.4),0_20px_40px_rgba(194,65,12,0.25)] flex flex-col items-center justify-center p-6 text-center select-none">
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-100 drop-shadow-sm mb-1">Ecosystem</span>
          <p className="font-serif text-base text-white font-extrabold leading-tight drop-shadow-md">Sanatan</p>
          <p className="font-serif text-[11px] text-amber-200 leading-tight drop-shadow-sm">After School</p>
          <span className="text-white text-xl mt-2 drop-shadow-sm filter contrast-125">💮</span>
        </div>

        {/* 3D Draggable Blocks with Butter-Smooth Spring Floating Motion */}
        {ecosystemItems.map((item, idx) => (
          <motion.div
            key={idx}
            style={{ x: item.initialX, y: item.initialY }}
            drag
            dragConstraints={{ left: -240, right: 240, top: -240, bottom: 240 }}
            dragElastic={0.3}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 25 }}
            
            whileDrag={{ 
              scale: 1.06, 
              rotate: idx % 2 === 0 ? 3 : -3,
              boxShadow: "0px 30px 45px rgba(0, 0, 0, 0.15)",
              y: item.initialY // Smooth pause of float cycle when dragged
            }}
            whileHover={{ 
              scale: 1.04,
              y: item.initialY + (item.hoverY * 0.4),
              boxShadow: "0px 18px 25px rgba(0, 0, 0, 0.1)",
              borderColor: item.colorTheme
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              // Optimized butter-smooth suspension floating animation engine
              y: [item.initialY, item.initialY + item.hoverY, item.initialY]
            }}
            transition={{
              opacity: { delay: idx * 0.12 },
              y: { 
                repeat: Infinity, 
                duration: 5 + idx, // Varied durations prevent rigid synchrony
                ease: [0.445, 0.05, 0.55, 0.95] // Elegant cubic-bezier for a natural fluid weightless feel
              }
            }}
            className={`absolute px-5 py-4 ${item.bgClass} border-2 rounded-2xl cursor-pointer flex items-center gap-4 min-w-[215px] select-none touch-none active:cursor-grabbing transition-shadow duration-300`}
          >
            {/* Embedded Visual Icon Shield */}
            <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] flex items-center justify-center text-2xl shrink-0">
              {item.icon}
            </div>
            
            <div className="flex flex-col text-left">
              <h4 className="font-serif font-black text-stone-900 text-sm leading-tight tracking-tight">{item.title}</h4>
              <p className="text-[11px] font-extrabold text-stone-500 mt-0.5 tracking-wide">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}