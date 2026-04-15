import React, { useState, createContext } from "react";

export const FriendContext = createContext();

import { toast } from "react-toastify";

const FriendProvider = ({ children }) => {
  const [storedFriends, setStoredFriends] = useState([]);

  const handleVideo = (newFriend) => {
    setStoredFriends([...storedFriends, { ...newFriend, type: "Video" }]);
    toast.success(`Video calling ${newFriend.name}`);
    console.log(newFriend, "newFriend");
  };

  const handleCall = (newFriend) => {
    setStoredFriends([...storedFriends, { ...newFriend, type: "Call" }]);
    toast.success(`Calling ${newFriend.name}`);
    console.log(newFriend, "newFriend");
  };

  const handleText = (newFriend) => {
    setStoredFriends([...storedFriends, { ...newFriend, type: "Text" }]);
    toast.success(`Texting ${newFriend.name}`);
    console.log(newFriend, "newFriend");
  };

  const data = {
    storedFriends,
    setStoredFriends,
    handleVideo,
    handleText,
    handleCall,
  };
  return (
    <>
      <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    </>
  );
};

export default FriendProvider;
