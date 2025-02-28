"use client";

import { useState } from "react";
import Link from "next/link";
import { FaPhone, FaHome, FaMoneyCheckAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Assist() {
  const [selectedOption, setSelectedOption] = useState("buy");

  const options = [
    { value: "buy", label: "Buying a home", icon: <FaHome size={36} /> },
    { value: "refinance", label: "Refinance my mortgage", icon: <FaMoneyCheckAlt size={36} /> },
    { value: "cash", label: "Get cash from my home", icon: <FaRegMoneyBillAlt size={36} /> },
  ];

  return (
    <main className="p-4 h-full bg-white">
      {/* Header Section */}
      <header className="p-4 border-gray-300">
        {/* First row: logo and button */}
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="flex items-center">
              {/* Replace with your actual logo */}
              <span className="text-2xl font-bold">MyLogo</span>
            </Link>
          </div>
          <div>
            <button className="flex items-center text-sm text-green-700 hover:text-green-800 transition">
              <FaPhone className="mr-2" />
              Need help? Call (415) 523-8837
            </button>
          </div>
        </div>

        {/* Empty div for spacing */}
        <div className="w-full h-1 bg-gray-200 my-4"></div>

        {/* Image */}
        <div className="flex justify-center">
          <FaRegCircleUser size={40} className="bg-white absolute top-16 rounded-full object-cover"/>
        </div>
      </header>


      <div className="max-w-3xl mx-auto p-4 text-center">

        {/* Main Content */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Hi, I'm Betsy!
          <br /> What can I help you with?
        </h1>

        {/* Interactive Options */}
        <div role="radiogroup" className="flex justify-center gap-4 mb-16">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedOption(option.value)}
              aria-checked={selectedOption === option.value}
              className={`flex flex-col items-center justify-center p-4 border rounded-full transition-colors ${
                selectedOption === option.value
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-800 hover:bg-green-100"
              }`}
            >
              <div>{option.icon}</div>
              <span className="mt-2 text-sm">{option.label}</span>
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className="flex justify-center gap-16 mb-16">
          <div>
            <p className="text-3xl font-bold mb-4">$100B</p>
            <p className="text-md text-gray-500">home loans funded entirely online</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-4">400K</p>
            <p className="text-md text-gray-500">Customers chose a Better Mortgage</p>
          </div>
        </div>

        {/* Unlock Section */}
        <div className="mb-16 flex justify-center">
          <div className="w-fit text-gray-500 p-4 px-16 rounded-lg bg-[rgb(240,247,241)]">
            <p className="mb-4 text-md">After a few questions, you'll unlock:</p>
            <div className="flex justify-center">
              <div className="flex flex-col justify-center gap-3">
                <div className="flex items-center gap-2">
                  <AiOutlinePercentage size={24} className="text-green-700" />
                  <p className="text-sm">Custom mortgage rates</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdDashboardCustomize size={24} className="text-green-700" />
                  <p className="text-sm">Exclusive offers</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdDashboardCustomize size={24} className="text-green-700" />
                  <p className="text-sm">A personalized dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
