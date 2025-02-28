"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 text-white flex justify-between bg-[rgb(0,71,51)] items-center z-50">
      <div className="text-xl font-bold">
        <Link href="/">MyLogo</Link>
      </div>
      <div className="flex space-x-6">
        <Popover>
          <PopoverTrigger asChild>
            <div className="relative">
              <Button
                className="hover:text-secondary hover:bg-white rounded-full transition-all text-lg"
                variant="ghost"
                size="lg"
                onClick={() => setIsHovered(!isHovered)}
              >
                Services
              </Button>
            </div>
          </PopoverTrigger>
          {isHovered && (
            <PopoverContent
              className="bg-white text-black p-4 rounded shadow-lg min-w-56"
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <ul>
                <li className="hover:text-primary cursor-pointer p-2">
                  <Link href="/mortgage-calculator">Mortgage Calculator</Link>
                </li>
                <li className="hover:text-primary cursor-pointer p-2">
                  <Link href="/services/sample-option">Sample option</Link>
                </li>
                <li className="hover:text-primary cursor-pointer p-2">
                  <Link href="/services/sample-option-2">Sample option</Link>
                </li>
              </ul>
            </PopoverContent>
          )}
        </Popover>
        <Link href="/start">
          <Button
            className="hover:text-secondary hover:bg-white rounded-full transition-all text-lg"
            variant="ghost"
            size="lg"
          >
            Start
          </Button>
        </Link>
        <Link href="/about-us">
          <Button
            className="hover:text-secondary hover:bg-white rounded-full transition-all text-lg"
            variant="ghost"
            size="lg"
          >
            About Us
          </Button>
        </Link>
      </div>
    </nav>
  );
}
