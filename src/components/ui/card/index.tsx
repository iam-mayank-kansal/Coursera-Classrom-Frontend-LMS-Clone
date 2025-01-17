import { CourseCardProps } from "@/utils/interface";
import Link from "next/link";
import React from "react";
import { BiBookOpen, BiStar, BiUser } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

export function CourseCard({
  title,
  rating,
  students,
  image,
  level,
  duration,
  modules,
  link,
}: CourseCardProps) {
  return (
    <Link href={link}>
      <div className="group bg-white rounded-xl h-[400px] shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent rounded-t-2xl" />
          <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/95 text-blue-600 rounded-lg text-sm font-medium">
            {level}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div className="flex items-center gap-1.5 text-slate-600">
              <BsClock className="w-4 h-4 text-blue-600" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600">
              <BiBookOpen className="w-4 h-4 text-blue-600" />
              <span>{modules} modules</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <BiStar
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                />
                <span className="font-medium text-slate-900">
                  {rating.toFixed(1)}
                </span>
              </div>
              <span className="text-slate-400">•</span>
              <div className="flex items-center gap-1 text-slate-600">
                <BiUser className="w-4 h-4" />
                <span>{students}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
