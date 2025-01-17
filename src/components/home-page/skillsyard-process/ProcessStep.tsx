import React from "react";
import { motion } from "framer-motion";
import { BiCheckCircle } from "react-icons/bi";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  isLast?: boolean;
  onClick: () => void;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  isActive,
  isLast,
  onClick,
}) => {
  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative z-10 cursor-pointer rounded-2xl border-2 transition-all duration-500 
          ${
            isActive
              ? "border-green-500 bg-white"
              : "border-gray-100 bg-white hover:border-green-200"
          }`}
        onClick={onClick}
      >
        <div className="p-8">
          {/* Step Number Circle */}
          <div className="mb-6 flex items-center justify-between">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full transition-colors
              ${isActive ? "bg-green-500" : "bg-gray-100"}`}
            >
              {isActive ? (
                <BiCheckCircle className="h-8 w-8 text-white" />
              ) : (
                <span className="text-xl font-bold text-gray-400">
                  {number}
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3
              className={`text-2xl font-bold transition-colors
              ${isActive ? "text-green-500" : "text-gray-700"}`}
            >
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </motion.div>

      {/* Connection Line */}
      {!isLast && (
        <div className="absolute left-[2.75rem] top-24 h-full w-[2px] -z-10 bg-gradient-to-b from-gray-200 to-transparent" />
      )}
    </div>
  );
};

export default ProcessStep;
