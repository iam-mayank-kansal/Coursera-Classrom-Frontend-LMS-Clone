import React from 'react';

interface FilterOptionProps {
  option: string;
}

export function FilterOption({ option }: FilterOptionProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer group">
      <input 
        type="checkbox" 
        className="w-4 h-4 rounded border-gray-300 text-indigo-600 
                 focus:ring-indigo-500 focus:ring-offset-0"
      />
      <span className="text-gray-600 group-hover:text-indigo-600 transition-colors">
        {option}
      </span>
    </label>
  );
}