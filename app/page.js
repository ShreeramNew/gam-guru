import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
}
