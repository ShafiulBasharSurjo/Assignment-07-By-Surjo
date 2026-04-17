import React, { use } from "react";
import { FaPlus } from "react-icons/fa";
import HomeCard from "./HomeCard";

const friendsPromise = fetch("/Data.json").then((res) => res.json());

const Banner = () => {
  const friends = use(friendsPromise);

  const onTrack = friends.filter((f) => f.status === "On-Track").length;

  const overdue = friends.filter((f) => f.status === "Overdue").length;

  const interactedThisMonth = friends.filter(
    (f) => f.days_since_contact <= 30,
  ).length;

  return (
    <>
      <div className="bg-base-200">
        <div className="max-w-4xl mx-auto">
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
          <div className="flex gap-4">
            <HomeCard length={friends.length} label="Total Friends" />
            <HomeCard length={onTrack} label="On Track" />
            <HomeCard length={overdue} label="Need Attention" />
            <HomeCard
              length={interactedThisMonth}
              label="Interactions This Month"
            />
          </div>
          <hr className="mt-12 border-t border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default Banner;
