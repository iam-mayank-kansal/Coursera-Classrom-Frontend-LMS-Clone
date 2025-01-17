import classNames from "classnames";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "initial";
  }, [isSidebarOpen]);
  return (
    <div className="lg:hidden relative">
      <GiHamburgerMenu fontSize={24} onClick={() => setIsSidebarOpen(true)} />
      <div
        className={classNames(
          "fixed z-10 border-2 border-black w-full h-screen duration-100 top-0 bg-white pt-5 md:w-[25vw]",
          { "-left-full": !isSidebarOpen },
          { "left-0": isSidebarOpen }
        )}
      >
        <AiOutlineClose
          fontSize={24}
          className="absolute top-5 right-5"
          onClick={() => setIsSidebarOpen(false)}
        />
        <div className="flex flex-col gap-2 justify-center p-4 rounded-lg">
          <h5 className="text-h5-heading font-h5-weight leading-h5-line-height">
            Explore
          </h5>
          <ul className="text-gray-700 flex flex-col gap-5 text-md w-full">
            <li className="flex items-center justify-between px-2 rounded-md">
              <span>Popular Courses</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2 rounded-md">
              <span>Free Courses</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Web Development</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Data Science</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Machine Learning</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2">
              <span>UI/UX Design</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Digital Marketing</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Mobile App Development</span>
              <IoIosArrowForward />
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 justify-center p-4 rounded-lg">
          <h5 className="text-h5-heading font-h5-weight leading-h5-line-height">
            More
          </h5>
          <ul className="text-gray-700 flex flex-col gap-5 text-md w-full">
            <li className="flex items-center justify-between px-2 rounded-md">
              <span>About</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2 rounded-md">
              <span>Career Support</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Success Stories</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Blogs</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Events</span>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Contact us</span>
              <IoIosArrowForward />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
