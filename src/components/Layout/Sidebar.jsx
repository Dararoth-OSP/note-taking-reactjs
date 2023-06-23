import React, { useState, useEffect } from "react";
import { SlNotebook } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import {
  MdOutlineAddAlert,
  MdLabelOutline,
  MdOutlineArchive,
} from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { LuPlusCircle } from "react-icons/lu";
import { BsChevronDoubleRight } from "react-icons/bs";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showLabel, setShowLabel] = useState(false);
  const [fixed, setfixed] = useState(true);

  const showSidebarHandler = () => {
    setShowSidebar((prev) => !prev);
  };

  const showLabelHandler = () => {
    setShowLabel((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setShowSidebar(false);
        setfixed(true);
      } else {
        setfixed(false);
      }
    };

    handleResize(); // Check initial width on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={`${showSidebar ? "w-72 " : "w-[90px] "} ${
        fixed ? "fixed z-50" : "relative"
      } duration-500 h-screen overflow-hidden`}
    >
      <div
        onClick={() => setShowSidebar(true)}
        className={`h-full border-2 ${
          showSidebar && fixed && "shadow-lg"
        }  rounded-2xl mt-4 mx-3 px-3 py-4 bg-white overflow-y-auto`}
      >
        <div className="border-b-2 pb-4 mb-3">
          <button
            onClick={showSidebarHandler}
            className="flex relative items-center "
          >
            <SlNotebook className="w-10 h-10 bg-gray-800 text-white p-2 rounded-lg" />
            <h1
              className={`absolute top-1 left-9 font-bold text-gray-800 ml-4 text-2xl ${
                !showSidebar && "scale-0"
              }`}
            >
              MyNote
            </h1>
          </button>
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="relative flex items-center p-2 text-gray-500 rounded-lg hover:text-gray-900"
            >
              <CgNotes className="w-6 h-6" />
              <span
                className={`absolute ml-10 whitespace-nowrap ${
                  !showSidebar && "scale-0"
                } `}
              >
                My Notes
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center p-2 text-gray-500 rounded-lg hover:text-gray-900"
            >
              <MdOutlineAddAlert className="w-6 h-6" />
              <span
                className={`absolute ml-10 whitespace-nowrap ${
                  !showSidebar && "scale-0"
                } `}
              >
                Reminders
              </span>
            </a>
          </li>
          <li>
            <a
              onClick={showLabelHandler}
              className="relative flex justify-between items-center p-2 text-gray-500 rounded-lg hover:text-gray-900"
            >
              <MdLabelOutline className="w-6 h-6" />
              <span
                className={`absolute ml-10 whitespace-nowrap ${
                  !showSidebar && "scale-0"
                } `}
              >
                Labels
              </span>
              <FaAngleDown
                className={`absolute right-2 whitespace-nowrap ${
                  !showSidebar && "scale-0"
                } `}
              />
            </a>
            {showLabel && showSidebar && (
              <ul className="ml-12 mb-2 text-gray-500">
                <li className="flex justify-between items-center whitespace-nowrap p-2 rounded-lg hover:text-gray-900 hover:bg-slate-50">
                  <a href="#">
                    <span>Study Online</span>
                  </a>
                  <BiDotsVerticalRounded className="w-5 h-5 rounded-full cursor-pointer hover:bg-gray-300" />
                </li>
                <li className="flex justify-between items-center whitespace-nowrap p-2 rounded-lg hover:text-gray-900 hover:bg-slate-50">
                  <a href="#">
                    <span>Work</span>
                  </a>
                  <BiDotsVerticalRounded className="w-5 h-5 rounded-full cursor-pointer hover:bg-gray-300" />
                </li>
                <li className="flex justify-between items-center whitespace-nowrap p-2 rounded-lg hover:text-gray-900 hover:bg-slate-50">
                  <a href="#">
                    <span>Assignment</span>
                  </a>
                  <BiDotsVerticalRounded className="w-5 h-5 rounded-full cursor-pointer hover:bg-gray-300" />
                </li>
                <li className="flex justify-between items-center whitespace-nowrap p-2 rounded-lg hover:text-gray-900 hover:bg-slate-50">
                  <a href="#" className="flex items-center gap-2">
                    <LuPlusCircle className="w-5 h-5" />
                    <span>Add new label . . .</span>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center p-2 text-gray-500 rounded-lg hover:text-gray-900"
            >
              <MdOutlineArchive className="w-6 h-6" />
              <span
                className={`absolute ml-10 whitespace-nowrap ${
                  !showSidebar && "scale-0"
                } `}
              >
                Archive
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center p-2 text-gray-500 rounded-lg hover:text-gray-900"
            >
              <TbTrash className="w-6 h-6" />
              <span
                className={`absolute ml-10 whitespace-nowrap ${
                  !showSidebar && "scale-0"
                } `}
              >
                Trash
              </span>
            </a>
          </li>
        </ul>
      </div>
      <BsChevronDoubleRight
        onClick={showSidebarHandler}
        className={`w-8 h-8 absolute top-9 cursor-pointer -right-0 text-gray-400  p-1 ${
          showSidebar ? "rotate-180 duration-500" : ""
        }`}
      />
    </aside>
  );
};

export default Sidebar;
