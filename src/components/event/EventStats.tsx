import React from "react";
import { FiAward, FiClock, FiCalendar, FiUsers } from "react-icons/fi";

export default function EventStats() {
  const stats = [
    {
      icon: FiAward,
      label: "Completion Rate",
      value: "94%",
      description: "Success Rate",
    },
    {
      icon: FiClock,
      label: "Average Duration",
      value: "2-3",
      description: "Hours per Event",
    },
    {
      icon: FiCalendar,
      label: "Monthly Events",
      value: "45+",
      description: "Live Sessions",
    },
    {
      icon: FiUsers,
      label: "Community",
      value: "50K+",
      description: "Active Learners",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, label, value, description }) => (
            <div key={label} className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#39424e] text-white">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-2xl font-bold text-[#39424e]">{value}</p>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
