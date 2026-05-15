"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ShlokabhyasaIntro() {
  const bgColor = "#FDF6E3"; // From screenshot
  const orange = "#E8720C";
  const brownDeep = "#5C3A1E";

  const keyPoints = [
    {
      icon: "🔥",
      title: "Hybrid Learning Format",
      desc: "Live Sessions & Daily Recorded Modules"
    },
    {
      icon: "🗣️",
      title: "Precise Pronunciations",
      desc: "Focus on individual word clarity for every shloka"
    },
    {
      icon: "🤝",
      title: "Learning in a Sangha",
      desc: "Connect and practice together in an effortless process"
    },
    {
      icon: "🧘",
      title: "Wisdom of Rishis",
      desc: "Designed by Gurus, Yogis, and Rishis of our land"
    }
  ];

  return (
    <section 
      className="w-full py-20 px-6 md:px-20 min-h-screen flex items-center justify-center overflow-hidden" 
      style={{ backgroundColor: bgColor }}
      id="learnmore"
    >
      <div className="max-w-7xl w-full">
        {/* Header Section based on image layout */}
        <div className="text-center mb-16">
          <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] mb-3" style={{ color: orange }}>
            What is this?
          </p>
          <h2 
            className="font-black uppercase tracking-tight leading-tight mb-4"
            style={{ 
              color: brownDeep, 
              fontFamily: "var(--font-cinzel)", 
              fontSize: "clamp(2rem, 5vw, 3.2rem)" 
            }}
          >
            Sanskrit <span style={{ color: orange }}>Shlokabhyasa</span>
          </h2>
          <div className="w-16 h-[2.5px] mx-auto" style={{ backgroundColor: orange }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Descriptive Content */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-black" style={{ color: brownDeep, fontFamily: "var(--font-cinzel)" }}>
              Learn Sanatan Shlokas Online
            </h3>
            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-80" style={{ color: brownDeep }}>
              Shlokas are a beautiful means to express and experience the divinity within. 
              This effort makes learning basic Shlokas, Ashtakas, and Stotras into an effortless 
              process that connects children to the true wisdom of Bharat.
            </p>
            <p className="text-md font-bold italic opacity-60" style={{ color: brownDeep }}>
              "Beautiful tools to connect with the Divine."
            </p>
          </div>

          {/* Right Column: Feature Cards based on image layout */}
          <div className="lg:col-span-7 space-y-4">
            {keyPoints.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-xl bg-white shadow-sm border-l-4"
                style={{ borderColor: orange }}
              >
                <div className="text-3xl">{point.icon}</div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-widest mb-1" style={{ color: brownDeep }}>
                    {point.title}
                  </h4>
                  <p className="text-[13px] font-medium opacity-60" style={{ color: brownDeep }}>
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}