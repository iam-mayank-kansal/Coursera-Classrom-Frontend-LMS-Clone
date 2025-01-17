import { CourseCard } from "@/components/search/course-card";
import { FilterToggleButton } from "@/components/search/filter-btn";
import { FilterSection } from "@/components/search/filter-section";

export interface Course {
  title: string;
  institution: string;
  rating: number;
  students: number;
  image: string;
  level: string;
  duration: string;
  modules: number;
}

export const courses: Course[] = [
  {
    title: "Advanced Machine Learning & AI: From Theory to Practice",
    institution: "Stanford University",
    rating: 4.8,
    students: 245000,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
    level: "Advanced",
    duration: "8 weeks",
    modules: 12,
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    institution: "MIT",
    rating: 4.9,
    students: 180000,
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1000",
    level: "Intermediate",
    duration: "12 weeks",
    modules: 15,
  },
  {
    title: "Data Science & Analytics Specialization",
    institution: "Harvard University",
    rating: 4.7,
    students: 320000,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    level: "Intermediate",
    duration: "10 weeks",
    modules: 8,
  },
];

export default function Search() {
  return (
    <div>
      <div className="mx-auto px-side-padding py-16">
        <div className="flex gap-8">
          <FilterSection />

          {/* Course Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <FilterToggleButton />
    </div>
  );
}
