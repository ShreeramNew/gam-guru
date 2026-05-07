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
} from "lucide-react";
import { getCountryData } from "../../lib/registration-data";

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
                  <span className="truncate pr-4">{opt.label}</span>
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
  const [selectedTz, setSelectedTz] = useState("");
  const [selectedStartSlot, setSelectedStartSlot] = useState("");
  const [selectedEndSlot, setSelectedEndSlot] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCode, setSelectedCode] = useState("+91");

  const moduleTitle = moduleSlug
    ? moduleSlug.replace(/-/g, " ").toUpperCase()
    : "MODULE";
  const FIELD_HEIGHT = "40px";

  useEffect(() => {
    setData(getCountryData());
  }, []);

  const timeHelpers = useMemo(() => {
    const today = new Date();
    const nextSat = new Date(today);
    nextSat.setDate(today.getDate() + ((6 - today.getDay() + 7) % 7) || 7);
    const nextSun = new Date(today);
    nextSun.setDate(today.getDate() + ((7 - today.getDay() + 7) % 7) || 7);

    const endSat = new Date(nextSat);
    endSat.setDate(nextSat.getDate() + 7);
    const endSun = new Date(nextSun);
    endSun.setDate(nextSun.getDate() + 7);

    return { nextSat, nextSun, endSat, endSun };
  }, []);

  const startOptions = useMemo(() => {
    if (!selectedTz) return [];
    const configs = [
      { day: timeHelpers.nextSat, h: 12, m: 30, label: "6:00 PM IST" },
      { day: timeHelpers.nextSun, h: 2, m: 30, label: "8:00 AM IST" },
    ];

    return configs.map((c) => {
      const d = new Date(c.day);
      d.setUTCHours(c.h, c.m, 0, 0);
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: selectedTz,
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const formatted = formatter.format(d);
      return { value: formatted, label: `${formatted} (${c.label})` };
    });
  }, [selectedTz, timeHelpers]);

  const endOptions = useMemo(() => {
    if (!selectedTz) return [];
    const configs = [
      { day: timeHelpers.endSat, h: 13, m: 30, label: "7:00 PM IST" },
      { day: timeHelpers.endSun, h: 3, m: 30, label: "9:00 AM IST" },
    ];

    return configs.map((c) => {
      const d = new Date(c.day);
      d.setUTCHours(c.h, c.m, 0, 0);
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: selectedTz,
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const formatted = formatter.format(d);
      return { value: formatted, label: `${formatted} (${c.label})` };
    });
  }, [selectedTz, timeHelpers]);

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
      startSession: selectedStartSlot,
      endSession: selectedEndSlot,
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
        if (result.ok) {
          setShowSuccess(true);
          // router.push("/");
        }
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
          <p className="text-[9px] font-black text-[#D4A017] tracking-widest uppercase mb-1">
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
          className="bg-white rounded-3xl p-6 md:p-8 border border-[#5C3A1E]/10 space-y-6 shadow-xl shadow-[#5C3A1E]/5"
        >
          {/* IDENTITY */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <User size={14} className="text-[#E8720C]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#D4A017]">
                Identity Details
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                name="firstName"
                placeholder="First Name"
                className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] outline-none px-3"
                style={{ height: FIELD_HEIGHT }}
              />
              <input
                required
                name="lastName"
                placeholder="Last Name"
                className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] outline-none px-3"
                style={{ height: FIELD_HEIGHT }}
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email Address"
                className="md:col-span-2 w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] outline-none px-3"
                style={{ height: FIELD_HEIGHT }}
              />
              <div className="space-y-1">
                <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                  Age
                </label>
                <input
                  required
                  name="age"
                  type="number"
                  placeholder="Age"
                  className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] outline-none px-3"
                  style={{ height: FIELD_HEIGHT }}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                  Gender
                </label>
                <select
                  required
                  name="gender"
                  className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] outline-none px-3 cursor-pointer"
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

          {/* SCHEDULE */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <Clock size={14} className="text-[#E8720C]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#D4A017]">
                Live Schedule
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <SearchableSelect
                label="1. Select Your Time Zone"
                options={data.timezones}
                value={selectedTz}
                onChange={setSelectedTz}
                placeholder="Search..."
                customHeight={FIELD_HEIGHT}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SearchableSelect
                  label="2. Start Session (LIVE)"
                  options={startOptions}
                  value={selectedStartSlot}
                  onChange={setSelectedStartSlot}
                  placeholder={
                    selectedTz ? "Choose start..." : "Select timezone first"
                  }
                  customHeight={FIELD_HEIGHT}
                />
                <SearchableSelect
                  label="3. Ending Session (LIVE)"
                  options={endOptions}
                  value={selectedEndSlot}
                  onChange={setSelectedEndSlot}
                  placeholder={
                    selectedTz ? "Choose end..." : "Select timezone first"
                  }
                  customHeight={FIELD_HEIGHT}
                />
              </div>
            </div>
            <p
              className={`${crimson.className} text-gray-700 text-[14px] ml-[10px]`}
            >
              <p>Note:</p>
              <ul className=" ml-[10px] ">
                <li>
                  * During the week, you will be going through the pre recorded
                  learning modules at your convenient time.
                </li>
                {/* <br /> */}
                <li>
                  * Practice corrections support by Our Expert Teachers and
                  whatsapp group support will be available throughout the week
                </li>
              </ul>
            </p>
          </section>

          {/* GEOGRAPHY */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <Globe size={14} className="text-[#E8720C]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#D4A017]">
                Professional & Contact
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <SearchableSelect
                label="Country"
                options={data.countries}
                value={selectedCountry}
                onChange={setSelectedCountry}
                placeholder="Search..."
                customHeight={FIELD_HEIGHT}
              />
              <div className="space-y-1">
                <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                  Occupation
                </label>
                <input
                  required
                  name="occupation"
                  placeholder="Occupation"
                  className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] outline-none px-3"
                  style={{ height: FIELD_HEIGHT }}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">
                  City
                </label>
                <input
                  required
                  name="city"
                  placeholder="City"
                  className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] outline-none px-3"
                  style={{ height: FIELD_HEIGHT }}
                />
              </div>
              <div className="flex gap-2">
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
                    className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] outline-none px-3"
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

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-[2.5rem] w-full max-w-[400px] p-10 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-black text-[#5C3A1E] uppercase mb-3"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Enrollment Successful
              </h3>
              <p className="text-sm font-bold opacity-60 text-[#5C3A1E] leading-relaxed">
                Namaskaram! Your place is secured. We'll notify you soon
                regarding batch details and joining instructions.
              </p>
              <button
                onClick={() =>{
                  router.push("/");
                  setShowSuccess(false);
                }}
                className="mt-8 w-full py-4 rounded-full bg-[#5C3A1E] text-white font-black uppercase text-[11px] cursor-pointer tracking-widest hover:brightness-125 transition-all active:scale-95 shadow-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
    </div>
  );
}
