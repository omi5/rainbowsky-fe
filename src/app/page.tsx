import About from "./components/HomePage/About";
import ClientAwardsSlider from "./components/HomePage/ClientAwards";
import ClientsGrid from "./components/HomePage/Clients";
import Footer from "./components/HomePage/Footer";
import GetInTouchForm from "./components/HomePage/Get-in-touch-form";
import Hero from "./components/HomePage/Hero";
import Navbar from "./components/HomePage/Navbar";
import ProjectSlider from "./components/HomePage/Projects";
import Services from "./components/HomePage/Services";
import Testimonials from "./components/HomePage/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectSlider />
      <ClientAwardsSlider autoSlideInterval={5000} />
      <Testimonials />
      <ClientsGrid />
      <GetInTouchForm />
      <Footer />
    </main>
  );
}
