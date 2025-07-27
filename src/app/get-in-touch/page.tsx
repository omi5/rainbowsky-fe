import Footer from "../components/HomePage/Footer";
import GetInTouchForm from "../components/HomePage/Get-in-touch-form";
import Navbar from "../components/HomePage/Navbar";


export default function GetInTouchPage() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <GetInTouchForm />
      <Footer />
    </main>
  );
}
