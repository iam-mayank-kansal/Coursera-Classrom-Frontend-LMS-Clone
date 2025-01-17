export function NewsletterForm() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Join Our Community ✨</h2>
      <p className="text-gray-400 text-sm">
        Get exclusive access to new courses, special offers, and industry
        insights delivered straight to your inbox.
      </p>
      <form className="space-y-3">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary-color text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
}
