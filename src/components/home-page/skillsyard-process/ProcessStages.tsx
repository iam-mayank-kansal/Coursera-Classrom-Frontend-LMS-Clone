import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaGraduationCap, FaRocket } from 'react-icons/fa';

const stages = [
  { 
    id: 'enrolment', 
    label: 'Enrolment',
    sublabel: 'Assistance',
    icon: FaGraduationCap
  },
  { 
    id: 'completion', 
    label: 'Course',
    sublabel: 'Completion',
    icon: FaBookOpen
  },
  { 
    id: 'acceleration', 
    label: 'Career',
    sublabel: 'Acceleration',
    icon: FaRocket
  },
];

interface ProcessStagesProps {
  activeStage: string;
  onStageClick: (stage: string) => void;
}

const ProcessStages: React.FC<ProcessStagesProps> = ({ activeStage, onStageClick }) => {
  return (
    <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
      {stages.map((stage, index) => {
        const Icon = stage.icon;
        const isActive = activeStage === stage.id;
        
        return (
          <motion.button
            key={stage.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative flex min-w-[180px] flex-col items-center gap-3 rounded-xl p-6 transition-all
              ${isActive 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-green-50'}`}
            onClick={() => onStageClick(stage.id)}
          >
            <div className={`rounded-full p-3 transition-colors
              ${isActive 
                ? 'bg-white/20' 
                : 'bg-gray-100 group-hover:bg-green-100'}`}>
              <Icon className={`h-6 w-6 transition-colors
                ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-green-500'}`} />
            </div>
            <div className="text-center">
              <div className="font-bold">{stage.label}</div>
              <div className={`text-sm transition-colors
                ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                {stage.sublabel}
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default ProcessStages;