"use client";
import PrimaryBtn from "../primary-button/Button";

export default function BlogHeader() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col gap-7 justify-center">
      <h1 className="text-header-heading font-header-heading-weight leading-header-line-height text-header-heading-color max-w-[700px]">
        Insights for the{" "}
        <span className="text-primary-color">modern developer</span>
      </h1>
      <p className="text-para text-all-para-color leading-para-line-height">
        Dive deep into technical content that matters.
      </p>
      <PrimaryBtn
        text="Browse Blogs"
        onClick={() => {
          const position = 620;
          window.scrollTo({
            top: position,
            behavior: "smooth",
          });
        }}
      />
    </div>
  );
}
