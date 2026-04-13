import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-2 bg-[#244D3F]"
              : "text-gray-700 hover:text-[#244D3F]"
          }
        >
          <IoHomeOutline />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-2 bg-[#244D3F]"
              : "text-gray-700 hover:text-[#244D3F]"
          }
        >
          <IoTimeOutline />
          Timeline
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            isActive
              ? "text-white border-b-2 bg-[#244D3F]"
              : "text-gray-700 hover:text-[#244D3F]"
          }
        >
          <MdOutlineQueryStats />
          Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <nav className="bg-base-100 shadow-sm">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              <span className="text-[#1A2631]">Keen</span>
              <span className="text-[#244D3F]">Keeper</span>
            </h1>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
