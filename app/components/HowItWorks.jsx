"use client";
import React from "react";

const DAYS = [
  { day: 1, type: "live", title: "Arambha", subtitle: "The Kickoff", duration: "1 hr Live + 20m", tasks: ["Orientation", "Prathama Shloka"] },
  { day: 2, type: "reg", title: "Abhyasa", subtitle: "Practice", duration: "20m + Audio", tasks: ["Dwitiya Shloka", "Corrections"] },
  { day: 3, type: "reg", title: "Abhyasa", subtitle: "Practice", duration: "20m + Audio", tasks: ["Tritiya Shloka", "Corrections"] },
  { day: 4, type: "reg", title: "Abhyasa", subtitle: "Practice", duration: "20m + Audio", tasks: ["Chaturtha Shloka", "Corrections"] },
  { day: 5, type: "reg", title: "Abhyasa", subtitle: "Practice", duration: "20m + Audio", tasks: ["Panchama Shloka", "Corrections"] },
  { day: 6, type: "reg", title: "Abhyasa", subtitle: "Practice", duration: "20m + Audio", tasks: ["Shastha Shloka", "Corrections"] },
  { day: 7, type: "reg", title: "Abhyasa", subtitle: "Practice", duration: "20m + Audio", tasks: ["Saptama Shloka", "Corrections"] },
  { day: 8, type: "live", title: "Samapti", subtitle: "Conclusion", duration: "1 hr Live Session", tasks: ["Sampoorna Patha", "Blessings"] },
];

export default function CurriculumRoadmap() {
  const bgColor = "#FDF6E3";
  const orange = "#E8720C";
  const brownDeep = "#5C3A1E";

  return (
    <section 
      className="w-full min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden px-6 md:px-20 py-16 md:py-24"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-[1500px] w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] mb-2" style={{ color: orange }}>
            Path to Mastery
          </p>
          <h2 
            className="font-black uppercase tracking-tight leading-tight"
            style={{ 
              color: brownDeep, 
              fontFamily: "var(--font-cinzel)", 
              fontSize: "clamp(2rem, 5vw, 2.8rem)" 
            }}
          >
            8 days of <span style={{ color: orange }}>Sacred Absorption</span>
          </h2>
          <div className="w-16 h-[2px] mx-auto mt-6" style={{ backgroundColor: orange }} />
        </div>

        {/* --- Mobile View (< MD) --- Stacked vertical timeline */}
        <div className="md:hidden flex flex-col gap-8 relative max-w-sm mx-auto">
          {/* Continuous vertical line connecting days */}
          <div className="absolute left-[15px] top-[30px] bottom-[-30px] w-[2px] bg-[#5C3A1E]/10" />

          {DAYS.map((item) => {
            const isLive = item.type === "live";
            return (
              <div key={item.day} className="flex gap-5 items-start relative z-10">
                {/* Visual Marker */}
                <div className="flex flex-col items-center mt-1">
                   <div 
                     className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black border transition-all duration-300`}
                     style={{ 
                        backgroundColor: isLive ? orange : '#FDF6E3', 
                        borderColor: isLive ? orange : `${brownDeep}30`, 
                        color: isLive ? 'white' : brownDeep,
                        boxShadow: isLive ? `0 4px 20px ${orange}40` : 'none'
                     }}
                   >
                     {item.day}
                   </div>
                   <span className="text-[8px] font-black uppercase mt-1 tracking-widest" style={{ color: isLive ? orange : brownDeep + '60' }}>
                     {isLive ? 'Live' : 'Pract.'}
                   </span>
                </div>

                {/* Card Body */}
                <div 
                  className={`flex-1 p-5 rounded-2xl border transition-all shadow-lg ${
                    isLive 
                    ? "bg-white border-[#E8720C] shadow-[#E8720C]/05" 
                    : "bg-white/40 border-[#5C3A1E]/10 shadow-black/02"
                  }`}
                >
                  <div className="mb-4">
                    <h3 
                      className="text-[16px] font-black uppercase mb-1" 
                      style={{ color: brownDeep, fontFamily: "var(--font-cinzel)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-60" style={{ color: brownDeep }}>
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {item.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[12px] font-bold leading-snug" style={{ color: brownDeep }}>
                        <span className="mt-1" style={{ color: orange }}>•</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration Capsule */}
                   <div 
                     className={`text-[10px] font-black text-center py-2 px-3 rounded-lg uppercase tracking-tight ${
                       isLive ? "bg-[#E8720C] text-white" : "bg-[#5C3A1E]/10 text-[#5C3A1E]"
                     }`}
                   >
                     {item.duration}
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Desktop View (>= MD) --- 8-Day Grid in a single row */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-3 items-stretch">
          {DAYS.map((item) => {
            const isLive = item.type === "live";
            return (
              <div 
                key={item.day}
                className="group relative flex flex-col transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Day Header */}
                <div className="flex flex-col items-center mb-3">
                  <div 
                    className={`text-[10px] font-black uppercase mb-1`}
                    style={{ color: isLive ? orange : `${brownDeep}60` }}
                  >
                    Day {item.day}
                  </div>
                  <div className={`w-full h-[2px] rounded-full transition-all duration-500 ${isLive ? 'bg-[#E8720C]' : 'bg-[#5C3A1E]/10 group-hover:bg-[#5C3A1E]/30'}`} />
                </div>

                {/* Card Body */}
                <div 
                  className={`flex-1 p-4 rounded-xl border flex flex-col justify-between transition-all ${
                    isLive 
                    ? "bg-white border-[#E8720C] shadow-lg shadow-[#E8720C]/10 ring-1 ring-[#E8720C]/20" 
                    : "bg-white/40 border-[#5C3A1E]/10 shadow-md shadow-black/02"
                  }`}
                >
                  <div>
                    <h3 
                      className="text-[14px] font-black mb-0.5" 
                      style={{ color: brownDeep, fontFamily: "var(--font-cinzel)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-4" style={{ color: brownDeep }}>
                      {item.subtitle}
                    </p>

                    <div className="space-y-2">
                      {item.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] font-bold leading-tight" style={{ color: brownDeep }}>
                          <span className="mt-1" style={{ color: orange }}>•</span>
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Duration Capsule */}
                  <div className="mt-6 pt-3 border-t border-[#5C3A1E]/5">
                    <div 
                      className={`text-[9px] font-black text-center py-1.5 rounded-lg uppercase tracking-tighter ${
                        isLive ? "bg-[#E8720C] text-white" : "bg-[#5C3A1E]/5 text-[#5C3A1E]"
                      }`}
                    >
                      {item.duration}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}