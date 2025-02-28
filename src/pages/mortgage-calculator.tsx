"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MortgageCalculator from "@/components/Calculator/MortgageCalculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FBF9] text-white">
      <Navbar />
      <MortgageCalculator />
      <Footer />
    </div>
  );
}
