export default function Excellence() {
  return (
    <div className="bg-white py-4 my-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="mt-2 text-h2-heading font-h2-weight text-all-heading-color leading-h2-line-height">
          Industry Leading Placements
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-xl text-all-para-color">
          Skillsyard have transformed their lives with groundbreaking career
          advancements in tech.
        </p>

        {/* Stats Section */}
        <div className="mt-16 grid justify-items-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-7">

          {/* First Stat */}
          <div>
            <p className="text-4xl font-bold text-primary-color">120+</p>
            <p className="mt-2 text-lg font-medium text-gray-700">Students</p>
          </div>

          <div className="hidden h-[60%] my-auto w-[1px] bg-[#0000002b] lg:block" />

          {/* Second Stat */}
          <div>
            <p className="text-4xl font-bold text-primary-color">30+</p>
            <p className="mt-2 text-lg font-medium text-gray-700">
              Placements
            </p>
          </div>

          <div className="hidden h-[60%] my-auto w-[1px] bg-[#0000002b] lg:block" />

          {/* Third Stat */}
          <div>
            <p className="text-4xl font-bold text-primary-color">40+</p>
            <p className="mt-2 text-lg font-medium text-gray-700">
              Courses
            </p>
          </div>

          <div className="hidden h-[60%] my-auto w-[1px] bg-[#0000002b] lg:block" />

          {/* Fourth Stat */}
          <div>
            <p className="text-4xl font-bold text-primary-color">4.8/5</p>
            <p className="mt-2 text-lg font-medium text-gray-700">
              Course Satisfaction Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
