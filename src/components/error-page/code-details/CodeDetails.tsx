export default function CodeDetails() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">Error Code</span>
        <span className="font-mono text-sm text-gray-900">500</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">Status</span>
        <span className="font-mono text-sm text-gray-900">
          Internal Server Error
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">Timestamp</span>
        <span className="font-mono text-sm text-gray-900">
          {new Date().toISOString()}
        </span>
      </div>
    </div>
  );
}
