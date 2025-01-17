"use client";

import { curriculum } from "@/utils/utils";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center gap-14 mt-16 px-side-padding">
      {/* Section Header */}
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-[32px] leading-h1-line-height font-h1-weight">
          Get a 360° understanding of full stack web development
        </h2>
        <p className="text-para-small leading-para-small-line-height text-all-para-color">
          Masterclasses delivered by distinguished faculty
        </p>
      </div>

      {/* Curriculum Section */}
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {curriculum.map((value, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-10"
          >
            <div className="flex justify-center items-center gap-2">
              <div
                className="w-[50px] h-[50px] rounded-full p-2 flex items-center justify-center"
                style={{ backgroundColor: value.background }}
              >
                {<value.img fontSize={28} color="white" />}
              </div>
              <h6 className="capitalize text-h6-heading font-h6-weight text-all-para-color">
                {value.head}
              </h6>
            </div>
          </div>
        ))}
      </div>

      {/* Download Button */}
      <button className="text-h6-heading bg-primary-color text-white px-[22px] py-[14px] rounded-[8px]">
        Download Curriculum
      </button>
    </div>
  );
}
