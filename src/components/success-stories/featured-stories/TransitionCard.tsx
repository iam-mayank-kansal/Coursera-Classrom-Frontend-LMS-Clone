import { TransitionCardInterface } from "@/utils/interface";
import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export const TransitionCard = ({
  image,
  name,
  transition,
  salary,
  increase,
}: TransitionCardInterface) => (
  <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl hover:shadow-lg transition-all">
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
      />
      <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
        <BiTrendingUp className="w-3 h-3 inline mr-1" />
        {increase}
      </div>
    </div>
    <h4 className="font-semibold text-center text-gray-900 mb-2">{name}</h4>
    <div className="flex items-center justify-center text-sm text-gray-600 mb-3">
      <span className="line-through">{transition}</span>
      <BsArrowRight className="w-4 h-4 mx-2" />
      <span className="font-semibold text-indigo-600">{salary}</span>
    </div>
  </div>
);
