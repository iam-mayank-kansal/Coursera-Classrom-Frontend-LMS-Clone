import { eventHero } from "@/utils/utils";
import React from "react";

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
            {eventHero.map((hero, idx) => (
              <div key={"hero-" + idx} className="flex items-center space-x-2">
                <hero.svg className="h-5 w-5 text-green-400" />
                <span>{hero.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
