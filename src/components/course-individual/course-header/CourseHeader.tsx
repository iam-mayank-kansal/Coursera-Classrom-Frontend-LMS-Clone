import { courseHeader } from "@/utils/utils";
import Image from "next/image";
import { BiChevronRight, BiStar } from "react-icons/bi";

export default function CourseHeader() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <BiChevronRight size={16} />
              <span>Web Development</span>
            </div>
            <h1 className="text-h1-heading leading-h1-line-height font-h1-weight mb-4">
              Advanced Full-Stack Web Development Bootcamp
            </h1>
            <p className="text-para text-all-para-color leading-para-line-height mb-6">
              Master modern web development with React, Node.js, and cloud
              technologies
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              {courseHeader.map((course, idx) => {
                return (
                  <div
                    key={"course-" + idx}
                    className="flex items-center gap-2"
                  >
                    <course.svg size={20} />
                    <span>{course.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              <button className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition">
                Download Syllabus
              </button>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-lg text-gray-900">
              <div className="relative w-full h-48">
                <Image
                  src="/images/individual-header.avif"
                  alt="Course Preview"
                  className="w-full h-full object-cover rounded-lg mb-4"
                  fill
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-1">
                  <BiStar
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                  />
                  <span className="font-semibold">4.8</span>
                  <span className="text-gray-600">(2.4k reviews)</span>
                </div>
                <span className="text-blue-600 font-semibold">
                  12k+ enrolled
                </span>
              </div>
              <div className="border-t pt-4">
                <div className="text-3xl font-bold mb-2">$999</div>
                <p className="text-gray-600 mb-4">
                  Flexible payment options available
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
