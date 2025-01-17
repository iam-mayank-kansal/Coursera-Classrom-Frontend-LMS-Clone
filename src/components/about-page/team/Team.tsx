import { teamMembers } from "@/utils/utils";

export default function Team() {
  return (
    <section className="py-20 px-side-padding bg-gray-50">
      <div>
        <h2 className="text-h2-heading font-h2-weight leading-h2-line-height text-center mb-16">
          Our Leadership Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={"member-" + idx} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h6 className="text-h6-heading font-h6-weight leading-h6-line-height">
                {member.name}
              </h6>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
