"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  User,
  Globe,
  Clock,
  Search,
  Check,
  ChevronDown,
} from "lucide-react";
import { getCountryData } from "../../lib/registration-data";

const SearchableSelect = ({
  options = [],
  value,
  onChange,
  placeholder,
  label,
  customHeight = "42px",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef(null);

  // CRITICAL FIX: Ensure options is always an array before filtering
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

  const handleSelect = (optValue) => {
    onChange(optValue);
    setIsOpen(false);
    setSearch(""); // Reset search on selection
  };

  return (
    <div className="space-y-1 relative" ref={containerRef}>
      <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
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
            <div className="max-h-48 overflow-y-auto custom-scrollbar bg-white">
              {filtered.length > 0 ? (
                filtered.map((opt, i) => (
                  <div
                    key={`${opt.value}-${i}`}
                    onClick={() => handleSelect(opt.value)}
                    className="px-4 py-2.5 text-xs hover:bg-[#E8720C]/10 cursor-pointer flex justify-between items-center text-[#5C3A1E] font-bold transition-colors"
                  >
                    <span className="truncate pr-4">{opt.label}</span>
                    {value === opt.value && (
                      <Check
                        size={14}
                        className="text-[#E8720C] flex-shrink-0"
                      />
                    )}
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-[10px] text-[#5C3A1E]/30 italic text-center">
                  No results
                </div>
              )}
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

  // Explicit Selection States
  const [selectedTz, setSelectedTz] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCode, setSelectedCode] = useState("+91");

  const moduleTitle = moduleSlug
    ? moduleSlug.replace(/-/g, " ").toUpperCase()
    : "MODULE";
  const FIELD_HEIGHT = "40px";

  useEffect(() => {
    setData(getCountryData());
  }, []);

  const nextSunday = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + ((7 - d.getDay()) % 7) || 7);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  }, []);

  const convertedSlots = useMemo(() => {
    if (!selectedTz) return [];
    return ["11:00", "19:00"].map((time, idx) => {
      const [hours, minutes] = time.split(":");
      const date = new Date();
      date.setHours(parseInt(hours), parseInt(minutes), 0);
      const localTime = new Intl.DateTimeFormat("en-US", {
        timeZone: selectedTz,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(date);
      return {
        value: `${localTime} (${selectedTz})`,
        label: `Slot ${idx + 1}: ${localTime.toLowerCase()} (${nextSunday}, 2026)`,
      };
    });
  }, [selectedTz, nextSunday]);

  const handleEnrollment = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const details = Object.fromEntries(formData);
    const finalPayload = {
      ...details,
      country: selectedCountry,
      countryCode: selectedCode,
      timezone: selectedTz,
      moduleTitle,
      status: "active",
    };

    const price = moduleTitle.includes("GURU") ? 777 : 333;
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: price * 100,
      currency: "INR",
      name: "Sanatan After School",
      description: moduleTitle,
      handler: async (res) => {
        const result = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...finalPayload, ...res }),
        });
        if (result.ok) router.push("/dashboard");
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
          <p className="text-[9px] font-bold text-[#D4A017] tracking-widest uppercase mb-1">
            Step 1 of 2
          </p>
          <h1
            className="text-2xl font-black text-[#5C3A1E] uppercase leading-tight"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Enroll <span className="text-[#E8720C]">Online</span>
          </h1>
        </div>

        <form
          onSubmit={handleEnrollment}
          className="bg-white rounded-3xl p-6 md:p-8 border border-[#5C3A1E]/10 space-y-6 shadow-xl shadow-[#5C3A1E]/5"
        >
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <User size={14} className="text-[#E8720C]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#D4A017]">
                Identity
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                name="firstName"
                placeholder="First Name"
                className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] placeholder:text-[#5C3A1E]/20 outline-none px-3"
                style={{ height: FIELD_HEIGHT }}
              />
              <input
                required
                name="lastName"
                placeholder="Last Name"
                className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] placeholder:text-[#5C3A1E]/20 outline-none px-3"
                style={{ height: FIELD_HEIGHT }}
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email Address"
                className="md:col-span-2 w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] placeholder:text-[#5C3A1E]/20 outline-none px-3"
                style={{ height: FIELD_HEIGHT }}
              />
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <Clock size={14} className="text-[#E8720C]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#D4A017]">
                Live Schedule
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SearchableSelect
                label="Time Zone"
                options={data.timezones}
                value={selectedTz}
                onChange={setSelectedTz}
                placeholder="Search..."
                customHeight={FIELD_HEIGHT}
              />
              <div className="space-y-1">
                <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                  Batch Slot
                </label>
                <select
                  required
                  name="selectedSlot"
                  disabled={!selectedTz}
                  className="w-full bg-white border border-[#5C3A1E]/20 rounded-lg font-bold text-sm text-[#5C3A1E] disabled:opacity-20 cursor-pointer outline-none px-3"
                  style={{ height: FIELD_HEIGHT }}
                >
                  <option value="">
                    {selectedTz ? "Select slot" : "Wait..."}
                  </option>
                  {convertedSlots.map((s, i) => (
                    <option key={i} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <Globe size={14} className="text-[#E8720C]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#D4A017]">
                Contact
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SearchableSelect
                label="Country"
                options={data.countries}
                value={selectedCountry}
                onChange={setSelectedCountry}
                placeholder="Search..."
                customHeight={FIELD_HEIGHT}
              />
              <input
                required
                name="city"
                placeholder="City"
                className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] placeholder:text-[#5C3A1E]/20 outline-none px-3 mt-auto"
                style={{ height: FIELD_HEIGHT }}
              />
              <div className="flex gap-2 md:col-span-2">
                <div className="w-[120px]">
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
                  <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                    Phone Number
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Mobile"
                    className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] placeholder:text-[#5C3A1E]/20 outline-none px-3"
                    style={{ height: FIELD_HEIGHT }}
                  />
                </div>
              </div>
            </div>
          </section>

          <button
            disabled={loading}
            className="w-full py-4 bg-[#E8720C] text-white font-black rounded-full shadow-lg hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-widest text-[10px] cursor-pointer"
          >
            {loading ? "Processing..." : `Enroll & Pay`}
          </button>
        </form>

        <button
          onClick={() => router.back()}
          className="mt-6 mx-auto flex items-center gap-2 text-[#5C3A1E]/20 hover:text-[#E8720C] transition-colors text-[10px] font-black uppercase tracking-widest cursor-pointer"
        >
          <ChevronLeft size={12} /> Back
        </button>
      </div>
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
    </div>
  );
}
