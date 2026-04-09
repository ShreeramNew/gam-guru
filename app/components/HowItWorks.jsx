"use client";
import React from "react";
import { PlayCircle, Users, CheckCircle2, Calendar } from "lucide-react";

const STEPS = [
  {
    id: "01",
    type: "live",
    title: "Opening Session",
    subtitle: "Interactive Kickoff",
    description: "A deep-dive live session to set your intentions and learn the core fundamentals with the group.",
    tags: ["Live", "1 Hour"],
    icon: <Users size={20} />
  },
  {
    id: "02",
    type: "recorded",
    title: "Daily Practice",
    subtitle: "Self-Paced Mastery",
    description: "Short, high-quality recorded modules released daily for you to learn at your convenience.",
    tags: ["Recorded", "20 Mins"],
    icon: <PlayCircle size={20} />
  },
  {
    id: "03",
    type: "recorded",
    title: "Expert Review",
    subtitle: "Personal Feedback",
    description: "Submit your practice audio or video to receive precise corrections on your pronunciation.",
    tags: ["Personalized", "Daily"],
    icon: <CheckCircle2 size={20} />
  },
  {
    id: "04",
    type: "live",
    title: "Closing Circle",
    subtitle: "Final Certification",
    description: "A final live gathering for group chanting, Q&A, and receiving blessings for your journey.",
    tags: ["Live", "Conclusion"],
    icon: <Calendar size={20} />
  }
];

export default function HybridLearningRoadmap() {
  const orange = "#E8720C";
  const brownDeep = "#5C3A1E";

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header: Explaining the Hybrid Concept */}
        <div className="text-center mb-20">
          <p className="text-[11px] font-black uppercase tracking-[0.5em] mb-4" style={{ color: orange }}>
            The Learning Model
          </p>
          <h2 
            className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6"
            style={{ color: brownDeep, fontFamily: "var(--font-cinzel)" }}
          >
            Our <span style={{ color: orange }}>Hybrid</span> Approach
          </h2>
          <p className="max-w-2xl mx-auto text-lg font-medium opacity-70 leading-relaxed" style={{ color: brownDeep }}>
            We combine the energy of <span className="font-bold">Live Group Sessions</span> with the flexibility of 
            <span className="font-bold"> Daily Recorded Practice</span> to ensure you master every shloka effortlessly.
          </p>
          <div className="w-16 h-[2px] mx-auto mt-8" style={{ backgroundColor: orange }} />
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute top-[20%] left-0 right-0 h-[1px] bg-[#5C3A1E]/10 -z-0" />

          {STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              <div 
                className={`h-full p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-2xl hover:shadow-[#E8720C]/10 flex flex-col items-center text-center ${
                  step.type === 'live' 
                  ? "bg-white border-[#E8720C]/30 shadow-lg" 
                  : "bg-[#FDF6E3]/30 border-transparent"
                }`}
              >
                {/* ID & Icon Circle */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ 
                    backgroundColor: step.type === 'live' ? orange : `${brownDeep}10`,
                    color: step.type === 'live' ? 'white' : brownDeep
                  }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-center gap-2 mb-3">
                    {step.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/50 border border-[#5C3A1E]/5" style={{ color: brownDeep }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-black mb-1" style={{ color: brownDeep, fontFamily: "var(--font-cinzel)" }}>
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-widest opacity-50 mb-4" style={{ color: orange }}>
                    {step.subtitle}
                  </p>
                  <p className="text-sm font-medium leading-relaxed opacity-70" style={{ color: brownDeep }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step Counter Overlay */}
              <div className="absolute -top-4 -right-2 text-4xl font-black opacity-[0.03] select-none" style={{ color: brownDeep }}>
                {step.id}
              </div>
            </div>
          ))}
        </div>

        {/* Flexible Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#5C3A1E]/10 bg-[#FDF6E3]/20">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: orange }} />
            <p className="text-xs font-bold uppercase tracking-widest opacity-60" style={{ color: brownDeep }}>
              Course durations vary based on the depth of the Shloka or Stotra
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}