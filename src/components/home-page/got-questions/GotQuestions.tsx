import SecondaryBtn from "@/components/secondary-button/Button";
import Image from "next/image";
import Link from "next/link";

export default function GotQuestions() {
  return (
    <div className="px-side-padding max-w-[80%] mx-auto">
      <div className="bg-[#ffcf7f] relative rounded-lg py-10 my-20 flex flex-col  gap-5 lg:flex-row justify-between px-side-padding">
        <div className="absolute top-0 right-0 h-[200px] w-1/2">
          <Image
            className="absolute w-full h-full object-contain"
            src="/images/got-questions.png"
            alt="got-questions"
            fill
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-h1-heading text-all-header-color font-h1-weight">
            Got more questions ?
          </h1>
          <p className="text-para">
            Talk to our team, our program advisor will reach out to you.
          </p>
        </div>
        <div className="flex items-center relative z-10">
          <Link href="/contact">
            <SecondaryBtn text="Contact Us" />
          </Link>
        </div>
      </div>
    </div>
  );
}
