export default function Suggestions() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">
        Try the following:
      </h2>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
          Check your internet connection
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
          Clear your browser cache and cookies
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
          Try accessing the page later
        </li>
      </ul>
    </div>
  );
}
