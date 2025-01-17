import React from 'react';
import { CgClose } from 'react-icons/cg';
import { LuSlidersHorizontal } from 'react-icons/lu';

export function FilterToggleButton() {

  return (
    <button
      className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg
                hover:bg-blue-700 transition-colors duration-200"
      aria-label={true ? 'Close filters' : 'Open filters'}
    >
      {true ? (
        <CgClose className="w-6 h-6" />
      ) : (
        <LuSlidersHorizontal className="w-6 h-6" />
      )}
    </button>
  );
}