'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoMdHome, IoMdTime } from "react-icons/io";

const Navbar = () => {
  const pathName = usePathname();
  
  const isActive = (path) => {
    return pathName === path ? "bg-green-700 text-white font-bold" : "text-gray-400";
    }

    const links = <>
        <li><Link href="/homepage" className={`ml-4 text-[16px] ${isActive("/homepage")}`}><IoMdHome />Home</Link></li>
        <li><Link href="/timelinepage" className={`ml-4 text-[16px] ${isActive("/timelinepage")}`}><IoMdTime />Timeline</Link></li>
        <li><Link href="/statspage" className={`mx-4 text-[16px] ${isActive("/statspage")}`}><ImStatsDots />Stats</Link></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm justify-between">
      <div className="navbar-start">
        <div className="dropdown dropdown-end lg:dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-3xl">Keen<span className="text-green-600">Keeper</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {links}
        </ul>
      </div>
    </div>
  );
};


export default Navbar;
