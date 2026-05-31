"use client"
import React from "react";
import Hero from "../components/SAS/HeroSection";
import FourPillars from "../components/SAS/FourPillars";
import WhyChooseUs from "../components/SAS/WhyChooseUs";
import AreasOfLearning from "../components/SAS/AreasOfLearning";
import AudienceManifesto from "../components/SAS/AudienceManifesto";
import RegistrationCTA from "../components/SAS/RegistrationCTA";
import Footer from "../components/Footer";
import OurParadigm from "../components/SAS/OurParadigm";
import SchoolVsSanatan from "../components/SAS/SchoolVsSanatan";
import FirstHero from "../components/SAS/FirstHero";

export default function Page() {
  return (
    <div>
      <FirstHero />
      <Hero />
      <FourPillars />
      <SchoolVsSanatan />
      {/* <OurParadigm /> */}
      <WhyChooseUs />
      <AreasOfLearning />
      <AudienceManifesto />
      <RegistrationCTA />
      <Footer />
    </div>
  );
}
