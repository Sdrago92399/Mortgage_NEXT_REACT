"use client";

import { useState } from "react";

/*
 * Mortgage formula:
 * (homePrice*(interestRate/12)*((1+(interestRate/12))^(loanLength*12))) / (((1+(interestRate/12))^(loanLength*12))-1)
 */
export default function MortgageCalculator() {
  // Core mortgage inputs
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5); // as a percentage
  const [loanLength, setLoanLength] = useState(30); // years

  // Additional monthly costs
  const [propertyTaxes, setPropertyTaxes] = useState(265);
  const [insurance, setInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);

  // Convert interest rate to decimal for monthly calculation
  const monthlyRate = (interestRate / 100) / 12;
  const totalPayments = loanLength * 12;
  const loanAmount = homePrice - downPayment;

  // Mortgage formula
  // M = P * [ i(1 + i)^n ] / [ (1 + i)^n - 1 ]
  // where:
  //  P = loanAmount
  //  i = monthly interest rate (decimal)
  //  n = number of payments (months)
  const principalAndInterest =
    loanAmount > 0 && monthlyRate > 0
      ? (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1)
      : 0;

  // Sum up total monthly payment
  const totalMonthlyPayment =
    principalAndInterest + propertyTaxes + insurance + hoaFees + utilities;

  // Updated color-coded bar segments with vibrant colors
  const breakdownSegments = [
    { label: "Principal & interest", value: principalAndInterest, color: "bg-blue-500" },
    { label: "Property taxes", value: propertyTaxes, color: "bg-yellow-500" },
    { label: "Homeowners insurance", value: insurance, color: "bg-green-500" },
    { label: "HOA fees", value: hoaFees, color: "bg-red-500" },
    { label: "Utilities", value: utilities, color: "bg-indigo-500" },
  ];

  return (
    <div className="w-full text-gray-800 pt-32 pb-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title & Description */}
        <h1 className="text-3xl md:text-4xl font-bold">Mortgage calculator</h1>
        <p className="mt-2 mb-8 text-gray-600 max-w-3xl">
          Our mortgage calculator includes key factors like homeowners
          association fees, property taxes, and private mortgage insurance
          (PMI). Get the whole picture and calculate your total monthly payment.
        </p>

        {/* Top Section: Inputs & Payment */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-10">
          {/* Left: Home Price & Monthly Payment */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg space-y-4">
            <label className="block">
              <span className="text-sm font-semibold">Home price</span>
              <input
                type="number"
                className="mt-1 block w-full border rounded p-2 focus:ring focus:ring-blue-300"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
              />
            </label>
            <div>
              <span className="text-sm font-semibold block mb-1">
                Monthly payment
              </span>
              <span className="text-4xl font-semibold">
                ${totalMonthlyPayment.toFixed(0)}/mo
              </span>
            </div>
          </div>

          {/* Right: Action Button */}
          <div className="flex-none">
            <button className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300">
              Get pre-approved
            </button>
          </div>
        </div>

        {/* Additional Inputs Row */}
        <div className="flex flex-wrap gap-4 mb-10">
          {/* ZIP code */}
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg w-full sm:w-[48%] md:w-[23%]">
            <label className="text-sm font-semibold">ZIP code</label>
            <input
              type="text"
              className="mt-1 border rounded p-2 focus:ring focus:ring-blue-300"
              defaultValue="70008"
            />
          </div>
          {/* Down Payment */}
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg w-full sm:w-[48%] md:w-[23%]">
            <label className="text-sm font-semibold">Down payment</label>
            <input
              type="number"
              className="mt-1 border rounded p-2 focus:ring focus:ring-blue-300"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>
          {/* Interest Rate */}
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg w-full sm:w-[48%] md:w-[23%]">
            <label className="text-sm font-semibold">Interest rate (%)</label>
            <input
              type="number"
              className="mt-1 border rounded p-2 focus:ring focus:ring-blue-300"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>
          {/* Loan Length */}
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg w-full sm:w-[48%] md:w-[23%]">
            <label className="text-sm font-semibold">Length of loan (yrs)</label>
            <input
              type="number"
              className="mt-1 border rounded p-2 focus:ring focus:ring-blue-300"
              value={loanLength}
              onChange={(e) => setLoanLength(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Monthly Payment Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-8">
          {/* Left Side: Title, Big Payment, Color Bar, Legend */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Monthly payment breakdown</h2>
            <p className="text-4xl font-semibold text-blue-500">
              ${totalMonthlyPayment.toFixed(0)}/mo
            </p>
            {/* Color-coded bar */}
            <div className="flex items-center mt-4 mb-6">
              {breakdownSegments.map((seg) => {
                // Compute width % of total
                const widthPct =
                  totalMonthlyPayment > 0
                    ? (seg.value / totalMonthlyPayment) * 100
                    : 0;
                return (
                  <div
                    key={seg.label}
                    className={`${seg.color} h-4`}
                    style={{
                      width: `${widthPct}%`,
                      transition: "width 0.3s ease",
                    }}
                  />
                );
              })}
            </div>
            {/* Legend */}
            <ul className="space-y-1 text-sm">
              {breakdownSegments.map((seg) => (
                <li key={seg.label} className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-3 h-3 ${seg.color} rounded-full`}
                    />
                    <span>{seg.label}</span>
                  </div>
                  <span className="font-semibold">
                    ${seg.value.toFixed(0)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Additional inputs */}
          <div className="flex-none w-full lg:w-64">
            <label className="block mb-2 font-semibold">Property taxes</label>
            <input
              type="number"
              className="mb-4 w-full border rounded p-2 focus:ring focus:ring-blue-300"
              value={propertyTaxes}
              onChange={(e) => setPropertyTaxes(Number(e.target.value))}
            />

            <label className="block mb-2 font-semibold">Homeowners insurance</label>
            <input
              type="number"
              className="mb-4 w-full border rounded p-2 focus:ring focus:ring-blue-300"
              value={insurance}
              onChange={(e) => setInsurance(Number(e.target.value))}
            />

            <label className="block mb-2 font-semibold">HOA fees</label>
            <input
              type="number"
              className="mb-4 w-full border rounded p-2 focus:ring focus:ring-blue-300"
              value={hoaFees}
              onChange={(e) => setHoaFees(Number(e.target.value))}
            />

            <label className="block mb-2 font-semibold">Utilities</label>
            <input
              type="number"
              className="mb-4 w-full border rounded p-2 focus:ring focus:ring-blue-300"
              value={utilities}
              onChange={(e) => setUtilities(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}