import React from "react";
import { FaRocket, FaUsers, FaTrophy } from "react-icons/fa";

export default function EventHero() {
  return (
    <div className="bg-gradient-to-r from-[#39424e] to-[#2c343d] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Level Up Your Coding Skills
          </h1>
          <p className="text-lg text-gray-300">
            Join live coding events, competitions, and workshops led by industry
            experts
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center space-x-2">
              <FaUsers className="h-5 w-5 text-green-400" />
              <span>50K+ Learners</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaRocket className="h-5 w-5 text-blue-400" />
              <span>100+ Live Events</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTrophy className="h-5 w-5 text-yellow-400" />
              <span>Real Certificates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
