import React from "react";
import FeaturedPost from "@/components/blog/latest-blogs/LatestBlogs";
import CategoryList from "@/components/blog/category-list/CategoryList";
import BlogHeader from "@/components/blog/header/BlogHeader";
import BlogStats from "@/components/blog/stats/BlogStats";
import MoreBlogs from "@/components/blog/more-blogs/MoreBlogs";

export default function Blog() {
  return (
    <>
      <BlogHeader />
      <BlogStats />
      <CategoryList />
      <FeaturedPost />
      <MoreBlogs />
    </>
  );
}
