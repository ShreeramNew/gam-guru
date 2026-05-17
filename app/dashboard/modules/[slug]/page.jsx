"use client";
import React, { useState, useEffect, useRef, use } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Play,
  Video,
  ChevronRight,
  RotateCcw,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import VIDEO_MANIFEST from "@/app/lib/VideoData";

export default function DynamicVideoModulePage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const slug = params?.slug;

  const router = useRouter();
  const { data: session, status } = useSession();

  const [courseData, setCourseData] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const [verificationLoading, setVerificationLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [isScreenSecure, setIsScreenSecure] = useState(true);

  const videoRef = useRef(null);
  const playerRef = useRef(null);

  // Normalize URL parameters to handle %20 empty spaces elegantly
  const normalizedSlug = slug
    ? decodeURIComponent(slug).toLowerCase().trim().replace(/\s+/g, "-")
    : "";

  // 1. Resolve active course profile out of the data manifest map
  useEffect(() => {
    if (normalizedSlug && VIDEO_MANIFEST[normalizedSlug]) {
      const manifestProfile = VIDEO_MANIFEST[normalizedSlug];
      setCourseData(manifestProfile);
      setActiveVideo(manifestProfile.videos[0]);
    }
  }, [normalizedSlug]);

  // 2. Access control verification layer via Secure Internal Proxy Route
  useEffect(() => {
    const verifyEnrollmentAccess = async () => {
      if (status === "unauthenticated") {
        router.push("/dashboard/login");
        return;
      }

      if (status === "authenticated" && session?.user?.email && courseData) {
        try {
          const res = await fetch("/api/verify-auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: session.user.email }),
          });

          const data = await res.json();

          if (data.isRegistered) {
            const cleanModuleTitle = courseData.title.toUpperCase();
            const allowedModules = (data.accessibleModules || []).map((m) =>
              m.toUpperCase(),
            );

            if (allowedModules.includes(cleanModuleTitle)) {
              setHasAccess(true);
            } else {
              setHasAccess(false);
            }
          } else {
            setHasAccess(false);
          }
        } catch (err) {
          console.error("Authorization verification failure:", err);
        } finally {
          setVerificationLoading(false);
        }
      }
    };

    verifyEnrollmentAccess();
  }, [status, session, courseData, router]);

  // 3. FRONTEND DETERRENCE AND BLUR CONTROLS
  useEffect(() => {
    const handleWindowBlur = () => setIsScreenSecure(false);
    const handleWindowFocus = () => setIsScreenSecure(true);
    const handleContextMenu = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && e.key === "p") ||
        (e.metaKey && e.shiftKey && e.key === "4") ||
        (e.metaKey && e.shiftKey && e.key === "3")
      ) {
        e.preventDefault();
        alert(
          "Screenshots and recording are restricted on this premium content path.",
        );
      }
    };

    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // 4. SECURE HARDWARE-LINKED VIDEO.JS INGESTION INITIALIZER
  useEffect(() => {
    if (isReady && activeVideo && videoRef.current) {
      // Create Video.js instance configuration layout
      playerRef.current = videojs(videoRef.current, {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
          {
            src: activeVideo.url,
            type: activeVideo.type || "video/mp4",
          },
        ],
        html5: {
          vhs: { overrideNative: true },
          // Hooking directly into EME browser configurations for DRM Blackout playback rules
          eme: {
            keySystems: {
              "com.google.widevine.alpha":
                "https://your-drm-license-server.com/widevine",
              "com.apple.fps.1_0":
                "https://your-drm-license-server.com/fairplay",
            },
          },
        },
        userActions: { hotkeys: false },
        controlBar: { pictureInPictureToggle: false },
      });
    }

    // Clean up video instance node memory spaces on video swap or page unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [isReady, activeVideo]);

  if (
    status === "loading" ||
    (verificationLoading && !hasAccess && courseData)
  ) {
    return (
      <div className="min-h-screen bg-[#0a0909] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-2 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
        <p className="text-zinc-500 text-xs uppercase tracking-widest mt-4">
          Verifying Sacred Seal...
        </p>
      </div>
    );
  }

  if (!VIDEO_MANIFEST[normalizedSlug]) {
    return (
      <div className="min-h-screen bg-[#0a0909] flex items-center justify-center p-6 text-white">
        <div className="text-center max-w-sm">
          <AlertTriangle className="text-orange-500 mx-auto mb-4" size={48} />
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide">
            Module Not Found
          </h2>
          <p className="text-sm text-zinc-500 mb-6">
            The requested pathway does not exist within our current course
            configurations.
          </p>
          <button
            onClick={() => router.push("/dashboard/modules")}
            className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={14} /> Back to Modules
          </button>
        </div>
      </div>
    );
  }

  if (!hasAccess && !verificationLoading) {
    return (
      <div className="min-h-screen bg-[#0a0909] flex items-center justify-center p-6 text-white">
        <div className="text-center max-w-md bg-[#111] border border-zinc-900 p-8 rounded-3xl shadow-2xl">
          <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-orange-500 text-2xl">🔒</span>
          </div>
          <h2 className="text-xl font-black uppercase tracking-wider mb-2">
            Access Restricted
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-6">
            Your profile wrapper (
            <span className="text-zinc-300 font-semibold">
              {session?.user?.email}
            </span>
            ) is not actively enrolled in{" "}
            <span className="text-orange-500 font-bold">
              {courseData?.title}
            </span>
            .
          </p>
          <button
            onClick={() => router.push("/dashboard/modules")}
            className="w-full py-3.5 bg-orange-600 text-xs font-black uppercase tracking-widest rounded-full hover:bg-orange-500 active:scale-95 transition-all"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0909] text-[#e5e7eb] pb-10 select-none">
      <header className="border-b border-zinc-900 bg-[#0a0909]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <button
              onClick={() => router.push("/dashboard/modules")}
              className="flex items-center gap-2 text-xs text-zinc-500 hover:text-orange-500 transition-colors uppercase tracking-widest mb-1 font-semibold bg-transparent border-none cursor-pointer"
            >
              <ArrowLeft size={12} /> Dashboard
            </button>
            <h1
              style={{ fontFamily: "var(--font-cinzel)" }}
              className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none"
            >
              {courseData?.title}
            </h1>
            <p className="text-[9px] text-zinc-600 tracking-widest uppercase mt-1">
              Powered by{" "}
              <span className="text-[#D4A017] text-[#D4A017] font-bold">
                {courseData?.poweredBy}
              </span>
            </p>
          </div>
          <Video className="text-[#D4A017] w-6 h-6 hidden sm:block" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* VIDEO MAIN PLAYER BLOCK */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 group">
            {/* INVISIBLE SECURITY EMAIL WATERMARK GRID OVERLAY */}
            {/* <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-[0.03] text-white flex flex-wrap gap-12 p-4 text-[11px] font-mono select-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="transform rotate-[-15deg] whitespace-nowrap"
                >
                  {session?.user?.email}
                </span>
              ))}
            </div> */}

            {/* AUTOMATED TAB FOCUS LOSS BLUR MASK */}
            {!isScreenSecure && (
              <div className="absolute inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-4">
                <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-1">
                  Playback Interrupted
                </p>
                <p className="text-zinc-500 text-xs">
                  Return your active tab focus to the browser window to proceed
                  learning.
                </p>
              </div>
            )}

            {!isReady && activeVideo && (
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
                  <div className="w-16 h-16 bg-[#D4A017] rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,84,0,0.4)]">
                    <Play fill="white" className="text-white ml-1" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white">
                    Tap to Start Learning
                  </p>
                </div>
              </div>
            )}

            {/* VIDEO.JS NODE DOM ACCESS WRAPPER */}
            {isReady && activeVideo && (
              <div
                data-vjs-player
                className="absolute inset-0 w-full h-full z-10"
              >
                <video
                  ref={videoRef}
                  className="video-js vjs-big-play-centered w-full h-full"
                  controlsList="nodownload"
                  disablePictureInPicture
                />
              </div>
            )}
          </div>

          <div className="p-4 bg-[#141313] rounded-xl border border-zinc-900 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-white mb-0.5">
                {activeVideo?.title}
              </h2>
              <p className="text-xs text-zinc-500">Self Learning Module</p>
            </div>
            <button
              onClick={() => setIsReady(false)}
              className="p-2 text-zinc-600 hover:text-[#D4A017] cursor-pointer transition-colors"
              title="Reset Player"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">
            Course Modules
          </h3>
          <div className="grid grid-cols-1 gap-3 max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">
            {courseData?.videos.map((video) => (
              <button
                key={video.url}
                onClick={() => {
                  setActiveVideo(video);
                  setIsReady(true);
                }}
                className={`flex items-center p-3 rounded-xl border transition-all cursor-pointer ${
                  activeVideo?.url === video.url
                    ? "bg-orange-500/10 border-orange-500/50 text-[#D4A017]"
                    : "bg-[#141313] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-[#1a1919]"
                }`}
              >
                <div className="mr-4 h-12 w-20 bg-zinc-900 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 relative border border-zinc-800">
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                  {activeVideo?.url === video.url && (
                    <div className="absolute inset-0 bg-orange-500/20 flex items-center justify-center">
                      <Play size={12} fill="currentColor" />
                    </div>
                  )}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p
                    className={`text-sm font-semibold truncate ${activeVideo?.url === video.url ? "text-white" : ""}`}
                  >
                    {video.title}
                  </p>
                  <p className="text-[10px] text-zinc-600 uppercase">Module</p>
                </div>
                <ChevronRight
                  size={16}
                  className={`ml-auto transition-transform ${activeVideo?.url === video.url ? "opacity-100 translate-x-1" : "opacity-0"}`}
                />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
