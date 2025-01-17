import { values } from "@/utils/utils";

export default function Values() {
  return (
    <section className="py-20 my-10 px-side-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-h2-heading leading-h2-line-height text-all-heading-color font-bold text-center mb-16">
          Our Core <span className="text-primary-color">Values</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="p-2 bg-[#06893228] rounded-lg text-primary-color">
                <value.icon className="w-6 h-6" />
              </div>
              <div>
                <h6 className="text-h6-heading text-all-heading-color font-h6-weight mb-2">
                  {value.title}
                </h6>
                <p className="text-para-small text-all-para-color leading-para-line-height">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
