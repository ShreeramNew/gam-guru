"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const useNextSunday = () => {
  return useMemo(() => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const currentHour = now.getHours();
    let daysUntilSunday =
      dayOfWeek === 0 && currentHour >= 19
        ? 7
        : dayOfWeek === 0
          ? 0
          : 7 - dayOfWeek;
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    return nextSunday.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    });
  }, []);
};

const MODULES = [
  {
    title: "GURU ASHTAKAM",
    image: "/GuruPaduka.png",
    description: "Honoring the spiritual guide through the sacred Guru Paduka.",
    price: { original: 1200, current: 777 },
    dPrice: { original: 35, current: 21 },
    status: "active",
    batchLabel: true,
    blurPrice: false,
  },
  {
    title: "LINGA ASHTAKAM",
    image: "/LingaAshtakam.png",
    description: "Adoration to the Eternal Source for the destruction of grief and ego.",
    price: { original: 1500, current: 999 },
    dPrice: { original: 45, current: 33 },
    status: "active",
    batchLabel: true,
    blurPrice: false,
  },
  {
    title: "KALA BHAIRAVA ASHTAKAM",
    image: "/KalaBhairava.png",
    description: "Connect with the divine guardian of time and protection.",
    price: { original: 1500, current: 999 },
    dPrice: { original: 45, current: 33 },
    status: "active",
    batchLabel: true,
    blurPrice: false,
  },
  {
    title: "LAKSHMI ASHTAKAM",
    image: "/lakshmi.png",
    description: "Invoking the grace of the Goddess of wealth and prosperity.",
    price: { original: 2000, current: 1499 },
    dPrice: { original: 60, current: 45 },
    status: "active",
    batchLabel: true,
    blurPrice: false,
  },
];

