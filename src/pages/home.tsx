"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reviews from "@/components/Home/Reviews";
import Questions from "@/components/Home/Questions";
import Banner from "@/components/Home/Banner";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Banner />
      <Reviews />
      <Questions />
      <Footer />
    </div>
  );
}
