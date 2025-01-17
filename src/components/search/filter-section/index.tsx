import React from 'react';


import { FilterCategory } from '../filter-category';
import { BsClock, BsSliders } from 'react-icons/bs';
import { BiAward, BiBookOpen, BiTag } from 'react-icons/bi';

export const filters = {
  level: {
    icon: BiAward,
    options: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  },
  duration: {
    icon: BsClock,
    options: ['< 2 hours', '2-5 hours', '5-10 hours', '10+ hours']
  },
  type: {
    icon: BiBookOpen,
    options: ['Course', 'Specialization', 'Professional Certificate']
  },
  price: {
    icon: BiTag,
    options: ['Free', 'Paid', 'Financial Aid Available']
  }
};


export function FilterSection() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <BsSliders className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
      </div>

      <div className="space-y-6">
        {Object.entries(filters).map(([name, { icon: Icon, options }]) => (
          <FilterCategory
            key={name} 
            name={name} 
            Icon={Icon} 
            options={options} 
          />
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg 
                     hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
        Clear All Filters
      </button>
      <button className="w-full mt-6 px-4 py-2 bg-primary-color text-white rounded-lg 
                     hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
        Search
      </button>
    </div>
  );
}