export default function ModuleShowcase() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successType, setSuccessType] = useState("enrollment");
  const router=useRouter();

  const nextSundayStr = useNextSunday();

  // Helper to send data to your API
  const finalizeRegistration = async (payload) => {
    console.log("I am payload:", payload);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccessType(
          payload.status === "active" ? "enrollment" : "notification",
        );
        setSelectedModule(null);
        setShowSuccess(true);
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error || "Submission failed"}`);
      }
    } catch (err) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAction = (module) => {
    if (module.status === "active") {
      // Redirect to the new registration page
      const slug = module.title.toLowerCase().replace(/ /g, "-");
      router.push(`/register/${slug}`);
    } else {
      // Keep Notify Me popup logic
      setSelectedModule(module);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Capture Form Data immediately
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const userDetails = Object.fromEntries(formData);

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    console.log("Razorpay Key:", razorpayKey);

    if (selectedModule.status === "active") {
      // Safety check for the 403/undefined error
      if (!razorpayKey) {
        setIsSubmitting(false);
        alert("Razorpay Key is missing. Please check your .env setup.");
        return;
      }

      const options = {
        key: razorpayKey, // Ensure this is not undefined
        amount: selectedModule.price.current * 100,
        currency: "INR",
        name: "Sanatan After School",
        description: selectedModule.title,
        handler: async function (response) {
          // COMBINE DATA HERE
          const finalPayload = {
            name: userDetails.name,
            email: userDetails.email,
            city: userDetails.city,
            countryCode: userDetails.countryCode,
            phone: userDetails.phone,
            status: "active",
            moduleTitle: selectedModule.title,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id || "",
            razorpay_signature: response.razorpay_signature,
          };

          // Send to backend
          await finalizeRegistration(finalPayload);
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        theme: { color: "#E8720C" },
        modal: {
          ondismiss: function () {
            setIsSubmitting(false);
          },
        },
      };

      try {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (err) {
        console.error("Razorpay Open Error:", err);
        setIsSubmitting(false);
      }
    } else {
      // Coming Soon / Notify Me Flow
      await finalizeRegistration({
        ...userDetails,
        status: "coming_soon",
        moduleTitle: selectedModule.title,
      });
    }
  };

  return (
    <section className="w-full py-20 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E8720C] mb-4">
            Curriculum
          </p>
          <h2
            className="text-4xl md:text-5xl font-black uppercase text-[#5C3A1E]"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Sacred <span className="text-[#E8720C]">Modules</span>
          </h2>
          <div className="w-16 h-[2.5px] bg-[#E8720C] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((module, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-[2rem] overflow-hidden border border-[#5C3A1E]/10 flex flex-col group relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={module.image}
                  alt={module.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {module.status === "coming_soon" && (
                  <div className="absolute top-6 -right-12 bg-[#E8720C] text-white font-black text-[9px] uppercase tracking-[0.3em] py-2 px-16 rotate-[35deg] shadow-lg z-10">
                    Coming Soon
                  </div>
                )}
              </div>
              <div className="p-7 pt-9 flex flex-col items-center text-center relative flex-grow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center px-4">
                  {module.batchLabel ? (
                    <div className="bg-white px-4 py-2 rounded-full border border-[#E8720C]/30 shadow-md whitespace-nowrap z-20">
                      <p className="text-[9px] font-black uppercase text-[#E8720C]">
                        Next Batch: {nextSundayStr}
                      </p>
                    </div>
                  ) : (
                    <div className="h-4" />
                  )}
                </div>
                <div className="min-h-[100px] flex flex-col justify-center space-y-2">
                  <h3
                    className="text-[16px] font-black uppercase tracking-widest text-[#5C3A1E]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {module.title}
                  </h3>
                  <p className="text-[12px] font-bold opacity-60 text-[#5C3A1E]">
                    {module.description}
                  </p>
                </div>
                <div
                  className={`mt-5 flex gap-3 items-center ${module.blurPrice ? "blur-[7px] opacity-40 select-none" : "opacity-100"}`}
                >
                  <span
                    className="text-sm line-through opacity-40 font-bold"
                    style={{ color: "#000000" }}
                  >
                    ₹{module.price.original}
                  </span>
                  <span className="text-2xl font-black text-[#5C3A1E]">
                    ₹{module.price.current}
                  </span>
                </div>
                <button
                  onClick={() => handleAction(module)}
                  className="w-full mt-6 py-4 rounded-full bg-[#E8720C] text-white font-black uppercase text-[11px] tracking-widest cursor-pointer shadow-lg active:scale-95 cursor-pointer"
                >
                  {module.status === "active" ? "Enroll Now" : "Notify Me"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[2rem] w-full max-w-[480px] relative shadow-xl overflow-hidden p-8"
            >
              <div className="text-center mb-6">
                <h3
                  className="text-2xl font-black text-[#5C3A1E] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Register <span className="text-[#E8720C]">Now</span>
                </h3>
                <p className="text-[11px] font-medium opacity-60 mt-1 italic text-[#5C3A1E]">
                  Fill in the details below to secure a place
                </p>
                <div className="w-10 h-[1.5px] bg-[#E8720C] mx-auto mt-4" />
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A017]">
                      Personal Details
                    </span>
                    <div className="flex-1 h-[1px] bg-[#E8720C]/10" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      required
                      name="name"
                      placeholder="Full Name"
                      className="w-full p-3.5 rounded-lg bg-[#FDF6E3]/50 border border-[#E8720C]/20 text-[13px] font-bold text-[#5C3A1E] focus:border-[#E8720C] outline-none"
                    />
                    <input
                      required
                      name="city"
                      placeholder="City"
                      className="w-full p-3.5 rounded-lg bg-[#FDF6E3]/50 border border-[#E8720C]/20 text-[13px] font-bold text-[#5C3A1E] focus:border-[#E8720C] outline-none"
                    />
                  </div>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3.5 rounded-lg bg-[#FDF6E3]/50 border border-[#E8720C]/20 text-[13px] font-bold text-[#5C3A1E] focus:border-[#E8720C] outline-none"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A017]">
                      Contact Info
                    </span>
                    <div className="flex-1 h-[1px] bg-[#E8720C]/10" />
                  </div>
                  <div className="flex gap-3">
                    <select
                      name="countryCode"
                      className="w-[90px] p-3.5 rounded-lg bg-[#FDF6E3]/50 border border-[#E8720C]/20 text-[13px] font-bold text-[#5C3A1E] outline-none"
                    >
                      <option value="+91">IN +91</option>
                      <option value="+1">US +1</option>
                    </select>
                    <input
                      required
                      type="tel"
                      pattern="[0-9]{10}"
                      name="phone"
                      placeholder="81234 56789"
                      className="flex-1 p-3.5 rounded-lg bg-[#FDF6E3]/50 border border-[#E8720C]/20 text-[13px] font-bold text-[#5C3A1E] focus:border-[#E8720C] outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedModule(null)}
                    className="flex-1 py-3.5 rounded-lg border border-[#E8720C]/20 text-[11px] font-black uppercase tracking-widest text-[#5C3A1E] hover:bg-[#FDF6E3] transition-all"
                  >
                    Back
                  </button>
                  <button
                    disabled={isSubmitting}
                    className="flex-[2] py-3.5 rounded-lg bg-[#E8720C] text-white text-[11px] font-black uppercase cursor-pointer tracking-widest shadow-lg active:scale-95 transition-all"
                  >
                    {isSubmitting
                      ? "Processing..."
                      : selectedModule.status === "active"
                        ? `Pay ₹${selectedModule.price.current}`
                        : "Continue →"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                {successType === "enrollment"
                  ? "Enrollment Successful"
                  : "Interest Noted"}
              </h3>
              <p className="text-sm font-bold opacity-60 text-[#5C3A1E] leading-relaxed">
                {successType === "enrollment"
                  ? "Namaskaram! Your place is secured. We'll notify you soon regarding batch details and joining instructions."
                  : "Namaskaram! We've added you to our waiting list. We'll notify you as soon as this module launches."}
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-8 w-full py-4 rounded-full bg-[#5C3A1E] text-white font-black uppercase text-[11px] cursor-pointer tracking-widest hover:brightness-125 transition-all active:scale-95 shadow-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
    </section>
  );
}
