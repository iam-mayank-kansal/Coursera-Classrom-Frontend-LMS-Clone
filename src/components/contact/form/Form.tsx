import { CgMail } from "react-icons/cg";
import { ContactForm } from "./ContactForm";
import { BiPhone } from "react-icons/bi";

export default function Form(){
    return (
        <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />

            <div className="space-y-8">
              <div>
                <h2 className="text-emerald-500 font-medium mb-2">
                  GET IN TOUCH
                </h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  We Are Here For You Make An Appointment
                </h3>
                <p className="text-gray-600 mb-8">
                  Connect with us - your gateway to unparalleled support and
                  expertise. Our team is ready to turn your questions into
                  solutions. Embrace seamless communication, unlock
                  possibilities. Your journey to success begins with a single
                  contact. Reach out and experience the difference today.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <CgMail className="w-6 h-6 text-emerald-500" />
                  <div>
                    <h4 className="font-semibold">Mail Us</h4>
                    <p className="text-gray-600">contact@skillsyard.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <BiPhone className="w-6 h-6 text-emerald-500" />
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-gray-600">+91 9873248878</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}