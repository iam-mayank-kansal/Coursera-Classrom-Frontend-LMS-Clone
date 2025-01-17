import { AiFillStar } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function WhatStudentSays() {
  return (
    <div className="my-20 px-side-padding">
      <h1 className="text-h1-heading font-h1-weight text-center mb-24">
        What <span className="text-primary-color">Student</span> Says
      </h1>
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex flex-col gap-5 lg:w-[50%]">
          <div className="grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-2">
            <div className="w-[85%]">
              <div className="relative px-5 pt-7 rounded-md shadow-lg">
                <ImQuotesLeft
                  color="#068932"
                  fontSize={30}
                  className="absolute bottom-full left-5 translate-y-1/2"
                />
                <div>
                  <p className="w-[85%] text-sm leading-para-line-height text-all-para-color">
                  The Full-Stack Development course at SkillsYard was phenomenal.
                  The projects and resources provided were top-notch.
                  </p>
                  <div className="mt-5 pb-2 flex flex-col gap-1">
                    <h4 className="text-lg">Rahul Sharma</h4>
                    <section className="flex gap-1">
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[95%] ml-auto mt-16 lg:mt-0">
              <div className="relative px-5 pt-7 rounded-md shadow-lg">
                <ImQuotesRight
                  color="#5F0FF2"
                  fontSize={30}
                  className="absolute bottom-full right-5 translate-y-1/2"
                />
                <div className="mt-10">
                  <p className="text-sm leading-para-line-height text-all-para-color">
                  I enrolled in the AI and Machine Learning course, and it was
                  fantastic. The real-world examples simplified complex concepts.
                  </p>
                  <div className="mt-5 pb-2 flex flex-col gap-1">
                    <h4 className="text-lg">Priya Verma</h4>
                    <section className="flex gap-1">
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[110%] mt-5 mr-auto">
              <div className="relative px-5 rounded-md shadow-lg">
                <ImQuotesLeft
                  color="#FF6947"
                  fontSize={30}
                  className="absolute bottom-full left-5 translate-y-1/2"
                />
                <div className="pt-5">
                  <p className="text-sm text-all-para-color leading-para-small-line-height">
                  The Cloud Computing course was amazing. SkillsYard made the
              learning process engaging with practical assignments on AWS and
              Azure.
                  </p>
                  <div className="mt-5 pb-2 flex items-center justify-between gap-1">
                    <div>
                      <h4 className="text-lg">Sneha Gupta</h4>
                      <section className="flex gap-1">
                        <AiFillStar color="#F4B400" />
                        <AiFillStar color="#F4B400" />
                        <AiFillStar color="#F4B400" />
                        <AiFillStar color="#F4B400" />
                        <AiFillStar color="#F4B400" />
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col ml-auto pt-5 w-[90%] shadow-lg">
              <div className="relative px-5 rounded-md">
                <div className="mt-10">
                  <p className="text-sm text-all-para-color">
                  SkillsYard&apos;s Digital Marketing course taught me strategies that
                  I&apos;ve applied successfully to my campaigns. Highly recommended!
                  </p>
                  <div className="mt-5 pb-2 flex flex-col gap-1">
                    <h4 className="text-lg">Amit Patel</h4>
                    <section className="flex gap-1">
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <div className="px-5 py-2 rounded-md shadow-lg">
              <div>
                <div className="mt-5 pb-2 flex flex-col gap-1">
                  <section className="relative pl-28 flex flex-col justify-center w-full gap-1">
                    <h4 className="text-lg">Anjali Reddy</h4>
                    <section className="flex gap-1">
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                      <AiFillStar color="#F4B400" />
                    </section>
                  </section>
                  <p className="text-sm text-all-para-color leading-para-line-height mt-2">
                  SkillsYard&apos;s UI/UX Design course gave me the confidence to
                  create intuitive designs. The real-world projects were fantastic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-[20%]">
          <div className="mb-auto max-w-[700px]">
            <div className="relative px-5 pt-7 flex flex-col items-center gap-5 rounded-md shadow-lg sm:flex-row lg:flex-col">
              <div>
                <p className="text-sm leading-para-line-height text-all-para-color">
                The Full-Stack Development course at SkillsYard transformed my career. The detailed curriculum and project-based approach gave me the confidence to build applications from scratch.
                </p>
                <div className="mt-5 pb-2 flex flex-col gap-1">
                  <h4 className="text-lg">Arjun Malhotra</h4>
                  <section className="flex gap-1">
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-auto mt-16 lg:mt-0">
            <div className="relative px-5 pt-7 rounded-md shadow-lg">
              <div className="mt-10 pb-2">
                <div className="mt-5 flex flex-col gap-1">
                  <h4 className="text-lg text-center">Priya Mehra</h4>
                  <section className="flex gap-1 mx-auto">
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                  </section>
                </div>
                <p className="text-sm leading-para-line-height mt-2 text-all-para-color">
                The Graphic Designing course was truly inspiring. SkillsYard’s emphasis on creativity and hands-on assignments helped me create designs that stand out in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-[30%]">
          <div className="mt-16 lg:mt-0">
            <div className="relative px-5 pt-7 rounded-md shadow-lg">
              <ImQuotesRight
                color="#F4B400"
                fontSize={30}
                className="absolute bottom-full right-5 translate-y-1/2"
              />
              <div className="mt-10 pb-2">
                <div className="mt-5 flex flex-col gap-1">
                  <h4 className="text-lg text-center">Ananya Roy</h4>
                  <section className="flex gap-1 mx-auto">
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                  </section>
                </div>
                <p className="text-sm leading-para-line-height mt-2 text-all-para-color">
                The Data Analytics course covered everything from Excel to advanced Python. The real-world case studies helped me gain practical insights into business analytics.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative px-5 pt-7 flex gap-4 items-center rounded-md shadow-lg">
              <div className="mt-10">
                <p className="text-sm text-all-para-color leading-para-line-height">
                The Cloud Computing course was excellent. SkillsYard’s focus on AWS and Azure platforms gave me the skills I needed to manage cloud infrastructure efficiently.
                </p>
                <div className="mt-5 pb-2 flex flex-col items-center gap-1">
                  <h4 className="text-lg">Rohan Khurana</h4>
                  <section className="flex gap-1">
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[700px] ml-auto">
            <div className="relative px-5 flex gap-2 items-center rounded-md shadow-lg">
              <div className="mt-10">
                <p className="text-sm text-all-para-color leading-para-line-height">
                SkillsYard’s Digital Marketing course was a game changer for me. The modules on SEO, PPC, and content marketing were practical and easy to implement.
                </p>
                <div className="mt-5 pb-2 flex flex-col items-center gap-1">
                  <h4 className="text-lg">Meera Sharma</h4>
                  <section className="flex gap-1">
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                    <AiFillStar color="#F4B400" />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
