import React, { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import { MdNotificationsNone } from "react-icons/md";
import { FaLessThanEqual, FaRegUserCircle, FaSlideshare } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlNotebook } from "react-icons/sl";
import UserMenu from "./UserMenu";
import Notification from "./Notification";

const Header = () => {
  const userRef = useRef();
  const notiRef = useRef();
  const [showUser, setShowUser] = useState(false);
  const [showNoti, setShowNoti] = useState(false);

  const showUserHandler = () => {
    setShowUser(true);
    setShowNoti(false);
  };

  const hideUserHandler = () => {
    setShowUser(false);
  };

  const showNotiHandler = () => {
    setShowNoti(true);
    setShowUser(false);
  };

  const hideNotiHandler = () => {
    setShowNoti(false);
  };

  useEffect(() => {
    let handler = (event) => {
      if (!userRef.current.contains(event.target)) {
        hideUserHandler();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    let handler = (event) => {
      if (!notiRef.current.contains(event.target)) {
        hideNotiHandler();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="flex gap-1 sm:space-x-4 items-stretch">
      {/* <button className="p-3 rounded-xl bg-white">
        <RxHamburgerMenu className="w-7 h-7 text-gray-600" />
      </button>
      <button className="bg-white text-gray-900 flex items-center px-3 rounded-xl">
        <SlNotebook className="w-7 h-7" />
      <h1 className="font-semibold text-2xl ml-2">MyNote</h1>

      </button> */}
      <SearchBar />
      <div className="relative flex rounded-xl items-center sm:gap-3">
        <div ref={notiRef} className="relative">
          <button onClick={showNotiHandler} className="py-3 px-2 rounded-s-xl sm:rounded-xl sm:p-3 bg-white">
            <MdNotificationsNone className="w-7 h-7 text-gray-600" />
          </button>
          {showNoti && <Notification />}
        </div>
        <div ref={userRef} className="relative">
          <button onClick={showUserHandler} className="py-3 px-2 rounded-e-xl sm:rounded-xl sm:p-3 bg-white">
            <FaRegUserCircle className="w-7 h-7 text-gray-600" />
          </button>
          {showUser && <UserMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
