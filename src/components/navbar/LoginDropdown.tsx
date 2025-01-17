"use client";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useAuthForms } from "@/store/auth-forms";
import { useUserLoggedIn } from "@/store/nav-model";
import { useRouter } from "next/navigation";
import classNames from "classnames";

export default function LoginDropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { firstName, lastName } = useAuthForms();
  const { updateUserLoggedInStatus } = useUserLoggedIn();
  const router = useRouter();
  const toggleDropdown = () => {
    setIsDropDownOpen((prev) => !prev);
  };
  return (
    <div className="relative inline-block text-left">
      {/* User Initial */}
      <div className="flex items-center gap-3">
        <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
          {firstName.slice(0, 1).toUpperCase() +
            lastName.slice(0, 1).toUpperCase()}
        </div>
        <div className="cursor-pointer" onClick={toggleDropdown}>
          {isDropDownOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      {/* Dropdown Menu */}
      <div
        className={classNames(
          "absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10 select-none origin-top duration-100",
          {
            "scale-y-100": isDropDownOpen,
          },
          { "scale-y-0": !isDropDownOpen }
        )}
      >
        <div className="py-1">
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            href="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Settings
          </Link>
          <p
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => {
              updateUserLoggedInStatus(false);
              alert("logout successfully");
              router.push("/");
            }}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}
