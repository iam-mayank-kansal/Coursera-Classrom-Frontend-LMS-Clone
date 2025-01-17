"use client";
import { moreDropdown } from "@/utils/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function MoreDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown toggle */}
      <div
        className="hidden items-center justify-center gap-2 hover:cursor-pointer lg:flex"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        More{" "}
        {isOpen ? (
          <FaAngleUp className="text-primary-color" />
        ) : (
          <FaAngleDown />
        )}
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <ul
          className="flex flex-col gap-3 absolute left-0 top-10 bg-white w-40 py-4 px-3 text-lg shadow-lg rounded-md"
        >
          {moreDropdown.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
