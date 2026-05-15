"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Crimson_Pro } from "next/font/google";
import {
  ChevronLeft,
  User,
  Globe,
  Clock,
  Search,
  Check,
  ChevronDown,
  Info,
} from "lucide-react";

import { getCountryData } from "../../lib/registration-data";
import ModulesData from "@/app/lib/ModulesData";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const SearchableSelect = ({
  options = [],
  value,
  onChange,
  placeholder,
  label,
  customHeight = "40px",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef(null);

  const safeOptions = Array.isArray(options) ? options : [];
  const filtered = safeOptions.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const clickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  return (
    <div className="space-y-1 relative" ref={containerRef}>
      <label className="text-[10px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
        {label}
      </label>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          setSearch("");
        }}
        className="w-full bg-white border border-[#5C3A1E]/20 rounded-lg text-[#5C3A1E] font-bold text-sm cursor-pointer flex justify-between items-center px-3 shadow-sm hover:border-[#E8720C] transition-all"
        style={{ height: customHeight }}
      >
        <span
          className={`truncate ${value ? "text-[#5C3A1E]" : "text-[#5C3A1E]/30"}`}
        >
          {value
            ? safeOptions.find((o) => o.value === value)?.label
            : placeholder}
        </span>
        <ChevronDown
          size={12}
          className={`flex-shrink-0 transition-transform opacity-30 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute z-[110] w-full mt-1 bg-white border border-[#5C3A1E]/15 shadow-2xl rounded-xl overflow-hidden"
          >
            <div className="p-2 border-b border-[#5C3A1E]/5 flex items-center gap-2 bg-[#FDF6E3]/50">
              <Search size={14} className="text-[#5C3A1E]/20" />
              <input
                autoFocus
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-xs w-full font-bold text-[#5C3A1E] placeholder:text-[#5C3A1E]/20"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="max-h-48 overflow-y-auto bg-white">
              {filtered.map((opt, i) => (
                <div
                  key={`${opt.value}-${i}`}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className="px-4 py-2.5 text-xs hover:bg-[#E8720C]/10 cursor-pointer flex justify-between items-center text-[#5C3A1E] font-bold"
                >
                  <span className="truncate pr-4 text-sm">{opt.label}</span>
                  {value === opt.value && (
                    <Check size={14} className="text-[#E8720C]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function RegistrationPage() {
  const router = useRouter();
  const { moduleSlug } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    countries: [],
    timezones: [],
    phoneCodes: [],
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isIndianIP, setIsIndianIP] = useState(true); // Default to India, updated on mount

  const [selectedTz, setSelectedTz] = useState("");
  const [selectedStartSlot, setSelectedStartSlot] = useState("");
  const [selectedEndSlot, setSelectedEndSlot] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCode, setSelectedCode] = useState("+91");
  const [customAmount, setCustomAmount] = useState(0);

  const FIELD_HEIGHT = "42px";

  const activeModule = useMemo(() => {
    return ModulesData.find(
      (m) => m.title.toLowerCase().replace(/ /g, "-") === moduleSlug,
    );
  }, [moduleSlug]);

  const moduleTitle = activeModule?.title || "MODULE";
  const isKalaBhairava = moduleSlug === "kala-bhairava-ashtakam";

  useEffect(() => {
    setData(getCountryData());
    // AUTO-DETECT LOCATION via public API
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const inIndia = data.country_code === "IN";
        setIsIndianIP(inIndia);
        if (inIndia) {
          setSelectedCountry("India");
          setSelectedCode("+91");
        }
      })
      .catch(() => setIsIndianIP(true)); // Fallback to India on error
  }, []);

  // Determine Currency/Symbol (Priority: Dropdown Selection > IP Detection)
  const isIndia = selectedCountry ? selectedCountry === "India" : isIndianIP;
  const currency = isIndia ? "INR" : "USD";
  const symbol = isIndia ? "₹" : "$";

  const displayPrice = useMemo(() => {
    if (isKalaBhairava) return Number(customAmount) || 0;
    if (!activeModule) return 0;
    return isIndia ? activeModule.price.current : activeModule.dPrice.current;
  }, [isIndia, activeModule, isKalaBhairava, customAmount]);

  const formatSession = (date, tzValue) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: tzValue,
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const tzEntry = data.timezones.find((t) => t.value === tzValue);
    const tzName = tzEntry
      ? tzEntry.label.match(/\(([^)]+)\)/)?.[1] || "Local"
      : "Local";
    const parts = formatter.formatToParts(date);
    const getPart = (type) => parts.find((p) => p.type === type).value;
    const timeStr = `${getPart("hour")}:${getPart("minute")}${getPart("dayPeriod").toLowerCase()}`;
    return `${getPart("month")} ${getPart("day")}, ${getPart("weekday")} ${timeStr} (${tzName})`;
  };

  const startOptions = useMemo(() => {
    if (!selectedTz || !data.timezones.length) return [];
    const startDate = new Date("2026-05-17T15:30:00Z");
    const formatted = formatSession(startDate, selectedTz);
    return [{ value: formatted, label: formatted }];
  }, [selectedTz, data.timezones]);

  const endOptions = useMemo(() => {
    if (!selectedTz || !data.timezones.length) return [];
    const endDate = new Date("2026-05-24T01:30:00Z");
    const formatted = formatSession(endDate, selectedTz);
    return [{ value: formatted, label: formatted }];
  }, [selectedTz, data.timezones]);

  const handleEnrollment = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const details = Object.fromEntries(formData);

    const finalPayload = {
      ...details,
      country: selectedCountry || (isIndianIP ? "India" : "Other"),
      countryCode: selectedCode,
      timezone: selectedTz,
      startSession: selectedStartSlot,
      endSession: selectedEndSlot,
      moduleTitle,
      amountPaid: displayPrice,
      currency,
      status: "active",
    };

    if (displayPrice === 0) {
      const result = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...finalPayload,
          razorpay_payment_id: "FREE_LAUNCH_ENROLL",
        }),
      });
      if (result.ok) setShowSuccess(true);
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: displayPrice * 100,
      currency: currency,
      name: "Sanatan After School",
      description: moduleTitle,
      handler: async (res) => {
        const result = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...finalPayload, ...res }),
        });
        if (result.ok) setShowSuccess(true);
      },
      prefill: { email: details.email, contact: details.phone },
      theme: { color: "#E8720C" },
      modal: { ondismiss: () => setLoading(false) },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen py-6 px-6 bg-[#FFFBF2]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-[10px] font-black text-[#D4A017] tracking-widest uppercase mb-1">
            Step 1 of 2
          </p>
          <h1
            className="text-2xl font-black text-[#5C3A1E] uppercase leading-tight"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Course <span className="text-[#E8720C]">Enrollment</span>
          </h1>
        </div>

        <form
          onSubmit={handleEnrollment}
          className="bg-white rounded-3xl p-6 md:p-8 border border-[#5C3A1E]/10 space-y-7 shadow-xl shadow-[#5C3A1E]/5"
        >
          {/* IDENTITY DETAILS */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <User size={14} className="text-[#E8720C]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A017]">
                Identity Details
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                name="firstName"
                placeholder="First Name"
                className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-4 outline-none placeholder:text-[#5C3A1E]/30"
                style={{ height: FIELD_HEIGHT }}
              />
              <input
                required
                name="lastName"
                placeholder="Last Name"
                className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-4 outline-none placeholder:text-[#5C3A1E]/30"
                style={{ height: FIELD_HEIGHT }}
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email Address"
                className="md:col-span-2 w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-4 outline-none placeholder:text-[#5C3A1E]/30"
                style={{ height: FIELD_HEIGHT }}
              />
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                  Age
                </label>
                <input
                  required
                  name="age"
                  type="number"
                  placeholder="Age"
                  className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-4 outline-none placeholder:text-[#5C3A1E]/30"
                  style={{ height: FIELD_HEIGHT }}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                  Gender
                </label>
                <select
                  required
                  name="gender"
                  className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-3 outline-none cursor-pointer"
                  style={{ height: FIELD_HEIGHT }}
                >
                  <option value="">Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* SCHEDULE SECTION */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <Clock size={14} className="text-[#E8720C]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A017]">
                Mandatory Live Session
              </span>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <SearchableSelect
                label="1. Time Zone"
                options={data.timezones}
                value={selectedTz}
                onChange={setSelectedTz}
                placeholder="Search timezone..."
                customHeight={FIELD_HEIGHT}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SearchableSelect
                  label="2. Start Session"
                  options={startOptions}
                  value={selectedStartSlot}
                  onChange={setSelectedStartSlot}
                  placeholder="Start slot"
                  customHeight={FIELD_HEIGHT}
                />
                <SearchableSelect
                  label="3. Ending Session"
                  options={endOptions}
                  value={selectedEndSlot}
                  onChange={setSelectedEndSlot}
                  placeholder="End slot"
                  customHeight={FIELD_HEIGHT}
                />
              </div>
            </div>
            <div
              className={`${crimson.className} text-gray-700 text-[15px] ml-[10px] leading-relaxed`}
            >
              <p className="font-bold text-[#5C3A1E]">Important Note:</p>
              <ul className="ml-[10px] space-y-1.5 opacity-80">
                <li>
                  • During the week, you will be going through the pre-recorded
                  learning modules at your convenient time.
                </li>
                <li>
                  • Practice corrections support by Our Expert Teachers and
                  WhatsApp group support will be available throughout the week.
                </li>
              </ul>
            </div>
          </section>

          {/* GEOGRAPHY & CONTACT */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <Globe size={14} className="text-[#E8720C]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A017]">
                Professional & Contact
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <SearchableSelect
                label="Country"
                options={data.countries}
                value={selectedCountry}
                onChange={setSelectedCountry}
                placeholder="Search country..."
                customHeight={FIELD_HEIGHT}
              />
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                  Occupation
                </label>
                <input
                  required
                  name="occupation"
                  placeholder="Occupation"
                  className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-4 outline-none placeholder:text-[#5C3A1E]/30"
                  style={{ height: FIELD_HEIGHT }}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                  City
                </label>
                <input
                  required
                  name="city"
                  placeholder="City"
                  className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-4 outline-none placeholder:text-[#5C3A1E]/30"
                  style={{ height: FIELD_HEIGHT }}
                />
              </div>
              <div className="flex gap-2">
                <div className="w-[110px]">
                  <SearchableSelect
                    label="Code"
                    options={data.phoneCodes}
                    value={selectedCode}
                    onChange={setSelectedCode}
                    placeholder="+91"
                    customHeight={FIELD_HEIGHT}
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <label className="text-[10px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                    Phone Number
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-4 outline-none placeholder:text-[#5C3A1E]/30"
                    style={{ height: FIELD_HEIGHT }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* DYNAMIC KALA BHAIRAVA SECTION */}
          {isKalaBhairava && (
            <div className="p-6 bg-[#E8720C]/5 rounded-3xl border border-[#E8720C]/20 space-y-5 animate-in fade-in duration-500">
              {/* COUNTDOWN TIMER */}
              <div className="text-center space-y-1">
                <p className="text-[10px] font-black text-[#5C3A1E]/50 uppercase tracking-[0.2em]">
                  For the next
                </p>
                <div className="text-2xl font-black text-[#5C3A1E] tracking-widest tabular-nums">
                  {(() => {
                    const [timeLeft, setTimeLeft] = useState("");

                    useEffect(() => {
                      const target = new Date("2026-05-17T14:30:00Z"); // 8:00 PM IST
                      const interval = setInterval(() => {
                        const now = new Date();
                        const diff = target - now;

                        if (diff <= 0) {
                          setTimeLeft("LIVE NOW");
                          clearInterval(interval);
                          return;
                        }

                        const hours = Math.floor(diff / (1000 * 60 * 60));
                        const mins = Math.floor(
                          (diff % (1000 * 60 * 60)) / (1000 * 60),
                        );
                        const secs = Math.floor((diff % (1000 * 60)) / 1000);

                        setTimeLeft(
                          `${String(hours).padStart(2, "0")}h : ${String(mins).padStart(2, "0")}m : ${String(secs).padStart(2, "0")}s`,
                        );
                      }, 1000);
                      return () => clearInterval(interval);
                    }, []);

                    return timeLeft;
                  })()}
                </div>
                <p
                  className={`${crimson.className} text-center text-[16px] text-[#5C3A1E] font-bold leading-relaxed`}
                >
                  This module is offered for{" "}
                  <span className="text-[#E8720C]">Free</span> on the occasion
                  of launch event .
                </p>
              </div>

              {/* LAUNCH OFFER MESSAGES */}
              <div className="space-y-3 pt-2 border-t border-[#E8720C]/10">
                <div className="flex items-start gap-3">
                  <Info
                    size={20}
                    className="text-[#5C3A1E]/40 flex-shrink-0 mt-0.5"
                  />
                  <p
                    className={`${crimson.className} text-[17px] text-[#5C3A1E]/80 leading-relaxed italic`}
                  >
                    However, you may voluntarily{" "}
                    <span className=" font-bold">
                      Contribute any amount as Dakshina
                    </span>{" "}
                    to support our mission and future teachings.
                  </p>
                </div>
              </div>

              {/* CONTRIBUTION INPUT */}
              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-black text-[#E8720C] uppercase tracking-[0.2em] ml-1">
                  Pay as you wish
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-[#5C3A1E] text-lg">
                    {symbol}
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="0"
                    className="w-full bg-white border-2 border-[#E8720C]/30 focus:border-[#E8720C] rounded-2xl font-black text-xl text-[#5C3A1E] pl-10 pr-4 outline-none transition-all shadow-inner placeholder:text-[#5C3A1E]/10"
                    style={{ height: "58px" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* FINAL CTA */}
          <button
            disabled={loading}
            className="w-full py-4 bg-[#E8720C] text-white font-black rounded-full shadow-lg shadow-[#E8720C]/20 hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-[11px] cursor-pointer"
          >
            {loading
              ? "Processing..."
              : `Pay ${symbol}${displayPrice} to Enroll`}
          </button>
        </form>

        <button
          onClick={() => router.back()}
          className="mt-8 mx-auto flex items-center gap-2 text-[#5C3A1E]/30 hover:text-[#E8720C] transition-colors text-[11px] font-black uppercase tracking-widest cursor-pointer"
        >
          <ChevronLeft size={14} /> Back
        </button>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] w-full max-w-sm p-10 text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={36} className="text-green-600" strokeWidth={3} />
              </div>
              <h3
                className="text-2xl font-black text-[#5C3A1E] uppercase mb-4"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Enrollment Success
              </h3>
              <p
                className={`${crimson.className} text-[#5C3A1E]/60 italic text-center mb-8 text-[16px]`}
              >
                For General Updates about Shlokabhyasa, Join Our Whatsapp Group <br />
                <a href="https://chat.whatsapp.com/DuuEfGYCb0QG6ttknLbrLC" className=" text-[#055bc5]">
                  https://chat.whatsapp.com/DuuEfGYCb0QG6ttknLbrLC
                </a>
              </p>
              <button
                onClick={() => {
                  router.push("/");
                  setShowSuccess(false);
                }}
                className="w-full py-4 bg-[#5C3A1E] text-white font-black rounded-full uppercase tracking-widest text-[11px] cursor-pointer"
              >
                Go to Home
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
    </div>
  );
}
