"use client";

import React, { useState, useEffect } from "react";
import { Lock, Play, Video, ChevronRight, RotateCcw } from "lucide-react";

// --- CONFIGURATION ---
const PAGE_PASSWORD = "gurupada";
const POWERED_BY = "Gam Guru - Sanatan After School";
const TITLE = "Guru Ashtakam";

// Video data sorted by Day
const VIDEOS = [
  { 
    title: "Guru Ashtakam - Day 1", 
    url: "https://res.cloudinary.com/dpk2vteaw/video/upload/v1774181109/Guru_Ashtakam_-_1st_Stanza___Day_-_1___Sanatan_Slokas___A_Self_Learning_Module_jmpn8u.mp4" 
  },
  { 
    title: "Guru Ashtakam - Day 2", 
    url: "https://res.cloudinary.com/dpk2vteaw/video/upload/v1774181083/Guru_Ashtakam_2nd_Stanza___Day_2___Sanatan_Slokas___A_Self_Learning_Module_ob7jj6.mp4" 
  },
  { 
    title: "Guru Ashtakam - Day 3", 
    url: "https://res.cloudinary.com/dpk2vteaw/video/upload/v1774181094/Guru_Ashtakam_3rd_Stanza___Day_3___Sanatan_Slokas___A_Self_Learning_Module_wtr36y.mp4" 
  },
  { 
    title: "Guru Ashtakam - Day 4", 
    url: "https://res.cloudinary.com/dpk2vteaw/video/upload/v1774181107/Guru_Ashtakam_4th_Stanza___Day_-_4___Sanatan_Slokas___A_Self_Learning_Module_aojtke.mp4" 
  },
  { 
    title: "Guru Ashtakam - Day 5", 
    url: "https://res.cloudinary.com/dpk2vteaw/video/upload/v1774181114/Guru_Ashtakam_5th_Stanza___Day_5___Sanatan_Slokas___A_Self_Learning_Module_g40lwv.mp4" 
  },
  { 
    title: "Guru Ashtakam - Day 6", 
    url: "https://res.cloudinary.com/dpk2vteaw/video/upload/v1774181121/Guru_Ashtakam_6th_Stanza___Day_6___Sanatan_Slokas___A_Self_Learning_Module_svqqso.mp4" 
  },
  { 
    title: "Guru Ashtakam - Day 7", 
    url: "https://res.cloudinary.com/dpk2vteaw/video/upload/v1774181099/Guru_Ashtakam_7th_Stanza___Day_7___Sanatan_Slokas___A_Self_Learning_Module_dzsrqu.mp4" 
  },
  { 
    title: "Guru Ashtakam - Day 8", 
    url: "https://res.cloudinary.com/dpk2vteaw/video/upload/v1774181128/Guru_Ashtakam_8th_Stanza___Day_8___Sanatan_Slokas___A_Self_Learning_Module_c5imgn.mp4" 
  },
];

export default function GuruAshtakamPage() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);
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

  // Helper to generate a thumbnail from the Cloudinary video URL
  const getThumbnail = (url) => url.replace(".mp4", ".jpg");

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
            {!isReady && (
              <div className="absolute inset-0 z-30 bg-black flex flex-col items-center justify-center space-y-4 p-4 text-center">
                <div className="relative w-full h-full">
                   <img 
                    src={getThumbnail(activeVideo.url)} 
                    alt="preview" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                   />
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-[#ff5400] rounded-full flex items-center justify-center animate-pulse mb-4">
                        <Play fill="white" className="text-white ml-1" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white">
                        Tap to Start Learning
                      </p>
                   </div>
                </div>
                <button
                  onClick={() => setIsReady(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer z-40"
                />
              </div>
            )}

            {isReady && (
              <video
                key={activeVideo.url}
                controls
                autoPlay
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
                className="absolute inset-0 w-full h-full z-10"
                poster={getThumbnail(activeVideo.url)}
              >
                <source src={activeVideo.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <div className="p-4 bg-[#141313] rounded-xl border border-zinc-900 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                {activeVideo.title}
              </h2>
              <p className="text-sm text-zinc-500 italic">Self Learning Module</p>
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
            Course Modules
          </h3>
          <div className="grid grid-cols-1 gap-3 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            {VIDEOS.map((video) => (
              <button
                key={video.url}
                onClick={() => {
                  setActiveVideo(video);
                  setIsReady(true);
                }}
                className={`flex items-center p-3 rounded-xl border transition-all duration-300 text-left group cursor-pointer ${
                  activeVideo.url === video.url
                    ? "bg-orange-500/10 border-orange-500/50 text-[#ff5400]"
                    : "bg-[#141313] border-zinc-800 hover:border-zinc-600 text-zinc-400"
                }`}
              >
                <div className="mr-4 h-12 w-20 bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                  <img
                    src={getThumbnail(video.url)}
                    alt={video.title}
                    className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  {activeVideo.url === video.url && (
                    <div className="absolute inset-0 flex items-center justify-center bg-orange-500/20">
                        <Play size={16} fill="currentColor" />
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <p className={`text-sm font-semibold truncate ${activeVideo.url === video.url ? "text-white" : ""}`}>
                    {video.title}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className={`ml-2 ${activeVideo.url === video.url ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}