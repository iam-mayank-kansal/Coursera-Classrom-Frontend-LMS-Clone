import { courseFeatures, courseOverview } from "@/utils/utils";
import { BiCheckCircle } from "react-icons/bi";

export default function Overview() {
  return (
    <div className="lg:col-span-2 space-y-8">
      <section>
        <h5 className="text-h5-heading font-semibold leading-h5-line-height mb-4">
          Course Overview
        </h5>
        <p className="text-all-para-color text-para leading-para-line-height">
          This comprehensive bootcamp will transform you into a professional
          full-stack developer. You&apos;ll learn modern web development practices,
          from front-end frameworks to back-end architecture, databases, and
          deployment strategies.
        </p>
      </section>

      <section>
        <h5 className="text-h5-heading font-semibold leading-h5-line-height mb-4">
          What you&apos;ll learn
        </h5>
        <div className="grid md:grid-cols-2 gap-4">
          {courseOverview.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <BiCheckCircle className="text-primary-color mt-1" size={20} />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h5 className="text-h5-heading font-semibold leading-h5-line-height mb-4">
          Course Features
        </h5>
        <div className="grid md:grid-cols-3 gap-6">
          {courseFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <feature.icon className="text-blue-600" size={24} />
              <h4 className="font-semibold mt-4 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
