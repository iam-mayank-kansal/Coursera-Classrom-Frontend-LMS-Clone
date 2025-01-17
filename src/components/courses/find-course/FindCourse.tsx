"use client";
import Header from "@/components/courses/header/Header";
import AllCourses from "@/components/courses/all-courses/AllCourses";
import AboutCourse from "@/components/courses/about-course/AboutCourse";
import { useParams } from "next/navigation";
import { courseCategory } from "@/utils/utils";

export default function FindCourse() {
  const { courseName } = useParams();

  const currentCategory = courseCategory.find(
    (val) => val.category === courseName
  );

  return (
    <>
      <Header headerData={currentCategory?.header} />
      <AllCourses allCoursesData={currentCategory?.allCourses} />
      <AboutCourse aboutCourseData={currentCategory?.aboutCourses} />
    </>
  );
}
