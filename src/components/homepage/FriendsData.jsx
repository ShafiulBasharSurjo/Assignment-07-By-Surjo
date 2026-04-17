import React, { use } from "react";
import Card from "../Ui/Card";

const friendsPromise = fetch("/Data.json").then((res) => res.json());

const FriendsData = () => {
  const friends = use(friendsPromise);

  const statusStyles = {
    "On-Track": "badge badge-success",
    Overdue: "badge badge-error",
    "Almost Due": "badge badge-warning",
  };
  return (
    <>
      <div className=" bg-base-200 py-10 ">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-3xl">Your Friends</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 max-w-277.5 mx-auto px-4 mt-6">
            {friends.map((friend) => {
              return (
                <Card
                  key={friend.id}
                  friend={friend}
                  statusStyles={statusStyles}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsData;
