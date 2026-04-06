"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Live Sessions", href: "/live" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Brand Colors
  const goldPrimary = "#D4A017";
  const orangeEnroll = "#E8720C";

  return (
    <>
      {/* Top Announcement Bar */}
      {/* <div
        className="bg-[#0a0502] border-b border-[#D4A017]/10 text-center px-6 py-2 text-[10px] uppercase tracking-[0.3em] font-medium text-[#D4A017]/80"
        style={{ fontFamily: "var(--font-cinzel)" }}
      >
        Next Shloka Batch Starts{" "}
        <span className="text-white font-bold mx-1">5th April</span> · 11 AM IST
      </div> */}

      {/* Main Navbar with Glass Effect */}
      <nav
        className="sticky top-0 z-50 bg-[#280d0db3]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300"
        style={{ fontFamily: "var(--font-cinzel)" }}
      >
        <div className=" mx-auto px-6 h-[60px] flex items-center justify-between">
          {/* Logo Section - Matches Screenshot Styling */}
          <Link
            href="/"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="text-[#D4A017] text-3xl drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
              🕉
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-white text-lg tracking-widest uppercase font-bold">
                SANATAN
              </span>
              <span className="text-[#D4A017] text-lg tracking-widest uppercase font-medium">
                AFTER SCHOOL
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          {/* <ul className="hidden md:flex items-center gap-8 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-400 hover:text-[#D4A017] transition-all relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4A017] transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul> */}

          {/* Enrollment CTA */}
          {/* <div className="hidden md:flex items-center">
            <button className="text-[11px] tracking-[0.2em] font-bold text-white bg-[#E8720C] hover:bg-[#ff851b] px-7 py-2.5 rounded-full shadow-lg shadow-[#E8720C]/20 transition-all active:scale-95 uppercase cursor-pointer">
              Enroll Now 🙏
            </button>
          </div> */}

          {/* Mobile Menu Toggle */}
          {/* <button
            className="md:hidden p-2 text-[#D4A017] cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

       
      </nav>
    </>
  );
}
