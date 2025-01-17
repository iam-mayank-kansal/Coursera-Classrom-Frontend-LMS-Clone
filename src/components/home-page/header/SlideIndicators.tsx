import React from 'react';
import { motion } from 'framer-motion';
import { SlideIndicatorsProps } from '@/utils/interface';

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({ total, current, onSelect }) => {
  return (
    <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
      <div className="flex gap-3">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className="group relative h-2 w-12 rounded-full bg-white/30"
          >
            <motion.div
              initial={false}
              animate={{
                width: current === index ? "100%" : "0%",
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-full bg-green-500"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlideIndicators;