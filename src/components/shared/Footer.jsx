import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-green-900 text-white py-10">
      <div>
        <h1 className="text-6xl font-bold text-center mb-6">KeenKeeper</h1>
        <p className="text-sm sm:text-base md:text-[16px] font-normal text-center pb-6 px-4 md:px-0 max-w-2xl mx-auto text-gray-400">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center">Social Links</h3>
        <div className="flex gap-4">
          <a href="#">
            {" "}
            <FaYoutube className="text-3xl" />{" "}
          </a>
          <a href="#">
            {" "}
            <FaFacebook className="text-3xl" />{" "}
          </a>
          <a href="#">
            {" "}
            <FaTwitter className="text-3xl" />{" "}
          </a>
        </div>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-200 text-gray-400">
        <div>
          <p className="text-sm sm:text-base md:text-[16px] font-normal text-center pb-6 px-4 md:px-0 max-w-2xl mx-auto text-gray-300">
            &copy; 2026 KeenKeeper. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-sm sm:text-base md:text-[16px] font-normal text-center pb-6 px-4 md:px-0 max-w-2xl mx-auto text-gray-300">
            Privacy Policy
          </p>
          <p className="text-sm sm:text-base md:text-[16px] font-normal text-center pb-6 px-4 md:px-0 max-w-2xl mx-auto text-gray-300">
            Terms of Service
          </p>

          <p className="text-sm sm:text-base md:text-[16px] font-normal text-center pb-6 px-4 md:px-0 max-w-2xl mx-auto text-gray-300">
            Cookie Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
