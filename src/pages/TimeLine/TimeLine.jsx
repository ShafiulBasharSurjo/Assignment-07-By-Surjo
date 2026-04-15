import React, { useContext } from "react";
import { FriendContext } from "../../Context/FriendProvider";
import { BsChatSquareText } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

const TimeLine = () => {
  const { storedFriends } = useContext(FriendContext);

  console.log(storedFriends, "Friends");

  return (
    <>
      <div className="bg-gray-100 pb-10 pt-6">
        <div className="bg-base-100 max-w-277.5 container mx-auto p-3 mb-3">
          <h1 className="text-bold text-4xl">TimeLine</h1>
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-3 justify-between w-full"
            >
              Filter timeline <FaAngleDown />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Call</a>
              </li>
              <li>
                <a>Text</a>
              </li>
              <li>
                <a>Video Call</a>
              </li>
            </ul>
          </div>
        </div>
        {storedFriends.map((friend) => {
          return (
            <>
              <div className="card card-dash bg-base-100 max-w-277.5 container mx-auto mb-3">
                <div className="card-body">
                  <h2 className="card-title">
                    <BsChatSquareText />
                    {friend.name}
                  </h2>
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
