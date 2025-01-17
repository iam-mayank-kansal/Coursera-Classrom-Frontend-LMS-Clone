import { BlogCardInterface } from "@/utils/interface";
import React from "react";
import Image from "next/image";

const BlogCard: React.FC<BlogCardInterface> = ({
  title,
  description,
  date,
  readingTime,
  href,
  category,
  imageUrl,
  name,
}) => {
  return (
    <article className="flex gap-5 items-start mt-10 mb-20">
      <div>
        <div className="relative w-[200px] h-[200px]">
          <Image
            className="h-full w-full object-contain"
            fill
            src={imageUrl}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={date.toISOString()} className="text-zinc-400">
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {category}
          </span>
        </div>
        <div className="group relative">
          <h6 className="mt-3 text-h6-heading font-h6-weight leading-h6-line-height text-all-heading-color group-hover:text-primary-color transition">
            <a href={href}>
              <span className="absolute inset-0"></span>
              {title}
            </a>
          </h6>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-500">
            {description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">{`${name
              .split(" ")[0]
              .charAt(0)}${name.split(" ")[1].charAt(0)}`}</span>
          </div>
          <div className="text-sm leading-6">
            <p className="font-semibold text-zinc-300">
              <span className="absolute inset-0"></span>
              {name}
            </p>
            <p className="text-zinc-400">{readingTime}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
