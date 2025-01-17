"use client";
import { useState } from "react";
import { coursesData } from "@/utils/utils";
import classNames from "classnames"
import { FiBook } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CourseCardProps } from "@/utils/interface";
import { CourseCard } from "@/components/ui/card";
import "./Courses.css"

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState(
    coursesData[0].title
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const selectedCategoryData = coursesData.find(
    (category) => category.title === selectedCategory
  );

  return (
    <div className="flex flex-col py-8 px-side-padding lg:flex-row">
      <div className="w-full p-4 border-r rounded-lg lg:w-[25%]">
        <h6 className="text-h6-heading mb-2 font-h6-weight text-primary-color leading-h6-line-height">
          Course Categories
        </h6>
        <h3 className="text-h3-heading font-h3-weight text-all-heading-color leading-h3-line-height">
          The best courses we provide
        </h3>


        <div className="mt-4 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 hidden md:grid ">
          {coursesData.map((category) => (
            <button
              key={category.title}
              className={classNames(
                "flex justify-between items-center w-full text-left px-2 py-4 rounded",
                {
                  "bg-primary-color text-white font-bold":
                    category.title === selectedCategory,
                  "hover:bg-[#eee]": category.title !== selectedCategory,
                }
              )}
              onClick={() => handleCategoryChange(category.title)}
            >
              <section className="flex items-center gap-4">
                <FiBook fontSize={20} />
                {category.title}
              </section>
              <MdKeyboardArrowRight fontSize={20} />
            </button>
          ))}
        </div>

        <div className="mt-4 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 md:hidden">
          <select name="" id="" className="border-2 rounded-md p-3 w-full">
            {coursesData.map((category) => (
              <option
                key={category.title}
                value={category.title}
                className={classNames(
                  "flex justify-between items-center w-full text-left px-2 py-4 rounded",
                  {
                    "bg-primary-color text-white font-bold":
                      category.title === selectedCategory,
                    "hover:bg-[#eee]": category.title !== selectedCategory,
                  }
                )}
                onChange={() => handleCategoryChange(category.title)}
              >
                <section className="flex items-center gap-4">
                  <FiBook fontSize={20} />  
                  {category.title}
                </section>
                <MdKeyboardArrowRight fontSize={20} />
              </option>
            ))}
          </select>



        </div>
      </div>
      <div className="w-full p-4 mx-auto lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800 flex items-center justify-start gap-4">
          {selectedCategory} <span className="w-[80%] h-[2px] bg-black" />
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedCategoryData?.listData.map(
            (course: CourseCardProps, index: number) => (
              <CourseCard key={index} {...course} />
            )
          )}
        </div>
      </div>
    </div>
  );
}


