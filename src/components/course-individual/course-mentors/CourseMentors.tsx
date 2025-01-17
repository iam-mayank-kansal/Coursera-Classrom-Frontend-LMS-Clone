"use client";
import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { courseMentor } from "@/utils/utils";

export default function CourseMentors() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 my-20 px-side-padding">
      {/* Heading */}
      <h1 className="text-h1-heading leading-h1-line-height font-h1-weight">
        Faculty and Mentors
      </h1>
      {/* Subheading */}
      <p className="text-all-para-color text-para leading-para-line-height text-center max-w-[900px]">
        Learn from leading academicians in the field of Artificial Intelligence
        and Machine Learning and several experienced industry practitioners from
        top organisations.
      </p>
      {/* Carousel */}
      <div className="mt-10 px-side-padding relative w-full max-w-screen-xl mx-auto overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          {courseMentor.map((card, index) => (
            <div
              key={index}
              className="min-h-60 flex flex-col justify-between bg-white rounded-lg p-5"
            >
              {/* Card Header */}
              <div className="flex justify-start items-center gap-7 mb-4">
                <div className="relative h-[100px] w-[100px] overflow-hidden shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="object-cover h-full w-full rounded-[50%]"
                    fill
                  />
                </div>
                <h5 className="text-h5-heading font-h5-weight">{card.title}</h5>
              </div>
              {/* Description */}
              <div className="flex flex-col justify-start items-start mb-auto">
                <p className="text-all-para-color text-para-small leading-para-small-line-height">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        {/* Navigation Buttons */}
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
