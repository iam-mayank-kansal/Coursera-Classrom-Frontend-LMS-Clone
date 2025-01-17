import React from "react";
import {
  BiStar,
  BiTrophy,
  BiUser,
  BiBriefcase,
  BiRocket,
  BiGlobe,
} from "react-icons/bi";

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
    <Icon className="w-8 h-8 text-indigo-600 mb-3" />
    <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default function Stats() {
  return (
    <section className="container mx-auto px-4 -mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <StatCard icon={BiUser} value="50,000+" label="Active Learners" />
        <StatCard icon={BiTrophy} value="92%" label="Success Rate" />
        <StatCard icon={BiBriefcase} value="1200+" label="Company Partners" />
        <StatCard icon={BiStar} value="4.9/5" label="Student Rating" />
        <StatCard icon={BiRocket} value="85%" label="Salary Increase" />
        <StatCard icon={BiGlobe} value="120+" label="Countries" />
      </div>
    </section>
  );
}
