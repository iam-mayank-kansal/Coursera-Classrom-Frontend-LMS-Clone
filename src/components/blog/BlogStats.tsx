export default function BlogStats() {
  const stats = [
    { name: "Published articles", value: "100+" },
    { name: "Monthly readers", value: "50k+" },
    { name: "Content categories", value: "12" },
    { name: "Global contributors", value: "25+" },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-side-padding mt-10 mb-20">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col gap-y-3 border-l-[1px] border-[#33333365] pl-6">
          <h4 className="text-h4-heading font-h4-weight text-primary-color leading-h4-line-height">{stat.value}</h4>
          <p className="text-base text-zinc-400">{stat.name}</p>
        </div>
      ))}
    </div>
  );
}
