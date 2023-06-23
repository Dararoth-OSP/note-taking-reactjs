import React from "react";
import {FiSettings} from 'react-icons/fi'
import {VscSignOut} from 'react-icons/vsc'

const UserMenu = () => {
  return (
    <div className="absolute top-full shadow-2xl mt-2 py-2 space-y-2 bg-white border-2 z-50 right-0 rounded-xl ">
      <div className="px-4 border-b pb-3">
        <span className="text-lg font-semibold block">Sorphoan Dararoth</span>
        <span className="text-gray-500 text-md">sorphoan.dara09@gmail.com</span>
      </div>
      <ul>
        <li>
          <button className="flex items-center gap-2 w-full font-semibold text-start py-2 px-4 hover:bg-gray-100">
            <FiSettings/>
            Setting
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2 w-full font-semibold text-start py-2 px-4 hover:bg-gray-100">
            <VscSignOut/>
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
