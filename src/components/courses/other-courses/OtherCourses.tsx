import { modernSkills } from "@/utils/utils";
import Link from "next/link";

export default function OtherCourses() {
  return (
    <div className="flex flex-col justify-between gap-10 py-10 px-side-padding mx-auto my-20 md:flex-row">
      <div className="flex flex-col gap-4 md:w-[40%]">
        <h1 className="text-h1-heading text-all-heading-color font-h1-weight uppercase">
          Other <span className="text-primary-color">Courses</span>
        </h1>
        <p className="text-para text-all-para-color leading-para-line-height">
          Apart from the core courses, students often have the opportunity to
          explore a variety of elective courses that complement their primary
          area of study. These additional courses allow students to broaden
        </p>
      </div>
      <section className="grid sm:grid-cols-2 gap-10 md:w-[60%]">
        {modernSkills.map((skill, idx) => {
          return (
            <div
              key={"skill-" + idx}
              className="flex items-center px-4 py-6 bg-white shadow rounded-lg"
            >
              <span className="mr-4 text-xl">{skill.logo}</span>
              <Link href={skill.link} className="font-medium text-lg">
                {skill.title}
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
