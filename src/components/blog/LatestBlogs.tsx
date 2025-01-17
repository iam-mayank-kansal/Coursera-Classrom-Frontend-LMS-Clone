import { ALL_BLOGS } from "@/store/all-blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LatestBlogs() {
  const { latestBlog } = ALL_BLOGS;

  return (
    <Link href={latestBlog.href}>
      <article className="relative isolate flex flex-col gap-8 lg:flex-row px-side-padding my-20">
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-[400px] lg:shrink-0">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-700/50 overflow-hidden">
            <Image
              fill
              className="h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/teleworking-programmer-designing-developing-software-using-tablet_482257-98295.jpg?semt=ais_hybrid"
              alt="latest-blog"
            />
          </div>
        </div>
        <div className="pt-5">
          <div className="flex items-center gap-x-4 text-xs">
            <time className="text-zinc-400">
              {latestBlog.date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {latestBlog.category}
            </span>
          </div>
          <div className="group relative max-w-xl">
            <h3 className="mt-3 text-h4-heading font-h4-weight leading-h4-line-height text-all-heading-color group-hover:text-primary-color transition">
              <span className="absolute inset-0"></span>
              {latestBlog.title}
            </h3>
            <p className="mt-5 text-para leading-para-line-height text-all-para-color">
              {latestBlog.description}
            </p>
          </div>
          <div className="mt-6 flex border-t border-zinc-800 pt-6">
            <div className="relative flex items-center gap-x-4">
              <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 text-sm">DB</span>
              </div>
              <div className="text-sm leading-6">
                <p className="font-semibold text-zinc-500">
                  <span className="absolute inset-0"></span>
                  Dipish Bisht
                </p>
                <p className="text-zinc-400">{latestBlog.readingTime}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
