"use client";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import LoginDropDown from "./LoginDropdown";
import ExploreDropdown from "./ExploreDropdown";
import MoreDropdown from "./MoreDropdown";
import SecondaryBtn from "../secondary-button/Button";
import Modal from "./Model";
import { useNavModel, useUserLoggedIn } from "@/store/nav-model";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { setOnScreen } = useNavModel();
  const { isUserLoggedIn } = useUserLoggedIn();
  const router = useRouter();
  return (
    <>
      <div className="flex gap-5 bg-secondary-color text-white px-side-padding pt-3 select-none">
        <p className="border-b-[5px] pb-1">For Individuals</p>
        <p>For Business</p>
        <p>For Universities</p>
      </div>
      <nav className="bg-white px-8 py-4 shadow-md sticky top-0 z-50 left-0 w-full select-none">
        <div className="flex gap-3 justify-between">
          {/* Logo, Sidebar, and explore dropdown */}
          <div className="text-black flex gap-6 items-center">
            <Sidebar />
            <div className="logo relative w-[100px] md:w-[150px] h-[30px]">
              <Link href="/">
                <Image
                  src="/images/logo-black.png"
                  alt="skillsyard logo"
                  fill
                  className="h-full w-full object-contain"
                />
              </Link>
            </div>
            <ExploreDropdown />
          </div>

          {/* search box */}
          <div className="hidden md:flex w-[50%]">
            <div className="rounded-full border flex items-center w-full">
              <input
                type="text"
                placeholder="What do you want to learn?"
                onKeyDown={(e) => {
                  if (e.key === "Enter") router.push("/search");
                }}
                className="bg-transparent pl-3 py-3 text-[14px] outline-none w-full"
              />
              <span
                onClick={() => router.push("/search")}
                className="w-[30px] h-[30px] rounded-full bg-primary-color flex items-center justify-center mx-1 cursor-pointer"
              >
                <CiSearch fontSize={14} color="white" strokeWidth={2} />
              </span>
            </div>
          </div>

          {/* More and Free courses */}
          <div className="flex items-center gap-5">
            <MoreDropdown />
            <div className="hidden lg:block">
              <Link href="/course/free">
                <SecondaryBtn text="Free Courses" />
              </Link>
            </div>
          </div>

          {/* Log in */}
          {isUserLoggedIn ? (
            <LoginDropDown />
          ) : (
            <div>
              <ul className="text-black flex items-center justify-center gap-4 text-[14px]">
                <li
                  className="bg-transparent border cursor-pointer border-primary-color p-2 text-sm rounded text-primary-color"
                  onClick={() => {
                    setOnScreen(1);
                  }}
                >
                  Log In
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <Modal />
    </>
  );
};

export default Navbar;
