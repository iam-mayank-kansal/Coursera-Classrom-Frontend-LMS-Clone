import { ALL_BLOGS } from "@/store/all-blogs";
import BlogCard from "./BlogCard";

export default function MoreBlogs() {
  const { moreBlogs } = ALL_BLOGS;

  return (
    <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 px-side-padding">
      {moreBlogs.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
}
