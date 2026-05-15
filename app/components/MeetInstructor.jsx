"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MeetTheInstructor() {
  const orange = "#E8720C";
  const brownDeep = "#5C3A1E";

  return (
    <section className="w-full py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div
            className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-sm"
            style={{ backgroundColor: orange }}
          >
            Your Guide
          </div>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight"
            style={{ color: brownDeep, fontFamily: "var(--font-cinzel)" }}
          >
            Meet The Instructor
          </h2>
          <p
            className="text-lg font-bold italic opacity-70"
            style={{ color: orange }}
          >
            Founder, Sanatan After School
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative aspect-video rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img
              src="/shriniImage.png"
              alt="Shriniketh"
              fill
              className=" w-full h-full object-cover"
            />

            {/* <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1X8bKob9EZc"
              title="Introducing Sanatan Boot Camp"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}

            <div className="absolute inset-0 pointer-events-none border-[8px] border-white/10 rounded-3xl" />
          </motion.div>

          {/* Right Side: Biography Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed font-medium opacity-80"
                style={{ color: brownDeep }}
              >
                A passionate teacher with years of experience teaching shlokas
                and bringing the beauty of Sanatan culture to Everyone across
                the globe. Being an Executive Alumni of IIM Visakhapatnam and a
                student of Sadhguru Gurukulam (Sadhanapada), our instructor
                blends contemporary learning with timeless wisdom.
              </p>

              <p
                className="text-lg leading-relaxed font-medium opacity-80"
                style={{ color: brownDeep }}
              >
                Trained in Yoga, Vedic traditions, and experiential education,
                our instructor combines deep spiritual knowledge with a modern,
                child-friendly approach. Every session is crafted with love,
                intention, and a deep understanding,
                making ancient wisdom not just accessible, but genuinely
                exciting and transformative process for the next generation.
              </p>
            </div>

            {/* Signature / Decorative Element */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#5C3A1E]/10">
              <div
                className="w-12 h-[2px]"
                style={{ backgroundColor: orange }}
              />
              <span
                className="text-sm font-black uppercase tracking-[0.3em]"
                style={{ color: brownDeep }}
              >
                Sriniketh Bhamidipati
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
