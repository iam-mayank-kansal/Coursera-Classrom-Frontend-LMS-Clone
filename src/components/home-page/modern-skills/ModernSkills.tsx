import { modernSkills } from "@/utils/utils";
import Link from "next/link";

export default function ModernSkills() {
  return (
    <div className="flex flex-col justify-between gap-10 py-10 px-side-padding mx-auto my-20 lg:flex-row">
      <div className="flex flex-col gap-4 lg:w-[40%]">
        <h1 className="text-primary-color text-lg uppercase font-semibold">
          Master Skills. Build a Career.
        </h1>
        <h2 className="text-h2-heading font-h2-weight text-all-heading-color leading-h2-line-height">
          Modern skills for modern careers
        </h2>
        <p className="text-para text-all-para-color leading-para-line-height md:max-w-[70%]">
          Stay at the top of your game with skills from the hottest domains.
          Explore topics that interest you most and see how the programs are
          relevant to you.
        </p>
      </div>
      <section className="grid grid-cols-1 gap-5 sm:gap-10 sm:grid-cols-2 lg:w-[60%]">
        {modernSkills.map((skills) => (
          <Link
            key={skills.title}
            href={skills.link}
            className="font-medium text-lg"
          >
            <div className="flex items-center p-4 bg-white shadow rounded-lg">
              <span className="mr-4 text-xl">{skills.logo}</span>
              {skills.title}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
