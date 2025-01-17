"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import FilterBar from "./FilterBar";

export default function AllCourses({
  allCoursesData,
}: {
  allCoursesData: any;
}) {
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  const filteredCourses = allCoursesData.filter((course: any) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDuration =
      !duration ||
      (duration === "1-3" &&
        parseInt(course.duration) >= 1 &&
        parseInt(course.duration) <= 3) ||
      (duration === "3-6" &&
        parseInt(course.duration) > 3 &&
        parseInt(course.duration) <= 6) ||
      (duration === "6+" && parseInt(course.duration) > 6);

    const matchesLevel =
      !level || course.level.toLowerCase() === level.toLowerCase();

    return matchesSearch && matchesDuration && matchesLevel;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <FilterBar
        setSearch={setSearch}
        setDuration={setDuration}
        setLevel={setLevel}
      />

      {/* Show message if no courses are found */}
      {filteredCourses.length === 0 ? (
        <div className="text-center p-8 bg-gray-100 border w-fit mt-20 mx-auto border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-600">
            No Courses Available
          </h2>
          <p className="text-gray-400">
            Please adjust your filters or search criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course: any, index: any) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      )}
    </div>
  );
}
