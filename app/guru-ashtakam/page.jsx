"use client";

import React, { useState, useEffect } from "react";
import { Lock, Play, Video, ChevronRight, RotateCcw } from "lucide-react";

// --- CONFIGURATION ---
const PAGE_PASSWORD = "gurupada";
const POWERED_BY = "Gam Guru - Sanatan After School";
const TITLE = "Guru Ashtakam";

// Helper to generate the static AWS thumbnail URL
const getThumbnailUrl = (dayNumber) => 
  `https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/thumbnails/GuruAshtakam/day${dayNumber}.jpg`;

const VIDEOS = [
  {
    title: "Guru Ashtakam - Day 1",
    url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+-+1st+Stanza+_+Day+-+1+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
    thumbnail: getThumbnailUrl(1)
  },
  {
    title: "Guru Ashtakam - Day 2",
    url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+2nd+Stanza+_+Day+2+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
    thumbnail: getThumbnailUrl(2)
  },
  {
    title: "Guru Ashtakam - Day 3",
    url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+3rd+Stanza+_+Day+3+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
    thumbnail: getThumbnailUrl(3)
  },
  {
    title: "Guru Ashtakam - Day 4",
    url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+4th+Stanza+_+Day+-+4+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
    thumbnail: getThumbnailUrl(4)
  },
  {
    title: "Guru Ashtakam - Day 5",
    url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+5th+Stanza+_+Day+5+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
    thumbnail: getThumbnailUrl(5)
  },
  {
    title: "Guru Ashtakam - Day 6",
    url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+6th+Stanza+_+Day+6+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
    thumbnail: getThumbnailUrl(6)
  },
  {
    title: "Guru Ashtakam - Day 7",
    url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+7th+Stanza+_+Day+7+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
    thumbnail: getThumbnailUrl(7)
  },
  {
    title: "Guru Ashtakam - Day 8",
    url: "https://learning-modules-sanatan.s3.eu-north-1.amazonaws.com/Guru+Ashtakam+8th+Stanza+_+Day+8+_+Sanatan+Slokas+_+A+Self+Learning+Module.mp4",
    thumbnail: getThumbnailUrl(8)
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

  if (!isClient) return <div className="min-h-screen bg-[#0a0909]" />;

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#0a0909] flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-[#141313] border border-zinc-800 p-8 rounded-2xl shadow-2xl text-center">
          <div className="flex justify-center mb-6 text-[#ff5400]">
            <div className="p-4 bg-orange-500/10 rounded-full">
              <Lock size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{TITLE}</h1>
          <p className="text-zinc-500 mb-8 text-sm italic">
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
              className="w-full bg-[#ff5400] text-white font-bold py-3 rounded-lg active:scale-95 transition-transform cursor-pointer"
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
              <div
                className="absolute inset-0 z-30 bg-black flex flex-col items-center justify-center cursor-pointer"
                onClick={() => setIsReady(true)}
              >
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#ff5400] rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,84,0,0.4)]">
                    <Play fill="white" className="text-white ml-1" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white">
                    Tap to Start Learning
                  </p>
                </div>
              </div>
            )}

            {isReady && (
              <video
                key={activeVideo.url}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full z-10"
              >
                <source src={activeVideo.url} type="video/mp4" />
              </video>
            )}
          </div>

          <div className="p-4 bg-[#141313] rounded-xl border border-zinc-900 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                {activeVideo.title}
              </h2>
              <p className="text-sm text-zinc-500">Self Learning Module</p>
            </div>
            <button
              onClick={() => setIsReady(false)}
              className="p-2 text-zinc-600 hover:text-[#ff5400] cursor-pointer transition-colors"
              title="Reset Player"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>

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
                className={`flex items-center p-3 rounded-xl border transition-all cursor-pointer ${
                  activeVideo.url === video.url 
                  ? "bg-orange-500/10 border-orange-500/50 text-[#ff5400]" 
                  : "bg-[#141313] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-[#1a1919]"
                }`}
              >
                <div className="mr-4 h-12 w-20 bg-zinc-900 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 relative border border-zinc-800">
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                  {activeVideo.url === video.url && (
                    <div className="absolute inset-0 bg-orange-500/20 flex items-center justify-center">
                      <Play size={12} fill="currentColor" />
                    </div>
                  )}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className={`text-sm font-semibold truncate ${activeVideo.url === video.url ? "text-white" : ""}`}>
                    {video.title}
                  </p>
                  <p className="text-[10px] text-zinc-600 uppercase">Module</p>
                </div>
                <ChevronRight
                  size={16}
                  className={`ml-auto transition-transform ${activeVideo.url === video.url ? "opacity-100 translate-x-1" : "opacity-0"}`}
                />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}