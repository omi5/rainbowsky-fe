import React from "react";
import Navbar from "../components/HomePage/Navbar";
import WhyUsSection from "../components/AboutPage/Why-us-Section";
// import BoardMembersSection from "../components/AboutPage/Board-member-section";
// import KeyMembersSection from "../components/AboutPage/Key-menber-section";
import CTASection from "../components/AboutPage/Cta-section";
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
      {/* <BoardMembersSection />
      <KeyMembersSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
};

export default AboutPage;
