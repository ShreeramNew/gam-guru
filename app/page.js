"use client";

import React, { useState, useEffect, useRef } from "react";
import { Lock, Play, Video, ChevronRight, RotateCcw } from "lucide-react";

// --- CONFIGURATION ---
const PAGE_PASSWORD = "gurupada";
const POWERED_BY = "Gam Guru - Sanatan After School";
const TITLE = "Naga Stuti";

const VIDEOS = [
  { id: "6KxP6j0p6Lc", title: "Naga Stuti - Part 1" },
  { id: "9nsxyX9pknk", title: "Naga Stuti - Part 2" },
  { id: "5P3s1VN2KIs", title: "Naga Stuti - Part 3" },
  { id: "w_pZICfm76U", title: "Naga Stuti - Part 4" },
];

export default function NagaStutiPage() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(VIDEOS[0].id);
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === PAGE_PASSWORD) {
      setIsAuthorized(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  if (!isClient) return <div className="min-h-screen bg-[#0a0909]" />;

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#0a0909] flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-[#141313] border border-zinc-800 p-8 rounded-2xl shadow-2xl">
          <div className="flex justify-center mb-6 text-[#ff5400]">
            <div className="p-4 bg-orange-500/10 rounded-full">
              <Lock size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            {TITLE}
          </h1>
          <p className="text-zinc-500 text-center mb-8 text-sm italic">
            Powered by {POWERED_BY}
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#ff5400]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#ff5400] text-white font-bold py-3 rounded-lg cursor-pointer transition-transform active:scale-95"
            >
              Access Videos
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0909] text-[#e5e7eb] pb-10">
      <header className="border-b border-zinc-900 bg-[#0a0909]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-white uppercase italic tracking-tighter">
              {TITLE}
            </h1>
            <p className="text-[10px] text-zinc-500 tracking-widest uppercase mt-1">
              Powered by{" "}
              <span className="text-[#ff5400] font-bold">{POWERED_BY}</span>
            </p>
          </div>
          <Video className="text-[#ff5400] w-6 h-6 hidden sm:block" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 group">
            {/* MOBILE OVERLAY: This forces a "user gesture" which mobile browsers require */}
            {!isReady && (
              <div className="absolute inset-0 z-30 bg-black flex flex-col items-center justify-center space-y-4 p-4 text-center">
                <div className="w-16 h-16 bg-[#ff5400] rounded-full flex items-center justify-center animate-pulse">
                  <Play fill="white" className="text-white ml-1" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Tap to Load Player
                </p>
                <button
                  onClick={() => setIsReady(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer"
                />
              </div>
            )}

            {isReady && (
              <iframe
                key={activeVideoId}
                src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${typeof window !== "undefined" ? window.location.origin : ""}`}
                title="Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full z-10"
              />
            )}

            {/* THE HEADER SHIELD: Blocks clicks on the title to prevent redirect */}
            <div className="absolute top-0 left-0 w-full h-14 z-20 bg-transparent pointer-events-auto" />
          </div>

          <div className="p-4 bg-[#141313] rounded-xl border border-zinc-900 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                {VIDEOS.find((v) => v.id === activeVideoId)?.title}
              </h2>
              <p className="text-sm text-zinc-500 italic">Official Series</p>
            </div>
            <button
              onClick={() => setIsReady(false)}
              className="p-2 text-zinc-600 hover:text-[#ff5400] transition-colors"
              title="Reset Player"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest px-1">
            Up Next
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {VIDEOS.map((video) => (
              <button
                key={video.id}
                onClick={() => {
                  setActiveVideoId(video.id);
                  setIsReady(true);
                }}
                className={`flex items-center p-3 rounded-xl border transition-all duration-300 text-left group cursor-pointer ${
                  activeVideoId === video.id
                    ? "bg-orange-500/10 border-orange-500/50 text-[#ff5400]"
                    : "bg-[#141313] border-zinc-800 hover:border-zinc-600 text-zinc-400"
                }`}
              >
                <div className="mr-4 h-12 w-20 bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  {activeVideoId === video.id && (
                    <Play size={16} fill="currentColor" />
                  )}
                </div>
                <div className="flex-grow">
                  <p
                    className={`text-sm font-semibold truncate ${activeVideoId === video.id ? "text-white" : ""}`}
                  >
                    {video.title}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className={`ml-2 ${activeVideoId === video.id ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            ))}
          </div>

          {/* <button
            onClick={() => setIsAuthorized(false)}
            className="w-full mt-4 py-3 border border-zinc-800 rounded-xl text-zinc-600 text-xs font-bold uppercase tracking-[0.2em] hover:text-red-500 transition-all cursor-pointer"
          >
            Lock Gallery
          </button> */}
        </div>
      </main>
    </div>
  );
}
