export default function Cta() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 my-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Write Your Success Story?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join our community and transform your career with industry-leading
          courses and mentorship. Start your journey today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Enroll Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
