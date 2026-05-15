"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-[#280d0db3]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300"
        style={{ fontFamily: "var(--font-cinzel)" }}
      >
        <div className="mx-auto px-4 md:px-6 h-[60px] flex items-center justify-between">
          
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 group cursor-pointer"
          >
            <span className="text-[#D4A017] text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
              🕉
            </span>
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-1.5 leading-none">
              <span className="text-white text-[10px] md:text-lg tracking-widest uppercase font-bold">
                SANATAN
              </span>
              <span className="text-[#D4A017] text-[10px] md:text-lg tracking-widest uppercase font-medium">
                AFTER SCHOOL
              </span>
            </div>
          </Link>

          {/* Buttons Section */}
          <div className="flex items-center gap-3">
            {/* For Kids Button - External Link */}
            <a 
              href="https://sanatanafterschool.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4A017] hover:bg-white text-black text-[9px] md:text-[11px] tracking-[0.1em] md:tracking-[0.2em] font-black px-3 md:px-6 py-2 rounded-full transition-all uppercase cursor-pointer shadow-lg shadow-[#D4A017]/10 active:scale-95 whitespace-nowrap"
            >
              For Kids
            </a>

            {/* Optional: Mobile Menu Toggle if you decide to use links later */}
            {/* <button
              className="md:hidden p-1 text-[#D4A017] cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button> */}
          </div>
        </div>
      </nav>
    </>
  );
}