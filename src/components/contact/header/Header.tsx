import { BiMapPin, BiPhone } from "react-icons/bi";
import ContactCard from "./ContactCard";
import { CgMail } from "react-icons/cg";

export default function Header() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary-color font-medium mb-2">CONTACT US</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            We&apos;d love to talk to you
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ContactCard
            icon={BiPhone}
            title="CALL US"
            content="+91 98732 48878"
          />
          <ContactCard
            icon={CgMail}
            title="EMAIL US"
            content={
              <a href="mailto:contact@skillsyard.com">contact@skillsyard.com</a>
            }
          />
          <ContactCard
            icon={BiMapPin}
            title="HEADQUARTERS"
            content="Labour Chowk, Burari, Delhi-110084"
          />
        </div>
      </div>
    </section>
  );
}
