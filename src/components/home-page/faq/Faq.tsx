"use client";
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { faqs } from "@/utils/utils";
import classNames from "classnames";

export default function Faq() {
  const [val, setVal] = useState<number | null>(null);
  const btnFun = (i: number) => {
    if (val === i) {
      return setVal(null);
    }
    return setVal(i);
  };

  return (
    <div className="flex flex-col gap-16 px-side-padding select-none">
      <h3 className="text-h3-heading text-center text-all-heading-color leading-h3-line-height font-semibold">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col justify-between gap-5 max-w-[90%] mx-auto w-full md:flex-row">
        <div className="flex flex-col gap-5 md:w-1/2">
          {faqs.slice(0, 4).map(({ heading, para }, i) => (
            <div
              key={i}
              className="flex justify-between border-[#f0f0f1] border-[1.7px] py-[27px] gap-5 rounded-xl px-4"
            >
              <div className="flex flex-col gap-2 flex-grow">
                <h6
                  className={classNames(
                    "text-h6-heading",
                    { "font-semibold text-all-heading-color": val === i },
                    { "font-normal text-all-para-color": val !== i }
                  )}
                >
                  {heading}
                </h6>
                {val === i && (
                  <p className="text-para text-all-para-color">{para}</p>
                )}
              </div>
              <button
                onClick={() => btnFun(i)}
                className="h-[20px] w-[20px] flex-shrink-0"
              >
                {val === i ? (
                  <IoIosArrowDropup fontSize={28} />
                ) : (
                  <IoIosArrowDropdown fontSize={28} />
                )}
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 md:w-1/2">
          {faqs.slice(4).map(({ heading, para }, i) => (
            <div
              key={i + 4}
              className="flex justify-between border-[#f0f0f1] border-[1.7px] py-[27px] px-4 gap-5 rounded-xl"
            >
              <div className="flex flex-col gap-2 flex-grow">
                <h6
                  className={classNames(
                    "text-h6-heading",
                    { "font-semibold text-all-heading-color": val === i + 4 },
                    { "font-normal text-all-para-color": val !== i + 4 }
                  )}
                >
                  {heading}
                </h6>
                {val === i + 4 && (
                  <p className="text-para text-all-para-color">{para}</p>
                )}
              </div>
              <button
                onClick={() => btnFun(i + 4)}
                className="h-[20px] w-[20px] flex-shrink-0"
              >
                {val === i + 4 ? (
                  <IoIosArrowDropup fontSize={28} />
                ) : (
                  <IoIosArrowDropdown fontSize={28} />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
