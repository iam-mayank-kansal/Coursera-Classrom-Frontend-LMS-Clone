import PrimaryBtn from "@/components/primary-button/Button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-secondary-color text-white py-12 px-side-padding my-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-h2-heading leading-h2-line-height font-h2-weight mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-para text-gray-300 mb-8">
          Join thousands of successful professionals who have transformed their
          careers with us.
        </p>
        <Link href="/contact">
          <PrimaryBtn text="Get Started Today" />
        </Link>
      </div>
    </section>
  );
}
