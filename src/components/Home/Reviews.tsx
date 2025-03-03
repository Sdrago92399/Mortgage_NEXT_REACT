"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  name: string;
  text: string;
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Arian",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Amanda",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    name: "Paul",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="w-full bg-white text-gray-900 py-12 px-4">
      <div className="section m-auto flex max-w-screen-2xl flex-col justify-between gap-x-3xl p-base px-lg py-4xl md:px-10 md:flex-row-reverse xl:p-[120px]">
        {/* Top Section: Heading, CTA, Rating */}
        <div className="flex flex-col items-start justify-between mb-8">
          <h2 className="font-bold mr-16 md:mr-0 leading-heading mb-8 w-auto tracking-tight md:tracking-tighter mb-lg leading-small text-6xl md:text-[88px] leading-[1.2]">
            Find out why we’re better
          </h2>
          <button className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all">
            See all our stories
          </button>
          <div className="flex items-center gap-2 mb-8">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/009/664/666/large_2x/5-star-rating-review-star-transparent-free-png.png"
              alt="Star Rating"
              width={96}
              height={96} 
              className="w-24 h-auto"
            />
            <p className="text-gray-600">
              Trustpilot <span className="font-semibold">Excellent</span> 4.4 out of 5
            </p>
          </div>
        </div>

        {/* Main Content: Tabs + Testimonial */}
        <div className="flex flex-col md:flex-row gap-8 md:pr-4 lg:pr-32 md:min-w-80 w-full">
          {/* Tabs */}
          <div className="flex md:flex-col gap-4">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full border-2 border-gray-200 transition-all
                  ${
                    activeIndex === index
                      ? "bg-green-700 text-white border-green-700"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              {/* Video or Image Placeholder */}
              <div className="w-full md:min-h-96 bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                {activeTestimonial.videoUrl ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    src={activeTestimonial.videoUrl}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Video
                  </div>
                )}

                {/* Overlay Text */}
                <p className="absolute bottom-4 left-4 right-4 text-white text-md leading-relaxed bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                  {activeTestimonial.text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
