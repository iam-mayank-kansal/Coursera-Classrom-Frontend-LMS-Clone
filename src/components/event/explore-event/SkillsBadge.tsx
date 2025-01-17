import { SkillBadgeInterface } from '@/utils/interface';
import React from 'react';

export const SkillBadge: React.FC<SkillBadgeInterface> = ({ skill }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
    {skill}
  </span>
);