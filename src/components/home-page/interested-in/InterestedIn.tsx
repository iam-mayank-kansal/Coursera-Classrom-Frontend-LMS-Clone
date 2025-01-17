import SecondaryBtn from "@/components/secondary-button/Button";
import Image from "next/image";
import Link from "next/link";

export default function InterestedIn() {
  return (
    <div
      className="flex flex-col gap-4 justify-between rounded-xl px-side-padding py-8 my-20 mt-40 max-w-[85%] mx-auto relative lg:flex-row lg:items-center lg:gap-0 lg:py-16"
      style={{ background: "linear-gradient(90deg, #030a21, #1543db)" }}
    >
      <Image
        className="h-full w-full inset-0 opacity-30"
        fill
        src="/images/interested-layer.png"
        alt="layer"
      />
      {/* Left Section - Image and Text */}
      <div className="flex items-center gap-5 relative z-20">
        <div>
          <h4 className="mt-2 text-h4-heading font-bold text-white">
            Not sure what you are interested in ?
          </h4>
          <p className="mt-4 text-para leading-para-line-height text-[#dadada]">
            Talk to us, take demo classes, find your interest.
          </p>
        </div>
      </div>

      {/* Right Section - Button */}
      <div className="flex relative z-20 lg:justify-center lg:w-[25%]">
        <Link href="/contact">
          <SecondaryBtn text="Get in touch →" />
        </Link>
      </div>
    </div>
  );
}
