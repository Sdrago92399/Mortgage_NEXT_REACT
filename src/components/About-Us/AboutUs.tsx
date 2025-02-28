import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

// TeamMember Component
interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imageUrl }) => {
  return (
    <article className="team-member bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
      <Image
        src={imageUrl}
        alt={`Portrait of ${name}, ${role} at BetterHousing`}
        width={96} 
        height={96}
        className="rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-center text-gray-800">{name}</h3>
      <p className="text-center text-gray-600">{role}</p>
      <p className="mt-4 text-gray-700 text-center">{bio}</p>
    </article>
  );
};

// TimelineItem Component
interface TimelineItemProps {
  year: string;
  event: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, event }) => {
  return (
    <div className="timeline-item relative pl-8 pb-8">
      <div className="absolute left-0 top-2 w-4 h-4 bg-green-700 rounded-full border-2 border-white"></div>
      <h4 className="font-bold text-lg text-gray-800">{year}</h4>
      <p className="text-gray-700">{event}</p>
    </div>
  );
};

// AboutUs Component
const AboutUs: React.FC = () => {
  return (
    <div className="about-us bg-gray-50 min-h-screen">
      {/* Hero Section */}

<section className="hero bg-[rgb(0,71,51)] text-white py-24 px-6 text-center">
  <motion.h1 
    className="text-5xl md:text-6xl font-bold mb-6"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Transforming the Path to Homeownership
  </motion.h1>
  <motion.p 
    className="text-xl md:text-2xl max-w-3xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    At BetterHousing, we’re dedicated to simplifying the home buying process with innovative technology and a customer-first approach.
  </motion.p>
</section>

      {/* Mission and Values Section */}
      <section className="mission-values py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-10">
            Our goal is to make homeownership more accessible and less stressful. We combine cutting-edge tools with a passion for helping people find their perfect home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-green-700">Transparency</h3>
              <p className="text-gray-600 mt-2">We keep you informed every step of the way.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700">Innovation</h3>
              <p className="text-gray-600 mt-2">We leverage technology to streamline your journey.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700">Support</h3>
              <p className="text-gray-600 mt-2">We’re here for you, from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TeamMember
            name="Some Guy"
            role="Cool position#1"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          />
          <TeamMember
            name="Some girl"
            role="Cool position#2"
            bio="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          />
          <TeamMember
            name="Some other dude"
            role="Cool position#3"
            bio="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          />
        </div>
      </section>

      {/* History Section */}
      <section className="history py-20 px-6 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Story</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          <TimelineItem year="2016" event="BetterHousing was founded with a mission to rethink homeownership." />
          <TimelineItem year="2018" event="Introduced our groundbreaking online mortgage platform." />
          <TimelineItem year="2020" event="Grew to serve customers across all 50 states." />
          <TimelineItem year="2023" event="Celebrated $2 billion in funded home loans." />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta py-20 px-6 text-center bg-blue-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Ready to Start Your Journey?</h2>
        <button className="bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default AboutUs;