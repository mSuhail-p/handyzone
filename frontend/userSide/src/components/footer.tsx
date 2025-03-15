import React from "react";
import Logo from "./logo";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="-ml-[9.5%] -mr-[9.5%] bg-gray-400 text-white pl-[10%] pr-[10%] pt-4 flex flex-col gap-5 h-[250px]">
      <Logo />
      <div className="flex gap-56 font-bold cursor-pointer "></div>

      <div className="flex  gap-28">
        <div className="text-black cursor-pointer">
          <p className="text-white text-xl font-bold">About</p>
          <p>Terms & conditions</p>
          <p>Privacy policy</p>
          <p>Anti- discrimination policy</p>
        </div>
        <div className="text-black cursor-pointer">
          <p className="text-white text-xl font-bold">For customers</p>
          <p>UC reviews</p>
          <p>Categories near you</p>
          <p>Blog</p>
          <p>Contact us</p>
        </div>
        <div className="text-black cursor-pointer">
          <p className="text-white text-xl font-bold">For partners</p>
          <p>Register as professional</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-white text-xl font-bold">Social links</p>
          <div className="flex gap-8 text-black text-[30px] cursor-pointer">
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
            <BsTwitterX />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
