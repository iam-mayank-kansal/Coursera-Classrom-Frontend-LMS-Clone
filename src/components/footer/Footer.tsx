import { SocialIcon } from "./SocialIcon";
import { NewsletterForm } from "./NewsLetterForm";
import { FooterLinkSection } from "./FooterLinkSection";
import Image from "next/image";
import Link from "next/link";
import { courseCategories, socialIcons } from "@/utils/utils";

export default function Footer() {
  return (
    <footer className="bg-secondary-color pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12 border-b border-gray-800">
          {/* Brand and Social */}
          <div className="space-y-8">
            <div className="relative w-[300px] h-[50px]">
              <Image
                className="w-full h-full object-cover"
                src="/images/logo-white.png"
                alt=""
                fill
              />
            </div>
            <p className="text-gray-300 max-w-md">
              Empowering the next generation of digital professionals with
              cutting-edge courses, expert mentorship, and hands-on learning
              experiences.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((icon) => (
                <SocialIcon
                  key={icon.label}
                  Icon={icon.icon}
                  href={icon.href}
                  label={icon.label}
                />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-12">
            <NewsletterForm />
          </div>
        </div>

        {/* Main Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-b border-gray-800">
          {courseCategories.map((category) => {
            return (
              <FooterLinkSection
                key={category.title}
                title={category.title}
                links={category.links}
              />
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SkillsYard. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-end text-sm">
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
