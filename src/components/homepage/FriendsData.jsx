import React, { use } from "react";

const friendsPromise = fetch("/Data.json").then((res) => res.json());

const FriendsData = () => {
  const friends = use(friendsPromise);

  const statusStyles = {
    "Almost Due": "bg-[#E9A23B] text-white",
    Overdue: "bg-[#D9534F] text-white",
    "On-Track": "bg-[#1D4733] text-white",
  };
  return (
    <>
      <div className=" bg-base-200 max-w-277.5 container mx-auto">
        <h2 className="font-bold text-3xl">Your Friends</h2>

        <div>
          {friends.map((friend) => {
            return (
              <div key={friend.id} className="card bg-base-100 w-96 shadow-sm">
                <figure className="mb-4">
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-20 h-20 rounded-full object-cover shadow-sm"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-[#1A2631] text-lg font-black tracking-tight mb-4">
                    {friend.name}
                    <p className="text-[#5D6B82] text-xs font-medium mt-1 mb-4">
                      {friend.days_since_contact}D ago
                    </p>
                  </h2>
                  <div className="card-actions justify-center flex-col items-center">
                    <div className="mb-4">
                      <span className="bg-[#D1FAE5] text-[#065F46] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {friend.category || "General"}
                      </span>
                    </div>
                    <div
                      className={`px-5 py-2 rounded-full text-xs font-bold shadow-sm ${statusStyles[friend.status]}`}
                    >
                      {friend.status}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FriendsData;
