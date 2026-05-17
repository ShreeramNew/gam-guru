"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Crimson_Pro } from "next/font/google";
import { signIn, useSession } from "next-auth/react";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Loading() {
  const { data: session, status } = useSession();
  const [userPermissions, setUserPermissions] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log("Current Session:", session);
    if (!session) {
      return router.push("/dashboard/login");
    }

    const verifyUserAccess = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          // CALL THE NEW INTERNAL PROXY ROUTE (It naturally has HTTPS)
          const response = await fetch("/api/verify-auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: session.user.email }),
          });

          const result = await response.json();

          if (result.isRegistered) {
            console.log("Access Granted for:", result.accessibleModules);
            setUserPermissions(result.accessibleModules);
            router.push("/dashboard/modules");
          } else {
            console.log("User not found in payment database");
            SetShowError(true);
          }
        } catch (error) {
          console.error("Backend check failed:", error);
        }
      }
    };

    verifyUserAccess();
  }, [session, status]);

  const [showError, SetShowError] = useState(false);

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
                      Please login with the registered email address used during
                      enrollment.
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
}
