import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className=" bg-base-200 max-w-277.5 container mx-auto">
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="text-gray-700 py-6 text-small">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] text-white">
              <FaPlus />
              Add a Friend
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
