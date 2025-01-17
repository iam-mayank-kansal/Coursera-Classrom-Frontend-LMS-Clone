"use client";

import { data } from "@/utils/utils";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";

const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-[#714db9] w-fit text-white font-semibold rounded-lg hover:bg-purple-400 transition duration-200 border-[1px]"
  >
    {text}
  </button>
);
export default function Header() {
  return (
    <div className="flex items-center justify-around px-side-padding py-20 from-[#714db9] bg-gradient-to-b to-red-300 md:h-[85vh]">
      <div>
        <h1 className="text-header-heading max-w-[800px] font-h1-weight leading-h1-line-height text-white">
          Achieve your career dreams with{" "}
          <span className="underline">SkillsYard</span>
        </h1>

        <div className="relative flex flex-col gap-2 mt-10 ml-10">
          {data.map((text) => (
            <Button text={text} key={text} />
          ))}
          <div className="absolute h-full flex flex-col justify-around -left-10  top-1/2 -translate-y-1/2 z-10 ">
            <div className="absolute h-[109%] w-[2px] border-l-[1px] border-dashed left-1/2 -translate-x-1/2 z-10 top-4" />
            {data.map((_, idx) => (
              <AiFillThunderbolt
                key={"svg-" + idx}
                color="white"
                fontSize={24}
              />
            ))}
          </div>
          <div className="absolute flex -bottom-16 w-max -left-[44px] items-center gap-5">
            <FaMedal color="white" fontSize={30} />
            <p className="text-[#FFCF5C] text-3xl font-bold  ">
              Your Dream Job
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-[400px] h-[250px] hidden md:block">
          <Image
            className="h-full w-full"
            src="/images/career-support-header.png"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
}
