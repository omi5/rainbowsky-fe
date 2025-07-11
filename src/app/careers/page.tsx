import React from "react";
import Navbar from "../components/HomePage/Navbar";
import BoardMembersSection from "../components/AboutPage/Board-member-section";
import WhyUsSection from "../components/AboutPage/Why-us-Section";
import KeyMembersSection from "../components/AboutPage/Key-menber-section";
import CTASection from "../components/AboutPage/Cta-section";
import HeroSection from "../components/AboutPage/HeroSection";
import AboutUs from "../components/AboutPage/AboutSection";
import Footer from "../components/HomePage/Footer";
import JobOpportunitiesGlobal from "../components/CareerPage/JobOpportunitiesGlobal";
import JobOpportunities from "../components/CareerPage/JobOpportunitiesLandscape";
import CVSubmission from "../components/CareerPage/CvSubmission";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-[500px]">
        <HeroSection />
      </div>
      <JobOpportunitiesGlobal />
      <JobOpportunities />
      <CVSubmission />
      <Footer />
    </main>
  );
};

export default AboutPage;
