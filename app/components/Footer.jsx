"use client";
import React from "react";
import { Instagram, Youtube, MessageCircleMore, Mail } from "lucide-react";

export default function Footer() {
  const goldPrimary = "#D4A017";

  return (
    <footer
      className="w-full pt-16 pb-10 relative overflow-hidden"
      style={{
        background: `linear-gradient(160deg, #1a0a00 0%, #3d1a00 50%, #7B1E1E 100%)`,
      }}
    >
      {/* Background Circle Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='29' stroke='%23d4a017' stroke-width='0.4' fill='none'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          opacity: 0.12,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Brand Header - Centered for Mobile */}
          <div className="text-4xl mb-4" style={{ color: goldPrimary }}>
            🕉
          </div>
          <h2
            className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight leading-none"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Sanatan <span style={{ color: goldPrimary }}>After School</span>
          </h2>
          <div className="w-16 h-[2px] mt-3 mb-4" style={{ backgroundColor: goldPrimary }} />
          <p className="text-white/60 text-sm font-medium italic max-w-xs">
            "Bringing back Bharat's education to kids."
          </p>
        </div>

        {/* Links Section - Stacked on Mobile, Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto mb-16">
          
          {/* Follow Us Column */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
              Follow Us
            </h4>
            <div className="flex flex-col gap-4 w-full max-w-[240px]">
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                     style={{ 
                        backgroundColor: "rgba(225, 48, 108, 0.22)", 
                        borderColor: "rgba(225, 48, 108, 0.4)",
                        backdropFilter: "blur(8px)" 
                     }}>
                  <Instagram size={22} className="text-[#E1306C]" />
                </div>
                <span className="text-white/70 text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">Instagram</span>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                     style={{ 
                        backgroundColor: "rgba(255, 0, 0, 0.20)", 
                        borderColor: "rgba(255, 0, 0, 0.35)",
                        backdropFilter: "blur(8px)" 
                     }}>
                  <Youtube size={22} className="text-[#FF0000]" />
                </div>
                <span className="text-white/70 text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">YouTube</span>
              </a>
            </div>
          </div>

          {/* Get In Touch Column */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4 w-full max-w-[240px]">
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                     style={{ 
                        backgroundColor: "rgba(37, 211, 102, 0.22)", 
                        borderColor: "rgba(37, 211, 102, 0.4)",
                        backdropFilter: "blur(8px)" 
                     }}>
                  <MessageCircleMore size={22} className="text-[#25D366] fill-[#25D366]/10" />
                </div>
                <span className="text-white/70 text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">WhatsApp Us</span>
              </a>

              <a href="mailto:hello@sanatanafterschool.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                     style={{ 
                        backgroundColor: "rgba(212, 160, 23, 0.15)", 
                        borderColor: "rgba(212, 160, 23, 0.3)",
                        backdropFilter: "blur(8px)" 
                     }}>
                  <Mail size={20} className="text-[#D4A017]" />
                </div>
                <span className="text-white/70 text-[13px] font-bold group-hover:text-white transition-colors truncate">Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase leading-relaxed">
            © 2026 Sanatan After School <br className="md:hidden" />
            <span className="hidden md:inline"> · </span> All rights reserved <br className="md:hidden" />
            <span className="hidden md:inline"> · </span> 
            <span style={{ color: goldPrimary }} className="opacity-60 ml-1">sanatanafterschool.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}