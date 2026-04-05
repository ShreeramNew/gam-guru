"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses", badge: "NEW" },
  { label: "Live Sessions", href: "/live" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Vibrant Sanatan Theme Colors
  const orangePrimary = "#ff5400";

  return (
    <>
      {/* Announcement Bar - Adjusted to match the vibrant Hero theme */}
      <div
        className="bg-[#1a0f0a] border-b border-[#ff5400]/20 text-center px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#ffb38a]"
        style={{ fontFamily: "var(--font-cinzel)" }}
      >
        <span className="inline-block w-1.5 h-1.5 bg-[#ff5400] rounded-full mr-3 animate-pulse align-middle" />
        New Batch starting{" "}
        <span className="font-bold text-white">5th April</span> · Live Session
        at <span className="font-bold text-white">11 AM IST</span> —{" "}
        <span className="underline cursor-pointer hover:text-[#ff5400] transition-colors">
          Enroll Now
        </span>
      </div>

      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 bg-[#0a0909]/95 backdrop-blur-xl border-b border-white/5"
        style={{ fontFamily: "var(--font-cinzel)" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="relative w-10 h-10 bg-gradient-to-br from-[#ff5400] to-[#ff8a05] rounded-xl flex items-center justify-center text-xl shadow-[0_0_20px_rgba(255,84,0,0.3)] group-hover:scale-105 transition-transform">
              <span className="text-white font-bold">ॐ</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white text-xl tracking-wider uppercase font-black">
                Shloka<span className="text-[#ff5400]">bhyasa</span>
              </span>
              <span className="text-[#71717a] text-[9px] uppercase tracking-[0.25em] font-bold mt-0.5">
                Gam Guru · Sanatan After School
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[12px] uppercase tracking-widest font-extrabold text-zinc-400 hover:text-white transition-colors relative group cursor-pointer"
                >
                  {link.label}
                  {link.badge && (
                    <span className="absolute -top-3 -right-6 text-[8px] font-black bg-[#ff5400] text-white px-1.5 py-0.5 rounded-sm">
                      {link.badge}
                    </span>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#ff5400] transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button className="text-[11px] tracking-[0.15em] font-black text-white bg-[#ff5400] px-8 py-3 rounded-lg shadow-lg shadow-[#ff5400]/20 hover:bg-[#ff6a20] cursor-pointer transition-all active:scale-95 uppercase">
              Join a Batch 🙏
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-[#ff5400] cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0f0e0e] border-t border-white/5 px-8 py-8 flex flex-col gap-2 shadow-2xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-[14px] uppercase tracking-widest font-bold text-zinc-400 hover:text-white py-4 border-b border-white/5 transition-colors cursor-pointer"
              >
                {link.label}
                <span className="text-[#ff5400] opacity-50">→</span>
              </Link>
            ))}

            <div className="mt-8">
              <button className="w-full text-[12px] tracking-[0.2em] font-black text-white bg-[#ff5400] py-4 rounded-lg uppercase shadow-xl shadow-[#ff5400]/10 cursor-pointer active:scale-95 transition-transform">
                Join a Batch 🙏
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
