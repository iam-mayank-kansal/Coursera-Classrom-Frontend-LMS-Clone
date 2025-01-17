import Image from "next/image";
import { companies } from "@/utils/utils";

export default function StudentPlaced() {

  return (
    <div className="flex flex-col justify-between py-8 px-side-padding my-20">
      <div className="flex flex-col gap-4 justify-center text-center">
        <h4 className="text-h4-heading text-all-heading-color font-h4-weight leading-h4-line-height">
          Join Skillsyard graduates at top-tier companies
        </h4>
        <p className="text-all-para-color text-para leading-para-line-height md:max-w-[50%] mx-auto">
          Congratulations to our students who have successfully secured placements in top companies. We are proud of your achievements!
        </p>
      </div>

      <div className="slider-container">
        <div className="grid grid-cols-2 place-items-center gap-16  md:max-w-[1300px] mx-auto mt-16 md:grid-cols-5">
          {companies.map((company, index) => (
            <div key={index} className="relative h-10 w-60">
              <Image className="object-contain" src={company} fill alt="" />
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}
