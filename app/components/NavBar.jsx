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

  return (
    <>
      {/* Announcement Bar */}
      <div
        className="bg-orange-500/10 border-b border-orange-500/20 text-center px-6 py-2 text-sm font-semibold text-orange-300"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        <span className="inline-block w-2 h-2 bg-[#ff5400] rounded-full mr-2 animate-pulse align-middle" />
        New Batch starting <strong className="text-[#ff5400]">5th April</strong>{" "}
        · 1st Live Session at{" "}
        <strong className="text-[#ff5400]">11 AM IST</strong> —{" "}
        <span className="underline cursor-pointer text-[#ff5400]">
          Enroll Now
        </span>
      </div>

      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 bg-[#0a0909]/85 backdrop-blur-md border-b border-orange-500/15"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ff5400] to-orange-400 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-orange-500/30">
              🪔
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-white text-xl tracking-wide"
                style={{ fontFamily: "var(--font-yatra)" }}
              >
                Shloka<span className="text-[#ff5400]">bhyasa</span>
              </span>
              <span className="text-[#6b6868] text-[10px] uppercase tracking-widest mt-0.5 font-semibold">
                Gam Guru · Sanatan After School
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-1.5 text-[10px] font-bold bg-orange-500/15 text-[#ff5400] px-2 py-0.5 rounded-full border border-orange-500/30">
                      {link.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* <button className="text-sm font-semibold text-zinc-300 border border-white/10 px-4 py-2 rounded-xl hover:border-white/25 hover:bg-white/5 transition-all">
              Sign In
            </button> */}
            <button className="text-sm font-bold text-white bg-[#ff5400] px-5 py-2 rounded-xl shadow-lg shadow-orange-500/30 hover:bg-orange-600 cursor-pointer hover:-translate-y-0.5 transition-all active:scale-95">
              Join a Batch 🙏
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0f0e0e] border-t border-zinc-800 px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-sm font-semibold text-zinc-400 hover:text-white py-3 border-b border-zinc-800/60 transition-colors"
              >
                <span>
                  {link.label}
                  {link.badge && (
                    <span className="ml-2 text-[10px] font-bold bg-orange-500/15 text-[#ff5400] px-2 py-0.5 rounded-full border border-orange-500/30">
                      {link.badge}
                    </span>
                  )}
                </span>
                <span className="text-zinc-600">›</span>
              </Link>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              {/* <button className="w-full text-sm font-semibold text-zinc-300 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all">
                Sign In
              </button> */}
              <button className="w-full text-sm font-bold text-white bg-[#ff5400] px-5 py-2.5 rounded-xl shadow-lg shadow-orange-500/30 cursor-pointer hover:bg-orange-600 transition-all active:scale-95">
                Join a Batch 🙏
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
