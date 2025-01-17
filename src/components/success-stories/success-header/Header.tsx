export default function Header() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500 bg-opacity-50 text-sm mb-6">
            Join 50,000+ successful graduates
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Career
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            Learn from industry experts and join our community of successful
            graduates who have landed their dream jobs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Start Learning Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors">
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
