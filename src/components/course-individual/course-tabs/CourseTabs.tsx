"use client";

import { useEffect, useRef, useState } from "react";
import CourseAbout from "@/components/course-individual/course-about/CourseAbout";
import CourseBenefits from "@/components/course-individual/course-benefits/CourseBenefits";
import CourseFaqs from "@/components/course-individual/course-faqs/CourseFaqs";
import CourseMentors from "@/components/course-individual/course-mentors/CourseMentors";
import CourseOverview from "@/components/course-individual/course-overview/CourseOverview";
import classNames from "classnames";

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const overviewRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const instructorsRef = useRef<HTMLDivElement>(null);

  const courseTabs = [
    { ref: overviewRef, label: "Overview" },
    { ref: curriculumRef, label: "Curriculum" },
    { ref: faqRef, label: "FAQ" },
    { ref: instructorsRef, label: "Instructors" },
  ];

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (!isMobile && ref?.current) {
      const yOffset = -100;
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Initialize on first render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = 120;
      let currentActive = "Overview";

      courseTabs.forEach((section) => {
        if (section.ref.current) {
          const sectionTop =
            section.ref.current.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY + yOffset >= sectionTop) {
            currentActive = section.label;
          }
        }
      });

      setActiveTab(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [courseTabs]);

  return (
    <>
      <div className="mx-auto px-4 pt-8 sticky top-0 pl-side-padding bg-white w-full z-50">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {courseTabs.map((section) => (
            <button
              key={section.label}
              onClick={() => handleScrollTo(section.ref)}
              className={classNames(
                "pb-4 px-2 font-semibold",
                {
                  "text-blue-600 border-b-2 border-blue-600":
                    activeTab === section.label,
                },
                {
                  "text-gray-600 hover:text-blue-600":
                    activeTab !== section.label,
                },
                {
                  "pointer-events-none": isMobile,
                }
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={overviewRef}>
        <CourseOverview />
      </div>
      <div ref={curriculumRef}>
        <CourseAbout />
        <CourseBenefits />
      </div>
      <div ref={faqRef}>
        <CourseFaqs />
      </div>
      <div ref={instructorsRef}>
        <CourseMentors />
      </div>
    </>
  );
}
