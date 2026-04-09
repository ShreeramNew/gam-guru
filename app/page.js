import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Footer from "./components/Footer";
import ShlokabhyasaIntro from "./components/IntroSection";
import MeetTheInstructor from "./components/MeetInstructor";
import ModuleShowcase from "./components/Modules";

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShlokabhyasaIntro />
      <HowItWorks />
      <Features />
      <ModuleShowcase />
      <MeetTheInstructor />
      <Footer />
    </div>
  );
}
