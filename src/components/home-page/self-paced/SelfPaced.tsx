"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classNames from "classnames";
import { selfPasedCourses } from "@/utils/utils";
import Link from "next/link";
import { CourseCard } from "@/components/ui/card";

export default function SelfPaced() {
  const [selected, setSelected] = useState(0);

  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
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
      <h6 className="uppercase text-h6-heading text-primary-color font-h6-weight leading-h6-line-height">
        Learn at Your Own Pace
      </h6>
      <h2 className="text-h2-heading text-all-heading-color font-h2-weight leading-h2-line-height">
        Self-Paced Courses
      </h2>
      <p className="text-para text-all-para-color leading-para-line-height md:max-w-[70%]">
        Enhance your skills at your own pace with our flexible Self-Paced
        Programs, featuring video tutorials and practical exercises. Perfect for
        busy schedules, these courses offer independent learning without live
        sessions.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-5 md:grid-cols-4 lg:max-w-[60%]">
        {selfPasedCourses.map((course, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={classNames(
              "py-2 rounded-lg",
              {
                "bg-primary-color text-white": selected === idx,
              },
              { "border-primary-color border-2": selected !== idx }
            )}
          >
            {course.course}
          </button>
        ))}
      </div>
      <div className="mt-10 relative px-side-padding">
        <Slider {...settings} ref={sliderRef}>
          {selfPasedCourses[selected].details.map((course, index) => (
            <Link href={course.link} key={index}>
              <CourseCard {...course} key={"course-" + index} />
            </Link>
          ))}
        </Slider>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none"
          onClick={() => sliderRef.current.slickNext()}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
