import { transitions } from "@/utils/utils";
import React from "react";
import TransitionCard from "./TransitionCard";



const CareerTransition: React.FC = () => {
  return (
    <div className="bg-purple-100 py-16 px-side-padding">
      <h2 className="text-center text-5xl font-bold mb-10">
        Successful Career Transitions To Inspire You
      </h2>
      <div className="grid grid-cols-1 gap-x-20 place-items-center px-side-padding md:grid-cols-2 lg:grid-cols-3">
        {transitions.map((transition, index) => (
          <TransitionCard key={index} {...transition} />
        ))}
      </div>
    </div>
  );
};

export default CareerTransition;
