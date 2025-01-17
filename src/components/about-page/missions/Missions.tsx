import { missions } from "@/utils/utils";

export default function Missions() {
  return (
    <section className="py-20 my-10 px-side-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-h2-heading font-h2-weight text-all-heading-color mb-4">
            Our <span className="text-primary-color">Mission</span>
          </h2>
          <p className="text-para text-all-para-color leading-para-line-height max-w-3xl mx-auto">
            To democratize quality education and create a global community of
            skilled professionals ready to tackle tomorrow&apos;s challenge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((item, idx) => (
            <div
              key={"mission-" + idx}
              className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <h6 className="text-h6-heading font-h6-weight leading-h6-line-height mb-2">
                {item.title}
              </h6>
              <p className="text-para-small text-all-para-color leading-para-small-line-height">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
