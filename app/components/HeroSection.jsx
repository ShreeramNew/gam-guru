"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NAVBAR_HEIGHT = 60;

export default function HeroSection() {
  const [showAuth, setShowAuth] = useState(false);
  const { data: session, status } = useSession();
  const [userPermissions, setUserPermissions] = useState(null);
  const router = useRouter();

  // BACKEND CHECK LOGIC
  useEffect(() => {
    const verifyUserAccess = async () => {
      // Only run if the user is successfully logged in with Google
      if (status === "authenticated" && session?.user?.email) {
        try {
          const response = await fetch(
            "http://localhost:5000/api/users/check-auth",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: session.user.email }),
            },
          );

          const result = await response.json();

          if (result.isRegistered) {
            console.log("Access Granted for:", result.accessibleModules);
            setUserPermissions(result.accessibleModules);
            setShowAuth(false); // Close modal on success
            // You can redirect the user here using useRouter() if needed
            router.push("/dashboard");
          } else {
            console.log("User not found in payment database");
            // Optionally show a message that they haven't paid yet
          }
        } catch (error) {
          console.error("Backend check failed:", error);
        }
      }
    };

    verifyUserAccess();
  }, [session, status]);

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden px-6"
      style={{
        height: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
        background:
          "radial-gradient(circle at center, #6b2d0f 0%, #4a1a05 35%, #2b0f04 70%, #1a0a05 100%)",
        fontFamily: "var(--font-cinzel)",
      }}
    >
      {/* BACKGROUND ORNAMENTATION */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center animate-[spin_200s_linear_infinite]">
          {[450, 700, 1000, 1350, 1800, 2400].map((size, i) => (
            <div
              key={i}
              className="border border-[#D4A017]/5 rounded-full absolute"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                borderWidth: "0.5px",
              }}
            />
          ))}
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <div
              key={angle}
              className="w-[0.5px] h-[250vh] bg-gradient-to-b from-transparent via-[#D4A017]/10 to-transparent absolute"
              style={{ transform: `rotate(${angle}deg)` }}
            />
          ))}
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        <div className="text-[#D4A017] text-5xl mb-6 drop-shadow-[0_0_20px_rgba(212,160,23,0.5)]">
          🕉
        </div>
        <p className="text-[#D4A017] text-[10px] tracking-[0.8em] font-bold uppercase mb-4 opacity-90">
          Introducing
        </p>
        <div className="mb-6 flex flex-col items-center">
          <h1
            className="text-white leading-[0.9] font-black uppercase mb-2 shadow-black/20 drop-shadow-sm"
            style={{ fontSize: "clamp(52px, 10vw, 96px)" }}
          >
            Shloka <span className="text-[#D4A017]">bhyasa</span>
          </h1>
        </div>
        <p
          className="text-white/90 text-sm md:text-xl italic tracking-wide max-w-2xl mb-12 drop-shadow-md"
          style={{ fontFamily: "serif" }}
        >
          Learn Sanatan Shlokas Online
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <button className="bg-[#E8720C] hover:bg-[#ff8c2b] text-white text-[14px] tracking-[0.2em] font-bold px-14 py-4 rounded-full transition-all uppercase active:scale-95 shadow-[0_0_30px_rgba(232,114,12,0.6)] cursor-pointer">
            Enroll Now
          </button>
          <button
            onClick={() => setShowAuth(true)}
            className="border border-[#D4A017]/40 hover:bg-[#D4A017]/10 text-[#D4A017] text-[12px] tracking-[0.2em] font-bold px-12 py-4 rounded-sm transition-all uppercase cursor-pointer backdrop-blur-sm"
          >
            {status === "authenticated" ? "Profile" : "Login"}
          </button>
        </div>
        <div className="mt-14 w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A017]/70 to-transparent" />
      </div>

      {/* LOGIN MODAL */}
      <AnimatePresence>
        {showAuth && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md p-1 rounded-2xl bg-gradient-to-br from-[#D4A017]/40 to-[#4a1a05]/40 border border-[#D4A017]/20 shadow-2xl"
            >
              <div className="bg-[#1a0a05] rounded-[14px] p-8 flex flex-col items-center">
                <button
                  onClick={() => setShowAuth(false)}
                  className="absolute top-6 right-8 text-[#D4A017] opacity-60 hover:opacity-100 text-xl cursor-pointer"
                >
                  ✕
                </button>
                <h3 className="text-white text-2xl font-black uppercase mb-2 tracking-wider">
                  Access <span className="text-[#D4A017]">Module</span>
                </h3>
                <div className="w-12 h-[1px] bg-[#D4A017]/40 mb-6" />
                <div className="bg-[#D4A017]/5 border border-[#D4A017]/10 rounded-lg p-4 mb-8 text-center">
                  <p className="text-[#D4A017] text-[11px] leading-relaxed font-bold uppercase tracking-widest">
                    Important Note:
                  </p>
                  <p className="text-white/60 text-[10px] mt-2 leading-relaxed italic">
                    Please login with the{" "}
                    <span className="text-white underline">
                      same email address
                    </span>{" "}
                    used during enrollment.
                  </p>
                </div>
                <button
                  onClick={() => signIn("google")}
                  className="w-full bg-white hover:bg-white/90 text-black font-black text-[11px] uppercase tracking-[0.2em] py-4 rounded-full flex items-center justify-center gap-3 active:scale-[0.98] cursor-pointer"
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    className="w-5 h-5"
                    alt="Google"
                  />
                  Continue with Google
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[#D4A017] text-[9px] uppercase tracking-[0.4em] font-bold">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4A017] to-transparent" />
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
