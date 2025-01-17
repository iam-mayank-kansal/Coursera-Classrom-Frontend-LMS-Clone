import { CourseCardInterface } from "@/utils/interface";
import { AiOutlineClockCircle, AiOutlineRightCircle } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FaAward, FaLevelUpAlt } from "react-icons/fa";

export default function CourseCard({
  title,
  duration,
  hasLiveClass,
  hasCertification,
  level,
  imageUrl,
}: CourseCardInterface) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[95%] mx-auto transition-transform hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <AiOutlineClockCircle className="w-4 h-4 mr-2" />
            <span className="text-sm">{duration}</span>
          </div>
          {hasLiveClass && (
            <div className="flex items-center text-gray-600">
              <BiUser className="w-4 h-4 mr-2" />
              <span className="text-sm">Live Online Classes</span>
            </div>
          )}
          {hasCertification && (
            <div className="flex items-center text-gray-600">
              <FaAward className="w-4 h-4 mr-2" />
              <span className="text-sm">Certification Included</span>
            </div>
          )}
          <div className="flex items-center text-gray-600">
            <FaLevelUpAlt className="w-4 h-4 mr-2" />
            <span className="text-sm">Level : {level}</span>
          </div>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
          Explore Course
          <AiOutlineRightCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
