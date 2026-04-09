"use client";
import React from "react";
import { Instagram, Youtube, MessageCircleMore, Mail } from "lucide-react";

export default function Footer() {
  const goldPrimary = "#D4A017";

  return (
    <footer
      className="w-full pt-20 pb-10 relative overflow-hidden"
      style={{
        background: `linear-gradient(160deg, #1a0a00 0%, #3d1a00 50%, #7B1E1E 100%)`,
      }}
    >
      {/* Background Circle Texture - Synced with screenshot */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='29' stroke='%23d4a017' stroke-width='0.4' fill='none'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          opacity: 0.08,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-8 mb-20">
          
          {/* Brand Section - Left aligned on Laptop, Centered on Mobile */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
            <div className="text-4xl mb-4" style={{ color: goldPrimary }}>
              🕉
            </div>
            <h2
              className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight leading-none"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Sanatan <span style={{ color: goldPrimary }}>After School</span>
            </h2>
            <div className="w-16 h-[1px] mt-4 mb-5" style={{ backgroundColor: goldPrimary }} />
            <p className="text-white/60 text-sm font-medium italic max-w-xs">
              "Bringing back Bharat's education to kids."
            </p>
          </div>

          {/* Follow Us Column */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:min-w-[200px]">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4A017] opacity-80">
              Follow Us
            </h4>
            <div className="flex flex-col gap-4 w-full max-w-[220px]">
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                     style={{ 
                        backgroundColor: "rgba(225, 48, 108, 0.15)", 
                        borderColor: "rgba(225, 48, 108, 0.3)",
                        backdropFilter: "blur(4px)" 
                     }}>
                  <Instagram size={20} className="text-[#E1306C]" />
                </div>
                <span className="text-white/80 text-[13px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Instagram</span>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                     style={{ 
                        backgroundColor: "rgba(255, 0, 0, 0.15)", 
                        borderColor: "rgba(255, 0, 0, 0.3)",
                        backdropFilter: "blur(4px)" 
                     }}>
                  <Youtube size={20} className="text-[#FF0000]" />
                </div>
                <span className="text-white/80 text-[13px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">YouTube</span>
              </a>
            </div>
          </div>

          {/* Get In Touch Column */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:min-w-[250px]">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4A017] opacity-80">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4 w-full max-w-[280px]">
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                     style={{ 
                        backgroundColor: "rgba(37, 211, 102, 0.15)", 
                        borderColor: "rgba(37, 211, 102, 0.3)",
                        backdropFilter: "blur(4px)" 
                     }}>
                  <MessageCircleMore size={20} className="text-[#25D366]" />
                </div>
                <span className="text-white/80 text-[13px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">WhatsApp Us</span>
              </a>

              <a href="mailto:hello@sanatanafterschool.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                     style={{ 
                        backgroundColor: "rgba(212, 160, 23, 0.12)", 
                        borderColor: "rgba(212, 160, 23, 0.25)",
                        backdropFilter: "blur(4px)" 
                     }}>
                  <Mail size={18} className="text-[#D4A017]" />
                </div>
                <span className="text-white/80 text-[13px] font-bold group-hover:text-white transition-colors lowercase">hello@sanatanafterschool.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase leading-relaxed">
            © 2025 Sanatan After School <span className="hidden md:inline"> · </span> All rights reserved <span className="hidden md:inline"> · </span> 
            <span style={{ color: goldPrimary }} className="opacity-80 ml-1 cursor-pointer">sanatanafterschool.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}