
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Benefits from "@/components/home/Benefits";
import Application from "@/components/home/Application";
import Contact from "@/components/home/Contact";

const Home = () => {
  const productRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <Application />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
