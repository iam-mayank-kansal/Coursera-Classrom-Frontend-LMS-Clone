import React from "react";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { SkillBadge } from "./SkillsBadge";
import Image from "next/image";
import { EventCardInterface } from "@/utils/interface";

export default function EventCard({ event }: EventCardInterface) {
  const getDifficultyColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-green-100 text-green-800";
      case "Past":
        return "bg-yellow-100 text-yellow-800";
      case "Live":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-0.5 duration-300">
      <div className="relative">
        <div className="relative h-48 w-full">
          <Image
            src={event.imageUrl}
            fill
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
              event.status
            )}`}
          >
            {event.status}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-[#39424e] cursor-pointer">
            {event.title}
          </h3>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.skills.map((skill: any, index: number) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-2">
            <FiCalendar className="h-4 w-4" />
            <span>
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FiUsers className="h-4 w-4" />
            <span>{event.participants.toLocaleString()} participants</span>
          </div>
        </div>

        <div className="flex items-end justify-between mb-4">
          <div className="text-xl font-bold ml-auto text-gray-900">
            {event.price === 0 ? "Free" : `$${event.price}`}
          </div>
        </div>
      </div>
    </div>
  );
}
