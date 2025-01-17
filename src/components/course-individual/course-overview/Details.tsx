import { courseDetails } from "@/utils/utils";

export default function Details() {
  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow-sm sticky top-20">
        <h3 className="text-xl font-bold mb-4">Course Details</h3>
        <div className="space-y-4">
          {courseDetails.map((detail, idx) => (
            <div key={"detail-" + idx} className="flex items-center gap-3">
              <detail.icon className="text-blue-600" size={20} />
              <div>
                <p className="font-semibold">{detail.question}</p>
                <p className="text-gray-600">{detail.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
