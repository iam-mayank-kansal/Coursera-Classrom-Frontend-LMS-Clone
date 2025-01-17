import { FiAlertCircle } from "react-icons/fi";

export default function IconTitle() {
  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full">
        <FiAlertCircle className="w-8 h-8 text-red-500" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Something went wrong
        </h1>
        <p className="mt-2 text-gray-600">
          We apologize for the inconvenience. The page you&apos;re looking for cannot
          be accessed.
        </p>
      </div>
    </div>
  );
}
