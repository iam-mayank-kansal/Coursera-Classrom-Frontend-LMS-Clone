import Image from "next/image";

export default function Header() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image className="h-full w-full object-cover brightness-50" src="/images/about-header.avif" alt="about-header" fill />
        </div>
      </div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-header-heading max-w-[70%] mx-auto font-header-heading-weight mb-6 leading-header-line-height">
          Transforming <span className="text-primary-color">Education</span> for Tomorrow
        </h1>
        <p className="text-para leading-para-line-height max-w-2xl mx-auto">
          Empowering learner worldwide with cutting-edge education and
          industry-relevant skills for the future of work.
        </p>
      </div>
    </section>
  );
}
