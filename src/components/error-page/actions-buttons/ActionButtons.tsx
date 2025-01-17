"use client";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { BiHome } from "react-icons/bi";

export default function ActionButtons() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={() => window.history.back()}
        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <BsArrowLeft className="w-4 h-4" />
        Go Back
      </button>
      <button
        onClick={handleRefresh}
        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <FiRefreshCw
          className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
        />
        Refresh Page
      </button>
      <button
        onClick={() => (window.location.href = "/")}
        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <BiHome className="w-4 h-4" />
        Homepage
      </button>
    </div>
  );
}
