"use client";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { exploreData } from "@/utils/utils";

export default function ExploreDropdown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const router = useRouter();

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="hidden items-center justify-center gap-2 p-2 rounded border border-[#11111149] select-none lg:flex"
        onClick={toggleDropdown}
        ref={buttonRef}
      >
        <div className="relative flex items-center justify-center gap-2">
          Explore{" "}
          {isDropDownOpen ? (
            <FaAngleUp className="text-primary-color" />
          ) : (
            <FaAngleDown />
          )}
          <div
            className={classNames(
              "absolute top-[90%] z-10 left-1/2 -translate-x-1/2 w-0 h-0",
              {
                "inline-block": isDropDownOpen,
              },
              { hidden: !isDropDownOpen }
            )}
            style={{
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "20px solid #f9fafb",
            }}
          />
        </div>
      </div>
      {isDropDownOpen && (
        <div
          className="absolute top-[55px] left-1/2 -translate-x-1/2 w-[90vw] bg-gray-50 shadow-lg rounded mt-2"
          ref={dropdownRef}
        >
          <div className="p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Left Side - Course Categories */}
              <div className="md:col-span-1 flex items-center p-4 rounded-lg">
                <ul className="text-gray-700 flex flex-col gap-5 text-md w-full">
                  {exploreData.map((course, idx) => {
                    return (
                      <li
                      key={course.category}
                        className={classNames(
                          "flex items-center justify-between px-2 cursor-pointer",
                          {
                            "bg-primary-color text-white py-3 rounded-md":
                              idx === selected,
                          }
                        )}
                        onClick={() => setSelected(idx)}
                      >
                        <span>{course.category}</span>
                        <IoIosArrowForward />
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Center Section - Selected Category and Courses */}
              <div className="md:col-span-3 p-4 rounded-lg">
                <h3 className="font-semibold text-xl text-gray-800 mb-4">
                  {exploreData[selected].category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exploreData[selected].courses.map((course, idx) => (
                    <div
                      key={`course-${idx}-link}`}
                      className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-150"
                      onClick={() => {
                        router.push(course.link);
                        setIsDropDownOpen(false);
                      }}
                    >
                      <h4 className="font-semibold text-lg text-gray-800">
                        {course.courseName}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {course.coursePara}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-right mt-4 ml-4">
                  {/* <PrimaryBtn text="View All" /> */}
                  <p
                    className="text-primary-color hover:underline cursor-pointer"
                    onClick={() => {
                      router.push(exploreData[selected].link);
                      setIsDropDownOpen(false);
                    }}
                  >
                    See More
                  </p>
                </div>
              </div>

              {/* Right Side - Free Courses */}
              <div className="md:col-span-1 p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">
                  Free Courses
                </h3>
                <div className="flex flex-col gap-4">
                  {exploreData[selected].freeCourses.map((course) => (
                    <div
                      key={`course-${course.link}`}
                      className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-150"
                      onClick={() => {
                        router.push(course.link);
                        setIsDropDownOpen(false);
                      }}
                    >
                      <h4 className="font-semibold text-lg text-gray-800">
                        {course.courseName}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {course.coursePara}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="text-primary-color hover:underline cursor-pointer text-right mt-2"
                  onClick={() => {
                    router.push("/course/free");
                    setIsDropDownOpen(false);
                  }}
                >
                  See More
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
