"use client";

import { categories } from "@/utils/utils";
import classNames from "classnames";
import { useState } from "react";



export default function CategoryList() {
  const [currentCategory, setCurrentCategory] = useState(0);
  return (
    <div className="px-side-padding">
      <h1 className="text-h1-heading font-h1-weight leading-h1-line-height text-all-heading-color mb-4">
        Latest Blogs
      </h1>
      <p className="text-para text-all-para-color leading-para-line-height mb-4">
        Stay up to date with the latest in software development.
      </p>
      <div className="flex items-center gap-x-3 overflow-x-auto">
        {categories.map((category, index) => (
          <p
            key={category.href}
            onClick={() => setCurrentCategory(index)}
            className={classNames(
              "rounded-full px-4 py-1.5 text-sm cursor-pointer font-medium transition",
              {
                "bg-primary-color text-white": index === currentCategory,
              },
              {
                "text-black bg-[#F7F7F7] py-3 px-6": index !== currentCategory,
              }
            )}
          >
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
}
