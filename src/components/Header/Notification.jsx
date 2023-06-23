import React from "react";
import {MdOutlineNotificationsActive} from 'react-icons/md'

const Notification = () => {
  return (
    <div className="absolute flex w-80 flex-col justify-center items-center top-full shadow-2xl min-h-[200px] max-h-10 mt-2 py-2 space-y-2 bg-white border-2 z-50 -right-16 rounded-xl ">
        <MdOutlineNotificationsActive className="w-16 h-16 text-gray-500"/>
      <span className="px-4 font-semibold text-gray-500 whitespace-nowrap">Notification will appear here</span>
    </div>
  );
};

export default Notification;
