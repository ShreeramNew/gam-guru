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
  Heart,
  CreditCard
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
    opt.label.toLowerCase().includes(search.toLowerCase())
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
        <span className={`truncate ${value ? "text-[#5C3A1E]" : "text-[#5C3A1E]/30"}`}>
          {value ? safeOptions.find((o) => o.value === value)?.label : placeholder}
        </span>
        <ChevronDown size={12} className={`flex-shrink-0 transition-transform opacity-30 ${isOpen ? "rotate-180" : ""}`} />
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
                  {value === opt.value && <Check size={14} className="text-[#E8720C]" />}
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
  const [data, setData] = useState({ countries: [], timezones: [], phoneCodes: [] });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showContributionModal, setShowContributionModal] = useState(false);
  
  const [selectedTz, setSelectedTz] = useState("");
  const [selectedStartSlot, setSelectedStartSlot] = useState("");
  const [selectedEndSlot, setSelectedEndSlot] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCode, setSelectedCode] = useState("+91");
  const [customAmount, setCustomAmount] = useState(501);

  const FIELD_HEIGHT = "40px";

  const activeModule = useMemo(() => {
    return ModulesData.find((m) => m.title.toLowerCase().replace(/ /g, "-") === moduleSlug);
  }, [moduleSlug]);

  const moduleTitle = activeModule?.title || "MODULE";

  useEffect(() => {
    setData(getCountryData());
  }, []);

  const isIndia = selectedCountry === "India";
  const currency = isIndia ? "INR" : "USD";
  const symbol = isIndia ? "₹" : "$";
  const isKalaBhairava = moduleSlug === "kala-bhairava-ashtakam";

  const formatSession = (date, tzValue) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: tzValue, month: "short", day: "numeric", weekday: "short", hour: "numeric", minute: "2-digit", hour12: true,
    });
    const tzEntry = data.timezones.find(t => t.value === tzValue);
    const tzName = tzEntry ? tzEntry.label.match(/\(([^)]+)\)/)?.[1] || "Local" : "Local";
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

  const handleEnrollment = async (isFree = false) => {
    setLoading(true);
    const form = document.getElementById("registration-form");
    const formData = new FormData(form);
    const details = Object.fromEntries(formData);
    
    const finalPrice = isFree ? 0 : (isKalaBhairava ? customAmount : (isIndia ? activeModule?.price.current : activeModule?.dPrice.current));

    const finalPayload = {
      ...details,
      country: selectedCountry,
      countryCode: selectedCode,
      timezone: selectedTz,
      startSession: selectedStartSlot,
      endSession: selectedEndSlot,
      moduleTitle,
      amountPaid: finalPrice,
      currency,
      status: "active",
    };

    if (finalPrice === 0) {
      try {
        const result = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...finalPayload, razorpay_payment_id: "FREE_ENROLL" }),
        });
        if (result.ok) setShowSuccess(true);
      } finally {
        setLoading(false);
      }
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: finalPrice * 100,
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
          <p className="text-[9px] font-black text-[#D4A017] tracking-widest uppercase mb-1">Step 1 of 2</p>
          <h1 className="text-2xl font-black text-[#5C3A1E] uppercase leading-tight" style={{ fontFamily: "var(--font-cinzel)" }}>
            Course <span className="text-[#E8720C]">Enrollment</span>
          </h1>
        </div>

        <form id="registration-form" onSubmit={(e) => e.preventDefault()} className="bg-white rounded-3xl p-6 md:p-8 border border-[#5C3A1E]/10 space-y-6 shadow-xl shadow-[#5C3A1E]/5">
          
          {/* IDENTITY DETAILS */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <User size={14} className="text-[#E8720C]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#D4A017]">Identity Details</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required name="firstName" placeholder="First Name" className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-3 outline-none" style={{ height: FIELD_HEIGHT }} />
              <input required name="lastName" placeholder="Last Name" className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-3 outline-none" style={{ height: FIELD_HEIGHT }} />
              <input required name="email" type="email" placeholder="Email Address" className="md:col-span-2 w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-3 outline-none" style={{ height: FIELD_HEIGHT }} />
              <div className="space-y-1">
                <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">Age</label>
                <input required name="age" type="number" placeholder="Age" className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-3 outline-none" style={{ height: FIELD_HEIGHT }} />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">Gender</label>
                <select required name="gender" className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-3 outline-none cursor-pointer" style={{ height: FIELD_HEIGHT }}>
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
              <span className="text-[9px] font-black uppercase tracking-widest text-[#D4A017]">Live Schedule</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <SearchableSelect label="1. Time Zone" options={data.timezones} value={selectedTz} onChange={setSelectedTz} placeholder="Search..." customHeight={FIELD_HEIGHT} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SearchableSelect label="2. Start Session" options={startOptions} value={selectedStartSlot} onChange={setSelectedStartSlot} placeholder="Choose start..." customHeight={FIELD_HEIGHT} />
                <SearchableSelect label="3. Ending Session" options={endOptions} value={selectedEndSlot} onChange={setSelectedEndSlot} placeholder="Choose end..." customHeight={FIELD_HEIGHT} />
              </div>
            </div>
            <div className={`${crimson.className} text-gray-700 text-[14px] ml-[10px]`}>
              <p className="font-bold">Note:</p>
              <ul className="ml-[10px] space-y-1">
                <li>* During the week, you will be going through the pre recorded learning modules at your convenient time.</li>
                <li>* Practice corrections support by Our Expert Teachers and whatsapp group support will be available throughout the week</li>
              </ul>
            </div>
          </section>

          {/* GEOGRAPHY & CONTACT */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#5C3A1E]/5">
              <Globe size={14} className="text-[#E8720C]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#D4A017]">Professional & Contact</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <SearchableSelect label="Country" options={data.countries} value={selectedCountry} onChange={setSelectedCountry} placeholder="Search..." customHeight={FIELD_HEIGHT} />
              <div className="space-y-1">
                <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">Occupation</label>
                <input required name="occupation" placeholder="Occupation" className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-3 outline-none" style={{ height: FIELD_HEIGHT }} />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">City</label>
                <input required name="city" placeholder="City" className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-3 outline-none" style={{ height: FIELD_HEIGHT }} />
              </div>
              <div className="flex gap-2">
                <div className="w-[110px]">
                  <SearchableSelect label="Code" options={data.phoneCodes} value={selectedCode} onChange={setSelectedCode} placeholder="+91" customHeight={FIELD_HEIGHT} />
                </div>
                <div className="flex-1 space-y-1">
                  <label className="text-[9px] font-black text-[#5C3A1E]/50 uppercase tracking-widest ml-1">Phone Number</label>
                  <input required name="phone" type="tel" placeholder="Mobile Number" className="w-full bg-white border border-[#5C3A1E]/15 rounded-lg font-bold text-sm text-[#5C3A1E] px-3 outline-none" style={{ height: FIELD_HEIGHT }} />
                </div>
              </div>
            </div>
          </section>

          {/* DUAL BUTTON ACTION OR SINGLE ACTION */}
          <div className="pt-4 space-y-4">
            {isKalaBhairava ? (
              <div className="space-y-4">
                <p className={`${crimson.className} text-[13px] text-[#5C3A1E]/70 italic text-center px-4 leading-relaxed`}>
                  Note: This module is offered freely. However, you may contribute any amount as Dakshina to support our mission.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button type="button" onClick={() => handleEnrollment(true)} className="py-4 bg-[#5C3A1E]/5 text-[#5C3A1E] font-black rounded-full border border-[#5C3A1E]/10 hover:bg-[#5C3A1E]/10 active:scale-95 transition-all text-[10px] uppercase tracking-widest cursor-pointer">
                    Enroll For Free
                  </button>
                  <button type="button" onClick={() => setShowContributionModal(true)} className="py-4 bg-[#E8720C] text-white font-black rounded-full shadow-lg shadow-[#E8720C]/20 hover:brightness-110 active:scale-95 transition-all text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer">
                    {symbol} Contribute
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={() => handleEnrollment(false)} disabled={loading} className="w-full py-4 bg-[#E8720C] text-white font-black rounded-full shadow-lg hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-widest text-[10px] cursor-pointer">
                {loading ? "Processing..." : `Enroll & Pay ${symbol}${isIndia ? activeModule?.price.current : activeModule?.dPrice.current}`}
              </button>
            )}
          </div>
        </form>

        <button onClick={() => router.back()} className="mt-6 mx-auto flex items-center gap-2 text-[#5C3A1E]/20 hover:text-[#E8720C] transition-colors text-[10px] font-black uppercase tracking-widest cursor-pointer">
          <ChevronLeft size={12} /> Back
        </button>
      </div>

      {/* CONTRIBUTION MODAL */}
      <AnimatePresence>
        {showContributionModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white rounded-[2.5rem] w-full max-w-sm p-8 text-center shadow-2xl relative">
              <button onClick={() => setShowContributionModal(false)} className="absolute top-6 right-6 text-[#5C3A1E]/30 hover:text-[#5C3A1E] cursor-pointer">✕</button>
              <h3 className="text-xl font-black text-[#5C3A1E] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-cinzel)" }}>Offer <span className="text-[#E8720C]">Dakshina</span></h3>
              <p className={`${crimson.className} text-sm text-[#5C3A1E]/60 italic mb-8`}>Your support helps us keep these teachings accessible.</p>
              
              <div className="relative mb-8">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg font-black text-[#5C3A1E]">{symbol}</span>
                <input 
                  autoFocus 
                  type="number" 
                  value={customAmount} 
                  onChange={(e) => setCustomAmount(e.target.value)} 
                  placeholder="Amount"
                  className="w-full h-16 pl-12 pr-6 bg-[#E8720C]/5 border-2 border-[#E8720C]/20 rounded-2xl text-2xl font-black text-[#5C3A1E] outline-none focus:border-[#E8720C] placeholder:text-[#5C3A1E]/20 transition-colors" 
                />
              </div>

              <button onClick={() => { setShowContributionModal(false); handleEnrollment(false); }} className="w-full py-4 bg-[#E8720C] text-white font-black rounded-full shadow-xl uppercase text-[11px] tracking-widest hover:brightness-110 active:scale-95 transition-all cursor-pointer">
                Proceed to Payment
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
             <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><Check size={40} className="text-green-600" /></div>
                <h3 className="text-2xl font-black text-[#5C3A1E] uppercase mb-4" style={{ fontFamily: "var(--font-cinzel)" }}>Enrollment Success</h3>
                <p className={`${crimson.className} text-[#5C3A1E]/60 italic mb-8`}>Namaskaram! Your place is secured. We will reach out shortly regarding batch details.</p>
                <button onClick={() => { router.push("/"); setShowSuccess(false); }} className="w-full py-4 bg-[#5C3A1E] text-white font-black rounded-full uppercase tracking-widest text-[11px] cursor-pointer">Go to Home</button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
    </div>
  );
}