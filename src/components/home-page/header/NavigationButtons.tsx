import React from "react";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function NavigationButtons({
  onPrevious,
  onNext,
}: NavigationButtonsProps) {
  const buttonClasses =
    "absolute top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20";

  return (
    <>
      <motion.button
        whileHover={{ x: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrevious}
        className={`${buttonClasses} left-4`}
      >
        <BiChevronLeft className="h-6 w-6" />
      </motion.button>
      <motion.button
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className={`${buttonClasses} right-4`}
      >
        <BiChevronRight className="h-6 w-6" />
      </motion.button>
    </>
  );
}
