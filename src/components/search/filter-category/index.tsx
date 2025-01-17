import React from 'react';
import { LucideIcon } from 'lucide-react';
import { FilterOption } from '../filter-option';

interface FilterCategoryProps {
  name: string;
  Icon: LucideIcon;
  options: string[];
}

export function FilterCategory({ name, Icon, options }: FilterCategoryProps) {
  return (
    <div className="pb-4 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-indigo-600" />
        <h3 className="font-medium text-gray-900 capitalize">{name}</h3>
      </div>
      
      <div className="space-y-2">
        {options.map((option) => (
          <FilterOption key={option} option={option} />
        ))}
      </div>
    </div>
  );
}