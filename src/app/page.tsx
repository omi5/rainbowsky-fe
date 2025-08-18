import Certificate from "./components/Certificate";
import About from "./components/HomePage/About";
import ClientAwardsSlider from "./components/HomePage/ClientAwards";
import FlagsGrid from "./components/HomePage/Flags";
import Footer from "./components/HomePage/Footer";
import GetInTouchForm from "./components/HomePage/Get-in-touch-form";
import Hero from "./components/HomePage/Hero";
import JobImageSlider from "./components/HomePage/JobsSlider";
import Navbar from "./components/HomePage/Navbar";
import Services from "./components/HomePage/Services";
// import ProjectSlider from "./components/HomePage/Projects";
// import Testimonials from "./components/HomePage/Testimonials";
// import PartnersGrid from "./components/HomePage/Partners";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FlagsGrid />
      <JobImageSlider />
      {/* <ProjectSlider /> */}
      <ClientAwardsSlider autoSlideInterval={5000} />
      <Certificate />
      {/* <PartnersGrid /> */}
      <GetInTouchForm />
      <Footer />
    </main>
  );
}
