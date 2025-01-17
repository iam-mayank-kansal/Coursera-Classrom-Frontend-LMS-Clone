import { stats } from "@/utils/utils";

export default function Stats() {
  return (
    <section className="bg-secondary-color py-16 my-20 px-side-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-white text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="text-4xl font-bold mb-2">{stat.number}</div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
