import { testimonials, transition } from "@/utils/utils";
import { Testimonial } from "./Testimonials";
import { TransitionCard } from "./TransitionCard";

export default function FeaturedStories() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Success Stories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Read how our graduates transformed their careers and landed their
          dream jobs at top companies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {testimonials.map((test, idx) => {
          return (
            <Testimonial
              key={"test-" + idx}
              name={test.name}
              role={test.role}
              company={test.company}
              image={test.image}
              quote={test.quote}
              companyLogo={test.logo}
            />
          );
        })}
      </div>

      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-4">Recent Career Transitions</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our graduates have achieved remarkable career growth across various
          industries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {transition.map((trans, index) => (
          <TransitionCard
            key={`transition-card-${index}`}
            image={trans.image}
            name={trans.name}
            transition={trans.transition}
            salary={trans.salary}
            increase={trans.increase}
          />
        ))}
      </div>
    </section>
  );
}
