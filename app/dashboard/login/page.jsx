"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Crimson_Pro } from "next/font/google";
import { ChevronLeft } from "lucide-react";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function LoginPage() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsRedirecting(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard/modules" });
    } catch (error) {
      console.error("Auth error:", error);
      setIsRedirecting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" style={{ backgroundColor: "#FFFBF2" }}>
      
      {/* AMBIENT BACKGROUND ELEMENTS */}
      <div className="absolute top-[-5%] right-[-5%] w-[30%] h-[30%] bg-[#E8720C]/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-[#D4A017]/10 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-[#D4A017]/30 via-[#E8720C]/20 to-[#D4A017]/30 shadow-2xl shadow-[#5C3A1E]/5"
      >
        <div className="bg-white rounded-[23px] p-8 md:p-10 flex flex-col items-center">
          
          {/* SYMBOL */}
          <motion.div 
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mb-6"
          >
            <span className="text-[#E8720C] text-5xl select-none">ॐ</span>
          </motion.div>

          <h3 className="text-[#5C3A1E] text-2xl font-black uppercase mb-2 tracking-wider text-center">
            Access <span className="text-[#E8720C]">Modules</span>
          </h3>
          
          <div className="w-12 h-[1px] bg-[#E8720C]/20 mb-8" />

          {/* IMPORTANT NOTE BOX */}
          <div className="bg-[#E8720C]/5 border border-[#E8720C]/10 rounded-2xl p-6 mb-8 text-center w-full">
            <p className="text-[#E8720C] text-[10px] leading-relaxed font-black uppercase tracking-[0.2em]">
              Verification Required
            </p>
            <p className={`${crimson.className} text-[#5C3A1E]/70 text-[15px] mt-3 leading-relaxed italic`}>
              Please login with the{" "}
              <span className="text-[#5C3A1E] font-bold border-b border-[#E8720C]">
                same email address
              </span>{" "}
              used during enrollment.
            </p>
          </div>

          {/* GOOGLE BUTTON */}
          <button
            onClick={handleGoogleSignIn}
            disabled={isRedirecting}
            className="w-full bg-white border border-[#5C3A1E]/15 hover:border-[#E8720C] hover:bg-[#FFFBF2] text-[#5C3A1E] font-black text-[11px] uppercase tracking-[0.2em] py-4 rounded-full flex items-center justify-center gap-3 active:scale-[0.98] transition-all cursor-pointer shadow-sm disabled:opacity-50"
          >
            {!isRedirecting ? (
              <>
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  className="w-5 h-5"
                  alt="Google"
                />
                Continue with Google
              </>
            ) : (
              <div className="w-5 h-5 border-2 border-[#E8720C]/20 border-t-[#E8720C] rounded-full animate-spin" />
            )}
          </button>

          {/* RETURN NAVIGATION */}
          <button 
            onClick={() => router.push("/")}
            className="mt-8 flex items-center gap-2 text-[#5C3A1E]/30 hover:text-[#E8720C] text-[10px] font-black uppercase tracking-[0.2em] transition-colors cursor-pointer"
          >
            <ChevronLeft size={12} /> Back to Modules
          </button>
        </div>
      </motion.div>

      {/* FOOTER MANTRA */}
      <div className="absolute bottom-8 w-full text-center opacity-30">
        <span className="text-[#D4A017] text-[10px] font-bold uppercase tracking-[0.8em]">
          Satyam Shivam Sundaram
        </span>
      </div>
    </div>
  );
}