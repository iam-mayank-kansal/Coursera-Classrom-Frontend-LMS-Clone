"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { advantages } from "@/utils/utils";
import Image from "next/image";

export default function SelfPaced() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-side-padding my-20 flex flex-col gap-2">
      <h1 className="text-h1-heading text-all-heading-color text-center font-h1-weight leading-h1-line-height">
        Skillsyard <span className="text-primary-color">Advantages</span>
      </h1>
      <p className="mx-auto text-para text-center text-all-para-color leading-para-line-height md:max-w-[70%]">
        Enhance your skills at your own pace with our flexible Self-Paced
        Programs, featuring video tutorials and practical exercises. Perfect for
        busy schedules, these courses offer independent learning without live
        sessions.
      </p>
      <div className="mt-10 px-side-padding relative">
        <Slider {...settings} ref={sliderRef}>
          {advantages.map((course, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden min-h-[550px] text-white max-w-[460px] bg-gradient-to-b to-secondary-color from-[#06893254]"
            >
              <div className="relative h-[500px] w-full -z-10">
                <Image
                  className="h-full w-full object-cover"
                  src={course.image}
                  alt={course.heading}
                  fill
                />
              </div>
              <div className="flex flex-col gap-4 mt-5 px-2 mb-5 absolute bottom-2 left-2">
                <h4 className="text-h4-heading leading-h4-line-height font-h4-weight">
                  {course.heading}
                </h4>
                <p className="text-para">{course.para} Hours</p>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
