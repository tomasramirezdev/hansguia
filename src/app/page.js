import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Strip from "@/components/Strip";
import Tours from "@/components/Tours";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Strip />
      <Tours />
      <About />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
