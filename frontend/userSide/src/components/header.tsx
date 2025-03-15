import React from "react";
import Dropdown from "./dropdown";
import { FaSearch } from "react-icons/fa";
// import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
 
const Header: React.FC = () => {
  return (
    <header className="flex items-center gap-12 ">
      <div className="flex justify-center items-center w-44 h-9 bg-gray-300 rounded">
        <h1 className="font-bold text-[20px] mb-1">
          HANDY<span className="m-0 text-[24px] text-orange-600 font-bold">Z</span>
          ONE
        </h1>
      </div>
      <div className="flex gap-6 font-bold cursor-pointer ">
        <p className="hover:text-orange-600">Home</p>
        <p className="hover:text-orange-600">Products</p>
        <p className="hover:text-orange-600">Explore</p>
        <p className="hover:text-orange-600">About</p>
      </div>
      <div className="m-0 p-0">
        <Dropdown />
      </div>
      <div className="w-44 h-9 border-2 rounded m-0 flex items-center justify-center gap-1 mt-1 ">
        <FaSearch className="text-lg text-gray-600" />
        <input className="w-32 h-6 outline-none placeholder:text-sm " type="text" placeholder="Search.." />
      </div>
      <div>
        <IoMdLogIn className="text-3xl text-gray-600 cursor-pointer" />
      </div>

    </header>
  );
};

export default Header;
