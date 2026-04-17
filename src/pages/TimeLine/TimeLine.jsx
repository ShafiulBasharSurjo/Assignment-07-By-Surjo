import React, { useContext, useState } from "react";
import { FriendContext } from "../../Context/FriendProvider";
import { BsChatSquareText } from "react-icons/bs";
import { FaAngleDown, FaVideo } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";

const Icons = {
  Text: <BsChatSquareText />,
  Call: <MdWifiCalling3 />,
  Video: <FaVideo />,
};

const TimeLine = () => {
  const { storedFriends } = useContext(FriendContext);
  const [sortingType, setSortingType] = useState("");

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="grow bg-gray-100">
          <div className="bg-gray-100 pb-20 pt-6">
            <div className="bg-base-100 max-w-3xl mx-auto p-4 mb-3 rounded-xl">
              <h1 className="text-bold text-3xl md:text-4xl">TimeLine</h1>
              <div className="dropdown dropdown-start">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-3 md:w-auto justify-between w-full"
                >
                  Filter timeline <FaAngleDown />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li onClick = {()=> setSortingType('Call')}>
                    <a>Call</a>
                  </li>
                  <li onClick = {()=> setSortingType('Text')}>
                    <a>Text</a>
                  </li>
                  <li onClick = {()=> setSortingType('Video')}>
                    <a>Video Call</a>
                  </li>
                </ul>
              </div>
            </div>
            {storedFriends.map((friend, index) => {
              return (
                <div
                  key={index}
                  className="card card-dash bg-base-100 max-w-3xl mx-auto mb-3 px-2 md:px-0"
                >
                  <div className="card-body py-3 px-4 md:py-4 md:px-6">
                    <h2 className="card-title text-sm md:text-base flex items-center gap-2">
                      {Icons[friend.type]}
                      <span>
                        <span className="font-bold">{friend.type}</span> with{" "}
                        {friend.name}
                      </span>
                    </h2>
                    <p>{today}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default TimeLine;
