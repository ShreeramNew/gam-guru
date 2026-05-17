"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react"; // Added signOut
import Image from "next/image";
import Link from "next/link";
import { Crimson_Pro } from "next/font/google";
import MODULES from "@/app/lib/ModulesData";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const fetchAccess = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          // Pointing to your internal Next.js API route instead of the raw http IP address
          const res = await fetch("/api/verify-auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: session.user.email }),
          });

          const data = await res.json();

          if (data.isRegistered) {
            setPermissions(data.accessibleModules || []);
          } else {
            setShowError(true);
          }
        } catch (err) {
          console.error("Dashboard check failed", err);
        } finally {
          setLoading(false);
        }
      } else if (status === "unauthenticated") {
        window.location.href = "/";
      }
    };

    fetchAccess();
  }, [status, session]);

  if (loading)
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{ backgroundColor: "#FFFBF2" }}
      >
        <div className="relative flex flex-col items-center max-w-sm w-full">
          {/* SACRED SYMBOL ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: [0.4, 1],
              scale: [0.9, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mb-10 relative"
          >
            <span className="text-[#E8720C] text-7xl md:text-8xl select-none opacity-80">
              ॐ
            </span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#E8720C]/10 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* LOADING STATEMENTS */}
          <div className="text-center space-y-3">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#5C3A1E] font-black text-xs uppercase tracking-[0.3em]"
            >
              Igniting the Spark
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-1"
            >
              <p
                className={`${crimson.className} text-[#5C3A1E]/70 text-[16px] italic leading-relaxed`}
              >
                Gathering the ancient pearls of wisdom...
              </p>
              <p
                className={`${crimson.className} text-[#5C3A1E]/40 text-[13px] font-medium`}
              >
                Your path to timeless knowledge is unfolding.
              </p>
            </motion.div>
          </div>

          {/* MINIMAL PROGRESS TRACKER */}
          <div className="mt-10 w-32 h-[2px] bg-[#5C3A1E]/10 relative overflow-hidden">
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-[#E8720C] to-transparent"
            />
          </div>
        </div>
        {/* ACCESS ERROR MODAL */}
        <AnimatePresence>
          {showError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#5C3A1E]/40 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-[#FFFBF2] border border-[#E8720C]/20 shadow-2xl"
              >
                {/* Top Accent Line */}
                <div className="h-1.5 w-full bg-[#E8720C]" />

                <div className="p-8 flex flex-col items-center text-center">
                  {/* Close Icon */}
                  <button
                    onClick={() => setShowError(false)}
                    className="absolute top-4 right-4 text-[#5C3A1E]/30 hover:text-[#5C3A1E] transition-colors cursor-pointer"
                  >
                    ✕
                  </button>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#E8720C]/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-[#E8720C] text-2xl">⚠️</span>
                  </div>

                  <h3 className="text-[#5C3A1E] text-xl font-black uppercase tracking-wider mb-3">
                    Access <span className="text-[#E8720C]">Denied</span>
                  </h3>

                  <div className="space-y-4 mb-8">
                    <p
                      className={`${crimson.className} text-[#5C3A1E]/80 text-[16px] leading-relaxed italic`}
                    >
                      This email address does not have access to any modules.
                    </p>

                    <div className="bg-[#E8720C]/5 rounded-xl p-4 border border-[#E8720C]/10">
                      <p className="text-[#5C3A1E]/60 text-[10px] font-bold uppercase tracking-widest leading-tight">
                        Please login with the registered email address used
                        during enrollment.
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => SetShowError(false)}
                    className="w-full bg-[#5C3A1E] hover:bg-[#3d2614] text-white font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-full transition-all active:scale-[0.98] shadow-lg shadow-[#5C3A1E]/20 cursor-pointer"
                  >
                    Try Another Email
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );

  return (
    <main className="min-h-screen bg-[#FDF6E3] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION WITH LOGOUT */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1
              className="text-3xl font-black text-[#5C3A1E] uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Welcome,{" "}
              <span className="text-[#E8720C]">{session?.user?.name}</span>
            </h1>
            <p className="text-[#5C3A1E]/60 text-sm mt-2">
              Your Path to Sacred Learning
            </p>
          </div>

          {/* LOGOUT BUTTON */}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="border border-[#5C3A1E]/20 hover:bg-[#5C3A1E]/5 text-[#5C3A1E] text-[11px] tracking-[0.2em] font-black px-8 py-3 rounded-full transition-all uppercase cursor-pointer"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MODULES.map((module, idx) => {
            const hasAccess = permissions.includes(module.title);

            return (
              <div
                key={idx}
                className="relative bg-white rounded-[2rem] overflow-hidden border border-[#5C3A1E]/10 flex flex-col shadow-sm"
              >
                <div
                  className={`relative aspect-[4/3] ${!hasAccess ? "grayscale contrast-125" : ""}`}
                >
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    className="object-cover"
                  />

                  {!hasAccess && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full shadow-xl">
                        <svg
                          className="w-6 h-6 text-[#5C3A1E]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 text-center">
                  <h3
                    className="text-[14px] font-black text-[#5C3A1E] uppercase tracking-widest mb-4"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {module.title}
                  </h3>

                  {hasAccess ? (
                    <Link
                      href={module.slug}
                      className="block w-full py-3 bg-[#E8720C] text-white text-[11px] font-black uppercase rounded-full hover:brightness-110 transition-all text-center"
                    >
                      Start Learning
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3 bg-[#5C3A1E]/10 text-[#5C3A1E]/40 text-[11px] font-black uppercase rounded-full cursor-not-allowed"
                    >
                      Locked
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {showError && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-[2rem] p-10 max-w-md text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-black text-[#5C3A1E] uppercase mb-4">
                No Access Found
              </h2>
              <p className="text-sm text-[#5C3A1E]/60 leading-relaxed mb-8">
                Namaskaram. We couldn't find a paid enrollment associated with{" "}
                <span className="font-bold text-[#5C3A1E]">
                  {session?.user?.email}
                </span>
                .
              </p>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full py-4 bg-[#5C3A1E] text-white font-black uppercase text-[11px] rounded-full"
              >
                Log Out & Return Home
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
