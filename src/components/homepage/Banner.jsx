import React from "react";

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
