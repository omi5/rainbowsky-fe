import React from "react";
import Navbar from "../components/HomePage/Navbar";
import CTASection from "../components/AboutPage/Cta-section";
import HeroSection from "../components/ContactUs/HeroSection";
import Footer from "../components/HomePage/Footer";
import OfficeDirectory from "../components/ContactUs/Office-directory";
import TeamDirectory from "../components/ContactUs/Team-directory";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-[500px]">
        <HeroSection />
      </div>
      <OfficeDirectory />
      <TeamDirectory />
      <CTASection />
      <Footer />
    </main>
  );
};

export default ContactPage;
