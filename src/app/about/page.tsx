import React from "react";
import Navbar from "../components/HomePage/Navbar";
import WhyUsSection from "../components/AboutPage/Why-us-Section";
import HeroSection from "../components/AboutPage/HeroSection";
import AboutUs from "../components/AboutPage/AboutSection";
import Footer from "../components/HomePage/Footer";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-[500px]">
        <HeroSection />
      </div>
      <AboutUs />
      <WhyUsSection />
      <Footer />
    </main>
  );
};

export default AboutPage;
