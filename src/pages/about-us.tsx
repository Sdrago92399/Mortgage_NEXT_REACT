"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/About-Us/AboutUs";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}
