"use client";
import { courseBenefitCard } from "@/utils/utils";
import React from "react";

export default function Benefits() {

  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-24 px-side-padding">
      {/* Heading */}
      <h1 className="capitalize text-h1-heading leading-h1-line-height font-h1-weight">
        designed for professionals like you
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col justify-center items-center gap-10">
        {courseBenefitCard.map((value, index) => (
          <div
            className="flex flex-col w-fit gap-8 lg:flex-row"
            key={index}
          >
            {value.head.map((item, subIndex) => (
              <div
                className="flex border border-gray-300 rounded-md gap-12 w-fit p-5"
                key={subIndex}
              >
                {/* Card Text */}
                <div className="flex flex-col w-fit sm:w-[400px] gap-4">
                  <h6 className="capitalize text-h6-heading font-h6-weight leading-h6-line-height">
                    {item}
                  </h6>
                  <p className="capitalize text-para-small leading-para-small-line-height text-all-para-color">
                    {value.para[subIndex]}
                  </p>
                </div>
                {/* Image */}
                <img
                  src={value.img[subIndex]}
                  alt={item}
                  className="w-28 rounded"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
