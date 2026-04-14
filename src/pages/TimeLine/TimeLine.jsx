import React, { useContext } from "react";
import { FriendContext } from "../../Context/FriendProvider";

const TimeLine = () => {
  const { storedFriends } = useContext(FriendContext);

  console.log(storedFriends, "Friends");

  return (
    <>
      <div className="max-w-277.5 container mx-auto">
        <h1 className="text-bold text-4xl">TimeLine</h1>
        {storedFriends.map((friend) => {
          return (
            <>
              <div className="card card-dash bg-base-100 w-96">
                <div className="card-body">
                  <h2 className="card-title">friend.name</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TimeLine;
