import React from "react";

const HomeCard = ({ length, label }) => {
  return (
    <>
      <div className="card bg-base-100 w-full shadow-sm">
        <div className="card-body">
          <h2 className="font-bold text-xl text-center items-center justify-center">
            {length}
          </h2>
          <p className="text-center items-center justify-center">{label}</p>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
