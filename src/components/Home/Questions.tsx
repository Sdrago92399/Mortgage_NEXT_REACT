import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GuideFAQSection = () => {
  const [selectedTab, setSelectedTab] = useState("Guides & FAQs");

  const tabs = ["Our products", "Calculators", "Guides & FAQs"];

const cardData = {
  "Our products": [
    {
      title: "Buying your first home with Better",
      link: "/content/buying-your-first-home-with-better-mortgage/",
      img: "https://picsum.photos/200/300?random=5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "One Day Mortgage",
      link: "/b/one-day-mortgage/",
      img: "https://picsum.photos/200/300?random=6",
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  "Calculators": [
    {
      title: "Mortgage Calculator",
      link: "/tools/mortgage-calculator/",
      img: "https://picsum.photos/200/300?random=1",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Refinance Calculator",
      link: "/tools/refinance-calculator/",
      img: "https://picsum.photos/200/300?random=2",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ],
  "Guides & FAQs": [
    {
      title: "Better HELOC",
      link: "/b/heloc/",
      img: "https://picsum.photos/200/300?random=3",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Home Insurance Guide",
      link: "https://www.bettercover.com",
      img: "https://picsum.photos/200/300?random=4",
      desc: "Culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};

  return (
    <div className="bg-white p-10">
      {/* Tab Buttons */}


<div className="flex flex-col md:p-4 lg:p-4 w-full gap-6 lg:gap-6">
  <h2 className="font-bold text-black leading-heading m-0 p-0 text-xl md:text-2xl md:tracking-tight w-auto max-w-lg !text-5xl tracking-tight">
    Got questions?
    <br />
    We’ve got answers
  </h2>
  <div className="flex gap-3 overflow-x-auto lg:overflow-visible lg:gap-6 [&::-webkit-scrollbar]:hidden">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setSelectedTab(tab)}
        className={`inline-flex my-4 text-black items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal transition-all ease-in-out duration-200 border border-strokeDivider px-6 py-3 ${
          selectedTab === tab
            ? "shadow-[0_0_0_4px_inset]"
            : "hover:shadow-[0_0_0_4px_inset]"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>


{/* Cards Section */}
    <div className="flex flex-row text-black flex-wrap justify-center gap-8 lg:gap-6 mt-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab} // key changes when the selected tab changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full flex flex-row flex-wrap justify-center gap-8 lg:gap-6"
        >
          {cardData[selectedTab].map((card, index) => (
            <motion.div
              key={card.title} // ensure a unique key for each card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex rounded cursor-pointer flex-col gap-8 bg-[rgb(240,247,241)] px-6 py-5 md:flex-row md:gap-10 md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] ${
                index === 0 ? "max-w-[400px] flex-shrink-0" : "w-full flex-grow"
              }`}
            >
              <div className="flex flex-col gap-6">
                <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-3xl">
                  {card.title}
                </h4>
                <p className="text-sm text-gray-700 md:text-base lg:text-md">
                  {card.desc}
                </p>
              </div>
              <div className="flex-grow">
                <div className="relative w-full h-[160px] md:h-[130px] lg:h-[200px] rounded overflow-hidden">
                  <Image
                    alt={card.title}
                    loading="lazy"
                    src={card.img}
                    layout="fill"
                    objectFit="cover"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>    
    </div>
  );
};

export default GuideFAQSection;
