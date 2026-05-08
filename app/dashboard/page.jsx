"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Crimson_Pro } from "next/font/google";
import { signIn, useSession } from "next-auth/react";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Loading() {
  const [showAuth, setShowAuth] = useState(false);
  const { data: session, status } = useSession();
  const [userPermissions, setUserPermissions] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log("Current Session:",session);
    if(!session){
      return router.push("/dashboard/login")
    }
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
            router.push("/dashboard/modules");
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

        {/* FOOTER TEXT */}
        {/* <div className="absolute bottom-12 text-center">
          <motion.span 
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#5C3A1E]/40"
          >
            Satyam Shivam Sundaram
          </motion.span>
        </div> */}
      </div>
    </div>
  );
}
