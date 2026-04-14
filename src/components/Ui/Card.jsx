import React from "react";
import { Link } from "react-router";

const Card = ({ friend, statusStyles }) => {
  return (
    <>
      <Link
        to={`/fdetails/${friend.id}`}
        key={friend.id}
        className="card bg-base-100 w-full shadow-sm border border-gray-100"
      >
        <figure className="mb-4 mt-6">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 border-2 border-white rounded-full object-cover shadow-sm"
          />
        </figure>
        <div className="flex flex-col items-center">
          <h2 className="text-[#1A2631] text-lg font-black tracking-tight mb-4">
            {friend.name}
          </h2>
          <p className="text-[#5D6B82] text-xs font-medium mt-1 mb-4">
            {friend.days_since_contact}D ago
          </p>
          <div className="card-actions justify-center flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#D1FAE5] text-[#065F46] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`mb-4 px-6 py-2 rounded-full text-xs font-bold shadow-sm ${statusStyles[friend.status]}`}
            >
              {friend.status}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
