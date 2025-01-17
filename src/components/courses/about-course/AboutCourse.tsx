"use client";
import { useState } from "react";

export default function AboutCourse({
  aboutCourseData,
}: {
  aboutCourseData: any;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-blue-50 py-12 px-4 my-20">
      <h6 className="text-h6-heading text-primary-color font-h6-weight leading-h6-line-height text-center">
        Learn More
      </h6>
      <h1 className="text-h1-heading font-h1-weight leading-h1-line-height text-center pb-6 text-all-heading-color">
        About Our Free Courses
      </h1>
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-5">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - List of Courses */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300">
            <ul className="space-y-4 p-6">
              {aboutCourseData.map((course: any, index: any) => (
                <li
                  key={index}
                  className={`cursor-pointer text-lg font-medium ${
                    index === activeIndex
                      ? "text-blue-600 font-bold"
                      : "text-gray-800"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {course.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Course Content */}
          <div className="w-full md:w-2/3 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-blue-600 text-xl">📘</span>
              <h5 className="text-h5-heading font-bold text-gray-900">
                {aboutCourseData[activeIndex].title}
              </h5>
            </div>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4 mt-7">
              {aboutCourseData[activeIndex].content.map(
                (point: any, i: any) => (
                  <li key={i}>{point}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
