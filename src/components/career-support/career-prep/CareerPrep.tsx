import { careerPrep } from "@/utils/utils";
import React from "react";
import SinglePrep from "./SinglePrep";

const CareerPrep: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 px-side-padding max-w-[90%] mx-auto my-10">
      <div className="mx-auto space-y-16">
        {/* Career Prep Header */}
        <div className="flex flex-col gap-5 items-start md:flex-row md:gap-0 md:items-center">
          <div>
            <h1 className="text-h1-heading font-h1-weight leading-h1-line-height text-all-heading-color mb-4 text-left">
              Career Prep
            </h1>
            <p className="text-para mx-auto mb-8 text-all-para-color leading-para-line-height">
              Learn from leading academicians in the field of data science and
              business analytics and several experienced industry practitioners
              from top organizations.
            </p>
            <button className="bg-blue-600 text-white font-medium py-3 px-8 rounded hover:bg-blue-700 transition ">
              Get Counseling Call
            </button>
          </div>

          {/* Stats Boxes */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-yellow-200 text-center py-6 px-8 rounded-lg shadow-md">
              <p className="text-2xl font-bold">4.7/5</p>
              <p className="text-gray-700">Avg Mentorship Rating</p>
            </div>
            <div className="bg-red-200 text-center py-6 px-[50px] rounded-lg shadow-md">
              <p className="text-2xl font-bold">1:1</p>
              <p className="text-gray-700">Program Support</p>
            </div>
          </div>
        </div>

        {careerPrep.map((career) => {
            return (
              <SinglePrep
                key={career.alt}
                alt={career.alt}
                heading={career.heading}
                imgUrl={career.imgUrl}
                lis={career.lis}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CareerPrep;
